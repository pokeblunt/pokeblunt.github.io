---
name: add-tournament
description: Record new Pokeblunt games, trades or drafts into a season's data.js and refresh the derived replay stats. Use when the user has played a tournament, has Showdown replay links to add, mentions new trades or a draft, or asks to update a season page.
---

# Adding games to a Pokeblunt season

The site is static: `<season>/data.js` is the hand-maintained record, and
`<season>/replay_stats.js` is derived from the archived Showdown replays. Adding games
means editing `data.js`, then regenerating and verifying.

All commands run from the repo root and go through one tool:

```
python3 helper/pokeblunt.py event <url>... [--season=sN] [--type=tournament] [--merge]
python3 helper/pokeblunt.py archive        # download new replays into replays/
python3 helper/pokeblunt.py build          # regenerate every replay_stats.js
python3 helper/pokeblunt.py verify         # assert the invariants; exits non-zero on failure
```

## Procedure

**1. Establish the season.** Default to the highest-numbered season directory with an
`index.html` (currently `s9`). If the user's games might belong elsewhere, ask — do not
guess.

**2. Get the replay URLs.** Ask for them if they were not supplied. Note that
`replay.pokemonshowdown.com/<id>` and a bare `<id>` are both accepted.

**3. Decide the grouping — ask if it is not obvious.** This is the main judgment call:

- A tournament played in one sitting is **one** event listing every game, with one team
  per player and one match record per game. Use `--merge`.
- Playoff or bracket games recorded individually are **separate** events, usually
  `--type=round`. Omit `--merge`.
- `--type` also accepts `unofficial-tournament`.

```
python3 helper/pokeblunt.py event --season=s9 --merge <url> <url> ...
```

**4. Ask the user for the description.** Every event has a `description` shown on the
page. The merged block ships with just the replay links. Past seasons put real
commentary above those links — match reports, running jokes, callouts. **Never invent
this.** Ask what they want to say, or leave the links alone if they say nothing.

The description is a JS template literal in backticks, so any literal backtick in the
text must be escaped. Use `</br></br>` between paragraphs, matching existing entries.

**5. Paste the block into `data.js`.** Events live in the `"events": [ ... ]` array,
separated by `}, {`. Append before the array's closing `    ],` (which is immediately
followed by `"creatures": [`). Display order does not depend on position — the site
sorts events by date — so appending is fine.

**6. Trades and drafts are hand-written**, not generated. Shapes:

```js
{
    "type": "trade",
    "date": "2026/05/01 09:00",
    "description": "",
    "kwargs": {
        "creatures": [
            { "from_player_id": 2, "to_player_id": 3, "creature_id": 571 }
        ]
    }
}
```

`-1` means the free-agent pool: `from_player_id: -1` is a pickup, `to_player_id: -1` is
a drop. `creature_id` is the national dex number. A draft uses
`"kwargs": {"creatures_drafted": [{"creature_id": N, "player_id": M}, ...]}`.

Trades change who owns a Pokemon, which changes its ELO attribution — so run the
rebuild after trades too, not just after games.

**7. Regenerate and check.**

```
python3 helper/pokeblunt.py archive && python3 helper/pokeblunt.py build && python3 helper/pokeblunt.py verify
```

`verify` must pass before committing. Report the coverage line back to the user.

**8. Commit** only if the user asked you to.

## Things that will bite

**A new or renamed Showdown handle stops the build.** Accounts are mapped per season in
`data.js` under each player's `showdown_accounts`. If someone plays under a new handle,
`build` exits with the unmapped name; add it to the right player's list and re-run. This
is deliberate — the earlier behaviour silently dropped that player's games and produced
a page that looked fine and was wrong.

**Coverage is not decoration.** Stats are computed only from replays actually held, and
each panel states what fraction of the season that is. If `verify` reports fewer battles
than recorded matches, a replay link is missing from `data.js` — worth mentioning to the
user, since the numbers will understate until it is added.

**Showdown deletes old replays.** `replays/` is a committed archive, not a cache: all of
s6 and most of s7 are already gone for good. Run `archive` promptly after new games, and
never add `replays/` to `.gitignore`.

**A replay that 404s is not a failure to retry.** `archive` records it in
`replays/MANIFEST.json` and skips it thereafter; `--retry-gone` forces a recheck.

**`build` only targets seasons whose `index.html` loads a `replay_stats.js`.** `s8_half_v2`
shares s8.5's replays but runs its own `index.js` without the stat hooks, so it is
skipped on purpose.

## Layout

- `common/` — `index.js`, `index.css`, `stats_panel.js`, `stats_panel.css`, shared by
  every season. Edit these once, not per season.
- `<season>/` — `data.js` (hand-maintained), `replay_stats.js` (generated, do not edit),
  `index.html`, plus that season's tier and draft pages.
- `replays/` — archived replay JSON plus `MANIFEST.json`. Committed.
- `helper/pokeblunt.py`, `helper/dex_names.py` — the tooling.
- `s8_half_v2` and `hof` keep their own `index.js`; leave them alone.
