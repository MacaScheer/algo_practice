#!/usr/bin/env node
'use strict';
console.log("DAM DESIGN:\n Given the placement of a number of walls, and their heights, \n determine the maximum height of a mud segment that can be built. If none, return 0.\n One unit width of the gap between walls will contain one segment of packed mud\n the height of mud in a segment cannot exceed 1 unit more than an adjacent wall of mud segment");
/*
assuming the outer most segments have to be cement i.e. first and last pillars
find the max concrete segment
a segment can only be 1 unit greater than the segment to its left and right
returns the max height of a mud segment
find the second highest cement block,
if there is a wide gap of length n, the mud to the farthest can be n greater than the lower, unless the cement to its right is less than that
*/

function damDesign(wallPositions, wallHeights) {
    let secondHighest = findSecondHighest(wallPositions, wallHeights)
    console.log(secondHighest)
}

function findSecondHighest(wallPositions, wallHeights) {
    let highest = [0,0]; 
    let secondHighest = [0,0];
    // let wallPos = null;
    for (let i = 0; i < wallHeights.length; i++){
        let height = wallHeights[i];
        console.log("height: ",height, " secondHighest[0]: ",secondHighest[0])
        if (height > secondHighest[0]) {
            if (height > highest[0]) {
                console.log("highest[0]: ",highest[0])
                highest = [height, wallPositions[i]];
                console.log("highest: ", highest)
            } else {
                secondHighest = [height, wallPositions[i]];
            }
        }
    }
    return secondHighest
}

let wPs = [1, 2, 4, 7];
let wHts = [4, 6, 8, 11];

console.log(damDesign(wPs,wHts))