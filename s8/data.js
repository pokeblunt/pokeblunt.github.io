// Good trainer sprite resource https://archives.bulbagarden.net/wiki/Category:Generation_V_Trainer_sprites
// More trainer sprite resource https://pokemon.gamepedia.com/Category:Trainer_sprites
var raw = {
    "players": [
        {
            "id": 0,
            "name": "Kamon",
            "css_class": "kamon",
            "creature_ids": [802, 719, 721, 876, 386, 861, 798, 115, 1003, 894, 492, 784],
            "trainer_sprite": "../img/giovanni.png"
        }, {
            "id": 1,
            "name": "JaeBird",
            "css_class": "jbird",
            "creature_ids": [807, 987, 151, 485, 901, 641, 591, 902, 895, 212, 146, 1021],
            "trainer_sprite": "../img/zen.gif"
        }, {
            "id": 2,
            "name": "Stephen",
            "css_class": "steve",
            "creature_ids": [727, 991, 645, 992, 149, 785, 1013, 385, 1004, 1018, 279, 763],
            "trainer_sprite": "../img/Spr_B2W2_Alder.png"
        }, {
            "id": 3,
            "name": "James",
            "css_class": "james",
            "creature_ids": [718, 94, 233, 257, 1002, 1017, 598, 649, 923, 1001, 282, 6],
            "trainer_sprite": "../img/li.png"
        }, {
            "id": 4,
            "name": "A-Rod",
            "css_class": "arod",
            "creature_ids": [812, 9, 488, 887, 1000, 1020, 1009, 38, 494, 786, 65, 547],
            "trainer_sprite": "../img/ManiacHGSSsprite.png"
        }, {
            "id": 5,
            "name": "Nolan",
            "css_class": "nolan",
            "creature_ids": [801, 376, 892, 882, 260, 809, 324, 979, 637, 858, 797, 323],
            "trainer_sprite": "../img/Spr_BW_Backpacker_M.png"
        }
    ],
    "events": [
        {
            "type": "draft",
            "date": "2024/03/03",
            "description": `
            <a href='tiers.html' target='_blank'>Tier List (before draft)</a>
            <br/>
            <a href='tiers_after_draft.html' target='_blank'>Tier List (after draft)</a>
            <br/><br/>
            <a href='draft1.html' target='_blank'>Draft</a>
            `,
            "kwargs": {
                "creatures_drafted": [
                    {'creature_id': 801, 'player_id': 5},
                    {'creature_id': 718, 'player_id': 3},
                    {'creature_id': 812, 'player_id': 4},
                    {'creature_id': 727, 'player_id': 2},
                    {'creature_id': 807, 'player_id': 1},
                    {'creature_id': 802, 'player_id': 0},

                    {'creature_id': 376, 'player_id': 5},
                    {'creature_id':  94, 'player_id': 3},
                    {'creature_id':   9, 'player_id': 4},
                    {'creature_id':   6, 'player_id': 2},
                    {'creature_id': 987, 'player_id': 1},
                    {'creature_id': 719, 'player_id': 0},

                    {'creature_id':  892, 'player_id': 5},
                    {'creature_id': 1004, 'player_id': 3},
                    {'creature_id':  488, 'player_id': 4},
                    {'creature_id':  991, 'player_id': 2},
                    {'creature_id':  151, 'player_id': 1},
                    {'creature_id':  721, 'player_id': 0},

                    {'creature_id':  260, 'player_id': 5},
                    {'creature_id':  257, 'player_id': 3},
                    {'creature_id': 1000, 'player_id': 4},
                    {'creature_id':  547, 'player_id': 2},
                    {'creature_id':  901, 'player_id': 1},
                    {'creature_id':  386, 'player_id': 0},

                    {'creature_id':  809, 'player_id': 5},
                    {'creature_id': 1002, 'player_id': 3},
                    {'creature_id': 1020, 'player_id': 4},
                    {'creature_id':  992, 'player_id': 2},
                    {'creature_id':  641, 'player_id': 1},
                    {'creature_id':  861, 'player_id': 0},

                    {'creature_id':  324, 'player_id': 5},
                    {'creature_id': 1017, 'player_id': 3},
                    {'creature_id': 1009, 'player_id': 4},
                    {'creature_id':  905, 'player_id': 2},
                    {'creature_id':  591, 'player_id': 1},
                    {'creature_id':  798, 'player_id': 0},

                    {'creature_id': 979, 'player_id': 5},
                    {'creature_id': 598, 'player_id': 3},
                    {'creature_id':  38, 'player_id': 4},
                    {'creature_id': 303, 'player_id': 2},
                    {'creature_id': 902, 'player_id': 1},
                    {'creature_id': 115, 'player_id': 0},

                    {'creature_id':  637, 'player_id': 5},
                    {'creature_id':  649, 'player_id': 3},
                    {'creature_id':  494, 'player_id': 4},
                    {'creature_id':  149, 'player_id': 2},
                    {'creature_id':  895, 'player_id': 1},
                    {'creature_id': 1003, 'player_id': 0},

                    {'creature_id': 858, 'player_id': 5},
                    {'creature_id': 923, 'player_id': 3},
                    {'creature_id': 279, 'player_id': 4},
                    {'creature_id': 785, 'player_id': 2},
                    {'creature_id': 212, 'player_id': 1},
                    {'creature_id': 894, 'player_id': 0},

                    {'creature_id':  797, 'player_id': 5},
                    {'creature_id': 1001, 'player_id': 3},
                    {'creature_id':  786, 'player_id': 4},
                    {'creature_id': 1013, 'player_id': 2},
                    {'creature_id':  146, 'player_id': 1},
                    {'creature_id':  492, 'player_id': 0},

                    {'creature_id':  323, 'player_id': 5},
                    {'creature_id':  282, 'player_id': 3},
                    {'creature_id':   65, 'player_id': 4},
                    {'creature_id':  385, 'player_id': 2},
                    {'creature_id': 1021, 'player_id': 1},
                    {'creature_id':  784, 'player_id': 0},
                ]
            }
        }, {
            "type": "trade",
            "date": "2024/03/05 20:30",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 1018
                    }, {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 905
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2024/03/05 20:55",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 1004
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 6
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2024/03/09 15:34",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 4,
                        "creature_id": 547
                    }, {
                        "from_player_id": 4,
                        "to_player_id": 2,
                        "creature_id": 279
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2024/03/10 14:10",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-2078018148' target='_blank'>Game 1 - Stephen beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-2078025701' target='_blank'>Game 2 - Matt beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-2078032399' target='_blank'>Game 3 - James beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-2078043111' target='_blank'>Game 4 - Matt beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-2078048205' target='_blank'>Game 5 - James beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-2078054670' target='_blank'>Game 6 - Stephen beat Matt</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-2078061603' target='_blank'>Game 7 - James beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-2078079438' target='_blank'>Game 8 - Matt beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-2078086694' target='_blank'>Game 9 - Matt beat James</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [115, 492, 719, 721, 784, 861],
                    }, {
                        "player_id": 2,
                        "creature_ids": [279, 645, 785, 991, 1004, 1018],
                    }, {
                        "player_id": 3,
                        "creature_ids": [94, 233, 598, 718, 923, 1002],
                    }, {
                        "player_id": 5,
                        "creature_ids": [323, 324, 797, 801, 809, 958],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    },
                ]
            }
        }, {
            "type": "trade",
            "date": "2024/03/10 17:26",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 763
                    }, {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 303
                    }
                ]
            }
        }
    ],
    "creatures": ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetch’d', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow', 'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring', 'Slugma', 'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 'Magby', 'Miltank', 'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi', 'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry', 'Taillow', 'Swellow', 'Wingull', 'Pelipper', 'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham', 'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig', 'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 'Duskull', 'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Turtwig', 'Grotle', 'Torterra', 'Chimchar', 'Monferno', 'Infernape', 'Piplup', 'Prinplup', 'Empoleon', 'Starly', 'Staravia', 'Staraptor', 'Bidoof', 'Bibarel', 'Kricketot', 'Kricketune', 'Shinx', 'Luxio', 'Luxray', 'Budew', 'Roserade', 'Cranidos', 'Rampardos', 'Shieldon', 'Bastiodon', 'Burmy', 'Wormadam', 'Mothim', 'Combee', 'Vespiquen', 'Pachirisu', 'Buizel', 'Floatzel', 'Cherubi', 'Cherrim', 'Shellos', 'Gastrodon', 'Ambipom', 'Drifloon', 'Drifblim', 'Buneary', 'Lopunny', 'Mismagius', 'Honchkrow', 'Glameow', 'Purugly', 'Chingling', 'Stunky', 'Skuntank', 'Bronzor', 'Bronzong', 'Bonsly', 'Mime Jr.', 'Happiny', 'Chatot', 'Spiritomb', 'Gible', 'Gabite', 'Garchomp', 'Munchlax', 'Riolu', 'Lucario', 'Hippopotas', 'Hippowdon', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine', 'Finneon', 'Lumineon', 'Mantyke', 'Snover', 'Abomasnow', 'Weavile', 'Magnezone', 'Lickilicky', 'Rhyperior', 'Tangrowth', 'Electivire', 'Magmortar', 'Togekiss', 'Yanmega', 'Leafeon', 'Glaceon', 'Gliscor', 'Mamoswine', 'Porygon-Z', 'Gallade', 'Probopass', 'Dusknoir', 'Froslass', 'Rotom', 'Uxie', 'Mesprit', 'Azelf', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Snivy', 'Servine', 'Serperior', 'Tepig', 'Pignite', 'Emboar', 'Oshawott', 'Dewott', 'Samurott', 'Patrat', 'Watchog', 'Lillipup', 'Herdier', 'Stoutland', 'Purrloin', 'Liepard', 'Pansage', 'Simisage', 'Pansear', 'Simisear', 'Panpour', 'Simipour', 'Munna', 'Musharna', 'Pidove', 'Tranquill', 'Unfezant', 'Blitzle', 'Zebstrika', 'Roggenrola', 'Boldore', 'Gigalith', 'Woobat', 'Swoobat', 'Drilbur', 'Excadrill', 'Audino', 'Timburr', 'Gurdurr', 'Conkeldurr', 'Tympole', 'Palpitoad', 'Seismitoad', 'Throh', 'Sawk', 'Sewaddle', 'Swadloon', 'Leavanny', 'Venipede', 'Whirlipede', 'Scolipede', 'Cottonee', 'Whimsicott', 'Petilil', 'Lilligant', 'Basculin', 'Sandile', 'Krokorok', 'Krookodile', 'Darumaka', 'Darmanitan', 'Maractus', 'Dwebble', 'Crustle', 'Scraggy', 'Scrafty', 'Sigilyph', 'Yamask', 'Cofagrigus', 'Tirtouga', 'Carracosta', 'Archen', 'Archeops', 'Trubbish', 'Garbodor', 'Zorua', 'Zoroark', 'Minccino', 'Cinccino', 'Gothita', 'Gothorita', 'Gothitelle', 'Solosis', 'Duosion', 'Reuniclus', 'Ducklett', 'Swanna', 'Vanillite', 'Vanillish', 'Vanilluxe', 'Deerling', 'Sawsbuck', 'Emolga', 'Karrablast', 'Escavalier', 'Foongus', 'Amoonguss', 'Frillish', 'Jellicent', 'Alomomola', 'Joltik', 'Galvantula', 'Ferroseed', 'Ferrothorn', 'Klink', 'Klang', 'Klinklang', 'Tynamo', 'Eelektrik', 'Eelektross', 'Elgyem', 'Beheeyem', 'Litwick', 'Lampent', 'Chandelure', 'Axew', 'Fraxure', 'Haxorus', 'Cubchoo', 'Beartic', 'Cryogonal', 'Shelmet', 'Accelgor', 'Stunfisk', 'Mienfoo', 'Mienshao', 'Druddigon', 'Golett', 'Golurk', 'Pawniard', 'Bisharp', 'Bouffalant', 'Rufflet', 'Braviary', 'Vullaby', 'Mandibuzz', 'Heatmor', 'Durant', 'Deino', 'Zweilous', 'Hydreigon', 'Larvesta', 'Volcarona', 'Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Chespin', 'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Bunnelby', 'Diggersby', 'Fletchling', 'Fletchinder', 'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges', 'Skiddo', 'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aegislash', 'Spritzee', 'Aromatisse', 'Swirlix', 'Slurpuff', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'Helioptile', 'Heliolisk', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Sylveon', 'Hawlucha', 'Dedenne', 'Carbink', 'Goomy', 'Sliggoo', 'Goodra', 'Klefki', 'Phantump', 'Trevenant', 'Pumpkaboo', 'Gourgeist', 'Bergmite', 'Avalugg', 'Noibat', 'Noivern', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Rowlet', 'Dartrix', 'Decidueye', 'Litten', 'Torracat', 'Incineroar', 'Popplio', 'Brionne', 'Primarina', 'Pikipek', 'Trumbeak', 'Toucannon', 'Yungoos', 'Gumshoos', 'Grubbin', 'Charjabug', 'Vikavolt', 'Crabrawler', 'Crabominable', 'Oricorio', 'Cutiefly', 'Ribombee', 'Rockruff', 'Lycanroc', 'Wishiwashi', 'Mareanie', 'Toxapex', 'Mudbray', 'Mudsdale', 'Dewpider', 'Araquanid', 'Fomantis', 'Lurantis', 'Morelull', 'Shiinotic', 'Salandit', 'Salazzle', 'Stufful', 'Bewear', 'Bounsweet', 'Steenee', 'Tsareena', 'Comfey', 'Oranguru', 'Passimian', 'Wimpod', 'Golisopod', 'Sandygast', 'Palossand', 'Pyukumuku', 'Type: Null', 'Silvally', 'Minior', 'Komala', 'Turtonator', 'Togedemaru', 'Mimikyu', 'Bruxish', 'Drampa', 'Dhelmise', 'Jangmo-o', 'Hakamo-o', 'Kommo-o', 'Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Necrozma', 'Magearna', 'Marshadow', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon', 'Zeraora', 'Meltan', 'Melmetal', "Grookey", "Thwackey", "Rillaboom", "Scorbunny", "Raboot", "Cinderace", "Sobble", "Drizzile", "Inteleon", "Skwovet", "Greedent", "Rookidee", "Corvisquire", "Corviknight", "Blipbug", "Dottler", "Orbeetle", "Nickit", "Thievul", "Gossifleur", "Eldegoss", "Wooloo", "Dubwool", "Chewtle", "Drednaw", "Yamper", "Boltund", "Rolycoly", "Carkol", "Coalossal", "Applin", "Flapple", "Appletun", "Silicobra", "Sandaconda", "Cramorant", "Arrokuda", "Barraskewda", "Toxel", "Toxtricity", "Sizzlipede", "Centiskorch", "Clobbopus", "Grapploct", "Sinistea", "Polteageist", "Hatenna", "Hattrem", "Hatterene", "Impidimp", "Morgrem", "Grimmsnarl", "Obstagoon", "Perrserker", "Cursola", "Sirfetchd", "Mr.Rime", "Runerigus", "Milcery", "Alcremie", "Falinks", "Pincurchin", "Snom", "Frosmoth", "Stonjourner", "Eiscue", "Indeedee", "Morpeko", "Cufant", "Copperajah", "Dracozolt", "Arctozolt", "Dracovish", "Arctovish", "Duraludon", "Dreepy", "Drakloak", "Dragapult", "Zacian", "Zamazenta", "Eternatus", "Kubfu", "Urshifu", "Zarude", "Regieleki", "Regidrago", "Glastrier", "Spectrier", "Calyrex", "Wyrdeer", "Kleavor", "Ursaluna", "Basculegion", "Sneasler", "Overqwil", "Enamorus", "Sprigatito", "Floragato", "Meowscarada", "Fuecoco", "Crocalor", "Skeledirge", "Quaxly", "Quaxwell", "Quaquaval", "Lechonk", "Oinkologne", "Tarountula", "Spidops", "Nymble", "Lokix", "Pawmi", "Pawmo", "Pawmot", "Tandemaus", "Maushold", "Fidough", "Dachsbun", "Smoliv", "Dolliv", "Arboliva", "Squawkabilly", "Nacli", "Naclstack", "Garganacl", "Charcadet", "Armarouge", "Ceruledge", "Tadbulb", "Bellibolt", "Wattrel", "Kilowattrel", "Maschiff", "Mabosstiff", "Shroodle", "Grafaiai", "Bramblin", "Brambleghast", "Toedscool", "Toedscruel", "Klawf", "Capsakid", "Scovillain", "Rellor", "Rabsca", "Flittle", "Espathra", "Tinkatink", "Tinkatuff", "Tinkaton", "Wiglett", "Wugtrio", "Bombirdier", "Finizen", "Palafin", "Varoom", "Revavroom", "Cyclizar", "Orthworm", "Glimmet", "Glimmora", "Greavard", "Houndstone", "Flamigo", "Cetoddle", "Cetitan", "Veluza", "Dondozo", "Tatsugiri", "Annihilape", "Clodsire", "Farigiraf", "Dudunsparce", "Kingambit", "Great Tusk", "Scream Tail", "Brute Bonnet", "Flutter Mane", "Slither Wing", "Sandy Shocks", "Iron Treads", "Iron Bundle", "Iron Hands", "Iron Jugulis", "Iron Moth", "Iron Thorns", "Frigibax", "Arctibax", "Baxcalibur", "Gimmighoul", "Gholdengo", "Wo-Chien", "Chien-Pao", "Ting-Lu", "Chi-Yu", "Roaring Moon", "Iron Valiant", "Koraidon", "Miraidon", "Walking Wake", "Iron Leaves", "Dipplin", "Poltchageist", "Sinistcha", "Okidogi", "Munkidori", "Fezandipiti", "Ogerpon", "Archaludon", "Hydrapple", "Gouging Fire", "Raging Bolt", "Iron Boulder", "Iron Crown", "Terapagos", "Pecharunt"]
}
