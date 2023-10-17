var raw = {
    "players": [
        {
            "id": 0,
            "name": "Kamon",
            "css_class": "kamon",
            "creature_ids": [727, 784, 233, 807, 649, 423, 282, 639, 279, 350, 286, 184, 797, 642, 547, 752, 437, 248, 530, 479, 230, 492],
            "trainer_sprite": "../img/giovanni.png"
        }, {
            "id": 1,
            "name": "JaeBird",
            "css_class": "jbird",
            "creature_ids": [788, 212, 798, 143, 145, 718, 591, 3, 681, 38,  53, 576, 380, 560, 805, 719, 721, 637, 787],
            "trainer_sprite": "../img/zen.gif"
        }, {
            "id": 2,
            "name": "Steve",
            "css_class": "steve",
            "creature_ids": [490, 149, 707, 151, 157, 245, 132, 485, 373, 257, 763, 461, 488, 786, 376, 186, 260, 645],
            "trainer_sprite": "../img/Spr_B2W2_Alder.png"
        }, {
            "id": 3,
            "name": "James",
            "css_class": "james",
            "creature_ids": [802, 801, 115, 385, 778, 468, 445, 598,  94, 648, 386, 795, 800, 748, 113, 806, 793, 310, 494, 6, 785],
            "trainer_sprite": "../img/angel.png"
        },
    ],
    "events": [
        {
            "type": "unofficial-tournament",
            "date": "2021/02/20 20:30",
            "description": "This will determine the season 5 draft order.",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [249, 716, 383, 382, 115, 493],
                    }, {
                        "player_id": 1,
                        "creature_ids": [382, 383, 384, 716, 492, 727],
                    }, {
                        "player_id": 2,
                        "creature_ids": [382, 383, 384, 717, 716, 250],
                    }, {
                        "player_id": 3,
                        "creature_ids": [382, 249, 802, 718, 716, 250],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }
                ]
            }
        },
        {
            "type": "unofficial-tournament",
            "date": "2021/02/20 20:40",
            "description": "This is a second, smaller tournament to determine 3rd and 4th place in the season 5 draft order.",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 1,
                        "creature_ids": [382, 383, 384, 716, 492, 727],
                    }, {
                        "player_id": 2,
                        "creature_ids": [382, 383, 384, 717, 716, 250],
                    }, {
                        "player_id": 3,
                        "creature_ids": [382, 249, 802, 718, 716, 250],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }
                ]
            }
        },
        {
            "type": "draft",
            "date": "2021/03/14",
            "description": "",
            "kwargs": {
                "creatures_drafted": [
                    {
                        "player_id": 0,
                        "creature_id": 727
                    }, {
                        "player_id": 1,
                        "creature_id": 788
                    }, {
                        "player_id": 2,
                        "creature_id": 786
                    }, {
                        "player_id": 3,
                        "creature_id": 785
                    }, {
                        "player_id": 3,
                        "creature_id": 802
                    }, {
                        "player_id": 2,
                        "creature_id": 560
                    }, {
                        "player_id": 1,
                        "creature_id": 645
                    }, {
                        "player_id": 0,
                        "creature_id": 784
                    }, {
                        "player_id": 0,
                        "creature_id": 233
                    }, {
                        "player_id": 1,
                        "creature_id": 376
                    }, {
                        "player_id": 2,
                        "creature_id": 6
                    }, {
                        "player_id": 3,
                        "creature_id": 801
                    }, {
                        "player_id": 3,
                        "creature_id": 115
                    }, {
                        "player_id": 2,
                        "creature_id": 490
                    }, {
                        "player_id": 1,
                        "creature_id": 212
                    }, {
                        "player_id": 0,
                        "creature_id": 807
                    }, {
                        "player_id": 0,
                        "creature_id": 721
                    }, {
                        "player_id": 1,
                        "creature_id": 798
                    }, {
                        "player_id": 2,
                        "creature_id": 494
                    }, {
                        "player_id": 3,
                        "creature_id": 385
                    }, {
                        "player_id": 3,
                        "creature_id": 778
                    }, {
                        "player_id": 2,
                        "creature_id": 479
                    }, {
                        "player_id": 1,
                        "creature_id": 719
                    }, {
                        "player_id": 0,
                        "creature_id": 492
                    }, {
                        "player_id": 0,
                        "creature_id": 649
                    }, {
                        "player_id": 1,
                        "creature_id": 143
                    }, {
                        "player_id": 2,
                        "creature_id": 149
                    }, {
                        "player_id": 3,
                        "creature_id": 468
                    }, {
                        "player_id": 3,
                        "creature_id": 445
                    }, {
                        "player_id": 2,
                        "creature_id": 707
                    }, {
                        "player_id": 1,
                        "creature_id": 145
                    }, {
                        "player_id": 0,
                        "creature_id": 423
                    }, {
                        "player_id": 0,
                        "creature_id": 282
                    }, {
                        "player_id": 1,
                        "creature_id": 718
                    }, {
                        "player_id": 2,
                        "creature_id": 248
                    }, {
                        "player_id": 3,
                        "creature_id": 787
                    }, {
                        "player_id": 3,
                        "creature_id": 598
                    }, {
                        "player_id": 2,
                        "creature_id": 151
                    }, {
                        "player_id": 1,
                        "creature_id": 637
                    }, {
                        "player_id": 0,
                        "creature_id": 639
                    }
                ]
            }
        },
        {
            "type": "draft",
            "date": "2021/03/19 19:00",
            "description": "",
            "kwargs": {
                "creatures_drafted": [
                    {
                        "player_id": 0,
                        "creature_id": 186
                    }, {
                        "player_id": 1,
                        "creature_id": 591
                    }, {
                        "player_id": 2,
                        "creature_id": 157
                    }, {
                        "player_id": 3,
                        "creature_id": 94
                    }, {
                        "player_id": 3,
                        "creature_id": 648
                    }, {
                        "player_id": 2,
                        "creature_id": 260
                    }, {
                        "player_id": 1,
                        "creature_id": 230
                    }, {
                        "player_id": 0,
                        "creature_id": 279
                    }, {
                        "player_id": 0,
                        "creature_id": 350
                    }, {
                        "player_id": 1,
                        "creature_id": 488
                    }, {
                        "player_id": 2,
                        "creature_id": 245
                    }, {
                        "player_id": 3,
                        "creature_id": 386
                    }, {
                        "player_id": 3,
                        "creature_id": 795
                    }, {
                        "player_id": 2,
                        "creature_id": 132
                    }, {
                        "player_id": 1,
                        "creature_id": 3
                    }, {
                        "player_id": 0,
                        "creature_id": 286
                    }, {
                        "player_id": 0,
                        "creature_id": 461
                    }, {
                        "player_id": 1,
                        "creature_id": 681
                    }, {
                        "player_id": 2,
                        "creature_id": 485
                    }, {
                        "player_id": 3,
                        "creature_id": 800
                    }, {
                        "player_id": 3,
                        "creature_id": 805
                    }, {
                        "player_id": 2,
                        "creature_id": 373
                    }, {
                        "player_id": 1,
                        "creature_id": 310
                    }, {
                        "player_id": 0,
                        "creature_id": 184
                    }, {
                        "player_id": 0,
                        "creature_id": 797
                    }, {
                        "player_id": 1,
                        "creature_id": 38
                    }, {
                        "player_id": 2,
                        "creature_id": 437
                    }, {
                        "player_id": 3,
                        "creature_id": 748
                    }, {
                        "player_id": 3,
                        "creature_id": 113
                    }, {
                        "player_id": 2,
                        "creature_id": 257
                    }, {
                        "player_id": 1,
                        "creature_id": 53
                    }, {
                        "player_id": 0,
                        "creature_id": 642
                    }, {
                        "player_id": 0,
                        "creature_id": 547
                    }, {
                        "player_id": 1,
                        "creature_id": 576
                    }, {
                        "player_id": 2,
                        "creature_id": 763
                    }, {
                        "player_id": 3,
                        "creature_id": 806
                    }, {
                        "player_id": 3,
                        "creature_id": 793
                    }, {
                        "player_id": 2,
                        "creature_id": 530
                    }, {
                        "player_id": 1,
                        "creature_id": 380
                    }, {
                        "player_id": 0,
                        "creature_id": 752
                    }
                ]
            }
        },
        {
            "type": "tournament",
            "date": "2021/03/19 20:00",
            "description": "In the first tournament of the season, Kamon swept the floor using double fake out, a setup Kommo-o, and an annoying ally-switching Porygon 2!",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [727, 784, 233, 807, 649, 282],
                    }, {
                        "player_id": 1,
                        "creature_ids": [788, 645, 376, 145, 718, 637],
                    }, {
                        "player_id": 2,
                        "creature_ids": [6, 494, 149, 132, 245, 151],
                    }, {
                        "player_id": 3,
                        "creature_ids": [785, 802, 801, 115, 468, 787],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }
                ]
            }
        },
        {
            "type": "trade",
            "date": "2021/03/19 21:00",
            "description": "In his outrage and frustration at not having a viable Fake Out user, JaeBird immediately traded his Diance for Steve's Scrafty after the tournament.",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 1,
                        "creature_id": 560
                    }, {
                        "from_player_id": 1,
                        "to_player_id": 2,
                        "creature_id": 719
                    }
                ]
            }
        },
        {
            "type": "trade",
            "date": "2021/03/24 13:00",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 0,
                        "to_player_id": 2,
                        "creature_id": 461
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 0,
                        "creature_id": 437
                    }
                ]
            }
        },
        {
            "type": "trade",
            "date": "2021/03/27 14:30",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 1,
                        "to_player_id": 3,
                        "creature_id": 310
                    }, {
                        "from_player_id": 3,
                        "to_player_id": 1,
                        "creature_id": 805
                    }
                ]
            }
        },
        {
            "type": "tournament",
            "date": "2021/03/28 18:00",
            "description": "As Tapu Fini bathed in the tears of Politoad, Kartana cut its way through the downpour to a narrow victory.",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [423, 279, 186, 721, 649, 642],
                    }, {
                        "player_id": 1,
                        "creature_ids": [145, 376, 718, 788, 560, 798],
                    }, {
                        "player_id": 2,
                        "creature_ids": [707, 786, 151, 479, 6, 149],
                    }, {
                        "player_id": 3,
                        "creature_ids": [785, 787, 310, 801, 802, 468],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }
                ]
            }
        },
        {
            "type": "unofficial-tournament",
            "date": "2021/04/07 19:00",
            "description": "With the ebb and flow of time through its circuits, Porygon 2 lead Steven's Kamon team to a narrow victory over Kamon's JaeBird team. The (obviously inferior) blue colored gastrodon took no prisoners.",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [145, 376, 718, 560, 637, 488],
                    }, {
                        "player_id": 1,
                        "creature_ids": [468, 785, 801, 802, 115, 385],
                    }, {
                        "player_id": 2,
                        "creature_ids": [233, 282, 423, 727, 784, 184],
                    }, {
                        "player_id": 3,
                        "creature_ids": [6, 149, 151, 494, 786, 530],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 3,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
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
                        "win_player_id": 2,
                        "lose_player_id": 0,
                    }
                ]
            },
        },
        {
            "type": "tournament",
            "date": "2021/05/13 19:00",
            "description": "After a close encounter with Kamon's Breloom and Zerora, there was no stopping the calm and powerful Seamam (Tapu Fini) leading her team to a clean sweep.",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [727, 784, 807, 286, 233, 797],
                    }, {
                        "player_id": 1,
                        "creature_ids": [145, 788, 560, 798, 645, 212],
                    }, {
                        "player_id": 2,
                        "creature_ids": [149, 151, 494, 490, 719, 707],
                    }, {
                        "player_id": 3,
                        "creature_ids": [802, 386, 748, 778, 806, 94],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }
                ]
            }
        },
        {
            "type": "tournament",
            "date": "2021/06/06 16:00",
            "description": "To almost everyone's mutual disgust, Kamon swept the tournament with overwhelming power and hax!",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [727, 784, 807, 282, 797, 492],
                    }, {
                        "player_id": 1,
                        "creature_ids": [560, 212, 143, 488, 591, 805],
                    }, {
                        "player_id": 2,
                        "creature_ids": [151, 245, 373, 479, 490, 494],
                    }, {
                        "player_id": 3,
                        "creature_ids": [802, 785, 787, 115, 113, 385],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }
                ]
            }
        },
        {
            "type": "trade",
            "date": "2021/06/06 17:45",
            "description": "After a pledge from Kamon that he will use his top 4 in every tournament, Steve negotiated the largest single trade in history!",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 0,
                        "to_player_id": 2,
                        "creature_id": 721
                    }, {
                        "from_player_id": 0,
                        "to_player_id": 2,
                        "creature_id": 492
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 1,
                        "creature_id": 719
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 1,
                        "creature_id": 786
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 0,
                        "creature_id": 248
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 0,
                        "creature_id": 530
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 0,
                        "creature_id": 260
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 0,
                        "creature_id": 479
                    }, {
                        "from_player_id": 1,
                        "to_player_id": 0,
                        "creature_id": 230
                    }, {
                        "from_player_id": 1,
                        "to_player_id": 2,
                        "creature_id": 488
                    }, {
                        "from_player_id": 1,
                        "to_player_id": 2,
                        "creature_id": 637
                    }
                ]
            }
        },
        {
            "type": "trade",
            "date": "2021/06/26 21:45",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": 1,
                        "creature_id": 785
                    }, {
                        "from_player_id": 1,
                        "to_player_id": 3,
                        "creature_id": 645
                    }, {
                        "from_player_id": 1,
                        "to_player_id": 3,
                        "creature_id": 786
                    }
                ]
            }
        },
        {
            "type": "tournament",
            "date": "2021/07/02 16:00",
            "description": "Thanks to many clutch paralyses, Kamon was narrowly defeated at the hands of JaeBird's Poca Roca (Diancie). Kamon rechallenged JaeBird only to be beaten by  Scrafty, Zyguard, and Tapu Fini.",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [727, 784, 649, 423, 248, 530],
                    }, {
                        "player_id": 1,
                        "creature_ids": [145, 560, 788, 718, 719, 3],
                    }, {
                        "player_id": 2,
                        "creature_ids": [151, 6, 245, 492, 488, 637],
                    }, {
                        "player_id": 3,
                        "creature_ids": [645, 801, 113, 786, 386, 445],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }
                ]
            },
        }, {
            "type": "tournament",
            "date": "2021/07/27 22:00",
            "description": "...",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [727, 784, 807, 282, 233, 286],
                    }, {
                        "player_id": 1,
                        "creature_ids": [145, 560, 788, 718, 785, 376],
                    }, {
                        "player_id": 2,
                        "creature_ids": [494, 488, 245, 707, 373, 492],
                    }, {
                        "player_id": 3,
                        "creature_ids": [645, 115, 786, 310, 445, 598],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }
                ]
            }
        },
        {
            "type": "trade",
            "date": "2021/10/11 10:50",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 786
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 494
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2021/10/11 16:20",
            "description": "James showed a valient effort but they were all no match for Celesteela's bs use of leech seed!",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [727, 784, 807, 282, 233, 797],
                    }, {
                        "player_id": 1,
                        "creature_ids": [145, 560, 788, 798, 212, 719],
                    }, {
                        "player_id": 2,
                        "creature_ids": [151, 245, 492, 786, 488, 373],
                    }, {
                        "player_id": 3,
                        "creature_ids": [494, 802, 801, 468, 94, 778],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 3,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2021/10/11 17:40",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 1,
                        "to_player_id": 2,
                        "creature_id": 376
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 1,
                        "creature_id": 721
                    }, {
                        "from_player_id": 2,
                        "to_player_id": 1,
                        "creature_id": 637
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2021/11/14 17:00",
            "description": "After the longest (106 turns: Steven vs James) and shortest (4 turns: James vs Jesse) matches, JaeBird's Scizor lead the way to an exhausting victory!",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [807, 233, 186, 279, 230, 260],
                    }, {
                        "player_id": 1,
                        "creature_ids": [560, 718, 788, 785, 212, 721],
                    }, {
                        "player_id": 2,
                        "creature_ids": [786, 488, 6, 149, 490, 485],
                    }, {
                        "player_id": 3,
                        "creature_ids": [494, 787, 94, 598, 748, 793],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2021/12/02 17:00",
            "description": "",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [727, 784, 807, 797, 248, 530],
                    }, {
                        "player_id": 1,
                        "creature_ids": [560, 788, 145, 212, 721, 637],
                    }, {
                        "player_id": 2,
                        "creature_ids": [786, 245, 149, 376, 485, 490],
                    }, {
                        "player_id": 3,
                        "creature_ids": [787, 778, 386, 598, 748, 793],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2021/12/02 20:30",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 0,
                        "creature_id": 492
                    }, {
                        "from_player_id": 0,
                        "to_player_id": 2,
                        "creature_id": 186
                    }, {
                        "from_player_id": 0,
                        "to_player_id": 2,
                        "creature_id": 260
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2021/12/12 19:15",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 2,
                        "to_player_id": 3,
                        "creature_id": 6
                    }, {
                        "from_player_id": 3,
                        "to_player_id": 2,
                        "creature_id": 645
                    }
                ]
            }
        }, {
            "type": "trade",
            "date": "2021/12/18 10:55",
            "description": "",
            "kwargs": {
                "creatures": [
                    {
                        "from_player_id": 1,
                        "to_player_id": 3,
                        "creature_id": 785
                    }, {
                        "from_player_id": 3,
                        "to_player_id": 1,
                        "creature_id": 787
                    }
                ]
            }
        }, {
            "type": "tournament",
            "date": "2021/12/18 11:00",
            "description": "",
            "kwargs": {
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [727, 797, 282, 649, 492, 639],
                    }, {
                        "player_id": 1,
                        "creature_ids": [788, 145, 212, 718, 721, 787],
                    }, {
                        "player_id": 2,
                        "creature_ids": [786, 376, 490, 151, 186, 645],
                    }, {
                        "player_id": 3,
                        "creature_ids": [494, 785, 6, 748, 385, 445],
                    }
                ],
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 0,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 3,
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 2,
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                    }
                ]
            }
        }, {
            "type": "round",
            "date": "2021/12/27 19:00",
            "description": "Steve's rain dance team swept through the competition like a hurricane!",
            "kwargs": {
                "matches": [
                    {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                        "win_creature_ids": [376, 490, 186, 151, 786, 485],
                        "lose_creature_ids": [385, 494, 6, 785, 468, 748]
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 3,
                        "win_creature_ids": [376, 490, 186, 151, 786, 485],
                        "lose_creature_ids": [468, 94, 386, 806, 795, 598]
                    }, 
                ]
            }
        }, {
            "type": "round",
            "date": "2021/12/27 20:00",
            "description": "After JaeBird's direct counter to Steve's rain dance team, Steve struck back with double intimidate and calm mind Cresselia. In the final match, Zapdos and Tapu Fini dominated the competition!",
            "kwargs": {
                "matches": [
                    {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                        "win_creature_ids": [145, 212, 560, 721, 787, 798],
                        "lose_creature_ids": [490, 376, 186, 151, 786, 485]
                    }, {
                        "win_player_id": 2,
                        "lose_player_id": 1,
                        "win_creature_ids": [786, 151, 645, 373, 488, 132],
                        "lose_creature_ids": [145, 560, 721, 787, 798, 788]
                    }, {
                        "win_player_id": 1,
                        "lose_player_id": 2,
                        "win_creature_ids": [145, 212, 718, 721, 787, 788],
                        "lose_creature_ids": [786, 151, 645, 373, 485, 132]
                    }
                ]
            }
        }, {
            "type": "round",
            "date": "2021/12/27 21:00",
            "description": "In a return to the relentless days of old, Kamon swept JaeBird. A few matches were close, but in the end JaeBird was no match for Kamon's fully developed Celesteela.",
            "kwargs": {
                "matches": [
                    {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                        "win_creature_ids": [233, 797, 727, 492, 807, 282],
                        "lose_creature_ids": [145, 560, 212, 718, 721, 787]
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                        "win_creature_ids": [233, 797, 727, 807, 248, 530],
                        "lose_creature_ids": [145, 560, 719, 721, 787, 805]
                    }, {
                        "win_player_id": 0,
                        "lose_player_id": 1,
                        "win_creature_ids": [233, 797, 807, 279, 282, 230],
                        "lose_creature_ids": [212, 145, 721, 787, 560, 788]
                    }
                ]
            }
        }, {
            "type": "champion",
            "date": "2021/12/28",
            "description": 'Kamon wins Season 5! Celesteela "Cele steal your HP" is named Season 5 MVP.',
            "kwargs": {
                "mvp_creature_id": 797,
                "teams": [
                    {
                        "player_id": 0,
                        "creature_ids": [727, 807, 784, 797, 233, 282],
                    }, {
                        "player_id": 1,
                        "creature_ids": [788, 145, 560, 212, 718, 721],
                    }, {
                        "player_id": 2,
                        "creature_ids": [786, 151, 376, 490, 186, 645],
                    }, {
                        "player_id": 3,
                        "creature_ids": [494, 785, 778, 802, 748, 468],
                    }
                ],
            }
        }
    ],
    "creatures": ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetch’d', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow', 'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring', 'Slugma', 'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 'Magby', 'Miltank', 'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi', 'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry', 'Taillow', 'Swellow', 'Wingull', 'Pelipper', 'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham', 'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig', 'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 'Duskull', 'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Turtwig', 'Grotle', 'Torterra', 'Chimchar', 'Monferno', 'Infernape', 'Piplup', 'Prinplup', 'Empoleon', 'Starly', 'Staravia', 'Staraptor', 'Bidoof', 'Bibarel', 'Kricketot', 'Kricketune', 'Shinx', 'Luxio', 'Luxray', 'Budew', 'Roserade', 'Cranidos', 'Rampardos', 'Shieldon', 'Bastiodon', 'Burmy', 'Wormadam', 'Mothim', 'Combee', 'Vespiquen', 'Pachirisu', 'Buizel', 'Floatzel', 'Cherubi', 'Cherrim', 'Shellos', 'Gastrodon', 'Ambipom', 'Drifloon', 'Drifblim', 'Buneary', 'Lopunny', 'Mismagius', 'Honchkrow', 'Glameow', 'Purugly', 'Chingling', 'Stunky', 'Skuntank', 'Bronzor', 'Bronzong', 'Bonsly', 'Mime Jr.', 'Happiny', 'Chatot', 'Spiritomb', 'Gible', 'Gabite', 'Garchomp', 'Munchlax', 'Riolu', 'Lucario', 'Hippopotas', 'Hippowdon', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine', 'Finneon', 'Lumineon', 'Mantyke', 'Snover', 'Abomasnow', 'Weavile', 'Magnezone', 'Lickilicky', 'Rhyperior', 'Tangrowth', 'Electivire', 'Magmortar', 'Togekiss', 'Yanmega', 'Leafeon', 'Glaceon', 'Gliscor', 'Mamoswine', 'Porygon-Z', 'Gallade', 'Probopass', 'Dusknoir', 'Froslass', 'Rotom', 'Uxie', 'Mesprit', 'Azelf', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Snivy', 'Servine', 'Serperior', 'Tepig', 'Pignite', 'Emboar', 'Oshawott', 'Dewott', 'Samurott', 'Patrat', 'Watchog', 'Lillipup', 'Herdier', 'Stoutland', 'Purrloin', 'Liepard', 'Pansage', 'Simisage', 'Pansear', 'Simisear', 'Panpour', 'Simipour', 'Munna', 'Musharna', 'Pidove', 'Tranquill', 'Unfezant', 'Blitzle', 'Zebstrika', 'Roggenrola', 'Boldore', 'Gigalith', 'Woobat', 'Swoobat', 'Drilbur', 'Excadrill', 'Audino', 'Timburr', 'Gurdurr', 'Conkeldurr', 'Tympole', 'Palpitoad', 'Seismitoad', 'Throh', 'Sawk', 'Sewaddle', 'Swadloon', 'Leavanny', 'Venipede', 'Whirlipede', 'Scolipede', 'Cottonee', 'Whimsicott', 'Petilil', 'Lilligant', 'Basculin', 'Sandile', 'Krokorok', 'Krookodile', 'Darumaka', 'Darmanitan', 'Maractus', 'Dwebble', 'Crustle', 'Scraggy', 'Scrafty', 'Sigilyph', 'Yamask', 'Cofagrigus', 'Tirtouga', 'Carracosta', 'Archen', 'Archeops', 'Trubbish', 'Garbodor', 'Zorua', 'Zoroark', 'Minccino', 'Cinccino', 'Gothita', 'Gothorita', 'Gothitelle', 'Solosis', 'Duosion', 'Reuniclus', 'Ducklett', 'Swanna', 'Vanillite', 'Vanillish', 'Vanilluxe', 'Deerling', 'Sawsbuck', 'Emolga', 'Karrablast', 'Escavalier', 'Foongus', 'Amoonguss', 'Frillish', 'Jellicent', 'Alomomola', 'Joltik', 'Galvantula', 'Ferroseed', 'Ferrothorn', 'Klink', 'Klang', 'Klinklang', 'Tynamo', 'Eelektrik', 'Eelektross', 'Elgyem', 'Beheeyem', 'Litwick', 'Lampent', 'Chandelure', 'Axew', 'Fraxure', 'Haxorus', 'Cubchoo', 'Beartic', 'Cryogonal', 'Shelmet', 'Accelgor', 'Stunfisk', 'Mienfoo', 'Mienshao', 'Druddigon', 'Golett', 'Golurk', 'Pawniard', 'Bisharp', 'Bouffalant', 'Rufflet', 'Braviary', 'Vullaby', 'Mandibuzz', 'Heatmor', 'Durant', 'Deino', 'Zweilous', 'Hydreigon', 'Larvesta', 'Volcarona', 'Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Chespin', 'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Bunnelby', 'Diggersby', 'Fletchling', 'Fletchinder', 'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges', 'Skiddo', 'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aegislash', 'Spritzee', 'Aromatisse', 'Swirlix', 'Slurpuff', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'Helioptile', 'Heliolisk', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Sylveon', 'Hawlucha', 'Dedenne', 'Carbink', 'Goomy', 'Sliggoo', 'Goodra', 'Klefki', 'Phantump', 'Trevenant', 'Pumpkaboo', 'Gourgeist', 'Bergmite', 'Avalugg', 'Noibat', 'Noivern', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Rowlet', 'Dartrix', 'Decidueye', 'Litten', 'Torracat', 'Incineroar', 'Popplio', 'Brionne', 'Primarina', 'Pikipek', 'Trumbeak', 'Toucannon', 'Yungoos', 'Gumshoos', 'Grubbin', 'Charjabug', 'Vikavolt', 'Crabrawler', 'Crabominable', 'Oricorio', 'Cutiefly', 'Ribombee', 'Rockruff', 'Lycanroc', 'Wishiwashi', 'Mareanie', 'Toxapex', 'Mudbray', 'Mudsdale', 'Dewpider', 'Araquanid', 'Fomantis', 'Lurantis', 'Morelull', 'Shiinotic', 'Salandit', 'Salazzle', 'Stufful', 'Bewear', 'Bounsweet', 'Steenee', 'Tsareena', 'Comfey', 'Oranguru', 'Passimian', 'Wimpod', 'Golisopod', 'Sandygast', 'Palossand', 'Pyukumuku', 'Type: Null', 'Silvally', 'Minior', 'Komala', 'Turtonator', 'Togedemaru', 'Mimikyu', 'Bruxish', 'Drampa', 'Dhelmise', 'Jangmo-o', 'Hakamo-o', 'Kommo-o', 'Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Necrozma', 'Magearna', 'Marshadow', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon', 'Zeraora', 'Meltan', 'Melmetal']
}