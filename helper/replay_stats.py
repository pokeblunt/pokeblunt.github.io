"""Parse Pokemon Showdown replays for a season into a JS stats blob for the website.

Usage:
    python3 helper/replay_stats.py s8 s8_stats/replay_stats.js   # build one season
    python3 helper/replay_stats.py --archive                     # refresh replays/

Reads replay URLs out of <season>/data.js, loads each replay's JSON from the local
archive (downloading it once if absent), parses the battle log into per-Pokemon and
per-player statistics, and writes `var replay_stats = {...}` for the site to consume.

replays/ is a committed archive, NOT a rebuildable cache. Pokemon Showdown purges old
replays: every s6 (2022) and s7 (2023) replay this repo links to already returns 404,
so those seasons can never be re-derived. The JSON in replays/ is the only surviving
copy of the input and must stay in version control. `--archive` fetches anything
missing and records what is gone in replays/MANIFEST.json.
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

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
# Committed, irreplaceable input.
ARCHIVE = os.path.join(ROOT, "replays")
# Genuinely rebuildable scratch (the Showdown pokedex); gitignored.
CACHE = os.path.join(HERE, ".cache")

# Showdown account -> pokeblunt player id. Shared with showdown_link_to_json.py.
ACCOUNT_TO_PLAYER_ID = {
    "mattmandaman": 0, "je64": 1, "mistermoscow": 2, "mango meloetta": 3,
    "jamochi": 3, "smokeydabearrr": 4, "noli_cannoli10": 5, "noli_cannoli1o": 5,
    "noli_cannoli": 5,
}

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

def load_dex_names():
    """Pull the national-dex name list out of showdown_link_to_json.py."""
    src = open(os.path.join(HERE, "showdown_link_to_json.py")).read()
    match = re.search(r"names = (\[.*?\])\n", src, re.S)
    assert match, "Could not find the dex `names` list in showdown_link_to_json.py"
    return eval(match.group(1))


DEX_NAMES = load_dex_names()
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

    def __init__(self, data):
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
        return ACCOUNT_TO_PLAYER_ID.get(self.accounts[side].lower().strip())


# ------------------------------------------------------------------ fetching

def replay_ids(season):
    text = open(os.path.join(ROOT, season, "data.js")).read()
    return sorted(set(re.findall(r"replay\.pokemonshowdown\.com/([a-z0-9-]+)", text)))


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


def build_blob(battles, season=None):
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
        player_out[str(pid)] = entry

    dex_types = {}
    for dex in (roster_dex_ids(season) if season else set()) | set(creatures):
        if 1 <= dex <= len(DEX_NAMES):
            dex_types[str(dex)] = types_of(DEX_NAMES[dex - 1])

    return dict(
        dex_types=dex_types,
        meta=dict(
            battles=len(battles),
            turns=sum(b.turns for b in battles),
            seconds=sum(b.duration for b in battles),
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


def archive_all(seasons=None, today=None):
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
    print("%d seasons, %d unique replays, %d already archived, %d to fetch"
          % (len(seasons), len(wanted), len(have), len(wanted) - len(have)))

    gone, failed = set(), {}
    todo = [rid for rid in wanted if rid not in have]
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


def main():
    if "--archive" in sys.argv:
        rest = [a for a in sys.argv[1:] if not a.startswith("--")]
        archive_all(rest or None, datetime.date.today().isoformat())
        return

    season = sys.argv[1] if len(sys.argv) > 1 else "s8"
    out_path = sys.argv[2] if len(sys.argv) > 2 else os.path.join("s8_stats", "replay_stats.js")

    ids = replay_ids(season)
    print("%s: %d replays" % (season, len(ids)))
    battles = []
    for i, rid in enumerate(ids, 1):
        try:
            battles.append(Battle(fetch(rid)))
        except Exception as exc:                                  # noqa: BLE001
            print("  !! %s failed: %s" % (rid, exc))
        if i % 20 == 0:
            print("  %d/%d" % (i, len(ids)))

    blob = build_blob(battles, season)
    if blob["meta"]["unmapped_accounts"]:
        print("  !! unmapped showdown accounts:", blob["meta"]["unmapped_accounts"])

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
