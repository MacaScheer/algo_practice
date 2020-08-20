#!/usr/bin/env node
'use strict';



/* WALK THRU OF PREVIOUS



*/

// You are given one ship with size 3, the ship can be horizontal or vertical.Find where on the grid the ship is at.n x n grid

// [
//     [0, 0, x, x],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],  
//   ]


// APPROACH:
// function for finding the first X in the grid, then run a helper function that does a DFS on neighboring indexes,
//     also, memoizing indexes already visited, to cut down on search time.


// * /


// function battleShip(grid) {

// }

/* 
Given an array of distinct positive integers 
representing coin denominations and a single non-negative integer n representing a target amount of money
*/