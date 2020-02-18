#!/usr/bin/env node
'use strict';

// This problem was asked by LinkedIn.

// A wall consists of several rows of bricks of various integer lengths and uniform height. Your goal is to find a vertical line going from the top to the bottom of the wall that cuts through the fewest number of bricks. If the line goes through the edge between two bricks, this does not count as a cut.

// For example, suppose the input is as follows, where values in each row represent the lengths of bricks in that row:

// [[3, 5, 1, 1],
//  [2, 3, 3, 2],
//  [5, 5],
//  [4, 4, 2],
//  [1, 3, 3, 3],
//  [1, 1, 6, 1, 1]]
// The best we can we do here is to draw a line after the eighth brick, which will only require cutting through the bricks in the third and fifth row.

// Given an input consisting of brick lengths for each row such as the one above, return the fewest number of bricks that must be cut to create a vertical line.

// PSEUDO CODE:
// create graph of vertices of the wall
// excluding 10, select whichever vertice has the most graph entries

function brickWall(array) {
    let graph = {}
    let sum;
    for (let i = 0; i < array.length; i++){
        let row = array[i];
        sum = 0;
        for (let j = 0; j < row.length; j++){
            let vertice = row[j];
            sum += vertice;
            if (!graph[sum]) {
                graph[sum] = 1
            } else {
                graph[sum] += 1
            }
        }
    }
    console.log(graph)
}

let arr1 = [
    [3, 5, 1, 1],
    [2, 3, 3, 2],
    [5, 5],
    [4, 4, 2],
    [1, 3, 3, 3],
    [1, 1, 6, 1, 1]
]

console.log(brickWall(arr1))