from itertools import combinations
from random import seed, shuffle
from typing import List, Tuple

import numpy as np


def main() -> None:
    seed(348495023)
    n_shuffle = 4000
    names = [
        "Arod",
        "James",
        "Jesse",
        "Matt",
        "Nolan",
        "Stephen",
    ]
    combos = list(combinations(names, 4))
    best_combos = [combo for combo in combos]
    best_var = mean_variance_diff(combos)
    print(best_var)
    for _ in range(n_shuffle):
        shuffle(combos)
        var = mean_variance_diff(combos)
        if var > best_var:
            best_var = var
            best_combos = [combo for combo in combos]
    print(best_var)
    print_combos(best_combos)


def average_variance(combos: List[Tuple[str]]) -> float:
    name2idx = {}
    for i, combo in enumerate(combos):
        for name in combo:
            if name not in name2idx:
                name2idx[name] = []
            name2idx[name].append(i)
    return float(np.mean([np.var(idx) for _, idx in name2idx.items()]))

from scipy.stats import kstest

def mean_variance_diff(combos: List[Tuple[str]]) -> float:
    name2idx = {}
    for i, combo in enumerate(combos):
        for name in combo:
            if name not in name2idx:
                name2idx[name] = []
            name2idx[name].append(i / len(combos))
    return float(np.mean([kstest(idx, "uniform")[1] for _, idx in name2idx.items()]))


def print_combos(combos: List[Tuple[str]]) -> None:
    names = sorted(list(set([name for combo in combos for name in combo])))
    name2idx = {name: [] for name in names}
    for i, combo in enumerate(combos):
        for name in combo:
            name2idx[name].append(str(i + 1))
        for name in set(names) - set(combo):
            name2idx[name].append(" " * len(str(i + 1)))

    for i, combo in enumerate(combos):
        print(f"Tournament {i + 1}: {', '.join(combo)}")
    print()
    k = max([len(name) for name in name2idx.keys()])
    for name, idx in name2idx.items():
        print(f"{front_pad(name, k)}: {', '.join(idx)}")


def front_pad(name: str, k: int) -> str:
    l = len(name)
    if l >= k:
        return name
    return " " * (k - l) + name


main()
