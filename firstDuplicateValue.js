#!/usr/bin/env node
'use strict'

/*
Given an array of integers between 1 and n inclusive, where n is the length of
the array, write a function that returns the first integer that appears more 
than once (when read from left to right)
*/

function firstDuplicateValue(arr) {
    let vals = {};
    for (let i = 0; i < arr.length; i++) {
        if (vals[arr[i]]) {
            return arr[i];
        } else {
            vals[arr[i]] = true;
        }
    }
    return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]), "should be 2")