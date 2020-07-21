#!/usr/bin/env python3

# import functools

# OR

from operator import mul
from operator import add
from itertools import accumulate
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


"""COMPARING ACCUMULATE AND REDUCE: accumulate() v reduce()"""

# like reduce(function[,iterable]) accumulate(iterable[, function])
"""accumulate accepts FIRST: one required argument, 
iterable, which can be any python iterable.
SECOND optional argument, func needs to be a function (or callable object)
that takes two arguments and returns a single value
accumulate returns an iterator. Each item in this iterator will
be the accumulated result of the computation that fun performs.
The default computation is sum. If you don's supply a function to accumulate(),
then each item in the resulting iterator will be the accumulated
sum of the previous items in iterable plus the item in hand

"""

# from functools import reduce

numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

print ("list(accumulate(numbers3)): ", list(accumulate(numbers3)))
print("reduce(add, numbers3): ", reduce(add, numbers3))
"""since accumulate() returns an iterator, you need to call list()
to consume the iterator and get a list object as an output 

If you supply a two-argument function to the func argument of accumulate()
then the items in the resulting iterator will be the accumulated result
of the computation performed by func

"""


numbers4 = [232, 45, 6, 7, 33, 675]
print (list(accumulate(numbers4, mul)))

print (reduce(mul, numbers4))
"""mul is multiplication"""
"""
Use a dedicated function to solve use cases for Python’s reduce() whenever possible. 
Functions such as sum(), all(), any(), max(), min(), len(), math.prod(), 
and so on will make your code faster and more readable, maintainable, and Pythonic.

Avoid complex user-defined functions when using reduce(). 
These kinds of functions can make your code difficult to read and understand. 
You can use an explicit and readable for loop instead.

Avoid complex lambda functions when using reduce(). 
They can also make your code unreadable and confusing.

"""