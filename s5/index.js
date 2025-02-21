/**
 * [bar description]
 * @param  {[type]} foo [description]
 * @return {[type]}     [description]
 */

/**
 * Load raw data and add to html
 * @param  {object} raw Dictionary of raw data. Should include the following fields:
 *     "events", "players"
 * @return {None}
 */
function main(raw) {
    [players, events, creatures] = parse_raw(raw);
    // Only use pokemon of the day for this year
    if (events[0].date.getYear() == (new Date()).getYear()) {
        events = [new PokemonOfTheDay(new Date().toJSON()), ...events]
    }
    draw_events(events, players, creatures, document.getElementById("events"));
    draw_players(players, creatures, document.getElementById("events"));
    draw_creature_statistics_table(players, creatures, document.getElementById("events"));
}

/**
 * Parse raw data into players and events objects
 * @param  {[object]} raw [Must contain "players" and "events" attributes]
 * @return {array} [players, events] Players is list of players. Events is list of events
 */
function parse_raw(raw) {
    assert("players" in raw, "'players' attribute must be in the raw object")
    var players = [];
    for (raw_player of raw["players"]) {
        players.push(Player.from_raw(raw_player));
    }
    
    assert("events" in raw, "'events' attribute must be in the raw object")
    var events = [];
    for (raw_event of raw["events"]) {
        events.push(Event.from_raw(raw_event));
    }
    events = events.sort(function(a, b) { return a.date < b.date ? -1 : 1 });  // Order from earliest to latest to number
    counter = {"Draft": 0, "Round": 0, "Tournament": 0, "Trade": 0, "UnofficialTournament": 0};
    for (var event of events) {
        type_str = event.constructor.name;
        counter[type_str] += 1;
        event.set_number(counter[type_str]);
    }
    
    assert("creatures" in raw, "'creatures' attribute must be in the raw object")
    var creatures = [];
    for (var i = 0; i < raw["creatures"].length; i++) {
        creatures.push(Creature.from_raw(raw["creatures"][i], i + 1));
    }

    events = events.sort(function(a, b) { return a.date < b.date ? -1 : 1 });  // Order from earliest to latest for stats
    set_statistics(events, players, creatures);

    events = events.sort(function(a, b) { return a.date > b.date ? -1 : 1 });  // Order from latest to earliest for display
    return [players, events, creatures]
}

/**
 * [Collect statistics from each event and update each relevent player and creature]
 */
function set_statistics(events, players, creatures) {
    for (let event of events) {
        event.update_statistics(players, creatures);
    }
}

/**
 * [Draw events to HTMl]
 * @param  {[array]} events [Each event to be drawn in html]
 * @param  {[array]} players [Each player. Used to draw information about the players in events]
 * @param  {[array]} creatures [Each creature. Used to draw information about each of the creatures used in events]
 * @param  {[dom]} dom [DOM element]
 * @return {array} [players, events] Players is list of players. Events is list of events
 */
function draw_events(events, players, creatures, dom) {
    for (let event of events) {
        dom.appendChild(event.draw(players, creatures));
    }
}

function draw_players(players, creatures, dom) {
    for (let player of players) {
        dom.appendChild(player.draw(creatures));
    }
}

function draw_creature_statistics_table(players, creatures, dom) {
    var table_rows = [create_element({tag: "tr", children: [
        create_element({tag: "th", innerHTML: "No", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 0, false)"}}),
        create_element({tag: "th", innerHTML: "Pokemon", classList: ["pointer"], attributes: {colspan: 2, onClick: "sortTable('cst', 2, false)"}}),
        create_element({tag: "th", innerHTML: "M+MW", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 3, true)"}}),
        create_element({tag: "th", innerHTML: "MW", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 4, true)"}}),
        create_element({tag: "th", innerHTML: "M", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 5, true)"}}),
        create_element({tag: "th", innerHTML: "MW%", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 6, true)"}}),
        create_element({tag: "th", innerHTML: "TMW", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 7, true)"}}),
        create_element({tag: "th", innerHTML: "TM", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 8, true)"}}),
        create_element({tag: "th", innerHTML: "TW", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 9, true)"}}),
        create_element({tag: "th", innerHTML: "T", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 10, true)"}}),
        create_element({tag: "th", innerHTML: "PMW", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 11, true)"}}),
        create_element({tag: "th", innerHTML: "PM", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 12, true)"}}),
        create_element({tag: "th", innerHTML: "R", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 13, true)"}}),
        create_element({tag: "th", innerHTML: "ELO", classList: ["pointer"], attributes: {onClick: "sortTable('cst', 14, true)"}}),
    ]})];
    for (var player of players) {
        var player_creatures = Creature.get_by_ids(creatures, player.creature_ids);
        for (var creature of player_creatures) {
            table_rows.push(create_element({tag: "tr", children: [
                create_element({tag: "td", innerHTML: creature.id}),
                create_element({tag: "td", children: [creature.draw_sprite()], classList: ["winner", player.css_class]}),
                create_element({tag: "td", innerHTML: creature.name}),
                create_element({tag: "td", innerHTML: creature.stat.matches + creature.stat.match_wins}),
                create_element({tag: "td", innerHTML: creature.stat.match_wins}),
                create_element({tag: "td", innerHTML: creature.stat.matches}),
                create_element({tag: "td", innerHTML: creature.stat.match_win_percent_str}),
                create_element({tag: "td", innerHTML: creature.stat.tournament_match_wins}),
                create_element({tag: "td", innerHTML: creature.stat.tournament_matches}),
                create_element({tag: "td", innerHTML: creature.stat.tournament_wins}),
                create_element({tag: "td", innerHTML: creature.stat.tournaments}),
                create_element({tag: "td", innerHTML: creature.stat.round_match_wins}),
                create_element({tag: "td", innerHTML: creature.stat.round_matches}),
                create_element({tag: "td", innerHTML: creature.stat.trades}),
                create_element({tag: "td", innerHTML: creature.stat.elo != null ? Math.round(creature.stat.elo[player.id]) : 0}),
            ]}));
        }
    }

    var table_dom = create_element({tag: "table", attributes: {id: "cst"}, classList: ["standard"], children: table_rows});
    var outer_dom = document.getElementById("put-pokemon-stats-table-here");
    outer_dom.appendChild(table_dom);
    sortTable('cst', 0, false);
}

function sortTable(table_id, n, decending) {
    if (decending) {
        f = -1;
    } else {
        f = 1;
    }
    var table_selector = "#" + table_id;
    var rows = $(table_selector + " tr").get();

    rows.sort(function(a, b) {
        var A = getVal(a);
        var B = getVal(b);
        if(A < B) {
            return -1 * f;
        }
        if(A > B) {
            return 1 * f;
        }
        return 0;
    });

    function getVal(elm) {
        if ($(elm).children("th").length > 0) {
            if (decending) {
                return Infinity;
            }
            return -Infinity;
        }
        var v = $(elm).children("td").eq(n).text().toUpperCase();
        if($.isNumeric(v)) {
            if (!isNaN(parseFloat(v))) {
                v = parseFloat(v)
            } else {
                v = parseInt(v, 10);
            }
        }
        return v;
    }

    var table_dom = document.getElementById(table_id);
    for (var row of rows) {
        table_dom.append(row);
    }
}

function print(x) {
    console.log(x);
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

function argfind(list, element) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            return i;
        }
    }
    throw new Error("Did not find element " + element + " in list " + list);
}

function argsort(nums) {
    nums_with_idx = [];
    for (var i in nums) {
        nums_with_idx.push([nums[i], i]);
    }
    nums_with_idx.sort(function(left, right) {
      return left[0] < right[0] ? -1 : 1;
    });
    var idx = [];
    for (var j in nums_with_idx) {
        idx.push(parseInt(nums_with_idx[j][1]));
    }
    return idx;
}

/**
 * [Player IDs and number of wins for each player sorted by number of wins]
 * @param {[array]} nums [List of non-unique elements]
 * @return {[array]} uniques [Unique elements sorted by count]
 * @return {[array]} counts [Count (or frequency of occurence) for each unique element in non decreasing order]
 */
function unique_counts(nums) {
    var counts = {};
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    var keys = Object.keys(counts);
    var vals = [];
    for (key of keys) {
        vals.push(counts[key]);
    }
    var idx = argsort(vals);
    var keys_sorted = [];
    var vals_sorted = [];
    for (var i of idx) {
        keys_sorted.push(keys[i]);
        vals_sorted.push(vals[i]);
    }
    return [keys_sorted, vals_sorted];
}

function mean_rows(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = 0;
        for (let j = 0; j < arr[i].length; j++) {
            result[i] += arr[i][j];
        }
        result[i] /= arr[i].length;
    }
    return result;
}

function max_rows(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            result[i] = Math.max(result[i], arr[i][j]);
        }
    }
    return result;
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

class Player {
    /**
     * [Creature Player object]
     * @param  {[int]} id [ID for player]
     * @param  {[str]} name [Name of player]
     * @param  {[array]} creature_ids [ID for each creature belonging to player]
     * @param  {[str]} css_class [Class name to be used as HTMl class for CSS decoration]
     * @param  {[str]} trainer_sprite [Image to be used for this player]
     * @return {[Player]}
     */
    constructor(id, name, creature_ids, css_class, trainer_sprite) {
        this.id = id;
        this.name = name;
        this.creature_ids = creature_ids;
        this.css_class = css_class;
        this.trainer_sprite = trainer_sprite;
        this.stat = new StatisticHolder();
    }
    /**
     * [Create Player object from raw player data]
     * @param  {[object]} raw [Should have a "id" and "creature_ids" fields]
     * @return {[Player]}
     */
    static from_raw(raw) {
        assert("id" in raw, "Raw player data should have 'id' field");
        assert("name" in raw, "Raw player data should have 'name' field");
        assert("creature_ids" in raw, "Raw player data should have 'creature_ids' field");
        assert("css_class" in raw, "Raw player data should have 'css_class' field");
        assert("trainer_sprite" in raw, "Raw player data should have 'trainer_sprite' field");
        return new Player(raw.id, raw.name, raw.creature_ids, raw.css_class, raw.trainer_sprite);
    }
    static get_by_id(players, player_id) {
        for (var player of players) {
            if (player.id === player_id) {
                return player;
            }
        }
        throw new Error("Found no player with ID " + player_id);
    }
    static get_by_ids(players, player_ids) {
        var id2player = {};
        for (var player of players) {
            id2player[player.id] = player;
        }
        var players_ordered = [];
        for (var player_id of player_ids) {
            players_ordered.push(id2player[player_id]);
        }
        return players_ordered;
    }
    draw(creatures) {
        var dom_stats_table = create_element({tag: "table", classList: ["players", "standard"], children: [
            create_element({tag: "tr", children: [
                create_element({tag: "th", innerHTML: "", classList: ["visibility-hidden"]}),
                create_element({tag: "th", innerHTML: "", classList: ["visibility-hidden"]}),
                create_element({tag: "th", innerHTML: "", classList: ["visibility-hidden"]}),
                create_element({tag: "th", innerHTML: "", classList: ["visibility-hidden"]}),
                create_element({tag: "th", innerHTML: "Tournaments", attributes: {"colspan": 5}}),
                create_element({tag: "th", innerHTML: "Playoffs", attributes: {"colspan": 4}}),
            ]}),
            create_element({tag: "tr", children: [
                create_element({tag: "th", innerHTML: "Name"}),
                create_element({tag: "th", innerHTML: "Trainer"}),
                create_element({tag: "th", innerHTML: "MW"}),
                create_element({tag: "th", innerHTML: "M"}),
                create_element({tag: "th", innerHTML: "TMW"}),
                create_element({tag: "th", innerHTML: "TM"}),
                create_element({tag: "th", innerHTML: "TW"}),
                create_element({tag: "th", innerHTML: "T"}),
                create_element({tag: "th", innerHTML: "ELO"}),
                create_element({tag: "th", innerHTML: "PMW"}),
                create_element({tag: "th", innerHTML: "PM"}),
                create_element({tag: "th", innerHTML: "PW"}),
                create_element({tag: "th", innerHTML: "P"}),
            ]}),
            create_element({tag: "tr", classList: [], children: [
                create_element({tag: "td", innerHTML: this.name, classList: ["winner", this.css_class]}),
                create_element({tag: "td", children: [this.draw_sprite()], classList: ["winner", this.css_class]}),
                create_element({tag: "td", innerHTML: this.stat.match_wins}),
                create_element({tag: "td", innerHTML: this.stat.matches}),
                create_element({tag: "td", innerHTML: this.stat.tournament_match_wins}),
                create_element({tag: "td", innerHTML: this.stat.tournament_matches}),
                create_element({tag: "td", innerHTML: this.stat.tournament_wins}),
                create_element({tag: "td", innerHTML: this.stat.tournaments}),
                create_element({tag: "td", innerHTML: Math.round(this.stat.elo)}),
                create_element({tag: "td", innerHTML: this.stat.round_match_wins}),
                create_element({tag: "td", innerHTML: this.stat.round_matches}),
                create_element({tag: "td", innerHTML: this.stat.round_wins}),
                create_element({tag: "td", innerHTML: this.stat.rounds}),
            ]})
        ]});

        var dom_creature_arts = [];
        var creatures_this_player = Creature.get_by_ids(creatures, this.creature_ids);
        creatures_this_player = creatures_this_player.sort(function(a, b) {
            if (a.id < b.id) {
                return -1;
            }
            return 1;
        });
        creatures_this_player = creatures_this_player.sort(function(a, b) {
            if (a.stat.matches + a.stat.match_wins > b.stat.matches + b.stat.match_wins) {
                return -1;
            }
            return 1;
        });
        var player_id = this.id
        creatures_this_player = creatures_this_player.sort(function(a, b) {
            var elo_a = 0;
            var elo_b = 0;
            if (!(a.stat.elo === null)) {
                elo_a = a.stat.elo[player_id];
            }
            if (!(b.stat.elo === null)) {
                elo_b = b.stat.elo[player_id];
            }
            if (elo_a > elo_b) {
                return -1;
            }
            return 1;
        });
        for (let creature of creatures_this_player) {
            dom_creature_arts.push(creature.draw_art_with_discription());
        }

        return create_element({tag: "div", classList: ["event", "grey", "trainer", this.css_class], children: [
            create_element({tag: "div", classList: ["header"], innerHTML: "Trainer: " + this.name}),
            create_element({tag: "div", classList: ["body"], children: [dom_stats_table].concat(dom_creature_arts)}),
        ]});
    }
    draw_sprite() {
        return create_element({tag: "img", attributes: {"src": this.trainer_sprite}, classList: ["trainer_sprite"]});
    }
    draw_large_sprite() {
        return create_element({tag: "img", attributes: {"src": this.trainer_sprite}, classList: ["trainer_sprite", "large"]});
    }
}

class StatisticHolder {
    constructor() {
        this.tournament_matches = 0;
        this.tournament_match_wins = 0;
        this.tournaments = 0;
        this.tournament_wins = 0;
        this.round_matches = 0;
        this.round_match_wins = 0;
        this.rounds = 0;
        this.round_wins = 0;
        this.trades = 0;
        this.elo = null;
    }
    get matches() {
        return this.tournament_matches + this.round_matches;
    }
    get match_wins() {
        return this.tournament_match_wins + this.round_match_wins;
    }
    get match_win_percent_str() {
        if (this.matches == 0) {
            return "0.000"
        }
        return (this.match_wins / this.matches).toFixed(3);
    }
    get tournament_match_losses() {
        return this.tournament_matches - this.tournament_match_wins;
    }
    get tournament_losses() {
        return this.tournaments - this.tournament_wins;
    }
    get round_match_losses() {
        return this.round_matches - this.round_match_wins;
    }
    get round_losses() {
        return this.rounds - this.round_wins;
    }
    add_tournament_match_wins(n_wins) {
        this.tournament_matches += n_wins;
        this.tournament_match_wins += n_wins;
    }
    add_tournament_match_losses(n_losses) {
        this.tournament_matches += n_losses;
    }
    add_tournament_win_loss(win) {
        if (win) {
            this.tournament_wins += 1;
        }
        this.tournaments += 1;
    }
    add_round_match_wins(n_wins) {
        this.round_matches += n_wins;
        this.round_match_wins += n_wins;
    }
    add_round_match_losses(n_losses) {
        this.round_matches += n_losses;
    }
    add_round_win_loss(win) {
        if (win) {
            this.round_wins += 1;
        }
        this.rounds += 1;
    }
    add_trade() {
        this.trades += 1;
    }
}

class Creature {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.stat = new StatisticHolder();

        this.number = pad(this.id, 3);
        if (this.id >= 1000) {
            this.number = pad(this.id, 4);
        }
    }
    static from_raw(creature_name, creature_id) {
        return new Creature(creature_name, creature_id);
    }
    draw_sprite() {
        return create_element({tag: "img", classList: ["sprite"], attributes: {
            src: "https://www.serebii.net/pokedex-sv/icon/" + this.number + ".png"
            // src: "https://play.pokemonshowdown.com/sprites/afd/" + this.name.toLowerCase().replace(/\s/g, '').split('-').join('') + ".png"
        }});
    }
    draw_art() {
        return create_element({tag: "img", classList: ["art"], attributes: {
            src: "https://www.serebii.net/pokemon/art/" + this.number + ".png"
        }});
        // return create_element({tag: "img", classList: ["art"], attributes: {
        //     src: "https://play.pokemonshowdown.com/sprites/afd/" + this.name.toLowerCase().replace(/\s/g, '').split('-').join('') + ".png"
        // }});
    }
    draw_large_art(classList = []) {
        return create_element({tag: "img", classList: ["art", "large"].concat(classList), attributes: {
            src: "https://www.serebii.net/pokemon/art/" + this.number + ".png"
        }});
    }
    draw_art_with_discription() {
        // var href = "https://www.smogon.com/dex/ss/pokemon/" + this.name + "/doubles/"
        // var href = "https://www.serebii.net/pokedex-sv/" + this.name.toLowerCase().replace(" ", "");
        var href = "https://bulbapedia.bulbagarden.net/wiki/" + this.name.replace(" ", "_");
        return create_element({tag: "a", attributes: {href: href, target: "_blank"}, classList: ["art-holder"], children: [
            this.draw_art(),
            create_element({tag: "span", innerHTML: this.name}),
            create_element({tag: "span", innerHTML: "#" + this.id})
        ]});
    }
    static get_by_ids(creatures, creature_ids) {
        var id2creature = {};
        for (var creature of creatures) {
            id2creature[creature.id] = creature;
        }
        var creatures_ordered = [];
        for (var creature_id of creature_ids) {
            creatures_ordered.push(id2creature[creature_id]);
        }
        return creatures_ordered;
    }
    static get_by_id(creatures, creature_id) {
        var id2creature = {};
        for (var creature of creatures) {
            id2creature[creature.id] = creature;
        }
        return id2creature[creature_id];
    }
}

class Event {
    constructor(date_str, description) {
        this.date = new Date(date_str);
        this.description = description;
    }
    static from_raw(raw) {
        assert("type" in raw, "Raw event data should have 'type' field");
        assert("date" in raw, "Raw event data should have 'date' field");
        assert("description" in raw, "Raw event data should have 'description' field");
        assert("kwargs" in raw, "Raw event data should have 'kwargs' field");
        if (raw.type === "tournament") {
            return Tournament.from_raw(raw);
        } else if (raw.type === "draft") {
            return Draft.from_raw(raw);
        } else if (raw.type === "trade") {
            return Trade.from_raw(raw);
        } else if (raw.type === "round") {
            return Round.from_raw(raw);
        } else if (raw.type === "unofficial-tournament") {
            return UnofficialTournament.from_raw(raw);
        } else if (raw.type == "champion") {
            return Champion.from_raw(raw);
        } else {
            throw new Error("Unrecognized event type '" + raw.type + "'")
        }
    }
    set_number(value) {
        this.number = value;
    }
    /**
     * [Draw the event card with a title and the inner dom]
     * @param  {[array]} children [List of DOM to make content of the card]
     * @param  {[str]} title [Title of the card. Should be something like "Tournament" or "Draft"]
     * @param  {[str]} css_class [CSS class to be added to the div "event" div]
     * @return {[Player]}
     */
    draw(children, title, css_class) {
        return create_element({tag: "div", classList: ["event", css_class], attributes: {onclick: "toggle_expanded(this)"}, children: [
            create_element({tag: "div", classList: ["header"], innerHTML: title}),
            create_element({tag: "div", classList: ["body"], children: children}),
        ]});
    }
    update_statistics(players, creatures) {
    }
}

class PokemonOfTheDay extends Event {
    constructor(date) {
        super(date)
    }

    draw(players, creatures) {
        var dom_date = create_element({tag: "span", innerHTML: this.date.toLocaleString()});
        var hash = hashCode(this.date.toLocaleDateString());
        var creature_id = Math.abs(hash) % creatures.length;
        var creature = Creature.get_by_id(creatures, creature_id);
        var creature_dom = creature.draw_large_art(["centered"]);
        var dom_description = create_element({tag: "span", innerHTML: "Today's Pokemon of the Day is " + creature.name + "!"});
        return super.draw([dom_date, dom_description, creature_dom], "Pokemon of the Day", "grey");
    }
}

function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
}

class Champion extends Event {
    constructor(date, description, teams, mvp_creature_id) {
        super(date, description)
        this.teams = teams
        this.mvp_creature_id = mvp_creature_id
    }
    static from_raw(raw) {
        let kwargs = raw.kwargs;
        assert("teams" in kwargs, "Raw tournemnt data should have 'teams' field");
        assert("mvp_creature_id" in kwargs, "Raw tournemnt data should have 'mvp_creature_id' field");
        let teams = [];
        for (let raw_team of kwargs.teams) {
            teams.push(Team.from_raw(raw_team))
        }
        return new Champion(raw.date, raw.description, teams, kwargs.mvp_creature_id);
    }
    draw(players, creatures) {
        var dom_date = create_element({tag: "span", innerHTML: this.date.toLocaleString()});
        var dom_description = create_element({tag: "span", innerHTML: this.description});

        let player_ids = this.teams.map(({ player_id }) => player_id);
        var players = Player.get_by_ids(players, player_ids);  // Order players by rank (in order of teams)

        // var creature = creatures[this.mvp_creature_id];
        var creature = Creature.get_by_id(creatures, this.mvp_creature_id);
        var dom_champ = create_element({tag: "div", classList: ["winner", players[0].css_class, "champ"], children: [
            players[0].draw_large_sprite(),
            creature.draw_large_art(),
        ]});

        var dom_player_table = create_element({tag: "table", classList: ["players", "standard"]});
        dom_player_table.appendChild(create_element({tag: "tr", children: [
            create_element({tag: "th", innerHTML: "Place"}),
            create_element({tag: "th", innerHTML: "Trainer"}),
            create_element({tag: "th", innerHTML: "Name"}),
            create_element({tag: "th", innerHTML: "Favorite Pokemon"})
        ]}));
        for (var i = 0; i < player_ids.length; i++) {
            var class_list = [players[i].css_class, "winner"];
            dom_player_table.appendChild(create_element({tag: "tr", classList: class_list, children: [
                create_element({tag: "td", innerHTML: i + 1}),
                create_element({tag: "td", children: [players[i].draw_sprite()]}),
                create_element({tag: "td", innerHTML: players[i].name}),
                create_element({tag: "td", children: [this.teams[i].draw_sprites(players, creatures)]})
            ]}));
        }

        return super.draw([dom_date, dom_description, dom_champ, dom_player_table], "Champion!", "grey");
    }
}

class Tournament extends Event {
    constructor(date, description, teams, matches) {
        super(date, description);
        this.teams = teams;
        this.matches = matches;
    }
    static from_raw(raw) {
        let kwargs = raw.kwargs;
        assert("teams" in kwargs, "Raw tournemnt data should have 'teams' field");
        assert("matches" in kwargs, "Raw tournemnt data should have 'matches' field");
        let teams = [];
        for (let raw_team of kwargs.teams) {
            teams.push(Team.from_raw(raw_team))
        }
        let matches = [];
        for (let raw_match of kwargs.matches) {
            matches.push(Match.from_raw(raw_match, teams));
        }
        return new Tournament(raw.date, raw.description, teams, matches);
    }
    /**
     * [Draw event has HTML DOM]
     * @param  {[array]} players [Each player's information]
     * @param  {[array]} creatures [Each creatures's information]
     * @param  {[bool]} is_official [true if is official tournement. false if we should add "unofficial" name and css classes]
     * @return {[dom]} dom [DOM element representation of event]
     */
    draw_with_is_official(players, creatures, is_official) {
        var dom_date = create_element({tag: "span", innerHTML: this.date.toLocaleString()});
        var dom_description = create_element({tag: "span", innerHTML: this.description});
        
        // Draw player-team table
        var player_ids, n_wins, n_loss;
        [player_ids, n_wins, n_loss] = Match.get_player_ids_wins_and_loses(this.matches);
        var player_ranks = rank_scores(n_wins);
        var player_is_winner = [];
        for (var player_rank of player_ranks) {
            player_is_winner.push(player_rank === 1);
        }
        var players_by_n_wins = Player.get_by_ids(players, player_ids);  // Order players by n_wins
        var teams = Team.get_by_player_ids(this.teams, player_ids);
        var dom_player_table = create_element({tag: "table", classList: ["players", "standard"]});
        dom_player_table.appendChild(create_element({tag: "tr", children: [
            create_element({tag: "th", innerHTML: "Rank"}),
            create_element({tag: "th", innerHTML: "Trainer"}),
            create_element({tag: "th", innerHTML: "Name"}),
            create_element({tag: "th", innerHTML: "Pokemon"}),
            create_element({tag: "th", innerHTML: "Wins"}),
            create_element({tag: "th", innerHTML: "Losses"})
        ]}));
        for (var i = 0; i < player_ids.length; i++) {
            var class_list = [players_by_n_wins[i].css_class];
            if (player_is_winner[i]) {
                class_list.push("winner");
            }
            dom_player_table.appendChild(create_element({tag: "tr", classList: class_list, children: [
                create_element({tag: "td", innerHTML: player_ranks[i]}),
                create_element({tag: "td", children: [players_by_n_wins[i].draw_sprite()]}),
                create_element({tag: "td", innerHTML: players_by_n_wins[i].name}),
                create_element({tag: "td", children: [teams[i].draw_sprites(players_by_n_wins, creatures)]}),
                create_element({tag: "td", innerHTML: n_wins[i]}),
                create_element({tag: "td", innerHTML: n_loss[i]}),
            ]}));
        }

        // Draw matches table
        var dom_matches_table = create_element({tag: "table", classList: ["matches", "standard"]});
        dom_matches_table.appendChild(create_element({tag: "tr", children: [
            create_element({tag: "th", innerHTML: "", classList: ["visibility-hidden"]}),
            create_element({tag: "th", innerHTML: "Win", attributes: {"colspan": 2}}),
            create_element({tag: "th", innerHTML: "Lose", attributes: {"colspan": 2}}),
        ]}));
        dom_matches_table.appendChild(create_element({tag: "tr", children: [
            create_element({tag: "th", innerHTML: "Match"}),
            create_element({tag: "th", innerHTML: "Player"}),
            create_element({tag: "th", innerHTML: "Pokemon"}),
            create_element({tag: "th", innerHTML: "Player"}),
            create_element({tag: "th", innerHTML: "Pokemon"}),
        ]}));
        for (let i = 0; i < this.matches.length; i++) {
            let match = this.matches[i];
            var winner_class_list = [players[match.win_team.player_id].css_class, "winner"];
            dom_matches_table.appendChild(create_element({tag: "tr", children: [
                create_element({tag: "td", innerHTML: i + 1}),
                create_element({tag: "td", innerHTML: players[match.win_team.player_id].name, classList: winner_class_list}),
                create_element({tag: "td", children: [match.win_team.draw_sprites(players, creatures)], classList: winner_class_list}),
                create_element({tag: "td", innerHTML: players[match.lose_team.player_id].name}),
                create_element({tag: "td", children: [match.lose_team.draw_sprites(players, creatures)]}),
            ]}));
        }

        if (is_official) {
            return super.draw([dom_date, dom_description, dom_player_table, dom_matches_table], "Tournament " + this.number, "tournament");
        }
        return super.draw([dom_date, dom_description, dom_player_table, dom_matches_table], "Unofficial Tournament " + this.number, "unofficial-tournament");
    }
    draw(players, creatures) {
        return this.draw_with_is_official(players, creatures, true);
    }
    update_statistics(players, creatures) {
        var player_ids, n_wins, n_loss;
        [player_ids, n_wins, n_loss] = Match.get_player_ids_wins_and_loses(this.matches);
        var player_ranks = rank_scores(n_wins);
        var player_is_winner = [];
        for (var player_rank of player_ranks) {
            player_is_winner.push(player_rank === 1);
        }
        var teams = Team.get_by_player_ids(this.teams, player_ids);

        // Update player statistics
        for (let i = 0; i < player_ids.length; i++) {
            let player_id = player_ids[i];
            players[player_id].stat.add_tournament_match_wins(n_wins[i]);
            players[player_id].stat.add_tournament_match_losses(n_loss[i]);
            players[player_id].stat.add_tournament_win_loss(player_is_winner[i]);
            var player_creatures = Creature.get_by_ids(creatures, teams[i].creature_ids);
            for (var creature of player_creatures) {
                creature.stat.add_tournament_match_wins(n_wins[i]);
                creature.stat.add_tournament_match_losses(n_loss[i]);
                creature.stat.add_tournament_win_loss(player_is_winner[i]);
            }
        }

        // Update ELO
        for (let i = 0; i < this.matches.length; i++) {
            this.matches[i].update_elos(players, creatures);
        }
    }
}

class UnofficialTournament extends Tournament {
    constructor(date, description, teams, matches) {
        super(date, description, teams, matches);
    }
    static from_raw(raw) {
        let kwargs = raw.kwargs;
        assert("teams" in kwargs, "Raw tournemnt data should have 'teams' field");
        assert("matches" in kwargs, "Raw tournemnt data should have 'matches' field");
        let teams = [];
        for (let raw_team of kwargs.teams) {
            teams.push(Team.from_raw(raw_team))
        }
        let matches = [];
        for (let raw_match of kwargs.matches) {
            matches.push(Match.from_raw(raw_match, teams));
        }
        return new UnofficialTournament(raw.date, raw.description, teams, matches);
    }
    draw(players, creatures) {
        return this.draw_with_is_official(players, creatures, false);
    }
    update_statistics(players, creatures) {
    }
}

class Draft extends Event {
    constructor(date, description, creatures_drafted) {
        super(date, description);
        this.creatures_drafted = creatures_drafted
    }
    static from_raw(raw) {
        let kwargs = raw.kwargs;
        assert("creatures_drafted" in kwargs, "Raw draft data should have 'creatures_drafted' field");
        let creatures_drafted = [];
        for (let raw_creature_drafted of kwargs.creatures_drafted) {
            creatures_drafted.push(CreatureDrafted.from_raw(raw_creature_drafted))
        }
        return new Draft(raw.date, raw.description, creatures_drafted);
    }
    /**
     * [Draw event has HTML DOM]
     * @param  {[array]} players [Each player's information]
     * @param  {[array]} creatures [Each creatures's information]
     * @return {[dom]} dom [DOM element representation of event]
     */
    draw(players, creatures) {
        var dom_span = create_element({tag: "span", innerHTML: this.date.toLocaleString()});
        var dom_description = create_element({tag: "span", innerHTML: this.description});
        
        var dom_table = create_element({tag: "table", classList: ["standard"]});
        dom_table.appendChild(create_element({tag: "tr", children: [
            create_element({tag: "th", innerHTML: "Pick"}),
            create_element({tag: "th", innerHTML: "Trainer"}),
            create_element({tag: "th", innerHTML: "Pokemon"}),
            create_element({tag: "th", innerHTML: "Number"})
        ]}));
        for (var i = 0; i < this.creatures_drafted.length; i++) {
            var player = players[this.creatures_drafted[i].player_id];
            var creature = creatures[this.creatures_drafted[i].creature_id - 1];
            dom_table.appendChild(create_element({tag: "tr", classList: ["winner", player.css_class], children: [
                create_element({tag: "td", innerHTML: i + 1}),
                create_element({tag: "td", innerHTML: player.name}),
                create_element({tag: "td", children: [creature.draw_sprite()]}),
                create_element({tag: "td", innerHTML: creature.id}),
            ]}));
        }

        return super.draw([dom_span, dom_description, dom_table], "Draft " + this.number, "draft");
    }
}

class Trade extends Event {
    constructor(date, description, creature_team_changes) {
        super(date, description);
        this.creature_team_changes = creature_team_changes;
    }
    static from_raw(raw) {
        let kwargs = raw.kwargs;
        assert("creatures" in kwargs, "Raw draft data should have 'creatures' field");
        let creature_team_changes = [];
        for (let raw_creature_team_change of kwargs.creatures) {
            creature_team_changes.push(CreatureTeamChange.from_raw(raw_creature_team_change))
        }
        return new Trade(raw.date, raw.description, creature_team_changes);
    }
    /**
     * [Draw event has HTML DOM]
     * @param  {[array]} players [Each player's information]
     * @param  {[array]} creatures [Each creatures's information]
     * @return {[dom]} dom [DOM element representation of event]
     */
    draw(players, creatures) {
        var dom_span = create_element({tag: "span", innerHTML: this.date.toLocaleString()});
        var dom_description = create_element({tag: "span", innerHTML: this.description});
        var dom_trade_table = create_element({tag: "table", classList: ["trades", "standard"]});
        dom_trade_table.appendChild(create_element({tag: "tr", children: [
            create_element({tag: "th", innerHTML: "No"}),
            create_element({tag: "th", innerHTML: "Pokemon", attributes: {colspan: 2}}),
            create_element({tag: "th", innerHTML: "To"}),
            create_element({tag: "th", innerHTML: "From"})
        ]}));
        var creature_team_changes = this.creature_team_changes.sort(function(a, b) {
            if (a.creature_id < b.creature_id) {
                return -1;
            } else {
                return 1;
            }
        }).sort(function(a, b) {
            if (a.from_player_id < b.from_player_id) {
                return -1;
            } else {
                return 1;
            }
        }).sort(function(a, b) {
            if (a.to_player_id < b.to_player_id) {
                return -1;
            } else {
                return 1;
            }
        });
        for (var creature_team_change of creature_team_changes) {
            var creature = creatures[creature_team_change.creature_id - 1];
            var to_player = players[creature_team_change.to_player_id];
            var from_player = players[creature_team_change.from_player_id];
            var classList = ["winner"];
            var to_player_name = "Undrafted"
            var from_player_name = "Undrafted"
            if (to_player) {
                classList.push(to_player.css_class);
                to_player_name = to_player.name;
            }
            if (from_player) {
                from_player_name = from_player.name;
            }
            dom_trade_table.appendChild(create_element({tag: "tr", children: [
                create_element({tag: "td", innerHTML: creature.id}),
                create_element({tag: "td", children: [creature.draw_sprite()], classList: classList}),
                create_element({tag: "td", innerHTML: creature.name}),
                create_element({tag: "td", innerHTML: to_player_name, classList: classList}),
                create_element({tag: "td", innerHTML: from_player_name}),
            ]}));
        }
        return super.draw([dom_span, dom_description, dom_trade_table], "Trade " + this.number, "trade");
    }
    update_statistics(players, creatures) {
        var creature_ids = [];
        for (let creature_team_change of this.creature_team_changes) {
            if (creature_team_change.from_player_id >= 0) {
                players[creature_team_change.from_player_id].stat.add_trade();
            }
            if (creature_team_change.to_player_id >= 0) {
                players[creature_team_change.to_player_id].stat.add_trade();
            }
            creature_ids.push(creature_team_change.creature_id);
        }
        var creatures_in_trade = Creature.get_by_ids(creatures, creature_ids);
        for (var creature of creatures_in_trade) {
            creature.stat.add_trade();
        }
    }
}

class Round extends Event {
    constructor(date, description, matches) {
        super(date, description)
        this.matches = matches
    }
    static from_raw(raw) {
        let kwargs = raw.kwargs;
        assert("matches" in kwargs, "Raw round data should have a 'matches' field");
        let matches = [];
        for (let raw_match of kwargs.matches) {
            assert("win_player_id" in raw_match, "Raw match data in playoff round should each have a 'win_player_id' field");
            assert("lose_player_id" in raw_match, "Raw match data in playoff round should each have a 'lose_player_id' field");
            assert("win_creature_ids" in raw_match, "Raw match data in playoff round should each have a 'win_creature_ids' field");
            assert("lose_creature_ids" in raw_match, "Raw match data in playoff round should each have a 'lose_creature_ids' field");
            let win_team = new Team(raw_match.win_player_id, raw_match.win_creature_ids);
            let lose_team = new Team(raw_match.lose_player_id, raw_match.lose_creature_ids);
            matches.push(new Match(win_team, lose_team));
        }
        return new Round(raw.date, raw.description, matches);
    }
    /**
     * [Draw event has HTML DOM]
     * @param  {[array]} players [Each player's information]
     * @param  {[array]} creatures [Each creatures's information]
     * @return {[dom]} dom [DOM element representation of event]
     */
    draw(players, creatures) {
        var dom_span = create_element({tag: "span", innerHTML: this.date.toLocaleString()});
        var dom_description = create_element({tag: "span", innerHTML: this.description});

        // Player table with wins and ranking
        var player_ids, n_wins, n_loss;
        [player_ids, n_wins, n_loss] = Match.get_player_ids_wins_and_loses(this.matches);
        var player_ranks = rank_scores(n_wins);
        var player_is_winner = [];
        for (var player_rank of player_ranks) {
            player_is_winner.push(player_rank === 1);
        }
        var players_by_n_wins = Player.get_by_ids(players, player_ids);  // Order players by n_wins
        var dom_player_table = create_element({tag: "table", classList: ["players", "standard"]});
        dom_player_table.appendChild(create_element({tag: "tr", children: [
            create_element({tag: "th", innerHTML: "Rank"}),
            create_element({tag: "th", innerHTML: "Trainer"}),
            create_element({tag: "th", innerHTML: "Name"}),
            create_element({tag: "th", innerHTML: "Wins"}),
            create_element({tag: "th", innerHTML: "Losses"})
        ]}));
        for (var i = 0; i < player_ids.length; i++) {
            var class_list = [players_by_n_wins[i].css_class];
            if (player_is_winner[i]) {
                class_list.push("winner");
            }
            dom_player_table.appendChild(create_element({tag: "tr", classList: class_list, children: [
                create_element({tag: "td", innerHTML: player_ranks[i]}),
                create_element({tag: "td", children: [players_by_n_wins[i].draw_sprite()]}),
                create_element({tag: "td", innerHTML: players_by_n_wins[i].name}),
                create_element({tag: "td", innerHTML: n_wins[i]}),
                create_element({tag: "td", innerHTML: n_loss[i]}),
            ]}));
        }

        // Matches table with teams
        var dom_matches_table = create_element({tag: "table", classList: ["matches", "standard"]});
        dom_matches_table.appendChild(create_element({tag: "tr", children: [
            create_element({tag: "th", innerHTML: "", classList: ["visibility-hidden"]}),
            create_element({tag: "th", innerHTML: "Win", attributes: {"colspan": 2}}),
            create_element({tag: "th", innerHTML: "Lose", attributes: {"colspan": 2}}),
        ]}));
        dom_matches_table.appendChild(create_element({tag: "tr", children: [
            create_element({tag: "th", innerHTML: "Match"}),
            create_element({tag: "th", innerHTML: "Player"}),
            create_element({tag: "th", innerHTML: "Pokemon"}),
            create_element({tag: "th", innerHTML: "Player"}),
            create_element({tag: "th", innerHTML: "Pokemon"}),
        ]}));
        for (let i = 0; i < this.matches.length; i++) {
            let match = this.matches[i];
            var winner_class_list = [players[match.win_team.player_id].css_class, "winner"];
            dom_matches_table.appendChild(create_element({tag: "tr", children: [
                create_element({tag: "td", innerHTML: i + 1}),
                create_element({tag: "td", innerHTML: players[match.win_team.player_id].name, classList: winner_class_list}),
                create_element({tag: "td", children: [match.win_team.draw_sprites(players, creatures)], classList: winner_class_list}),
                create_element({tag: "td", innerHTML: players[match.lose_team.player_id].name}),
                create_element({tag: "td", children: [match.lose_team.draw_sprites(players, creatures)]}),
            ]}));
        }

        return super.draw([dom_span, dom_description, dom_player_table, dom_matches_table], "Playoff Round " + this.number, "round");
    }
    update_statistics(players, creatures) {
        var player_ids, n_wins, n_loss;
        [player_ids, n_wins, n_loss] = Match.get_player_ids_wins_and_loses(this.matches);
        var player_ranks = rank_scores(n_wins);
        var player_is_winner = [];
        for (var player_rank of player_ranks) {
            player_is_winner.push(player_rank === 1);
        }

        for (let i = 0; i < player_ids.length; i++) {
            let player_id = player_ids[i];
            players[player_id].stat.add_round_match_wins(n_wins[i]);
            players[player_id].stat.add_round_match_losses(n_loss[i]);
            players[player_id].stat.add_round_win_loss(player_is_winner[i]);
        }
        for (var match of this.matches) {
            for (var creature of Creature.get_by_ids(creatures, match.win_team.creature_ids)) {
                creature.stat.add_round_match_wins(1);
            }
            for (var creature of Creature.get_by_ids(creatures, match.lose_team.creature_ids)) {
                creature.stat.add_round_match_losses(1);
            }
            // match.update_elos(players, creatures);  // Don't update elo from playoffs
        }
    }
}

class CreatureTeamChange {
    constructor(creature_id, from_player_id, to_player_id) {
        this.creature_id = creature_id;
        this.from_player_id = from_player_id;
        this.to_player_id = to_player_id;
    }
    static from_raw(raw) {
        assert("from_player_id" in raw, "Raw creature team change data should have a 'from_player_id' field");
        assert("to_player_id" in raw, "Raw creature team change data should have a 'to_player_id' field");
        assert("creature_id" in raw, "Raw creature team change data should have a 'creature_id' field");
        return new CreatureTeamChange(raw.creature_id, raw.from_player_id, raw.to_player_id);
    }
}

class CreatureDrafted {
    constructor(creature_id, player_id) {
        this.creature_id = creature_id;
        this.player_id = player_id;
    }
    static from_raw(raw) {
        assert("creature_id" in raw, "Raw creature team change data should have a 'creature_id' field");
        assert("player_id" in raw, "Raw creature team change data should have a 'player_id' field");
        return new CreatureDrafted(raw.creature_id, raw.player_id);
    }
}

class Team {
    /**
     * Create Team object that consists of a player and their creatures used in a match
     * @param  {[int]} player_id ID of player
     * @param  {[array]} creature_ids IDs of creatures
     * @return {Team}
     */
    constructor(player_id, creature_ids) {
        this.player_id = player_id;
        this.creature_ids = creature_ids;
    }
    static from_raw(raw) {
        assert("player_id" in raw, "Raw team data should have 'player_id' field");
        assert("creature_ids" in raw, "Raw team data should have 'creature_ids' field");
        return new Team(raw.player_id, raw.creature_ids);
    }
    draw_sprites(players, creatures) {
        var team_player = Player.get_by_id(players, this.player_id);
        var team_creatures = Creature.get_by_ids(creatures, this.creature_ids.sort(function(a, b) {
            if (a < b) {
                return -1;
            } else {
                return 1;
            }
        }));
        var dom = document.createElement("div");
        dom.classList.add("team");
        dom.classList.add(team_player.css_class);
        for (var i = 0; i < team_creatures.length; i++) {
            var dom_img = team_creatures[i].draw_sprite();
            dom_img.classList.add(team_player.css_class);
            dom.appendChild(dom_img);
        }
        return dom;
    }
    static get_by_player_ids(teams, player_ids) {
        var id2team = {};
        for (var team of teams) {
            id2team[team.player_id] = team;
        }
        var teams_ordered = [];
        for (var player_id of player_ids) {
            teams_ordered.push(id2team[player_id]);
        }
        return teams_ordered;
    }
}

class Match {
    /**
     * Create Match object that has a winner and loser team
     * @param  {[Team]} win_team
     * @param  {[Team]} lose_team
     * @return {Match}
     */
     constructor(win_team, lose_team) {
        this.win_team = win_team;
        this.lose_team = lose_team;
     }
     /**
     * Create Match object from raw match data and a list of possible teams
     * @param  {[object]} raw [Must contain a "win_player_id" and a "lose_player_id" field]
     * @param  {[array]} teams [Possible teams to select from. These could be teams for all the players in a tournament
     *     but has to at least include teams for the winning and losing players]
     * @return {Match}
     */
     static from_raw(raw, teams) {
        assert("win_player_id" in raw, "Raw match data should have a 'win_player_id' field");
        assert("lose_player_id" in raw, "Raw match data should have a 'lose_player_id' field");
        let win_player_id = raw.win_player_id;
        let lose_player_id = raw.lose_player_id;
        let player_ids = [];
        for (let team of teams) {
            player_ids.push(team.player_id);
        }
        let player_id_set = new Set(player_ids);
        assert(player_ids.length === player_id_set.size, "Teams should belong to different players when making a Match");
        assert(player_id_set.has(win_player_id), "Winning player ID must have a team");
        assert(player_id_set.has(lose_player_id), "Losing player ID must have a team");
        let win_team_index = argfind(player_ids, win_player_id);
        let lose_team_index = argfind(player_ids, lose_player_id);
        return new Match(teams[win_team_index], teams[lose_team_index]);
     }
     /**
     * [Player IDs and number of wins for each player sorted by number of wins]
     * @param {[array]} matches [List of matches for one tournament or one playoff round]
     * @return {[array]} player_ids [ID for each player]
     * @return {[array]} wins [Number of wins for each player (in descending order). Corresponds to returned player_ids]
     */
     static get_player_ids_wins_and_loses(matches) {
        var win_player_ids = [];
        var lose_player_ids = [];
        for (let match of matches) {
            win_player_ids.push(match.win_team.player_id);
            lose_player_ids.push(match.lose_team.player_id);
        }
        var player_and_wins = unique_counts(win_player_ids);
        var player2wins = {};
        for (var i = 0; i < player_and_wins[0].length; i++) {
            player2wins[player_and_wins[0][i]] = player_and_wins[1][i];
        }
        var player_and_losses = unique_counts(lose_player_ids);
        var player2losses = {};
        for (var i = 0; i < player_and_losses[0].length; i++) {
            player2losses[player_and_losses[0][i]] = player_and_losses[1][i];
        }
        var player_id_set = new Set();
        for (var match of matches) {
            player_id_set.add(match.win_team.player_id);
            player_id_set.add(match.lose_team.player_id);
        }
        var player_ids = Array.from(player_id_set);
        for (var player_id of player_ids) {
            if (!(player_id in player2wins)) {
                player2wins[player_id] = 0;
            }
            if (!(player_id in player2losses)) {
                player2losses[player_id] = 0;
            }
        }
        var player2score = {}
        var scores = []
        for (var player_id of player_ids) {
            scores.push(player2wins[player_id] - player2losses[player_id]);
        }
        var idx = argsort(scores).reverse();
        var player_ids_sorted = [];
        for (var i of idx) {
            player_ids_sorted.push(player_ids[i]);
        }
        var n_wins_sorted = [];
        var n_loss_sorted = [];
        for (var player_id of player_ids_sorted) {
            n_wins_sorted.push(player2wins[player_id]);
            n_loss_sorted.push(player2losses[player_id]);
        }
        return [player_ids_sorted, n_wins_sorted, n_loss_sorted];
    }

    /**
     * [Update the ELO of each creature]
     * @param {[array]} players [List of all players]
     * @param {[array]} creatures [List of all creatures]
     */
    update_elos(players, creatures) {
        // Update player ELOs (added 2024-12-02)
        var [ew, el] = elo_update(players[this.win_team.player_id].stat.elo, players[this.lose_team.player_id].stat.elo);
        players[this.win_team.player_id].stat.elo = ew;
        players[this.lose_team.player_id].stat.elo = el;

        var win_creatures = Creature.get_by_ids(creatures, this.win_team.creature_ids)
        var lose_creatures = Creature.get_by_ids(creatures, this.lose_team.creature_ids)
        var nw = win_creatures.length
        var nl = lose_creatures.length
        var win_elos = new Array(nw).fill(0).map(() => new Array(nl).fill(0));
        var lose_elos = new Array(nl).fill(0).map(() => new Array(nw).fill(0));
        var win_player_id = this.win_team.player_id;
        var lose_player_id = this.lose_team.player_id;
        var player_ids = players.map(player => player.id);
        win_creatures.forEach(function (win_creature, i) {
            lose_creatures.forEach(function (lose_creature, j) {
                init_creature_elo(win_creature, player_ids);
                init_creature_elo(lose_creature, player_ids);
                var [ew, el] = elo_update(win_creature.stat.elo[win_player_id], lose_creature.stat.elo[lose_player_id]);
                win_elos[i][j] = ew;
                lose_elos[j][i] = el;
            });
        });
        var win_elos = mean_rows(win_elos);  // Use the average elo change across enemy creatures
        var lose_elos = mean_rows(lose_elos);
        win_creatures.forEach(function (creature, i) {
            // creature.stat.elo = Math.max(1000, win_elos[i]);
            creature.stat.elo[win_player_id] = win_elos[i];
        });
        lose_creatures.forEach(function (creature, i) {
            // creature.stat.elo = Math.max(1000, lose_elos[i]);
            creature.stat.elo[lose_player_id] = lose_elos[i];
        });
    }
}

function init_creature_elo(creature, player_ids) {
    if (creature.stat.elo === null) {
        creature.stat.elo = {};
    }
    for (var player_id of player_ids) {
        if (!(player_id in creature.stat.elo)) {
            creature.stat.elo[player_id] = null;
        }
    }
}

function create_element({tag = "div", innerHTML = "", children = [], classList = [], attributes={}}={}) {
    dom = document.createElement(tag);
    dom.innerHTML = innerHTML;
    for (var css_class of classList) {
        dom.classList.add(css_class);
    }
    for (var child of children) {
        dom.appendChild(child);
    }
    for (var key in attributes) {
        dom.setAttribute(key, attributes[key]);
    }
    return dom;
}

function create_elements(count, innerHTML = "", tag = "div", children = [], classList = []) {
    var elements = [];
    for (var i = 0; i < count; i++) {
        elements.push(create_element({tag: tag, innerHTML: innerHTML, children: children, classList: classList}))
    }
    return elements;
}

/**
 * @param [object] dom Dom element to toggle a css "expanded" class on
 */
function toggle_expanded(dom) {
    if (dom.classList.contains("expanded")) {
        dom.classList.remove("expanded");
    } else {
        dom.classList.add("expanded");
    }
}

/**
 * [Rank play]
 * @param  {[array]} scores [Score for each element. Could be number of match wins for each player in a tournament]
 * @return {[array]} ranks [Rank of each element with higher scores getting a higher rank]
 */
function rank_scores(scores) {
    var sorted = scores.slice().sort(function(a,b){return b - a})
    return scores.map(function(v){ return sorted.indexOf(v)+1 });
}

/**
 * [Rank play]
 * Args:
 *     r1 (float) Elo for winning player
 *     r2 (float) Elo for losing player
 * Returns:
 *     r1_new (float) New calculation of Elo for winning player
 *     r2_new (float) New calculation of Elo for losing player
 */
function elo_update(r1, r2) {
    if (r1 === null) {
        r1 = 1000;
    }
    if (r2 === null) {
        r2 = 1000;
    }
    var k1 = elo_k_calc(r1, true);
    var k2 = elo_k_calc(r2, false);

    var q1 = Math.pow(10, r1 / 400);
    var q2 = Math.pow(10, r2 / 400);
    var e1 = q1 / (q1 + q2);
    var e2 = q2 / (q1 + q2);
    var r1_new = r1 + k1 * (1 - e1);
    var r2_new = r2 + k2 * (0 - e2);
    return [r1_new, r2_new];
}

function elo_k_calc(r, is_winner) {
    if (r < 1100) {
        var x = (r - 1000) / 100;  // A percent between 1000 and 1100
        if (is_winner) {
            return 80 * (1 - x) + 50 * x;
        } else {
            return 20 * (1 - x) + 50 * x;
        }
    } else if (r < 1300) {
        return 50;
    } else if (r < 1600) {
        return 40;
    } else {
        return 32;
    }
}

function filter_cards(css_class) {
    let collection = document.getElementsByClassName("event");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "none";
    }
    if (css_class === "") {
        css_class = "event";
    }
    collection = document.getElementsByClassName(css_class);
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "block";
    }
    collection = document.getElementsByClassName("tab");
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.remove("active");
    }
    if (css_class == "event") {
        css_class = "everything"
    }
    collection = document.getElementsByClassName("tab " + css_class);
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.add("active");
    }
}

function make_random_tournament_text(dom_id) {
        const shuffleArray = array => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        var names = [
            "Matts",
            "Jesse",
            "Steve",
            "James",
            "A-Rod",
            "Nolan"
        ]
        shuffleArray(names);
        names = names.slice(0, 4);
        names.sort();
        msg = ""
        for (var i = 0; i < names.length; i++) {
            msg += names[i] + "<br/>"
        }
        shuffleArray(names);
        var [a, b, c, d] = names
        msg += "--------------<br/>"
        msg += a + " vs " + b + "<br/>"
        msg += c + " vs " + d + "<br/>"
        msg += a + " vs " + c + "<br/>"
        msg += b + " vs " + d + "<br/>"
        msg += a + " vs " + d + "<br/>"
        msg += b + " vs " + c + "<br/>"
        document.getElementById(dom_id).innerHTML = msg;
    }
