#!/usr/bin/env node
'use strict';

/*
Given a non-empty array of arrays where each subarray holds three integers representing a disk.
Integers denote width, depth, height => [width, depth, height]
GOAL: 
Stack up disks to maximize total height of the stack.
A disk must have strictly smaller width, depth and height than any other disk below it

FUNCTION:
returns an array of disks in the final stack, starting with top disk and ending with bottom disk
cannot rotate disks

*/
// SAMPLE INPUT:
// [width, depth, height]

let disks1 = [[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 3, 1], [4, 4, 5]];
let idealOutput = [[2, 1, 2], [3, 2, 3], [4, 4, 5]];

function diskStacking(disks) {
    let finalArr = [];
    for (let i = 0; i < disks.length; i++){

    }
}

function checkLegal(stack) {
    let legal = [stack[0]];
    for (let i = 1; i < stack.length; i++){
        let disk1 = legal[legal.length - 1]
        let disk2 = stack[i]
        if (disk1[0] < disk2[0] && disk1[1] < disk2[1] && disk1[2] < disk2[2]) {
            legal.push(disk2)
        }
    }
    return legal
}

function tallestPossible(disks) {
    
}
console.log(diskStacking(disks1), " should match: ", idealOutput);