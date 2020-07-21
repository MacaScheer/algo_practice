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
# print (min_value)

max_value, *rest = numbers2
for num in rest:
    if num > max_value:
        max_value = num
# print(max_value)


def my_min_func(a, b):
    return a if a < b else b


def my_max_func(a, b):
    return a if a > b else b


print ("my_min_func: ", reduce(my_max_func, numbers2))
print("my_max_func: ", reduce(my_min_func, numbers2))

print ("Lambda:")
print ("min: ", reduce(lambda a, b: a if a < b else b, numbers2))
print ("max: ", reduce(lambda a, b: a if a > b else b, numbers2))


# CHECK ALL TRUE:

def check_all_true(iterable):
    for item in iterable:
        if not item:
            return False
    return True


print(check_all_true([1, 1, 1, 1, 1]))


def both_true(a, b):
    return bool(a and b)


print(reduce(both_true, [1, 1, 1, 1, 1, 1]))
print (reduce(both_true, [], True))

print(reduce(lambda a, b: bool(a and b), [0, 1, 0, 0, 0, 0]))
print (reduce(lambda a, b: bool(a and b), [1, 1, 1, 1, 2, 1]))
print(reduce(lambda a, b: bool(a and b), [], True))

"""Built-in all function will return out of the loop 
when it evaluates a falsey value instead of 
finishing iterating throught the iterable"""
print(all([1, 1, 1, 1, 1, 2, 0]))


def check_any_true(iterable):
    for item in iterable:
        if item:
            return True
    return False


def any_true(a, b):
    return bool(a or b)


print(any_true, numbers2)

"""AS WITH all() there is also any()"""

print(reduce(lambda a, b: bool(a or b), [0, 0, 1, 0, 1]))
print(any([0, 0, 0, 1, 1, 1, 1]))
