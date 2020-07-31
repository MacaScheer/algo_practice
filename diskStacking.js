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
    let sortedByHeight = sortByHeight(disks)
    let heights = sortedByHeight.map(d => d[2]);
    console.log("sortedByHeight: ", sortedByHeight)
    /* [1,2,3,4,5,8] iterate through, at each one, 
    look to the left to see if there are any disks 
    that could legally preceed it */
    let maxStack = [];
    let maxHeight = 0;
    for (let i = 1; i < heights.length; i++){
        let currStack = [];
        let currHeight = heights[i]
        let currDisk = sortedByHeight[i];
        console.log("currDisk: ", currDisk)
        for (let j = 0; j < i; j++){
            let otherDisk = sortedByHeight[j];
            console.log(" otherDisk: ", otherDisk, compareDisks(otherDisk, currDisk))
            if (compareDisks(otherDisk, currDisk)) {
                currStack.push(currDisk, otherDisk)
                currHeight += heights[j]
                console.log("currStack: ", currStack, " currheight: ", currHeight)
            }

        }
        if (currHeight > maxHeight) {
            maxHeight = currHeight;
            maxStack = currStack
        }
        // console.log("currStack: ", currStack)
    }
}

function compareDisks(d1, d2) {
    return (d1[0] > d2[0] && d1[1] > d2[1] && d1[2] < d2[2]) 
}

function sortByHeight(disks) {
    if (disks.length <= 1) return disks;
    let piv = disks.shift()
    let left = disks.filter(d => d[2] <= piv[2]);
    let right = disks.filter(d => d[2] > piv[2]);
    let sortedLeft = sortByHeight(left);
    let sortedRight = sortByHeight(right);
    return sortedLeft.concat([piv]).concat(sortedRight)
}

// console.log(sortByHeight(disks1))

function checkLegal(stack) {
    // NOT HELPFUL? returns the portion of the stack that is legal
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

function tallestPossible(base,disks) {
    // using a certain base disk, create the tallest possible stack
    let height = base[2]
    let tallestStack = [];
    let possibleNext = NextTallestHelper(base, disks);
    for (let i = 0; i < possibleNext.length; i++){
        let p = possibleNext[i]
    }
}

function NextTallestHelper(base, disks) {
    // return an array of next possible disks legal to stack on the base
    let arr = [];
    for (let i = 0; i < disks.length; i++){
        let d = disks[i]
        if (d === base) continue;
        if (base[0] < d[0] && base[1] < d[1] && base[2] < d[2]) {
            arr.push(d)
        }
    }
    return sortByHeight(arr)
}
console.log(diskStacking(disks1), " should match: ", idealOutput);