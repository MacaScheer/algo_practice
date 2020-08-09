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


let disks2 = [
    [3, 3, 4],
    [2, 1, 2],
    [3, 2, 3],
    [2, 2, 8],
    [2, 3, 4],
    [5, 5, 6],
    [1, 2, 1],
    [4, 4, 5],
    [1, 1, 4],
    [2, 2, 3]
  ]
let idealOutput2 = [
    [[2, 2, 3], [3, 3, 4], [4, 4, 5], [5, 5, 6]]
  ]
/* 
CORE LOGIC:
currentDisk = array[i] for 0 <= i < array.length
otherDisk = array[j] for 0 <= j < i

if(otherDisk[0] < currentDisk[0] && otherDisk[1] < currentDisk[1] && otherDisk[2] < currentDisk[2]){
    heights[i] = Math.max(heights[i], currentDisk[2] + heights[j])
}
*/

function diskStacking(disks) {
    let sortedByHeight = sortByHeight(disks)
    let heights = sortedByHeight.map(d => d[2]);
    /* [1,2,3,4,5,8] iterate through, at each one, 
    look to the left to see if there are any disks 
    that could legally preceed it */
    let pointers = {};
    for (let i = 1; i < heights.length; i++){
        let currDisk = sortedByHeight[i];
        for (let j = 0; j < i; j++){
            let otherDisk = sortedByHeight[j];
            if (compareDisks(otherDisk, currDisk)) {
                let h1 = heights[i];
                let h2 = currDisk[2] + heights[j];
                if (h2 > h1) {
                    pointers[h2] = j
                    heights[i] = h2
                }
            }
        }
    }
     return maxArr(pointers, heights, sortedByHeight)
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

function compareDisks(otherDisk, currDisk) {
    return (otherDisk[0] < currDisk[0] && otherDisk[1] < currDisk[1] && otherDisk[2] < currDisk[2]) 
}

function maxArr(pointers, heights, disks) {
    /* Follow path through the pointers object, which indicates, at each maxHeight, 
    what the previous disks index that added to make that maxheight,
    similar to the 'previous' object in djikstras, a list of each height value pointing to the previous
    height's index that had been added to create the maxHeight at that index
    */
    let finalArr = [];
    let maxHeight = Math.max(...heights);
    let heightsIdx = heights.indexOf(maxHeight)
    finalArr.unshift(disks[heightsIdx]);
    let curr = maxHeight; 
    while (pointers[curr] !== undefined) {
        let nextHeightIdx = parseInt(pointers[curr])
        let nextDisk = disks[nextHeightIdx]; 
        finalArr.unshift(nextDisk);
        curr = heights[nextHeightIdx]
    }
        return finalArr
}

console.log(" \nTEST 1 => \nMy Code: ",diskStacking(disks1), "\nSolution: ", idealOutput, "\n");
console.log("TEST 2 => \nMy Code: ",diskStacking(disks2), "\nSolution: ", idealOutput2, "\n");

console.log(" \nTEST 1 => \nMy Code2: ",diskStacking2(disks1), "\nSolution: ", idealOutput, "\n");
console.log("TEST 2 => \nMy Code2: ",diskStacking2(disks2), "\nSolution: ", idealOutput2, "\n");



function diskStacking2(disks) {
    disks = sortByHeight(disks);
    let heights = disks.map(d => d[2]);
    let sequences = disks.map(d => null)
    let maxHeightIdx = 0;
    for (let i = 1; i < disks.length; i++){
        let currDisk = disks[i];
        for (let j = 0; j < i; j++){
            let otherDisk = disks[j]
            if (compareDisks(otherDisk, currDisk)) {
                if (heights[i] < currDisk[2] + heights[j]) {
                    heights[i] = currDisk[2] + heights[j];
                    sequences[i] = j
                }
            }
        }
        if (heights[i] >= heights[maxHeightIdx]) {
            maxHeightIdx = i
        }
    }
    return buildSequence(disks, sequences, maxHeightIdx)
}

function buildSequence(disks, sequences, currIdx) {
    let seq = [];
    while (currIdx !== null) {
        seq.unshift(disks[currIdx])
        currIdx = sequences[currIdx]
    }
    console.log("sequences: ", sequences)
    return seq
}


// console.log(sortByHeight(disks1))

// function checkLegal(stack) {
//     // NOT HELPFUL? returns the portion of the stack that is legal
//     let legal = [stack[0]];
//     for (let i = 1; i < stack.length; i++){
//         let disk1 = legal[legal.length - 1]
//         let disk2 = stack[i]
//         if (disk1[0] < disk2[0] && disk1[1] < disk2[1] && disk1[2] < disk2[2]) {
//             legal.push(disk2)
//         }
//     }
//     return legal
// }

// function tallestPossible(base,disks) {
//     // using a certain base disk, create the tallest possible stack
//     let height = base[2]
//     let tallestStack = [];
//     let possibleNext = NextTallestHelper(base, disks);
//     for (let i = 0; i < possibleNext.length; i++){
//         let p = possibleNext[i]
//     }
// }

// function NextTallestHelper(base, disks) {
//     // return an array of next possible disks legal to stack on the base
//     let arr = [];
//     for (let i = 0; i < disks.length; i++){
//         let d = disks[i]
//         if (d === base) continue;
//         if (base[0] < d[0] && base[1] < d[1] && base[2] < d[2]) {
//             arr.push(d)
//         }
//     }
//     return sortByHeight(arr)
// }