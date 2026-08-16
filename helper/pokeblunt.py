"""Pokeblunt replay tooling: archive replays, derive stats, draft data.js entries.

    python3 helper/pokeblunt.py archive              # fetch new replays into replays/
    python3 helper/pokeblunt.py event <url>...       # data.js blocks for new games
    python3 helper/pokeblunt.py build                # regenerate every replay_stats.js
    python3 helper/pokeblunt.py verify               # check the invariants

Typical loop after a tournament: paste the replay URLs into `event`, merge the printed
blocks into <season>/data.js, then `archive && build && verify`.

replays/ is a committed archive, NOT a rebuildable cache. Showdown purges old replays:
all 87 of s6's and 108 of s7's 128 already return 404, so those games can never be
re-derived. The JSON in replays/ is the only surviving copy of the input.

Because coverage is never guaranteed, every generated blob carries its own denominator
(the season's recorded match count) and the page states what fraction of the season its
numbers actually rest on. `verify` exists to keep that honest: the failures it checks
for -- unmapped handles silently dropping a player's games, a miscounted denominator
pushing coverage over 100%, replays held but unparseable -- have all happened here.
"""
import collections
import datetime
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import dex_names                                                   # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
# Committed, irreplaceable input.
ARCHIVE = os.path.join(ROOT, "replays")
# Genuinely rebuildable scratch (the Showdown pokedex); gitignored.
CACHE = os.path.join(HERE, ".cache")

def showdown_userid(name):
    """Showdown's own userid rule: lowercase, drop everything but a-z0-9.

    Collapses the casing and punctuation drift that shows up across seasons
    ('Mattmandaman'/'mattmandaman', 'Mister Moscow'/'mistermoscow'). It does not
    collapse 'noli_cannoli10' and 'noli_cannoli1O' -- digit zero vs letter O are
    genuinely different accounts, so both must be listed.
    """
    return re.sub(r"[^a-z0-9]", "", name.lower())


def load_account_map(season):
    """Read each player's showdown_accounts out of <season>/data.js.

    Identity is a per-season fact -- rosters change, people rename -- so it lives
    beside the player it describes rather than in a global here. Returns
    {showdown userid: player id}.
    """
    text = open(os.path.join(ROOT, season, "data.js")).read()
    players_blk = text.split('"players"', 1)[1].split('"events"', 1)[0]
    mapping = {}
    for block in re.findall(r"\{(.*?)\}", players_blk, re.S):
        pid = re.search(r'"id"\s*:\s*(\d+)', block)
        accounts = re.search(r'"showdown_accounts"\s*:\s*\[([^\]]*)\]', block)
        if not (pid and accounts):
            continue
        for handle in re.findall(r'"([^"]+)"', accounts.group(1)):
            mapping[showdown_userid(handle)] = int(pid.group(1))
    return mapping

# Moves that always land a critical hit -- excluded from the "luck" crit stat.
GUARANTEED_CRIT_MOVES = {
    "Surging Strikes", "Wicked Blow", "Frost Breath", "Storm Throw",
    "Zippy Zap", "Flower Trick",
}

# Damage the Pokemon inflicts on itself; never credited to an opponent.
SELF_INFLICTED = {
    "Recoil", "item: Life Orb", "lockedmove", "confusion", "item: Black Sludge",
    "item: Rocky Helmet", "Struggle recoil", "mindblown", "steelbeam",
}


# ---------------------------------------------------------------- dex helpers

DEX_NAMES = dex_names.NAMES
NAME_TO_DEX = {name: i + 1 for i, name in enumerate(DEX_NAMES)}

POKEDEX_URL = "https://play.pokemonshowdown.com/data/pokedex.json"


def load_pokedex():
    """Showdown's own pokedex, so form types match what the sim actually used."""
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, "pokedex.json")
    legacy = os.path.join(HERE, ".replay_cache", "pokedex.json")
    if not os.path.exists(path) and os.path.exists(legacy):
        os.replace(legacy, path)
    if not (os.path.exists(path) and os.path.getsize(path) > 0):
        request = urllib.request.Request(POKEDEX_URL, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(request, timeout=30) as response:
            payload = response.read().decode("utf-8")
        json.loads(payload)
        open(path, "w").write(payload)
    return json.load(open(path))


POKEDEX = load_pokedex()


def species_key(species):
    return re.sub(r"[^a-z0-9]", "", species.lower())


def types_of(species):
    """Types for an exact form ('Charizard-Mega-Y' -> Fire/Flying), else base species."""
    entry = POKEDEX.get(species_key(species))
    if entry and entry.get("types"):
        return entry["types"]
    dex = dex_id(species)
    if dex:
        base = POKEDEX.get(species_key(DEX_NAMES[dex - 1]))
        if base and base.get("types"):
            return base["types"]
    return []


def dex_id(species):
    """'Charizard-Mega-Y' -> 6. Strips form suffixes until a base species matches."""
    name = species.strip()
    while name:
        if name in NAME_TO_DEX:
            return NAME_TO_DEX[name]
        if "-" not in name:
            return None
        name = name.rsplit("-", 1)[0]
    return None


# ------------------------------------------------------------- log primitives

def ident(token):
    """'p1a: God' -> ('p1', 'God'). 'p1: mistermoscow' -> ('p1', None)."""
    return token[:2], (token.split(": ", 1)[1] if ": " in token else None)


def hp_of(field):
    """'288/319' -> (288, 319). '0 fnt' -> (0, None). '50/100 brn' -> (50, 100)."""
    field = field.split(" ")[0]
    if field == "0":
        return 0, None
    if "/" not in field:
        return None, None
    cur, mx = field.split("/")
    return int(cur), int(mx)


def tag_value(parts, prefix):
    for part in parts:
        if part.startswith(prefix):
            return part[len(prefix):].strip()
    return None


# ------------------------------------------------------------------- battle

class Battle:
    """One parsed replay."""

    def __init__(self, data, accounts_map=None):
        self.accounts_map = accounts_map or {}
        self.id = data["id"]
        self.url = "https://replay.pokemonshowdown.com/" + data["id"]
        self.log = data["log"]
        self.accounts = {"p1": data["players"][0], "p2": data["players"][1]}
        self.uploadtime = data["uploadtime"]
        self.winner_side = None
        self.turns = 0
        self.timestamps = []
        self.chat = collections.Counter()
        self.mons = {}                 # (side, nickname) -> stat dict
        self.active = {"p1": [None, None], "p2": [None, None]}
        self.hp = {}
        self.maxhp = {}
        self.last_user = None          # (side, nickname) of the most recent |move|
        self.last_move = None
        self.damaging_moves = set()    # moves observed dealing direct damage
        self.killer_of = {}            # victim key -> attacker key
        self.side_stats = {s: collections.Counter() for s in ("p1", "p2")}
        self.side_moves = {s: collections.Counter() for s in ("p1", "p2")}
        self.side_hazards = {s: collections.Counter() for s in ("p1", "p2")}
        self.tera_turns = {"p1": [], "p2": []}
        self._parse()

    # -- per-Pokemon record -------------------------------------------------
    def mon(self, key):
        if key not in self.mons:
            self.mons[key] = dict(
                side=key[0], nick=key[1], species=None, dex=None,
                dmg_dealt=0, dmg_taken=0, healed=0,
                pct_dealt=0.0, pct_taken=0.0, pct_healed=0.0,
                kos=0, fainted=0, turns_active=0, times_sent_out=0, switched_out=0,
                moves_used=0, crits_landed=0, crits_landed_luck=0, crits_taken=0,
                se_hits=0, resisted_hits=0, misses=0, immune=0,
                boosts=0, unboosts_taken=0, statuses_taken=0, statuses_inflicted=0,
                tera=0, mega=0, items_lost=0, maxhp=None,
                support_moves_used=0, damaging_moves_used=0,
                moves=collections.Counter(), items=collections.Counter(),
                abilities=collections.Counter(),
            )
        return self.mons[key]

    def _parse(self):
        turn = 0
        for line in self.log.split("\n"):
            if not line.startswith("|"):
                continue
            parts = line.split("|")[1:]
            tag = parts[0]

            if tag == "t:":
                self.timestamps.append(int(parts[1]))

            elif tag == "turn":
                turn = int(parts[1])
                self.turns = turn
                for side in ("p1", "p2"):
                    for nick in self.active[side]:
                        if nick:
                            self.mon((side, nick))["turns_active"] += 1

            elif tag == "win":
                won = parts[1].strip()
                for side, account in self.accounts.items():
                    if account == won:
                        self.winner_side = side

            elif tag == "c":
                speaker = parts[1].lstrip("☆+%@ ")
                for side, account in self.accounts.items():
                    if account == speaker:
                        self.side_stats[side]["chat"] += 1
                self.chat[speaker] += 1

            elif tag in ("switch", "drag", "replace"):
                side, nick = ident(parts[1])
                key = (side, nick)
                slot = 0 if parts[1][2] == "a" else 1
                previous = self.active[side][slot]
                if previous and previous != nick and tag == "switch":
                    self.mon((side, previous))["switched_out"] += 1
                    self.side_stats[side]["switches"] += 1
                self.active[side][slot] = nick
                record = self.mon(key)
                record["species"] = parts[2].split(",")[0].strip()
                record["dex"] = dex_id(record["species"])
                if tag != "replace":
                    record["times_sent_out"] += 1
                # `replace` (a Zoroark/Illusion reveal) corrects who the Pokemon is and
                # carries no HP field, so the HP part is optional here.
                if len(parts) > 3:
                    cur, mx = hp_of(parts[3])
                    if cur is not None:
                        self.hp[key] = cur
                    if mx and mx != 100:
                        self.maxhp[key] = mx
                    record["maxhp"] = mx

            elif tag in ("detailschange", "-formechange"):
                side, nick = ident(parts[1])
                record = self.mon((side, nick))
                record["species"] = parts[2].split(",")[0].strip()
                record["dex"] = dex_id(record["species"])

            elif tag == "move":
                side, nick = ident(parts[1])
                self.last_user = (side, nick)
                self.last_move = parts[2]
                record = self.mon(self.last_user)
                record["moves_used"] += 1
                record["moves"][parts[2]] += 1
                self.side_moves[side][parts[2]] += 1

            elif tag == "-damage":
                self._damage(parts)

            elif tag == "-heal":
                side, nick = ident(parts[1])
                key = (side, nick)
                cur, mx = hp_of(parts[2])
                if mx and mx != 100:
                    self.maxhp[key] = mx
                before = self.hp.get(key, 0)
                if cur is not None:
                    gained = max(0, cur - before)
                    record = self.mon(key)
                    record["healed"] += gained
                    if self.maxhp.get(key):
                        record["pct_healed"] += 100.0 * gained / self.maxhp[key]
                    self.hp[key] = cur

            elif tag == "-sethp":
                side, nick = ident(parts[1])
                cur, _ = hp_of(parts[2])
                if cur is not None:
                    self.hp[(side, nick)] = cur

            elif tag == "faint":
                side, nick = ident(parts[1])
                key = (side, nick)
                self.mon(key)["fainted"] += 1
                self.hp[key] = 0
                killer = self.killer_of.get(key)
                if killer:
                    self.mon(killer)["kos"] += 1
                for slot, occupant in enumerate(self.active[side]):
                    if occupant == nick:
                        self.active[side][slot] = None

            elif tag == "-crit":
                side, nick = ident(parts[1])
                self.mon((side, nick))["crits_taken"] += 1
                if self.last_user:
                    record = self.mon(self.last_user)
                    record["crits_landed"] += 1
                    if self.last_move not in GUARANTEED_CRIT_MOVES:
                        record["crits_landed_luck"] += 1

            elif tag in ("-supereffective", "-resisted", "-miss", "-immune"):
                field = {"-supereffective": "se_hits", "-resisted": "resisted_hits",
                         "-miss": "misses", "-immune": "immune"}[tag]
                if self.last_user:
                    self.mon(self.last_user)[field] += 1

            elif tag == "-boost":
                side, nick = ident(parts[1])
                self.mon((side, nick))["boosts"] += int(parts[3])

            elif tag == "-unboost":
                side, nick = ident(parts[1])
                self.mon((side, nick))["unboosts_taken"] += int(parts[3])

            elif tag == "-status":
                side, nick = ident(parts[1])
                self.mon((side, nick))["statuses_taken"] += 1
                if self.last_user and self.last_user != (side, nick):
                    self.mon(self.last_user)["statuses_inflicted"] += 1

            elif tag == "-terastallize":
                side, nick = ident(parts[1])
                self.mon((side, nick))["tera"] += 1
                self.tera_turns[side].append(turn)

            elif tag == "-mega":
                side, nick = ident(parts[1])
                self.mon((side, nick))["mega"] += 1

            elif tag == "-enditem":
                side, nick = ident(parts[1])
                record = self.mon((side, nick))
                record["items_lost"] += 1
                record["items"][parts[2].strip()] += 1

            elif tag == "-item":
                side, nick = ident(parts[1])
                self.mon((side, nick))["items"][parts[2].strip()] += 1

            elif tag == "-ability":
                side, nick = ident(parts[1])
                self.mon((side, nick))["abilities"][parts[2].strip()] += 1

            elif tag == "-sidestart":
                side, _ = ident(parts[1])
                self.side_hazards[side][parts[2].replace("move: ", "").strip()] += 1

        for key, record in self.mons.items():
            record["maxhp"] = self.maxhp.get(key)

    def _damage(self, parts):
        side, nick = ident(parts[1])
        key = (side, nick)
        cur, mx = hp_of(parts[2])
        if mx and mx != 100:
            self.maxhp[key] = mx
        before = self.hp.get(key, self.maxhp.get(key, 0))
        after = cur if cur is not None else before
        amount = max(0, before - after)
        self.hp[key] = after
        pct = 100.0 * amount / self.maxhp[key] if self.maxhp.get(key) else 0.0

        victim = self.mon(key)
        victim["dmg_taken"] += amount
        victim["pct_taken"] += pct

        source = tag_value(parts, "[from] ")
        of_whom = tag_value(parts, "[of] ")

        if source is None:
            # Direct damage from the move currently resolving.
            attacker = self.last_user
            if attacker and attacker != key:
                self.mon(attacker)["dmg_dealt"] += amount
                self.mon(attacker)["pct_dealt"] += pct
                self.killer_of[key] = attacker
                if self.last_move:
                    self.damaging_moves.add(self.last_move)
            else:
                self.killer_of[key] = None
        elif source in SELF_INFLICTED:
            self.killer_of[key] = None
        elif of_whom:
            attacker = ident(of_whom)
            if attacker[1]:
                self.mon(attacker)["dmg_dealt"] += amount
                self.mon(attacker)["pct_dealt"] += pct
                self.killer_of[key] = attacker
            else:
                self.killer_of[key] = None
        else:
            # Hazards, weather, residual status: real damage, no clean attacker.
            self.killer_of[key] = None

    @property
    def duration(self):
        return self.timestamps[-1] - self.timestamps[0] if len(self.timestamps) > 1 else 0

    def player_id(self, side):
        return self.accounts_map.get(showdown_userid(self.accounts[side]))


# ------------------------------------------------------------------ fetching

def replay_ids(season):
    text = open(os.path.join(ROOT, season, "data.js")).read()
    return sorted(set(re.findall(r"replay\.pokemonshowdown\.com/([a-z0-9-]+)", text)))


def recorded_matches(season):
    """Games the site itself records for the season, from the match result entries.

    This is the honest denominator. Replay coverage is never guaranteed: replays get
    purged (all of s6, most of s7) and can simply go unlinked when someone forgets.
    Every rate the page shows is computed over parsed replays only, and this is what
    tells the reader how much of the season those replays actually represent.
    """
    text = open(os.path.join(ROOT, season, "data.js")).read()
    # Read each match object whole rather than pairing the two fields as they stream
    # past. Records vary: some put win_creature_ids between the ids, and a few list
    # lose_player_id first. Sequential pairing mis-associates those and the error
    # cascades into every record after it. Match objects contain arrays but never
    # nested braces, so a non-nested {...} match isolates them exactly.
    per_player = collections.Counter()
    total = 0
    for obj in re.findall(r"\{[^{}]*\}", text):
        winner = re.search(r'"win_player_id":\s*(-?\d+)', obj)
        loser = re.search(r'"lose_player_id":\s*(-?\d+)', obj)
        if not (winner and loser):
            continue
        total += 1
        for pid in (int(winner.group(1)), int(loser.group(1))):
            if pid >= 0:                # -1 means "no player" (e.g. a dropped slot)
                per_player[pid] += 1
    return total, per_player


class ReplayGone(Exception):
    """The replay 404s: Showdown has purged it and it is not coming back."""


def archive_path(replay_id):
    return os.path.join(ARCHIVE, replay_id + ".json")


def download(replay_id, attempts=4):
    """Fetch one replay. Raises ReplayGone on 404, retries transient failures.

    Showdown sits behind Cloudflare and will start refusing connections outright
    under a burst, so back off rather than mistaking throttling for a dead replay.
    """
    url = "https://replay.pokemonshowdown.com/%s.json" % replay_id
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    last = None
    for attempt in range(attempts):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                payload = response.read().decode("utf-8")
            json.loads(payload)  # validate before writing
            return payload
        except urllib.error.HTTPError as exc:
            if exc.code == 404:
                raise ReplayGone(replay_id) from exc
            last = exc
        except Exception as exc:                                   # noqa: BLE001
            last = exc
        time.sleep(2 ** attempt)
    raise RuntimeError("%s failed after %d attempts: %s" % (replay_id, attempts, last))


def fetch(replay_id):
    """Load from the archive, downloading once if it is not there yet."""
    path = archive_path(replay_id)
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return json.load(open(path))
    os.makedirs(ARCHIVE, exist_ok=True)
    payload = download(replay_id)
    open(path, "w").write(payload)
    time.sleep(0.4)
    return json.loads(payload)


# --------------------------------------------------------------- aggregation

def blank_totals():
    return dict(
        games=0, wins=0, pct_dealt=0.0, pct_taken=0.0, pct_healed=0.0,
        dmg_dealt=0, dmg_taken=0, healed=0, kos=0, fainted=0, turns_active=0,
        times_sent_out=0, switched_out=0, moves_used=0, crits_landed=0,
        crits_landed_luck=0, crits_taken=0, se_hits=0, resisted_hits=0, misses=0,
        immune=0, boosts=0, unboosts_taken=0, statuses_taken=0,
        statuses_inflicted=0, tera=0, mega=0, items_lost=0,
        support_moves_used=0, damaging_moves_used=0,
    )


SUMMABLE = [k for k in blank_totals() if k not in ("games", "wins")]


def aggregate(battles):
    # A move counts as damaging if it was ever seen dealing direct damage anywhere in
    # the season. Everything else (Protect, Tailwind, Spore, screens...) is support.
    damaging = set()
    for battle in battles:
        damaging |= battle.damaging_moves
    for battle in battles:
        for record in battle.mons.values():
            for move, count in record["moves"].items():
                field = "damaging_moves_used" if move in damaging else "support_moves_used"
                record[field] += count

    creatures = collections.defaultdict(blank_totals)
    creature_extra = collections.defaultdict(lambda: dict(
        moves=collections.Counter(), items=collections.Counter(),
        abilities=collections.Counter(), maxhps=collections.Counter(),
        by_player=collections.Counter(), nicknames=collections.Counter(),
        species=collections.Counter(), best=None,
    ))
    players = collections.defaultdict(blank_totals)
    player_extra = collections.defaultdict(lambda: dict(
        moves=collections.Counter(), hazards=collections.Counter(),
        tera_turns=[], chat=0, switches=0, turns=0, seconds=0,
        h2h=collections.Counter(), best=None,
    ))

    for battle in battles:
        for side in ("p1", "p2"):
            pid = battle.player_id(side)
            won = battle.winner_side == side
            if pid is not None:
                totals = players[pid]
                totals["games"] += 1
                totals["wins"] += int(won)
                extra = player_extra[pid]
                extra["turns"] += battle.turns
                extra["seconds"] += battle.duration
                extra["chat"] += battle.side_stats[side]["chat"]
                extra["switches"] += battle.side_stats[side]["switches"]
                extra["moves"].update(battle.side_moves[side])
                extra["hazards"].update(battle.side_hazards[side])
                extra["tera_turns"].extend(battle.tera_turns[side])
                other = battle.player_id("p2" if side == "p1" else "p1")
                if other is not None and won:
                    extra["h2h"][other] += 1

            side_dealt = 0.0
            side_kos = 0
            for key, record in battle.mons.items():
                if key[0] != side or record["dex"] is None:
                    continue
                dex = record["dex"]
                creatures[dex]["games"] += 1
                creatures[dex]["wins"] += int(won)
                cx = creature_extra[dex]
                cx["moves"].update(record["moves"])
                cx["items"].update(record["items"])
                cx["abilities"].update(record["abilities"])
                cx["nicknames"][record["nick"]] += 1
                cx["species"][record["species"]] += 1
                if record["maxhp"]:
                    cx["maxhps"][record["maxhp"]] += 1
                if pid is not None:
                    cx["by_player"][pid] += 1
                for field in SUMMABLE:
                    creatures[dex][field] += record[field]
                    if pid is not None:
                        players[pid][field] += record[field]
                # Best single game for this Pokemon.
                score = (record["kos"], record["pct_dealt"])
                if cx["best"] is None or score > cx["best"]["score"]:
                    cx["best"] = dict(score=score, kos=record["kos"],
                                      pct_dealt=record["pct_dealt"], url=battle.url,
                                      nick=record["nick"])
                side_dealt += record["pct_dealt"]
                side_kos += record["kos"]

            if pid is not None:
                score = (side_kos, side_dealt)
                px = player_extra[pid]
                if px["best"] is None or score > px["best"]["score"]:
                    px["best"] = dict(score=score, kos=side_kos, pct_dealt=side_dealt,
                                      url=battle.url, turns=battle.turns)

    return creatures, creature_extra, players, player_extra


def top(counter, n):
    return [[name, count] for name, count in counter.most_common(n)]


def roster_dex_ids(season):
    """Every creature id the season's rosters reference, so even never-played mons get types."""
    text = open(os.path.join(ROOT, season, "data.js")).read()
    ids = set()
    for block in re.findall(r'"creature_ids"\s*:\s*\[([^\]]*)\]', text):
        ids.update(int(n) for n in re.findall(r"\d+", block))
    return ids


def build_blob(battles, season=None, linked=None):
    recorded_total, recorded_per_player = recorded_matches(season) if season else (0, {})
    creatures, creature_extra, players, player_extra = aggregate(battles)

    creature_out = {}
    for dex, totals in creatures.items():
        cx = creature_extra[dex]
        entry = {k: (round(v, 1) if isinstance(v, float) else v) for k, v in totals.items()}
        entry["name"] = DEX_NAMES[dex - 1]
        entry["forms"] = top(cx["species"], 4)
        # Types of the form actually played most, not just the base species.
        dominant = cx["species"].most_common(1)
        entry["form"] = dominant[0][0] if dominant else DEX_NAMES[dex - 1]
        entry["types"] = types_of(entry["form"])
        entry["nicknames"] = top(cx["nicknames"], 5)
        entry["top_moves"] = top(cx["moves"], 8)
        entry["items"] = top(cx["items"], 4)
        entry["abilities"] = top(cx["abilities"], 4)
        entry["maxhps"] = top(cx["maxhps"], 3)
        entry["by_player"] = {str(k): v for k, v in cx["by_player"].items()}
        if cx["best"]:
            entry["best"] = dict(kos=cx["best"]["kos"],
                                 pct_dealt=round(cx["best"]["pct_dealt"], 1),
                                 url=cx["best"]["url"], nick=cx["best"]["nick"])
        creature_out[str(dex)] = entry

    player_out = {}
    for pid, totals in players.items():
        px = player_extra[pid]
        entry = {k: (round(v, 1) if isinstance(v, float) else v) for k, v in totals.items()}
        entry["turns"] = px["turns"]
        entry["seconds"] = px["seconds"]
        entry["chat"] = px["chat"]
        entry["switches"] = px["switches"]
        entry["top_moves"] = top(px["moves"], 8)
        entry["hazards"] = top(px["hazards"], 6)
        entry["tera_turns"] = sorted(px["tera_turns"])
        entry["h2h"] = {str(k): v for k, v in px["h2h"].items()}
        if px["best"]:
            entry["best"] = dict(kos=px["best"]["kos"],
                                 pct_dealt=round(px["best"]["pct_dealt"], 1),
                                 url=px["best"]["url"], turns=px["best"]["turns"])
        # Per-player coverage: how much of this trainer's season the replays cover.
        entry["recorded_games"] = recorded_per_player.get(pid, 0)
        player_out[str(pid)] = entry

    dex_types = {}
    for dex in (roster_dex_ids(season) if season else set()) | set(creatures):
        if 1 <= dex <= len(DEX_NAMES):
            dex_types[str(dex)] = types_of(DEX_NAMES[dex - 1])

    return dict(
        dex_types=dex_types,
        meta=dict(
            season=season,
            battles=len(battles),
            turns=sum(b.turns for b in battles),
            seconds=sum(b.duration for b in battles),
            # Coverage. Everything else in this blob is derived from `battles` alone,
            # so these three numbers are what let the page state its own limits.
            linked_replays=linked,
            recorded_matches=recorded_total,
            # Capped at 100: a season can hold more replays than recorded results if a
            # game's result was never entered in data.js, and "104% covered" reads as a
            # bug. The surplus is reported separately so it stays fixable.
            coverage_pct=(min(100.0, round(100.0 * len(battles) / recorded_total, 1))
                          if recorded_total else None),
            unrecorded_replays=max(0, len(battles) - recorded_total),
            unmapped_accounts=sorted({b.accounts[s] for b in battles for s in ("p1", "p2")
                                      if b.player_id(s) is None}),
        ),
        creatures=creature_out,
        players=player_out,
    )


def all_seasons():
    """Every season directory that links at least one replay."""
    out = []
    for name in sorted(os.listdir(ROOT)):
        path = os.path.join(ROOT, name, "data.js")
        if os.path.isdir(os.path.join(ROOT, name)) and os.path.exists(path):
            if replay_ids(name):
                out.append(name)
    return out


def archive_all(seasons=None, today=None, retry_gone=False):
    """Download every linked replay that is not already archived; write a manifest.

    Replay ids are globally unique, so a replay linked by two seasons (s8_half and
    s8_half_v2 share all 250) is stored once and listed under both.
    """
    seasons = seasons or all_seasons()
    os.makedirs(ARCHIVE, exist_ok=True)

    by_season = {season: replay_ids(season) for season in seasons}
    wanted = sorted({rid for ids in by_season.values() for rid in ids})
    have = {rid for rid in wanted if os.path.exists(archive_path(rid))
            and os.path.getsize(archive_path(rid)) > 0}

    # A 404 is permanent, so don't re-request the known dead on every run -- that was
    # 195 pointless requests per archive. --retry-gone forces a recheck.
    manifest_path = os.path.join(ARCHIVE, "MANIFEST.json")
    previously_gone = set()
    if os.path.exists(manifest_path) and not retry_gone:
        prior = json.load(open(manifest_path))
        for entry in prior.get("seasons", {}).values():
            previously_gone.update(entry.get("gone", []))

    gone, failed = set(), {}
    gone |= previously_gone & set(wanted)
    todo = [rid for rid in wanted if rid not in have and rid not in gone]
    print("%d seasons, %d unique replays, %d archived, %d known gone, %d to fetch"
          % (len(seasons), len(wanted), len(have), len(gone), len(todo)))
    for i, rid in enumerate(todo, 1):
        try:
            payload = download(rid)
            open(archive_path(rid), "w").write(payload)
            have.add(rid)
            time.sleep(0.4)
        except ReplayGone:
            gone.add(rid)
            time.sleep(0.2)
        except Exception as exc:                                   # noqa: BLE001
            failed[rid] = str(exc)
        if i % 25 == 0 or i == len(todo):
            print("  %d/%d  archived=%d gone=%d failed=%d"
                  % (i, len(todo), len(have), len(gone), len(failed)))

    manifest = {
        "note": ("Pokemon Showdown purges old replays. These JSON files are the only "
                 "surviving copy of the input the stats are derived from -- keep them "
                 "in version control. 'gone' replays returned HTTP 404 and are "
                 "permanently unrecoverable."),
        "checked": today,
        "seasons": {},
    }
    for season in seasons:
        ids = sorted(by_season[season])
        manifest["seasons"][season] = {
            "linked": len(ids),
            "archived": sorted(r for r in ids if r in have),
            "gone": sorted(r for r in ids if r in gone),
            "failed": sorted(r for r in ids if r in failed),
        }
        counts = manifest["seasons"][season]
        print("  %-12s linked=%-4d archived=%-4d gone=%-4d failed=%d"
              % (season, counts["linked"], len(counts["archived"]),
                 len(counts["gone"]), len(counts["failed"])))

    with open(os.path.join(ARCHIVE, "MANIFEST.json"), "w") as handle:
        json.dump(manifest, handle, indent=1, sort_keys=True)
        handle.write("\n")
    if failed:
        print("!! %d replays failed for transient reasons; re-run to retry" % len(failed))
    return manifest


def event_block(replay_id, season, event_type="tournament"):
    """Render one replay as a data.js event, ready to paste into the events list.

    Replaces the old showdown_link_to_json.py, which kept its URLs in a hardcoded
    list inside the file and had its own copy of the account map.
    """
    data = fetch(replay_id)
    accounts = load_account_map(season)

    def pid_of(name):
        pid = accounts.get(showdown_userid(name))
        if pid is None:
            sys.exit("%s: replay %s has account %r, which is not in any player's "
                     '"showdown_accounts" in %s/data.js' % (season, replay_id, name, season))
        return pid

    log = data["log"]
    winner = log.split("|win|", 1)[1].split("\n", 1)[0].strip()
    p1_name, p2_name = data["players"][0], data["players"][1]
    loser = p2_name if showdown_userid(winner) == showdown_userid(p1_name) else p1_name

    teams = []
    for side, name in (("p1", p1_name), ("p2", p2_name)):
        species = [s.split(",")[0].strip()
                   for s in re.findall(r"\|poke\|%s\|([^|]*)\|" % side, log)]
        dex = [dex_id(s) for s in species]
        unknown = [s for s, d in zip(species, dex) if d is None]
        if unknown:
            sys.exit("%s: could not map species %s to a dex number" % (replay_id, unknown))
        teams.append((pid_of(name), dex))

    # -08:00 explicitly rather than the host's local zone, so the same replay renders
    # the same date wherever this is run.
    stamp = datetime.datetime.fromtimestamp(
        data["uploadtime"], datetime.timezone(datetime.timedelta(hours=-8))
    ).strftime("%Y/%m/%d %H:%M")

    return """{
            "type": "%s",
            "date": "%s",
            "description": `
            <a href='https://replay.pokemonshowdown.com/%s' target='_blank'>%s beat %s</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": %d,
                        "creature_ids": %s,
                    }, {
                        "player_id": %d,
                        "creature_ids": %s,
                    }
                ],
                "matches": [
                    {
                        "win_player_id": %d,
                        "lose_player_id": %d,
                    }
                ]
            }
        }""" % (event_type, stamp, replay_id, winner, loser,
                teams[0][0], teams[0][1], teams[1][0], teams[1][1],
                pid_of(winner), pid_of(loser))


def merged_event_block(replay_ids_in, season, event_type="tournament"):
    """One event covering several replays -- how a tournament is actually recorded.

    A tournament is a single data.js entry listing every game, with one team per
    player and one match record per game, not one entry per replay.
    """
    accounts = load_account_map(season)
    games, teams, order = [], {}, []

    for rid in replay_ids_in:
        data = fetch(rid)
        log = data["log"]
        winner = log.split("|win|", 1)[1].split("\n", 1)[0].strip()
        p1, p2 = data["players"][0], data["players"][1]
        loser = p2 if showdown_userid(winner) == showdown_userid(p1) else p1

        def pid_of(name):
            pid = accounts.get(showdown_userid(name))
            if pid is None:
                sys.exit("%s: replay %s has account %r missing from %s/data.js "
                         '"showdown_accounts"' % (season, rid, name, season))
            return pid

        for side, name in (("p1", p1), ("p2", p2)):
            pid = pid_of(name)
            species = [s.split(",")[0].strip()
                       for s in re.findall(r"\|poke\|%s\|([^|]*)\|" % side, log)]
            dex = [dex_id(s) for s in species]
            if any(d is None for d in dex):
                sys.exit("%s: unmapped species %s"
                         % (rid, [s for s, d in zip(species, dex) if d is None]))
            if pid not in teams:
                teams[pid] = dex
                order.append(pid)
            elif teams[pid] != dex:
                print("  !! player %d brought a different six in %s; keeping the first"
                      % (pid, rid), file=sys.stderr)

        games.append(dict(rid=rid, when=data["uploadtime"], winner=winner, loser=loser,
                          win_id=pid_of(winner), lose_id=pid_of(loser)))

    games.sort(key=lambda g: g["when"])
    stamp = datetime.datetime.fromtimestamp(
        games[0]["when"], datetime.timezone(datetime.timedelta(hours=-8))
    ).strftime("%Y/%m/%d %H:%M")

    links = "\n".join(
        "            <a href='https://replay.pokemonshowdown.com/%s' target='_blank'>"
        "%s beat %s</a><br/>" % (g["rid"], g["winner"], g["loser"]) for g in games)
    team_txt = ", ".join(
        '{\n                        "player_id": %d,\n'
        '                        "creature_ids": %s,\n                    }'
        % (pid, teams[pid]) for pid in order)
    match_txt = ", ".join(
        '{\n                        "win_player_id": %d,\n'
        '                        "lose_player_id": %d,\n                    }'
        % (g["win_id"], g["lose_id"]) for g in games)

    return """{
            "type": "%s",
            "date": "%s",
            "description": `
%s
            `,
            "kwargs": {
                "teams": [
                    %s
                ],
                "matches": [
                    %s
                ]
            }
        }""" % (event_type, stamp, links, team_txt, match_txt)


def insert_events(season, blocks):
    """Append event blocks to the end of <season>/data.js's events array.

    The array closes with `    ],` immediately before the top-level "creatures" key,
    which is the one anchor that does not depend on the contents of any event --
    descriptions are free text and can contain almost anything.
    """
    path = os.path.join(ROOT, season, "data.js")
    text = open(path).read()

    anchor = '\n    ],\n    "creatures":'
    if text.count(anchor) != 1:
        sys.exit("%s: expected exactly one events-array terminator, found %d. Insert by "
                 "hand." % (path, text.count(anchor)))

    at = text.index(anchor)
    before = text[:at].rstrip()
    if not before.endswith("}"):
        sys.exit("%s: events array does not end with a closing brace; insert by hand." % path)

    added = "".join("        }, " + block.lstrip() for block in blocks)
    # `before` already ends with the previous event's `}`, which `added` re-opens.
    merged = before[:-1].rstrip("\n ") + "\n" + added + text[at:]

    if merged.count("{") != merged.count("}") or merged.count("[") != merged.count("]"):
        sys.exit("%s: insertion would unbalance the file; nothing written." % path)

    open(path, "w").write(merged)
    return path


def cmd_event(args):
    season = "s9"
    etype = "tournament"
    merge = insert = False
    urls = []
    for arg in args:
        if arg.startswith("--season="):
            season = arg.split("=", 1)[1]
        elif arg.startswith("--type="):
            etype = arg.split("=", 1)[1]
        elif arg == "--merge":
            merge = True
        elif arg == "--insert":
            insert = True
        else:
            urls.append(arg)
    if not urls:
        sys.exit("usage: pokeblunt.py event [--season=s9] [--type=tournament] [--merge] "
                 "[--insert] <replay url|id>...")

    ids = [u.rstrip("/").split("/")[-1].replace(".json", "") for u in urls]
    if merge:
        blocks = [merged_event_block(ids, season, etype)]
    else:
        pairs = [(fetch(rid)["uploadtime"], event_block(rid, season, etype)) for rid in ids]
        pairs.sort(key=lambda pair: pair[0])
        blocks = [block for _, block in pairs]

    if not insert:
        print(", ".join(blocks))
        return

    already = [rid for rid in ids
               if rid in open(os.path.join(ROOT, season, "data.js")).read()]
    if already:
        sys.exit("%s/data.js already links %s. Remove the duplicate or drop --insert."
                 % (season, already))

    path = insert_events(season, blocks)
    print("added %d event(s) to %s" % (len(blocks), path))
    print("next: pokeblunt.py archive && pokeblunt.py build && pokeblunt.py verify")


def cmd_verify(seasons=None):
    """Check the generated blobs against invariants that must always hold.

    These are the checks that caught real bugs while this was being built: silently
    dropped players from unmapped handles, coverage over 100% from a miscounted
    denominator, and replays held but unparseable.
    """
    seasons = seasons or [s for s in all_seasons()
                          if os.path.exists(os.path.join(ROOT, s, "replay_stats.js"))]
    problems = []

    manifest_path = os.path.join(ARCHIVE, "MANIFEST.json")
    manifest = json.load(open(manifest_path)) if os.path.exists(manifest_path) else {"seasons": {}}

    for season in seasons:
        path = os.path.join(ROOT, season, "replay_stats.js")
        text = open(path).read()
        blob = json.loads(re.search(r"var replay_stats = (.*);", text, re.S).group(1))
        meta = blob["meta"]

        def bad(msg):
            problems.append("%s: %s" % (season, msg))

        if meta["season"] != season:
            bad("blob says season=%r" % meta["season"])
        if meta["unmapped_accounts"]:
            bad("unmapped accounts %s (their games are dropped)" % meta["unmapped_accounts"])
        if meta["unparsed_replays"]:
            bad("%d archived replays failed to parse: %s"
                % (len(meta["unparsed_replays"]), meta["unparsed_replays"][:3]))
        if meta["recorded_matches"] and meta["battles"] > meta["recorded_matches"]:
            bad("%d replays but only %d recorded matches"
                % (meta["battles"], meta["recorded_matches"]))

        # Internal consistency of the aggregation.
        games = sum(p["games"] for p in blob["players"].values())
        wins = sum(p["wins"] for p in blob["players"].values())
        h2h = sum(sum(p["h2h"].values()) for p in blob["players"].values())
        if games != 2 * meta["battles"]:
            bad("player games sum to %d, expected %d" % (games, 2 * meta["battles"]))
        if wins != meta["battles"]:
            bad("player wins sum to %d, expected %d" % (wins, meta["battles"]))
        if h2h != meta["battles"]:
            bad("head-to-head sums to %d, expected %d" % (h2h, meta["battles"]))

        for pid, player in blob["players"].items():
            if player["games"] > player["recorded_games"]:
                bad("player %s has %d replay games but %d recorded"
                    % (pid, player["games"], player["recorded_games"]))

        for dex, creature in blob["creatures"].items():
            if creature["kos"] and not creature["moves_used"]:
                bad("creature %s scored KOs with no moves used" % dex)
            if creature["games"] > meta["battles"]:
                bad("creature %s appears in more games than exist" % dex)

        # Every linked replay should be archived, or knowingly gone.
        linked = set(replay_ids(season))
        archived = {r for r in linked if os.path.exists(archive_path(r))}
        gone = set(manifest["seasons"].get(season, {}).get("gone", []))
        unexplained = linked - archived - gone
        if unexplained:
            bad("%d linked replays neither archived nor recorded as gone: %s"
                % (len(unexplained), sorted(unexplained)[:3]))

        print("  %-11s %3d battles  coverage %5s%%  %s"
              % (season, meta["battles"], meta["coverage_pct"],
                 "ok" if not [p for p in problems if p.startswith(season)] else "PROBLEMS"))

    if problems:
        print("\n%d problem(s):" % len(problems))
        for p in problems:
            print("  !! " + p)
        return 1
    print("\nall checks passed")
    return 0


USAGE = """usage: python3 helper/pokeblunt.py <command>

  build [season...]      regenerate <season>/replay_stats.js (default: all with replays)
  archive [season...]    download replays not yet in replays/ (--retry-gone rechecks 404s)
  event <url>...         print data.js event blocks for replays (--season=s9 --type=tournament)
  verify [season...]     check the generated blobs against the invariants
"""


def main():
    argv = sys.argv[1:]
    command = argv[0] if argv else ""
    rest = argv[1:]

    # A typo'd season should say so, not surface a FileNotFoundError traceback.
    for arg in rest:
        if arg.startswith("--"):
            continue
        if command in ("build", "verify", "archive") and \
                not os.path.exists(os.path.join(ROOT, arg, "data.js")):
            sys.exit("no such season: %r (expected a directory with a data.js)" % arg)

    if command == "archive":
        retry = "--retry-gone" in rest
        archive_all([a for a in rest if not a.startswith("--")] or None,
                    datetime.date.today().isoformat(), retry)
        return
    if command == "event":
        cmd_event(rest)
        return
    if command == "verify":
        sys.exit(cmd_verify(rest or None))
    if command == "build":
        # Only seasons whose page actually loads a blob. s8_half_v2 shares s8.5's
        # replays but runs its own index.js without the stat hooks, so building for
        # it would just leave an unused file on disk.
        targets = rest or [s for s in all_seasons()
                           if any(os.path.exists(archive_path(r)) for r in replay_ids(s))
                           and "replay_stats.js" in open(
                               os.path.join(ROOT, s, "index.html")).read()]
        for season in targets:
            build_season(season, os.path.join(season, "replay_stats.js"))
        return
    sys.exit(USAGE)


def build_season(season, out_path):
    accounts_map = load_account_map(season)
    if not accounts_map:
        sys.exit("%s/data.js has no showdown_accounts on any player; add them so replays "
                 "can be attributed to trainers." % season)

    ids = replay_ids(season)
    battles, missing, unparsed = [], [], []
    for rid in ids:
        if not os.path.exists(archive_path(rid)):
            missing.append(rid)
            continue
        try:
            battles.append(Battle(fetch(rid), accounts_map))
        except Exception as exc:                                  # noqa: BLE001
            unparsed.append(rid)
            print("  !! %s failed to parse: %s" % (rid, exc))

    blob = build_blob(battles, season, len(ids))
    meta = blob["meta"]
    # A replay we hold but cannot read is a coverage hole like any other; record it
    # rather than letting it quietly shrink the sample.
    meta["archived_replays"] = len(ids) - len(missing)
    meta["unparsed_replays"] = sorted(unparsed)

    # An unrecognised handle silently drops that player's games, which is worse than
    # a crash: the page still renders, just quietly wrong. Refuse to write instead.
    if meta["unmapped_accounts"]:
        sys.exit("%s: unmapped showdown accounts %s\nAdd each to the matching player's "
                 '"showdown_accounts" in %s/data.js and re-run.'
                 % (season, meta["unmapped_accounts"], season))

    print("%s: %d replays linked, %d archived, %d parsed" % (
        season, len(ids), len(ids) - len(missing), len(battles)))
    if meta["recorded_matches"]:
        print("  coverage: %d of %d recorded games (%.1f%%)" % (
            len(battles), meta["recorded_matches"], meta["coverage_pct"]))
    if missing:
        print("  %d linked replays are not in the archive (purged or not yet fetched)"
              % len(missing))
    if meta["unrecorded_replays"]:
        print("  !! %d more replays than recorded results -- some games in %s/data.js "
              "have a replay link but no win/lose entry" % (meta["unrecorded_replays"], season))

    full_out = os.path.join(ROOT, out_path)
    os.makedirs(os.path.dirname(full_out), exist_ok=True)
    with open(full_out, "w") as handle:
        handle.write("// Generated by helper/replay_stats.py -- do not edit by hand.\n")
        handle.write("var replay_stats = ")
        json.dump(blob, handle, indent=1, sort_keys=True)
        handle.write(";\n")
    print("wrote %s (%d creatures, %d players, %d battles)" % (
        out_path, len(blob["creatures"]), len(blob["players"]), blob["meta"]["battles"]))


if __name__ == "__main__":
    main()
