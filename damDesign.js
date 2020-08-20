#!/usr/bin/env node
'use strict';
console.log("DAM DESIGN:\n Given the placement of a number of walls, and their heights, \n determine the maximum height of a mud segment that can be built. If none, return 0.\n One unit width of the gap between walls will contain one segment of packed mud\n the height of mud in a segment cannot exceed 1 unit more than an adjacent wall of mud segment");
/*
assuming the outer most segments have to be cement i.e. first and last pillars
find the max concrete segment
a segment can only be 1 unit greater than the segment to its left and right
*/

function damDesign(wallPositions, wallHeights) {
    
}

let wPs = [1, 2, 4, 7];
let wHts = [4, 6, 8, 11];

console.log(damDesign(wPs,wHts), " should be ")