import datetime
from dataclasses import dataclass
from functools import cached_property
import json
import re
import requests



def main() -> None:
    urls = [
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2263254386",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2263261788",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2263779140",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2263785896",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2265011606",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2265013442",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2265586682",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2265590734",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2266000658",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2266621946",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2267371403",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2267927700",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2268129486",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2268135118",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2268605408"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2271330848",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2271337650"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2272989726",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2272994443"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2274015427",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2274021897"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2277527423",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2277535891"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2276915389",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2278280160"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2279361820",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2279366828"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2283248806",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2283254893",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2283259512"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2279957587",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2281213975",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2281910362",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2284169491",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2284173832"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2284274777",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2284282140",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2284290889",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2284297652",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2284304066",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2284309132",

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2286296814",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2286303544",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2286326421",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2286332860",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2286339875"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2287432494",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2287439689",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2287448467",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2288279608",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2288283932",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2288287471",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2288345903",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2288351236",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2288356042"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2288786944"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2289475638",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2289482891",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2292007855",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2292025749"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2289487342",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2290141759",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2290148372",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2290153742",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2290929209",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2290929960"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2292168960",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2292173108"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2292714533",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2292803605"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2293270228",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2293273117"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2293868593"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2294570346",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2294574762",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2294579138",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2294660658",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2294666612",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2294671447",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2295029175",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2295042036",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2295051402"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2295920346",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2295925807"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2297040989",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2297045544",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2297053778",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2297058726",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2297063546",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2297071417",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2296838224",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2296842536"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2298357077",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2298363915",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2297793847"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2298963338",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2298968330"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2301592215",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2301595946",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2301601504",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2303431645",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2303434562",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2304211081",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2304216049",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2304840176",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2304850118"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2305435883"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2308697177",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2308701002",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2309436992",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2309444450",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2309418989",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2309429977"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2314071783",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2314082456",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2311110026",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2311114326",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2313385540",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2313495161"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2315182719",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2315187285",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2315190776",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2316882539",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2316887187",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2316892405"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2312495474",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2319943764",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2319950977",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2319955496",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2319962907",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2319968410",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2319977313"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2323365718",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2323373762",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2323378970",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2328059081",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2328063793",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2328068584",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2331069284",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2331004318",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2331016149",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2331034204"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2333277327",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2333282148",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2333290204",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2333310122",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2333312160",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2333314478",

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2331699468",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2332365616",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2332371476",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2332374857"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2337063293",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2337067345",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2339435844",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2339441629"

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2342847830",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2342859909",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2342917460",

        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2340199966",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2340205229",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2340208594",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2343696533",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2343700278",
        # "https://replay.pokemonshowdown.com/gen9doublescustomgame-2343706368"

        "https://replay.pokemonshowdown.com/gen9doublescustomgame-2344416322",
        "https://replay.pokemonshowdown.com/gen9doublescustomgame-2344425066"
    ]
    matches = [Match(url) for url in urls]
    matches.sort(key=lambda x: x._upload_time)
    print(", ".join([match.to_pokeblunt() for match in matches]))


@dataclass
class Match:
    url: str

    @cached_property
    def data(self) -> dict:
        # url = "https://replay.pokemonshowdown.com/gen9doublescustomgame-2263042311.json"
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
        }
        response = requests.get(f"{self.url}.json", headers=headers)
        assert response.status_code == 200, f"Response was {response}"
        return json.loads(response.content.decode('utf-8'))

    def to_pokeblunt(self) -> str:
        return f"""{{
    "type": "tournament",
    "date": "{self._upload_time}",
    "description": `
    <a href='{self._href}' target='_blank'>{self._pwin_name} beat {self._plose_name}</a><br/>
    `,
    "kwargs": {{
        "teams": [
            {{
                "player_id": {self._p1_id},
                "creature_ids": {self._p1_pkmn_numbers},
            }}, {{
                "player_id": {self._p2_id},
                "creature_ids": {self._p2_pkmn_numbers},
            }}
        ],
        "matches": [
            {{
                "win_player_id": {self._pwin_id},
                "lose_player_id": {self._plose_id},
            }}
        ]
    }}
}}"""

    def _creature_name_to_number(self, name: str) -> int:
        names = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetch’d', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow', 'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring', 'Slugma', 'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 'Magby', 'Miltank', 'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi', 'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry', 'Taillow', 'Swellow', 'Wingull', 'Pelipper', 'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham', 'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig', 'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 'Duskull', 'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Turtwig', 'Grotle', 'Torterra', 'Chimchar', 'Monferno', 'Infernape', 'Piplup', 'Prinplup', 'Empoleon', 'Starly', 'Staravia', 'Staraptor', 'Bidoof', 'Bibarel', 'Kricketot', 'Kricketune', 'Shinx', 'Luxio', 'Luxray', 'Budew', 'Roserade', 'Cranidos', 'Rampardos', 'Shieldon', 'Bastiodon', 'Burmy', 'Wormadam', 'Mothim', 'Combee', 'Vespiquen', 'Pachirisu', 'Buizel', 'Floatzel', 'Cherubi', 'Cherrim', 'Shellos', 'Gastrodon', 'Ambipom', 'Drifloon', 'Drifblim', 'Buneary', 'Lopunny', 'Mismagius', 'Honchkrow', 'Glameow', 'Purugly', 'Chingling', 'Stunky', 'Skuntank', 'Bronzor', 'Bronzong', 'Bonsly', 'Mime Jr.', 'Happiny', 'Chatot', 'Spiritomb', 'Gible', 'Gabite', 'Garchomp', 'Munchlax', 'Riolu', 'Lucario', 'Hippopotas', 'Hippowdon', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine', 'Finneon', 'Lumineon', 'Mantyke', 'Snover', 'Abomasnow', 'Weavile', 'Magnezone', 'Lickilicky', 'Rhyperior', 'Tangrowth', 'Electivire', 'Magmortar', 'Togekiss', 'Yanmega', 'Leafeon', 'Glaceon', 'Gliscor', 'Mamoswine', 'Porygon-Z', 'Gallade', 'Probopass', 'Dusknoir', 'Froslass', 'Rotom', 'Uxie', 'Mesprit', 'Azelf', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Snivy', 'Servine', 'Serperior', 'Tepig', 'Pignite', 'Emboar', 'Oshawott', 'Dewott', 'Samurott', 'Patrat', 'Watchog', 'Lillipup', 'Herdier', 'Stoutland', 'Purrloin', 'Liepard', 'Pansage', 'Simisage', 'Pansear', 'Simisear', 'Panpour', 'Simipour', 'Munna', 'Musharna', 'Pidove', 'Tranquill', 'Unfezant', 'Blitzle', 'Zebstrika', 'Roggenrola', 'Boldore', 'Gigalith', 'Woobat', 'Swoobat', 'Drilbur', 'Excadrill', 'Audino', 'Timburr', 'Gurdurr', 'Conkeldurr', 'Tympole', 'Palpitoad', 'Seismitoad', 'Throh', 'Sawk', 'Sewaddle', 'Swadloon', 'Leavanny', 'Venipede', 'Whirlipede', 'Scolipede', 'Cottonee', 'Whimsicott', 'Petilil', 'Lilligant', 'Basculin', 'Sandile', 'Krokorok', 'Krookodile', 'Darumaka', 'Darmanitan', 'Maractus', 'Dwebble', 'Crustle', 'Scraggy', 'Scrafty', 'Sigilyph', 'Yamask', 'Cofagrigus', 'Tirtouga', 'Carracosta', 'Archen', 'Archeops', 'Trubbish', 'Garbodor', 'Zorua', 'Zoroark', 'Minccino', 'Cinccino', 'Gothita', 'Gothorita', 'Gothitelle', 'Solosis', 'Duosion', 'Reuniclus', 'Ducklett', 'Swanna', 'Vanillite', 'Vanillish', 'Vanilluxe', 'Deerling', 'Sawsbuck', 'Emolga', 'Karrablast', 'Escavalier', 'Foongus', 'Amoonguss', 'Frillish', 'Jellicent', 'Alomomola', 'Joltik', 'Galvantula', 'Ferroseed', 'Ferrothorn', 'Klink', 'Klang', 'Klinklang', 'Tynamo', 'Eelektrik', 'Eelektross', 'Elgyem', 'Beheeyem', 'Litwick', 'Lampent', 'Chandelure', 'Axew', 'Fraxure', 'Haxorus', 'Cubchoo', 'Beartic', 'Cryogonal', 'Shelmet', 'Accelgor', 'Stunfisk', 'Mienfoo', 'Mienshao', 'Druddigon', 'Golett', 'Golurk', 'Pawniard', 'Bisharp', 'Bouffalant', 'Rufflet', 'Braviary', 'Vullaby', 'Mandibuzz', 'Heatmor', 'Durant', 'Deino', 'Zweilous', 'Hydreigon', 'Larvesta', 'Volcarona', 'Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Chespin', 'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Bunnelby', 'Diggersby', 'Fletchling', 'Fletchinder', 'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges', 'Skiddo', 'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aegislash', 'Spritzee', 'Aromatisse', 'Swirlix', 'Slurpuff', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'Helioptile', 'Heliolisk', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Sylveon', 'Hawlucha', 'Dedenne', 'Carbink', 'Goomy', 'Sliggoo', 'Goodra', 'Klefki', 'Phantump', 'Trevenant', 'Pumpkaboo', 'Gourgeist', 'Bergmite', 'Avalugg', 'Noibat', 'Noivern', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Rowlet', 'Dartrix', 'Decidueye', 'Litten', 'Torracat', 'Incineroar', 'Popplio', 'Brionne', 'Primarina', 'Pikipek', 'Trumbeak', 'Toucannon', 'Yungoos', 'Gumshoos', 'Grubbin', 'Charjabug', 'Vikavolt', 'Crabrawler', 'Crabominable', 'Oricorio', 'Cutiefly', 'Ribombee', 'Rockruff', 'Lycanroc', 'Wishiwashi', 'Mareanie', 'Toxapex', 'Mudbray', 'Mudsdale', 'Dewpider', 'Araquanid', 'Fomantis', 'Lurantis', 'Morelull', 'Shiinotic', 'Salandit', 'Salazzle', 'Stufful', 'Bewear', 'Bounsweet', 'Steenee', 'Tsareena', 'Comfey', 'Oranguru', 'Passimian', 'Wimpod', 'Golisopod', 'Sandygast', 'Palossand', 'Pyukumuku', 'Type: Null', 'Silvally', 'Minior', 'Komala', 'Turtonator', 'Togedemaru', 'Mimikyu', 'Bruxish', 'Drampa', 'Dhelmise', 'Jangmo-o', 'Hakamo-o', 'Kommo-o', 'Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Necrozma', 'Magearna', 'Marshadow', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon', 'Zeraora', 'Meltan', 'Melmetal', "Grookey", "Thwackey", "Rillaboom", "Scorbunny", "Raboot", "Cinderace", "Sobble", "Drizzile", "Inteleon", "Skwovet", "Greedent", "Rookidee", "Corvisquire", "Corviknight", "Blipbug", "Dottler", "Orbeetle", "Nickit", "Thievul", "Gossifleur", "Eldegoss", "Wooloo", "Dubwool", "Chewtle", "Drednaw", "Yamper", "Boltund", "Rolycoly", "Carkol", "Coalossal", "Applin", "Flapple", "Appletun", "Silicobra", "Sandaconda", "Cramorant", "Arrokuda", "Barraskewda", "Toxel", "Toxtricity", "Sizzlipede", "Centiskorch", "Clobbopus", "Grapploct", "Sinistea", "Polteageist", "Hatenna", "Hattrem", "Hatterene", "Impidimp", "Morgrem", "Grimmsnarl", "Obstagoon", "Perrserker", "Cursola", "Sirfetchd", "Mr.Rime", "Runerigus", "Milcery", "Alcremie", "Falinks", "Pincurchin", "Snom", "Frosmoth", "Stonjourner", "Eiscue", "Indeedee", "Morpeko", "Cufant", "Copperajah", "Dracozolt", "Arctozolt", "Dracovish", "Arctovish", "Duraludon", "Dreepy", "Drakloak", "Dragapult", "Zacian", "Zamazenta", "Eternatus", "Kubfu", "Urshifu", "Zarude", "Regieleki", "Regidrago", "Glastrier", "Spectrier", "Calyrex", "Wyrdeer", "Kleavor", "Ursaluna", "Basculegion", "Sneasler", "Overqwil", "Enamorus", "Sprigatito", "Floragato", "Meowscarada", "Fuecoco", "Crocalor", "Skeledirge", "Quaxly", "Quaxwell", "Quaquaval", "Lechonk", "Oinkologne", "Tarountula", "Spidops", "Nymble", "Lokix", "Pawmi", "Pawmo", "Pawmot", "Tandemaus", "Maushold", "Fidough", "Dachsbun", "Smoliv", "Dolliv", "Arboliva", "Squawkabilly", "Nacli", "Naclstack", "Garganacl", "Charcadet", "Armarouge", "Ceruledge", "Tadbulb", "Bellibolt", "Wattrel", "Kilowattrel", "Maschiff", "Mabosstiff", "Shroodle", "Grafaiai", "Bramblin", "Brambleghast", "Toedscool", "Toedscruel", "Klawf", "Capsakid", "Scovillain", "Rellor", "Rabsca", "Flittle", "Espathra", "Tinkatink", "Tinkatuff", "Tinkaton", "Wiglett", "Wugtrio", "Bombirdier", "Finizen", "Palafin", "Varoom", "Revavroom", "Cyclizar", "Orthworm", "Glimmet", "Glimmora", "Greavard", "Houndstone", "Flamigo", "Cetoddle", "Cetitan", "Veluza", "Dondozo", "Tatsugiri", "Annihilape", "Clodsire", "Farigiraf", "Dudunsparce", "Kingambit", "Great Tusk", "Scream Tail", "Brute Bonnet", "Flutter Mane", "Slither Wing", "Sandy Shocks", "Iron Treads", "Iron Bundle", "Iron Hands", "Iron Jugulis", "Iron Moth", "Iron Thorns", "Frigibax", "Arctibax", "Baxcalibur", "Gimmighoul", "Gholdengo", "Wo-Chien", "Chien-Pao", "Ting-Lu", "Chi-Yu", "Roaring Moon", "Iron Valiant", "Koraidon", "Miraidon", "Walking Wake", "Iron Leaves", "Dipplin", "Poltchageist", "Sinistcha", "Okidogi", "Munkidori", "Fezandipiti", "Ogerpon", "Archaludon", "Hydrapple", "Gouging Fire", "Raging Bolt", "Iron Boulder", "Iron Crown", "Terapagos", "Pecharunt"]
        name2num = {s: 1 + i for i, s in enumerate(names)}
        name2num["Pikachu-Alola"] = 25
        name2num["Urshifu-*"] = 892
        name2num["Zacian-Crowned"] = 888
        name2num["Indeedee-F"] = 876
        name2num["Kyurem-Black"] = 646
        return name2num[name]

    @property
    def _href(self) -> str:
        return self.url.split(".json", 1)[0]

    def _name_to_id(self, name) -> int:
        return {
            "mattmandaman": 0,
            "Mattmandaman": 0,
            "je64": 1,
            "mistermoscow": 2,
            "Mango Meloetta": 3,
            "Smokeydabearrr": 4,
            "smokeydabearrr": 4,
            "noli_cannoli10": 5,
        }[name]

    @property
    def _p1_id(self) -> str:
        return self._name_to_id(self._p1_name)

    @property
    def _p1_name(self) -> str:
        return self.data["players"][0]

    @property
    def _p1_pkmn_names(self) -> list[str]:
        matches = re.findall(r"\|poke\|p1\|.*?\|", self.data["log"])
        assert len(matches) == 6, f"Found {len(matches)} matches for pokemon names in logs"
        return [s.split("|poke|p1|", 1)[1].split("|", 1)[0].split(",", 1)[0] for s in matches]

    @property
    def _p1_pkmn_numbers(self) -> list[int]:
        return [self._creature_name_to_number(name) for name in self._p1_pkmn_names]

    @property
    def _p2_id(self) -> str:
        return self._name_to_id(self._p2_name)

    @property
    def _p2_name(self) -> str:
        return self.data["players"][1]

    @property
    def _p2_pkmn_names(self) -> list[str]:
        matches = re.findall(r"\|poke\|p2\|.*?\|", self.data["log"])
        assert len(matches) == 6, f"Found {len(matches)} matches for pokemon names in logs"
        return [s.split("|poke|p2|", 1)[1].split("|", 1)[0].split(",", 1)[0] for s in matches]

    @property
    def _p2_pkmn_numbers(self) -> list[int]:
        return [self._creature_name_to_number(name) for name in self._p2_pkmn_names]

    @property
    def _plose_id(self) -> int:
        return self._name_to_id(self._plose_name)

    @cached_property
    def _plose_name(self) -> str:
        if self._p1_name == self._pwin_name:
            return self._p2_name
        return self._p1_name

    @property
    def _pwin_id(self) -> int:
        return self._name_to_id(self._pwin_name)

    @cached_property
    def _pwin_name(self) -> str:
        return self.data["log"].split("|win|", 1)[1].split("\n", 1)[0]

    @cached_property
    def _upload_time(self) -> str:
        dt_utc = datetime.datetime.fromtimestamp(self.data["uploadtime"])
        dt_cal = dt_utc.astimezone(datetime.timezone(datetime.timedelta(hours=-8)))
        return dt_cal.strftime("%Y/%m/%d %H:%M")


main()
