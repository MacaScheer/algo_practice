#!/usr/bin/env python3

# import functools

# OR

from functools import reduce

# functools.reduce(function, iterable[, initializer])

# Roughyl equivalent to:

"""
def reduce(function, iterable, initializer=None):
    it = iter(iterable)
    if initializer is None:
        value = next(it)
    else:
        value = initializer
    for element in it:
        value = function(value, element)
    return value
"""

"""reduce() works by applying a two-argument function 
to the items of iterable in a loop from left to right, 
ultimately reducing iterable to a single cumulative value.

iterable will accept lists, tuples, range objects, generators, iterators, sets, dictionary keys and values"""


def my_add(a, b):
    result = a + b
    print (f"{a} + {b} = {result}")
    return result


numbers = [0, 1, 2, 3, 4, 5, 6, 7, 88]
# reduced = reduce(my_add, numbers)
# print(reduced)

su = reduce(lambda a, b: a + b, numbers)
print(su)


"""lambda is a small anonymous function. 
A lambda function can take any number of arguments, 
but can only have one expression

lambda arguments : expression
"""


def x(a): return a + 10


print(x(5))
