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


"""FIND MINIMUM AND MAXIMUM"""
numbers2 = [3, 5, 2, 4, 7, 1]
min_value, *rest = numbers2
# iterable unpacking operator => * tp expand numbers2 into 2 variables
# min_value gets the first value, and rest is a list with the rest of the original list
for num in rest:
    if num < min_value:
        min_value = num
print (min_value)

max_value, *rest = numbers2
for num in rest:
    if num > max_value:
        max_value = num
print(max_value)
