#!/usr/bin/env node
'use strict'
/*
Given a string of parentheses, write a function to compute 
the minimum number of parentheses to be removed to make the 
string valid (i.e. each open parenthesis is eventually closed).
For example, given the string "()())()", you should return 1. 
Given the string ")(", you should return 2, since we must remove all of them.

use a stack while iterating through the string. 
for open parens push to stack, 
for closed, pop from the stack
return the length of the stack
if the stack is empty and a closed parens is added,
add it to the stack
*/

function numParenthesesToRemove(string) {
    let stack = [];
    for (let i = 0; i < string.length; i++) {
        let char = string[i];

    }
}

function riverSizes(matrix) {

    let visited = {};
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            let el = matrix[i][j];
            if (el === 1) {

            }
        }
    }

}

/*
[
    [1,1,0,0],
    [0,1,0,0],
    [1,1,_,0], 
    [1,1,1,0]
]
*/
function dfsRivers(matrix, x, y, riverSize = 1, visited = {}) {
    // [2,3]
    visited[[x, y]] = true;
    console.log("visited, x, y", visited, x, y)
    while (x < matrix.length - 1 && y < matrix[0].length - 1) {
        if (matrix[x][y + 1] === 1) {
            riverSize++;
            dfsRivers(matrix, x, y + 1, riverSize, visited)
        } else if (matrix[x + 1][y] === 1) {
            riverSize++;
            dfsRivers(matrix, x + 1, y, riverSize, visited)
        }
    }
    return riverSize
}

let m1 = [
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 1, 1, 0]
]
let m2 = [
    [1, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 0]
]

// 

function rivers(matrix) {
    const sizes = [];
    const visited = matrix.map(arr => arr.map(val => false));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (visited[i][j]) continue;
            dfs(i, j, matrix, visited, sizes);
        }
    }
    return sizes
}

function dfs(i, j, matrix, visited, sizes) {
    let currRiverSize = 0;
    const nodes = [[i, j]]
    while (nodes.length) {
        let currNode = nodes.pop();
        i = currNode[0];
        j = currNode[1];
        if (visited[i][j]) continue;
        visited[i][j] = true;
        if (matrix[i][j] === 0) continue;
        currRiverSize++;
        let unvisited = getUnvisited(i, j, matrix, visited);
        nodes.push(...unvisited);
    }
    if (currRiverSize > 0) sizes.push(currRiverSize);
}

function getUnvisited(i, j, matrix, visited) {
    let unvisited = [];
    if (i > 0 && !visited[i - 1][j]) unvisited.push([i - 1, j]);
    if (i < matrix.length - 1 && !visited[i + 1][j]) unvisited.push([i + 1, j]);
    if (j > 0 && !visited[i][j - 1]) unvisited.push([i, j - 1]);
    if (j < matrix[i].length - 1 && !visited[i][j + 1]) unvisited.push([i, j + 1]);
    return unvisited;
}

console.log(rivers(m1))