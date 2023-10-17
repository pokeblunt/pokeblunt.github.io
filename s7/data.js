// Good trainer sprite resource https://archives.bulbagarden.net/wiki/Category:Generation_V_Trainer_sprites
// More trainer sprite resource https://pokemon.gamepedia.com/Category:Trainer_sprites
var raw = {
    "players": [
        {
            "id": 0,
            "name": "Kamon",
            "css_class": "kamon",
            "creature_ids": [812, 718, 151, 807, 721, 802, 641, 882, 786, 994, 571, 479, 36, 286, 794, 1001, 897, 936, 233, 861, 998, 990],
            "trainer_sprite": "../img/giovanni.png"
        }, {
            "id": 1,
            "name": "JaeBird",
            "css_class": "jbird",
            "creature_ids": [801, 727, 149, 1003, 645, 887, 986, 547, 492, 9, 488, 38, 145, 905, 186, 902, 212, 235, 901, 900, 804, 1002],
            "trainer_sprite": "../img/zen.gif"
        }, {
            "id": 2,
            "name": "Stephen",
            "css_class": "steve",
            "creature_ids": [876, 800, 649, 637, 132, 707, 793, 700, 964, 279, 460, 858, 302, 763, 892, 984, 491, 1017, 1015, 798, 1016],
            "trainer_sprite": "../img/Spr_B2W2_Alder.png"
        }, {
            "id": 3,
            "name": "James",
            "css_class": "james",
            "creature_ids": [970, 797, 967, 494, 937, 923, 908, 771, 1006, 282, 795, 934, 706, 765, 788, 959, 146, 979, 809, 719, 373, 598],
            "trainer_sprite": "../img/li.png"
        }, {
            "id": 4,
            "name": "A-Rod",
            "css_class": "arod",
            "creature_ids": [1004, 987, 894, 991, 485, 972, 248, 748, 785, 1009, 423, 59, 635, 985, 962, 386, 939, 914, 982, 324, 1005, 973, 925],
            "trainer_sprite": "../img/ManiacHGSSsprite.png"
        }, {
            "id": 5,
            "name": "Nolan",
            "css_class": "nolan",
            "creature_ids": [1000, 992, 289, 591, 445, 778, 983, 977, 945, 978, 198, 385, 376, 468, 895, 184, 806, 784, 94, 620, 380, 981],
            "trainer_sprite": "../img/Spr_BW_Backpacker_M.png"
        }
    ],
    "events": [
        {
            "type": "draft",
            "date": "2023/01/01",
            "description": `
            <a href='draft1.html' target='_blank'>Draft 1</a>
            `,
            "kwargs": {
                "creatures_drafted": [
                    {'creature_id': 1000, 'player_id': 5},
                    {'creature_id': 1004, 'player_id': 4},
                    {'creature_id': 801, 'player_id': 1},
                    {'creature_id': 1002, 'player_id': 2},
                    {'creature_id': 964, 'player_id': 3},
                    {'creature_id': 812, 'player_id': 0},
                    {'creature_id': 718, 'player_id': 0},
                    {'creature_id': 970, 'player_id': 3},
                    {'creature_id': 1005, 'player_id': 2},
                    {'creature_id': 727, 'player_id': 1},
                    {'creature_id': 987, 'player_id': 4},
                    {'creature_id': 992, 'player_id': 5},
                    {'creature_id': 289, 'player_id': 5},
                    {'creature_id': 892, 'player_id': 4},
                    {'creature_id': 809, 'player_id': 1},
                    {'creature_id': 861, 'player_id': 2},
                    {'creature_id': 233, 'player_id': 3},
                    {'creature_id': 151, 'player_id': 0},
                    {'creature_id': 807, 'player_id': 0},
                    {'creature_id': 797, 'player_id': 3},
                    {'creature_id': 979, 'player_id': 2},
                    {'creature_id': 149, 'player_id': 1},
                    {'creature_id': 894, 'player_id': 4},
                    {'creature_id': 591, 'player_id': 5},
                    {'creature_id': 445, 'player_id': 5},
                    {'creature_id': 991, 'player_id': 4},
                    {'creature_id': 1003, 'player_id': 1},
                    {'creature_id': 876, 'player_id': 2},
                    {'creature_id': 967, 'player_id': 3},
                    {'creature_id': 721, 'player_id': 0},
                    {'creature_id': 802, 'player_id': 0},
                    {'creature_id': 984, 'player_id': 3},
                    {'creature_id': 936, 'player_id': 2},
                    {'creature_id': 645, 'player_id': 1},
                    {'creature_id': 905, 'player_id': 4},
                    {'creature_id': 778, 'player_id': 5},
                    {'creature_id': 983, 'player_id': 5},
                    {'creature_id': 485, 'player_id': 4},
                    {'creature_id': 887, 'player_id': 1},
                    {'creature_id': 998, 'player_id': 2},
                    {'creature_id': 925, 'player_id': 3},
                    {'creature_id': 719, 'player_id': 0},
                    {'creature_id': 993, 'player_id': 0},
                    {'creature_id': 279, 'player_id': 3},
                    {'creature_id': 934, 'player_id': 2},
                    {'creature_id': 986, 'player_id': 1},
                    {'creature_id': 972, 'player_id': 4},
                    {'creature_id': 488, 'player_id': 5},
                    {'creature_id': 785, 'player_id': 5},
                    {'creature_id': 248, 'player_id': 4},
                    {'creature_id': 547, 'player_id': 1},
                    {'creature_id': 324, 'player_id': 2},
                    {'creature_id': 494, 'player_id': 3},
                    {'creature_id': 641, 'player_id': 0},
                    {'creature_id': 882, 'player_id': 0},
                    {'creature_id': 937, 'player_id': 3},
                    {'creature_id': 981, 'player_id': 2},
                    {'creature_id': 978, 'player_id': 1},
                    {'creature_id': 748, 'player_id': 4},
                    {'creature_id': 977, 'player_id': 5},
                    {'creature_id': 945, 'player_id': 5},
                    {'creature_id': 959, 'player_id': 4},
                    {'creature_id': 492, 'player_id': 1},
                    {'creature_id': 184, 'player_id': 2},
                    {'creature_id': 923, 'player_id': 3},
                    {'creature_id': 786, 'player_id': 0},
                    {'creature_id': 798, 'player_id': 0},
                    {'creature_id': 741, 'player_id': 3},
                    {'creature_id': 145, 'player_id': 2},
                    {'creature_id': 788, 'player_id': 1},
                    {'creature_id': 113, 'player_id': 4},
                    {'creature_id': 245, 'player_id': 5}
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/01/24 10:14",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 800
                    }, {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 981
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/01/24 10:16",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 1,
                        "creature_id": 9
                    }, {
                        "from_player_id": 1,
                        "to_player_id": -1,
                        "creature_id": 978
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/01/24 11:02",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 4,
                        "creature_id": 978
                    }, {
                        "from_player_id": 4,
                        "to_player_id": -1,
                        "creature_id": 113
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/01/24 14:35",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 4,
                        "to_player_id": 5,
                        "creature_id": 978
                    }, {
                        "from_player_id": 5,
                        "to_player_id": 4,
                        "creature_id": 785
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/01/28 10:46",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 5,
                        "creature_id": 198
                    }, {
                        "from_player_id": 5,
                        "to_player_id": -1,
                        "creature_id": 245
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/01/28 14:00",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1785731771' target='_blank'>Game 1 - Stephen beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1785725647' target='_blank'>Game 2 - Arod beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1785739654' target='_blank'>Game 3 - James beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1785748676' target='_blank'>Game 4 - Arod beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1785758603' target='_blank'>Game 5 - Stephen beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1785771142' target='_blank'>Game 6 - Nolan beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1785796748' target='_blank'>Game 7 - Stephen beat Arod</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 2,
                        "creature_ids": [876, 979, 861, 1002, 934, 800],
                    }, {
                        "player_id": 3,
                        "creature_ids": [279, 964, 970, 967, 923, 494],
                    }, {
                        "player_id": 4,
                        "creature_ids": [248, 972, 894, 892, 785, 991],
                    }, {
                        "player_id": 5,
                        "creature_ids": [1000, 198, 445, 992, 289, 945],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 5,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 4,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/01/29 15:47",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 0,
                        "creature_id": 707
                    }, {
                        "from_player_id": 0,
                        "to_player_id": -1,
                        "creature_id": 798
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/02/10 15:51",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 5,
                        "creature_id": 973
                    }, {
                        "from_player_id": 5,
                        "to_player_id": -1,
                        "creature_id": 488
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/02/10 15:57",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 1,
                        "creature_id": 488
                    }, {
                        "from_player_id": 1,
                        "to_player_id": -1,
                        "creature_id": 788
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/02/10 15:58",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 788
                    }, {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 145
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/02/10 16:10",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 3,
                        "creature_id": 36
                    }, {
                        "from_player_id": 3,
                        "to_player_id": -1,
                        "creature_id": 741
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/02/10 18:00",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1797318690' target='_blank'>Game 1 - Matt beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1797334507' target='_blank'>Game 2 - Matt beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1797353553' target='_blank'>Game 3 - Nolan beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1797358934' target='_blank'>Game 4 - Arod beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1797368959' target='_blank'>Game 5 - Arod beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1797378915' target='_blank'>Game 6 - Matt beat James</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [718, 707, 641, 802, 807, 812],
                    }, {
                        "player_id": 3,
                        "creature_ids": [279, 923, 964, 967, 970, 36],
                    }, {
                        "player_id": 4,
                        "creature_ids": [248, 892, 972, 991, 748, 959],
                    }, {
                        "player_id": 5,
                        "creature_ids": [1000, 198, 992, 973, 977, 978],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 0,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 5,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/02/11 17:32",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 1006
                    }, {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 184
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/02/14 14:44",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 0,
                        "creature_id": 491
                    }, {
                        "from_player_id": 0,
                        "to_player_id": -1,
                        "creature_id": 993
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/02/14 16:45",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 3,
                        "creature_id": 687
                    }, {
                        "from_player_id": 3,
                        "to_player_id": -1,
                        "creature_id": 36
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/02/19 16:45",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 4,
                        "creature_id": 663
                    }, {
                        "from_player_id": 4,
                        "to_player_id": -1,
                        "creature_id": 905
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/02/19 17:00",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1804314686' target='_blank'>Game 1 - Matt beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1804324164' target='_blank'>Game 2 - Jesse beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1804334332' target='_blank'>Game 3 - Matt beat Jesse</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1804345852' target='_blank'>Game 4 - Stephen beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1804358983' target='_blank'>Game 5 - Jesse beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1804368160' target='_blank'>Game 6 - Matt beat Stephen</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [718, 802, 807, 812, 151, 721],
                    }, {
                        "player_id": 1,
                        "creature_ids": [9, 488, 801, 809, 887, 1003],
                    }, {
                        "player_id": 2,
                        "creature_ids": [861, 979, 1002, 788, 936, 1005],
                    }, {
                        "player_id": 4,
                        "creature_ids": [892, 972, 991, 748, 959, 663],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 0,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/02/20 16:04",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 649
                    }, {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 1006
                    }
                ]
            }
        }, {
            "type": "draft",
            "date": "2023/03/05 18:00",
            "description": `
            <a href='draft2.html' target='_blank'>Draft 2</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen8freeforallrandombattle-1815000444' target='_blank'>Game 1 - Arod beat Jesse beat Matt beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen8freeforallrandombattle-1815027266' target='_blank'>Game 2 - Arod beat Jesse beat James beat Nolan</a><br/>
            Then drafted on 2023/03/11 15:00
            `,
            "kwargs": {
                "creatures_drafted": [
                    {'creature_id': 1009, 'player_id': 4},
                    {'creature_id': 38, 'player_id': 1},
                    {'creature_id': 908, 'player_id': 3},
                    {'creature_id': 385, 'player_id': 5},
                    {'creature_id': 994, 'player_id': 0},
                    {'creature_id': 706, 'player_id': 2},
                    {'creature_id': 598, 'player_id': 2},
                    {'creature_id': 571, 'player_id': 0},
                    {'creature_id': 376, 'player_id': 5},
                    {'creature_id': 952, 'player_id': 3},
                    {'creature_id': 805, 'player_id': 1},
                    {'creature_id': 423, 'player_id': 4},
                    
                    {'creature_id': 59, 'player_id': 4},
                    {'creature_id': 804, 'player_id': 1},
                    {'creature_id': 900, 'player_id': 3},
                    {'creature_id': 468, 'player_id': 5},
                    {'creature_id': 479, 'player_id': 0},
                    {'creature_id': 373, 'player_id': 2},
                    {'creature_id': 475, 'player_id': 2},
                    {'creature_id': 302, 'player_id': 0},
                    {'creature_id': 895, 'player_id': 5},
                    {'creature_id': 648, 'player_id': 3},
                    {'creature_id': 798, 'player_id': 1},
                    {'creature_id': 635, 'player_id': 4},

                    {'creature_id': 985, 'player_id': 4},
                    {'creature_id': 145, 'player_id': 1},
                    {'creature_id': 65, 'player_id': 3},
                    {'creature_id': 184, 'player_id': 5},
                    {'creature_id': 36, 'player_id': 0},
                    {'creature_id': 146, 'player_id': 2},
                    {'creature_id': 795, 'player_id': 2},
                    {'creature_id': 286, 'player_id': 0},
                    {'creature_id': 806, 'player_id': 5},
                    {'creature_id': 771, 'player_id': 3},
                    {'creature_id': 905, 'player_id': 1},
                    {'creature_id': 962, 'player_id': 4},

                    {'creature_id': 386, 'player_id': 4},
                    {'creature_id': 186, 'player_id': 1},
                    {'creature_id': 793, 'player_id': 3},
                    {'creature_id': 784, 'player_id': 5},
                    {'creature_id': 794, 'player_id': 0},
                    {'creature_id': 625, 'player_id': 2},
                    {'creature_id': 637, 'player_id': 2},
                    {'creature_id': 981, 'player_id': 0},
                    {'creature_id': 94, 'player_id': 5},
                    {'creature_id': 875, 'player_id': 3},
                    {'creature_id': 902, 'player_id': 1},
                    {'creature_id': 939, 'player_id': 4},

                    {'creature_id': 956, 'player_id': 4},
                    {'creature_id': 212, 'player_id': 1},
                    {'creature_id': 1006, 'player_id': 3},
                    {'creature_id': 620, 'player_id': 5},
                    {'creature_id': 1001, 'player_id': 0},
                    {'creature_id': 901, 'player_id': 2},
                    {'creature_id': 132, 'player_id': 2},
                    {'creature_id': 897, 'player_id': 0},
                    {'creature_id': 380, 'player_id': 5},
                    {'creature_id': 282, 'player_id': 3},
                    {'creature_id': 555, 'player_id': 1},
                    {'creature_id': 914, 'player_id': 4},
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/03/15 17:00",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1822682622' target='_blank'>Game 1 - Arod beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1822689370' target='_blank'>Game 2 - Matt beat Jesse</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1822696780' target='_blank'>Game 3 - Jesse beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1822701861' target='_blank'>Game 4 - Matt beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1822705832' target='_blank'>Game 5 - James beat Jesse</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1822722262' target='_blank'>Game 6 - Matt beat Arod</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [812, 807, 151, 721, 897, 719],
                    }, {
                        "player_id": 1,
                        "creature_ids": [9, 801, 149, 547, 645, 727],
                    }, {
                        "player_id": 3,
                        "creature_ids": [494, 797, 687, 771, 908, 952],
                    }, {
                        "player_id": 4,
                        "creature_ids": [1004, 1009, 991, 939, 59, 423],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 4,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 4,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/03/16 11:18",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 4,
                        "creature_id": 982
                    }, {
                        "from_player_id": 4,
                        "to_player_id": -1,
                        "creature_id": 663
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/03/16 11:39",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 437
                    }, {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 936
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/03/16 14:21",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 0,
                        "creature_id": 936
                    }, {
                        "from_player_id": 0,
                        "to_player_id": -1,
                        "creature_id": 981
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/03/17 12:23",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 795
                    }, {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 233
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/03/19 11:43",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": -1,
                        "creature_id": 65
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 3,
                        "creature_id": 683
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/03/19 11:44",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 683
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 934
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/03/21 15:00",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1826872251' target='_blank'>Game 1 - Matt beat Jesse</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1826880696' target='_blank'>Game 2 - Steve beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1826892039' target='_blank'>Game 3 - Matt beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1826897513' target='_blank'>Game 4 - Jesse beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1826903114' target='_blank'>Game 5 - Jesse beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1826912778' target='_blank'>Game 6 - Matt beat Stephen</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [807, 812, 151, 641, 36, 286],
                    }, {
                        "player_id": 1,
                        "creature_ids": [801, 809, 212, 798, 805, 488],
                    }, {
                        "player_id": 2,
                        "creature_ids": [861, 979, 233, 475, 598, 901],
                    }, {
                        "player_id": 5,
                        "creature_ids": [198, 992, 376, 591, 784, 806],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/03/21 16:45",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 625
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 245
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/04/01 15:30",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1834870191' target='_blank'>Game 1 - Stephen beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1834876151' target='_blank'>Game 2 - Jesse beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1834882284' target='_blank'>Game 3 - Jesse beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1834896212' target='_blank'>Game 4 - James beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1834902431' target='_blank'>Game 5 - Jesse beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1834910763' target='_blank'>Game 6 - Stephen beat Nolan</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 1,
                        "creature_ids": [801, 488, 149, 727, 38, 902],
                    }, {
                        "player_id": 2,
                        "creature_ids": [861, 979, 233, 598, 901, 637],
                    }, {
                        "player_id": 3,
                        "creature_ids": [279, 964, 967, 771, 952, 984],
                    }, {
                        "player_id": 5,
                        "creature_ids": [198, 1000, 591, 784, 778, 983],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 5,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/04/02 12:08",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 681
                    }, {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 437
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/04/04 10:27",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 1,
                        "creature_id": 235
                    }, {
                        "from_player_id": 1,
                        "to_player_id": -1,
                        "creature_id": 555
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/04/08 15:53",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 4,
                        "creature_id": 324
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 4,
                        "creature_id": 1005
                    }, {
                        "from_player_id": 4,
                        "to_player_id": 2,
                        "creature_id": 892
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/04/11 17:00",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1841766447' target='_blank'>Game 1 - Jesse beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1841770455' target='_blank'>Game 2 - Arod beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1841776246' target='_blank'>Game 3 - Nolan beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1841782615' target='_blank'>Game 4 - Jesse beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1841793892' target='_blank'>Game 5 - James beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1841801884' target='_blank'>Game 6 - Jesse beat Nolan</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 1,
                        "creature_ids": [488, 149, 727, 9, 235, 905],
                    }, {
                        "player_id": 3,
                        "creature_ids": [279, 964, 967, 771, 923, 797],
                    }, {
                        "player_id": 4,
                        "creature_ids": [1009, 1005, 423, 939, 1004, 324],
                    }, {
                        "player_id": 5,
                        "creature_ids": [198, 1000, 591, 445, 380, 620],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 5,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 5,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/04/11 18:49",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 911
                    }, {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 681
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/04/16 8:37",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 3,
                        "creature_id": 903
                    }, {
                        "from_player_id": 3,
                        "to_player_id": -1,
                        "creature_id": 648
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/04/17 1:58",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 0,
                        "to_player_id": 2,
                        "creature_id": 707
                    }, {
                        "from_player_id": 0,
                        "to_player_id": 2,
                        "creature_id": 719
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 0,
                        "creature_id": 861
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 0,
                        "creature_id": 233
                    }
                ]
            }
        }, {
            "type": "unofficial-tournament",
            "date": "2023/04/23 14:30",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1850114910' target='_blank'>Game 1 - James beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1850120204' target='_blank'>Game 2 - Nolan beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1850126440' target='_blank'>Game 3 - Arod beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1850133590' target='_blank'>Game 4 - James beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1850136327' target='_blank'>Game 5 - Stephen beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1850140068' target='_blank'>Game 6 - James beat Arod</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 2,
                        "creature_ids": [701, 802, 892, 795, 784, 286],
                    }, {
                        "player_id": 3,
                        "creature_ids": [991, 998, 1002, 38, 144, 478],
                    }, {
                        "player_id": 4,
                        "creature_ids": [718, 445, 901, 645, 1003, 423],
                    }, {
                        "player_id": 5,
                        "creature_ids": [591, 908, 812, 798, 893, 598],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 3,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 5,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 4,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/05/07 14:25",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 0,
                        "to_player_id": 2,
                        "creature_id": 491
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 0,
                        "creature_id": 998
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/05/13 14:25",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 911
                    }, {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 793
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/05/14 18:30",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1864083670' target='_blank'>Game 1 - Stephen beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1864091615' target='_blank'>Game 2 - Matt beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1864100721' target='_blank'>Game 3 - Arod beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1864112659' target='_blank'>Game 4 - Matt beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1864118419' target='_blank'>Game 5 - Arod beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1864122342' target='_blank'>Game 6 - Matt beat Stephen</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [812, 571, 1001, 721, 479, 151],
                    }, {
                        "player_id": 2,
                        "creature_ids": [1002, 707, 637, 788, 373, 649],
                    }, {
                        "player_id": 3,
                        "creature_ids": [771, 908, 984, 903, 911, 875],
                    }, {
                        "player_id": 4,
                        "creature_ids": [991, 423, 939, 1004, 894, 785],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/05/18 12:49",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 683
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 130
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/05/26 19:22",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": -1,
                        "creature_id": 900
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 3,
                        "creature_id": 765
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/05/26 19:23",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 765
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 706
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/06/03 11:30",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1877131306' target='_blank'>Game 1 - Jesse beat Matt</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1877143602' target='_blank'>Game 2 - Arod beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1877148668' target='_blank'>Game 3 - Jesse beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1877154672' target='_blank'>Game 4 - Matt beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1877160557' target='_blank'>Game 5 - Matt beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1877166083' target='_blank'>Game 6 - Jesse beat Arod</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [151, 936, 786, 807, 882, 233],
                    }, {
                        "player_id": 1,
                        "creature_ids": [488, 149, 727, 235, 905, 645],
                    }, {
                        "player_id": 4,
                        "creature_ids": [423, 1004, 1009, 59, 324, 987],
                    }, {
                        "player_id": 5,
                        "creature_ids": [591, 1000, 992, 198, 895, 385],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 4,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/06/03 15:18",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 475
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 849
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/06/14 17:26",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": -1,
                        "creature_id": 903
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 3,
                        "creature_id": 700
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/06/14 17:27",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 700
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 491
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/06/15 12:33",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 964
                    }, {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 279
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 892
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/06/16 17:30",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1886348757' target='_blank'>Game 1 - Jesse beat Matt</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1886354955' target='_blank'>Game 2 - Stephen beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1886362051' target='_blank'>Game 3 - Jesse beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1886365879' target='_blank'>Game 4 - Matt beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1886372861' target='_blank'>Game 5 - Matt beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1886377144' target='_blank'>Game 6 - Jesse beat Stephen</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [807, 812, 861, 721, 718, 802],
                    }, {
                        "player_id": 1,
                        "creature_ids": [149, 727, 801, 905, 805, 986],
                    }, {
                        "player_id": 2,
                        "creature_ids": [964, 1002, 707, 637, 373, 700],
                    }, {
                        "player_id": 3,
                        "creature_ids": [892, 771, 797, 984, 911, 494],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/06/17 8:32",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 765
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 460
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/06/17 8:50",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": -1,
                        "creature_id": 875
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 3,
                        "creature_id": 765
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/06/21 23:00",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 1,
                        "to_player_id": 2,
                        "creature_id": 809
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 1,
                        "creature_id": 901
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/06/25 14:11",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 5,
                        "creature_id": 981
                    }, {
                        "from_player_id": 5,
                        "to_player_id": -1,
                        "creature_id": 973
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/06/25 15:02",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1891933994' target='_blank'>Game 1 - Stephen beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1891941893' target='_blank'>Game 2 - James beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1891947991' target='_blank'>Game 3 - Matt beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1891954466' target='_blank'>Game 4 - Matt beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1891962353' target='_blank'>Game 5 - Stephen beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1891961931' target='_blank'>Game 6 - Matt beat James</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [151, 812, 807, 861, 721, 571],
                    }, {
                        "player_id": 2,
                        "creature_ids": [979, 809, 700, 876, 719, 460],
                    }, {
                        "player_id": 3,
                        "creature_ids": [892, 494, 797, 282, 491, 765],
                    }, {
                        "player_id": 5,
                        "creature_ids": [198, 1000, 992, 591, 981, 184],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/06/25 15:44",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 4,
                        "creature_id": 973
                    }, {
                        "from_player_id": 4,
                        "to_player_id": -1,
                        "creature_id": 956
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/06/25 19:25",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 858
                    }, {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 849
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/07/02 14:13",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 0,
                        "creature_id": 990
                    }, {
                        "from_player_id": 0,
                        "to_player_id": -1,
                        "creature_id": 302
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/07/06 10:56",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": -1,
                        "to_player_id": 3,
                        "creature_id": 302
                    }, {
                        "from_player_id": 3,
                        "to_player_id": -1,
                        "creature_id": 911
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/07/06 10:57",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 302
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 788
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/07/07 12:05",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 1,
                        "to_player_id": -1,
                        "creature_id": 804
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 1,
                        "creature_id": 900
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/07/09 17:00",
            "description": `
            It's a Bird... It's a Plane... It's the Sun!
            <br/><br/>
            <img src="../img/sun.jpg" style="border-radius: 999px; width: 300px"/>
            <br/><br/>
            Overwhelming raw power was the name of the game as Arod's Flutter Mane, Chi-Yu, and Walking Wake delt massive damage to Stephen's team. Great predictions and targeting led Arod through two nail-biters against Jesse and James!
            <br/><br/>
            Congratulations Arod and beware Matt!
            <br/><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1900863554' target='_blank'>Game 1 - Jesse beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1900871704' target='_blank'>Game 2 - Arod beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1900882678' target='_blank'>Game 3 - Arod beat Jesse</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1900897596' target='_blank'>Game 4 - Stephen beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1900903144' target='_blank'>Game 5 - Stephen beat Jesse</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1900911269' target='_blank'>Game 6 - Arod beat James</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 1,
                        "creature_ids": [149, 235, 902, 547, 1003, 900],
                    }, {
                        "player_id": 2,
                        "creature_ids": [809, 964, 279, 719, 800, 302],
                    }, {
                        "player_id": 3,
                        "creature_ids": [892, 797, 771, 923, 795, 1006],
                    }, {
                        "player_id": 4,
                        "creature_ids": [423, 1004, 1009, 324, 959, 987],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 3,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/07/09 20:44",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 245
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 763
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/07/16 16:28",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 4,
                        "to_player_id": 3,
                        "creature_id": 959
                    }, {
                        "from_player_id": 3,
                        "to_player_id": 4,
                        "creature_id": 925
                    }
                ]
            }
        }, {
            "type": "unofficial-tournament",
            "date": "2023/08/01 19:02",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1915157431' target='_blank'>Game 1 - Arod beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1915165410' target='_blank'>Game 2 - Matt beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1915174216' target='_blank'>Game 3 - Matt beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1915181764' target='_blank'>Game 4 - Stephen beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1915189183' target='_blank'>Game 5 - Stephen beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1915199521' target='_blank'>Game 6 - Matt beat James</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [235, 235, 235, 235, 235, 235],
                    }, {
                        "player_id": 2,
                        "creature_ids": [235, 235, 235, 235, 235, 235],
                    }, {
                        "player_id": 3,
                        "creature_ids": [235, 235, 235, 235, 235, 235],
                    }, {
                        "player_id": 4,
                        "creature_ids": [235, 235, 235, 235, 235, 235],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 4,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/08/06 17:43",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": -1,
                        "creature_id": 687
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 3,
                        "creature_id": 804
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/08/06 17:44",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 804
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 146
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/09/08 17:17",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 979
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 809
                    }, {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 892
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/09/10 10:05",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 719
                    }, {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 984
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/09/13 22:15",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 1,
                        "to_player_id": -1,
                        "creature_id": 805
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 1,
                        "creature_id": 1015
                    }
                ]
            }
        }, {
            "type": "unofficial-tournament",
            "date": "2023/09/16 16:00",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1945177673' target='_blank'>Game 1 - Jesse beat Matt</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1945185994' target='_blank'>Game 2 - Matt beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1945192145' target='_blank'>Game 3 - Stephen beat Jesse</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [812, 807, 861, 721, 718, 802],
                    }, {
                        "player_id": 1,
                        "creature_ids": [149, 488, 727, 801, 901, 1015],
                    }, {
                        "player_id": 2,
                        "creature_ids": [892, 964, 637, 876, 302, 984],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 1,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/09/17 10:09",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 373
                    }, {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 491
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/09/17 18:05",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1945843089' target='_blank'>Game 1 - Stephen beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1945849529' target='_blank'>Game 2 - Matt beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1945854808' target='_blank'>Game 3 - Stephen beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1945862041' target='_blank'>Game 4 - Matt beat Arod</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1945866872' target='_blank'>Game 5 - Arod beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1945870867' target='_blank'>Game 6 - Matt beat Stephen</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [812, 807, 861, 721, 718, 802],
                    }, {
                        "player_id": 2,
                        "creature_ids": [964, 892, 279, 302, 491, 804],
                    }, {
                        "player_id": 4,
                        "creature_ids": [748, 59, 973, 485, 925, 982],
                    }, {
                        "player_id": 5,
                        "creature_ids": [198, 1000, 992, 784, 945, 289],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 4,
                    }, {
                        "win_player_id": 4,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/09/17 19:16",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": -1,
                        "creature_id": 130
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 2,
                        "creature_id": 1017
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/09/22 01:05",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 1,
                        "creature_id": 804
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 1,
                        "creature_id": 1002
                    }, {
                        "from_player_id": 1,
                        "to_player_id": 2,
                        "creature_id": 798
                    }, {
                        "from_player_id": 1,
                        "to_player_id": 2,
                        "creature_id": 1015
                    }
                ]
            }
        }, {
            "type": "unofficial-tournament",
            "date": "2023/09/22 22:00",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1950247007' target='_blank'>Game 1 - Jesse beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1950257728' target='_blank'>Game 2 - Matt beat Jesse</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1950264540' target='_blank'>Game 3 - Matt beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1950269377' target='_blank'>Game 4 - Jesse beat Stephen</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1950280876' target='_blank'>Game 5 - Matt beat Jesse</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1950284236' target='_blank'>Game 6 - Matt beat Stephen</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [812, 721, 718, 802, 233, 641],
                    }, {
                        "player_id": 1,
                        "creature_ids": [488, 727, 801, 1002, 645, 902],
                    }, {
                        "player_id": 2,
                        "creature_ids": [798, 1015, 637, 302, 984, 1017],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/09/24 08:47",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": -1,
                        "creature_id": 952
                    }, {
                        "from_player_id": -1,
                        "to_player_id": 3,
                        "creature_id": 1016
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2023/09/24 08:49",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 1016
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 598
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2023/10/01 18:07",
            "description": `
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1957330005' target='_blank'>Game 1 - Jesse beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1957334960' target='_blank'>Game 2 - Matt beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1957343121' target='_blank'>Game 3 - Jesse beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1957349316' target='_blank'>Game 4 - Matt beat Nolan</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1957353880' target='_blank'>Game 5 - Nolan beat James</a><br/>
            <a href='https://replay.pokemonshowdown.com/gen9doublescustomgame-1957359753' target='_blank'>Game 6 - Jesse beat Matt</a><br/>
            `,
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [233, 936, 882, 786, 794, 571],
                    }, {
                        "player_id": 1,
                        "creature_ids": [801, 645, 902, 145, 186, 492],
                    }, {
                        "player_id": 3,
                        "creature_ids": [719, 494, 923, 598, 373, 908],
                    }, {
                        "player_id": 5,
                        "creature_ids": [198, 1000, 992, 591, 895, 385],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 5,
                    }, {
                        "win_player_id": 5,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }
                ]
            }
        }
    ],
    "creatures": ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetch’d', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow', 'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring', 'Slugma', 'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 'Magby', 'Miltank', 'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi', 'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry', 'Taillow', 'Swellow', 'Wingull', 'Pelipper', 'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham', 'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig', 'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 'Duskull', 'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Turtwig', 'Grotle', 'Torterra', 'Chimchar', 'Monferno', 'Infernape', 'Piplup', 'Prinplup', 'Empoleon', 'Starly', 'Staravia', 'Staraptor', 'Bidoof', 'Bibarel', 'Kricketot', 'Kricketune', 'Shinx', 'Luxio', 'Luxray', 'Budew', 'Roserade', 'Cranidos', 'Rampardos', 'Shieldon', 'Bastiodon', 'Burmy', 'Wormadam', 'Mothim', 'Combee', 'Vespiquen', 'Pachirisu', 'Buizel', 'Floatzel', 'Cherubi', 'Cherrim', 'Shellos', 'Gastrodon', 'Ambipom', 'Drifloon', 'Drifblim', 'Buneary', 'Lopunny', 'Mismagius', 'Honchkrow', 'Glameow', 'Purugly', 'Chingling', 'Stunky', 'Skuntank', 'Bronzor', 'Bronzong', 'Bonsly', 'Mime Jr.', 'Happiny', 'Chatot', 'Spiritomb', 'Gible', 'Gabite', 'Garchomp', 'Munchlax', 'Riolu', 'Lucario', 'Hippopotas', 'Hippowdon', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine', 'Finneon', 'Lumineon', 'Mantyke', 'Snover', 'Abomasnow', 'Weavile', 'Magnezone', 'Lickilicky', 'Rhyperior', 'Tangrowth', 'Electivire', 'Magmortar', 'Togekiss', 'Yanmega', 'Leafeon', 'Glaceon', 'Gliscor', 'Mamoswine', 'Porygon-Z', 'Gallade', 'Probopass', 'Dusknoir', 'Froslass', 'Rotom', 'Uxie', 'Mesprit', 'Azelf', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Snivy', 'Servine', 'Serperior', 'Tepig', 'Pignite', 'Emboar', 'Oshawott', 'Dewott', 'Samurott', 'Patrat', 'Watchog', 'Lillipup', 'Herdier', 'Stoutland', 'Purrloin', 'Liepard', 'Pansage', 'Simisage', 'Pansear', 'Simisear', 'Panpour', 'Simipour', 'Munna', 'Musharna', 'Pidove', 'Tranquill', 'Unfezant', 'Blitzle', 'Zebstrika', 'Roggenrola', 'Boldore', 'Gigalith', 'Woobat', 'Swoobat', 'Drilbur', 'Excadrill', 'Audino', 'Timburr', 'Gurdurr', 'Conkeldurr', 'Tympole', 'Palpitoad', 'Seismitoad', 'Throh', 'Sawk', 'Sewaddle', 'Swadloon', 'Leavanny', 'Venipede', 'Whirlipede', 'Scolipede', 'Cottonee', 'Whimsicott', 'Petilil', 'Lilligant', 'Basculin', 'Sandile', 'Krokorok', 'Krookodile', 'Darumaka', 'Darmanitan', 'Maractus', 'Dwebble', 'Crustle', 'Scraggy', 'Scrafty', 'Sigilyph', 'Yamask', 'Cofagrigus', 'Tirtouga', 'Carracosta', 'Archen', 'Archeops', 'Trubbish', 'Garbodor', 'Zorua', 'Zoroark', 'Minccino', 'Cinccino', 'Gothita', 'Gothorita', 'Gothitelle', 'Solosis', 'Duosion', 'Reuniclus', 'Ducklett', 'Swanna', 'Vanillite', 'Vanillish', 'Vanilluxe', 'Deerling', 'Sawsbuck', 'Emolga', 'Karrablast', 'Escavalier', 'Foongus', 'Amoonguss', 'Frillish', 'Jellicent', 'Alomomola', 'Joltik', 'Galvantula', 'Ferroseed', 'Ferrothorn', 'Klink', 'Klang', 'Klinklang', 'Tynamo', 'Eelektrik', 'Eelektross', 'Elgyem', 'Beheeyem', 'Litwick', 'Lampent', 'Chandelure', 'Axew', 'Fraxure', 'Haxorus', 'Cubchoo', 'Beartic', 'Cryogonal', 'Shelmet', 'Accelgor', 'Stunfisk', 'Mienfoo', 'Mienshao', 'Druddigon', 'Golett', 'Golurk', 'Pawniard', 'Bisharp', 'Bouffalant', 'Rufflet', 'Braviary', 'Vullaby', 'Mandibuzz', 'Heatmor', 'Durant', 'Deino', 'Zweilous', 'Hydreigon', 'Larvesta', 'Volcarona', 'Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Chespin', 'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Bunnelby', 'Diggersby', 'Fletchling', 'Fletchinder', 'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges', 'Skiddo', 'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aegislash', 'Spritzee', 'Aromatisse', 'Swirlix', 'Slurpuff', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'Helioptile', 'Heliolisk', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Sylveon', 'Hawlucha', 'Dedenne', 'Carbink', 'Goomy', 'Sliggoo', 'Goodra', 'Klefki', 'Phantump', 'Trevenant', 'Pumpkaboo', 'Gourgeist', 'Bergmite', 'Avalugg', 'Noibat', 'Noivern', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Rowlet', 'Dartrix', 'Decidueye', 'Litten', 'Torracat', 'Incineroar', 'Popplio', 'Brionne', 'Primarina', 'Pikipek', 'Trumbeak', 'Toucannon', 'Yungoos', 'Gumshoos', 'Grubbin', 'Charjabug', 'Vikavolt', 'Crabrawler', 'Crabominable', 'Oricorio', 'Cutiefly', 'Ribombee', 'Rockruff', 'Lycanroc', 'Wishiwashi', 'Mareanie', 'Toxapex', 'Mudbray', 'Mudsdale', 'Dewpider', 'Araquanid', 'Fomantis', 'Lurantis', 'Morelull', 'Shiinotic', 'Salandit', 'Salazzle', 'Stufful', 'Bewear', 'Bounsweet', 'Steenee', 'Tsareena', 'Comfey', 'Oranguru', 'Passimian', 'Wimpod', 'Golisopod', 'Sandygast', 'Palossand', 'Pyukumuku', 'Type: Null', 'Silvally', 'Minior', 'Komala', 'Turtonator', 'Togedemaru', 'Mimikyu', 'Bruxish', 'Drampa', 'Dhelmise', 'Jangmo-o', 'Hakamo-o', 'Kommo-o', 'Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Necrozma', 'Magearna', 'Marshadow', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon', 'Zeraora', 'Meltan', 'Melmetal', "Grookey", "Thwackey", "Rillaboom", "Scorbunny", "Raboot", "Cinderace", "Sobble", "Drizzile", "Inteleon", "Skwovet", "Greedent", "Rookidee", "Corvisquire", "Corviknight", "Blipbug", "Dottler", "Orbeetle", "Nickit", "Thievul", "Gossifleur", "Eldegoss", "Wooloo", "Dubwool", "Chewtle", "Drednaw", "Yamper", "Boltund", "Rolycoly", "Carkol", "Coalossal", "Applin", "Flapple", "Appletun", "Silicobra", "Sandaconda", "Cramorant", "Arrokuda", "Barraskewda", "Toxel", "Toxtricity", "Sizzlipede", "Centiskorch", "Clobbopus", "Grapploct", "Sinistea", "Polteageist", "Hatenna", "Hattrem", "Hatterene", "Impidimp", "Morgrem", "Grimmsnarl", "Obstagoon", "Perrserker", "Cursola", "Sirfetchd", "Mr.Rime", "Runerigus", "Milcery", "Alcremie", "Falinks", "Pincurchin", "Snom", "Frosmoth", "Stonjourner", "Eiscue", "Indeedee", "Morpeko", "Cufant", "Copperajah", "Dracozolt", "Arctozolt", "Dracovish", "Arctovish", "Duraludon", "Dreepy", "Drakloak", "Dragapult", "Zacian", "Zamazenta", "Eternatus", "Kubfu", "Urshifu", "Zarude", "Regieleki", "Regidrago", "Glastrier", "Spectrier", "Calyrex", "Wyrdeer", "Kleavor", "Ursaluna", "Basculegion", "Sneasler", "Overqwil", "Enamorus", "Sprigatito", "Floragato", "Meowscarada", "Fuecoco", "Crocalor", "Skeledirge", "Quaxly", "Quaxwell", "Quaquaval", "Lechonk", "Oinkologne", "Tarountula", "Spidops", "Nymble", "Lokix", "Pawmi", "Pawmo", "Pawmot", "Tandemaus", "Maushold", "Fidough", "Dachsbun", "Smoliv", "Dolliv", "Arboliva", "Squawkabilly", "Nacli", "Naclstack", "Garganacl", "Charcadet", "Armarouge", "Ceruledge", "Tadbulb", "Bellibolt", "Wattrel", "Kilowattrel", "Maschiff", "Mabosstiff", "Shroodle", "Grafaiai", "Bramblin", "Brambleghast", "Toedscool", "Toedscruel", "Klawf", "Capsakid", "Scovillain", "Rellor", "Rabsca", "Flittle", "Espathra", "Tinkatink", "Tinkatuff", "Tinkaton", "Wiglett", "Wugtrio", "Bombirdier", "Finizen", "Palafin", "Varoom", "Revavroom", "Cyclizar", "Orthworm", "Glimmet", "Glimmora", "Greavard", "Houndstone", "Flamigo", "Cetoddle", "Cetitan", "Veluza", "Dondozo", "Tatsugiri", "Annihilape", "Clodsire", "Farigiraf", "Dudunsparce", "Kingambit", "Great Tusk", "Scream Tail", "Brute Bonnet", "Flutter Mane", "Slither Wing", "Sandy Shocks", "Iron Treads", "Iron Bundle", "Iron Hands", "Iron Jugulis", "Iron Moth", "Iron Thorns", "Frigibax", "Arctibax", "Baxcalibur", "Gimmighoul", "Gholdengo", "Wo-Chien", "Chien-Pao", "Ting-Lu", "Chi-Yu", "Roaring Moon", "Iron Valiant", "Koraidon", "Miraidon", "Walking Wake", "Iron Leaves", "Dipplin", "Poltchageist", "Sinistcha", "Okidogi", "Munkidori", "Fezandipiti", "Ogerpon"]
}
