#!/usr/bin/env node
'use strict';

// console.log(`Given a string representation of the first n digits of Pi  
//             and a list of positive integers (all in string format 
//             write a function that returns the smallest number of spaces 
//             that can be added to the n digits of Pi such that all 
//             resulting numbers are found in the list of integers.  
//             If no number of spaces to be added exists such that all 
//             resulting numbers are found in the list of integers, return -1`)
// console.log(`Big O of space is going to be O(n + m) space 
//             Big O of time is going to be O(n**3 + m) because
//             of the slicing and the nested loop of all prefixes`)
// HASH TABLE USED
// OR IS IT JUST AN OBJECT?

function numbersInPi(pi, numbers) {
    // build hash table, just an object..
    // let numbersTable = {}
    // for (let number in numbers) {
    //     numbersTable[number] = true
    // }
    let numbersTable = numbers.reduce((o, key) => Object.assign(o, { [key]: true }), {})
    let minSpaces = getMinSpaces(pi, numbersTable, {}, 0)
    return minSpaces === Infinity ? -1 : minSpaces
}

function getMinSpaces(pi, numbersTable, cache, idx) {
    // return negative one because you have already added one in the recursive call, assuming there will be a place for another space
    if (idx === pi.length) return -1
    if (idx in cache) return cache[idx];
    let minSpaces = Infinity;
    for (let i = idx; i <= pi.length; i++){
        let prefix = pi.slice(idx, i + 1)
        if (prefix in numbersTable) {
            let minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i + 1)
            minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1)
            // let suffix = pi.slice(i)
        }
    }
    cache[idx] = minSpaces
    return cache[idx]
}

console.log(numbersInPi("3141592653589793238462643383279", ["314159265358979323846", "26433", "8", "3279", "314159265", "35897932384626433832", "79"]), "should be 2")
console.log(numbersInPi("3141592653589793238462643383279",["3141592653589793238462643383279"]))