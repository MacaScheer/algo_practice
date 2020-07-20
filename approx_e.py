#!/usr/bin/env python3

import math
from debug import debug


math.factorial = debug(math.factorial)


def approximate_e(terms=18):
    return sum(1 / math.factorial(n) for n in range(terms))


approximate_e(5)
