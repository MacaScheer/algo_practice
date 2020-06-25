#!/usr/bin/env node
'use strict';

console.log(`Given a string representation of the first n digits of Pi  
            and a list of positive integers (all in string format 
            write a function that returns the smallest number of spaces 
            that can be added to the n digits of Pi such that all 
            resulting numbers are found in the list of integers.  
            If no number of spaces to be added exists such that all 
            resulting numbers are found in the list of integers, return -1`)
function numbersInPi(pi, numbers) {
    
}

console.log(numbersInPi(3141592653589793238462643383279, [314159265358979323846, 26433,8,3279,314159265,35897932384626433832,79]), "should be 2")