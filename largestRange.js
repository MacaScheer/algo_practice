#!/usr/bin/env node
'use strict';
/*
takes in an array of integers and returns an array of length two, 
representing the largest range of integers contained in that array.
A range of numbers is defined as a set of numbers that come right after each other
in the set of real integers. For instance, 
the output array [2,6] represents the range {2,3,4,5,6}, which is of length 5.
Numbers don't need to be sorted or adjacent in the input array in order to form a range
APPROACH:
It's necessary to iterate over the integers at least once,
and to keep track as each integer as possibly the start of a new range.
Build an object that has each integer as a key, representing the starting integer,
with its value being an array, with the following integers that are contiguous

For each number in the integer array, 
check if it is one bigger than any of the integers already in the object
If it isn't, then add it in as another possible starting integer

To check, we need to check if there is a number that precedes the current one, and further,
that it's array for that key, has an integer in the last place of its array that is the very number
before the integer we're checking.

To build this, we need to build an object with the integers as the keys, each with an array as its value, that would contain
all of the numbers that directly follow that key in sequence
*/
function largestRange(integers) {
    let obj = {};
    // let startInt;
    for (let i = 0; i < integers.length; i++){
        let int = integers[i];
        for (let key in obj) {
            if (key < int) {
                if (lastElOfValueArray(obj[key]) === int - 1) {
                    obj[key].push(int)
                }
            } else {
                obj[int] = []
            }

        }

        
    }
    console.log(obj)
    return findLongestArr(obj)
}

console.log(largestRange([1,11,3,0,15,5,2,4,10,7,12,6]), "should be [0,7], because {0,1,2,3,4,5,6,7} is present in the input array")