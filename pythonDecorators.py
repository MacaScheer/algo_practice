from my_decorator import do_twice


def my_decorator(func):
    def wrapper():
        print ("something happening before func called")
        func()
        print ("Something happening after func is called")
    return wrapper


@my_decorator  # same as, say_whee = my_decorator(say_whee)
def say_whee():
    print("Wheee!")


def do_twice(func):
    def wrapper_do_twice():
        func()
        func()
    return wrapper_do_twice

# You can name your inner function whatever you want, and a generic name like
# wrapper() is usually ok.


# @do_twice
# def say_whee():
#     print("Whee!")


@do_twice
def greet(name):
    print(f"Hello {name}")


greet("World")
