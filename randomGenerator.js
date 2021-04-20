#!/usr/bin/env node
'use strict';


/*
Given an integer n and a list of integers l, 
write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).
*/
function randomGenerator(n, list) {

}

// console.log(randomGenerator(9, [12,4,56,3,6,7,23,44]))

/*
Given an array of integers, 
find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
*/

function missingPositiveInteger(integers) {
    let lowest = 1;
    let missingPos = Infinity;
    let visited = {};
    for (let i = 0; i < integers.length; i++) {
        let int = integers[i];
        if (int <= 0 || !visited[int]) continue
        visited[int] = true;
        if (int >= lowest && int - lowest > 1) { // but it could be 1 if there isn't 1 in the array
            if (!visited[int + 1] && int + 1 < missingPos) missingPos = int + 1;
        }
        console.log(lowest, int + 1)
    }

}
function findLowest(integers) {
    let lowest = Infinity;
    let idx, int, i;
    for (i = 0; i < integers.length; i++) {
        int = integers[i];
        if (int < lowest && int > 0) {
            idx = i;
            lowest = int;
        }
    }
    return [int, i];
}
console.log(missingPositiveInteger([3, 4, -1, 1]), " should give 2");
console.log(missingPositiveInteger([1, 2, 3, 4, 5, 6]), " should give 7");

// console.log(missingPositiveInteger([1, 2, 0]), " should give 3")

/*
iterate through, of the positives: find lowest and second lowest
when finding the second lowest, if the diff is only 1,
set lowest as the second lowest and keep looking for the third lowest,
and so on..
if you reach end of array, add one to the nth lowest (non-negative) number

*/