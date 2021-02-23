#!/usr/bin/env node
'use strict';
/*
Approach:
Use a DFS method of traversing the matrix, 
to find all the horizontally/vertically adjacent 1's, 
with a conditional that accounts for if those groups of adjacent 1's
are tangent to the ends of the arrays. Also, store the indexes of the 
already visited "islands" so that they aren't traversed more than once,
for efficiency only, because the input matrix will be mutated and so 
won't be mutated more than once.
*/
function removeIsland(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log("i: ", i, "j: ", j)
            matrix = dfsIslands(matrix, i, j)
        }
    }
    return matrix;
}
function dfsIslands(matrix, x, y, islandCoords = []) {
    // console.log("islandCoords: ", islandCoords, "el: ", matrix[x][y])

    // if (visited[[x, y]] = true) {
    //     return matrix;
    // }
    // visited[[x, y]] = true;
    if (matrix[x][y] === 1) {
        if (x === matrix[x].length - 1 || y === matrix.length - 1) {
            islandCoords = [];
            return matrix;
        } else {
            islandCoords.push([x, y]);
            dfsIslands(matrix, x + 1, y, islandCoords);
            dfsIslands(matrix, x, y + 1, islandCoords);
        }
    } else {
        matrix = changeToZeros(islandCoords, matrix);
        return matrix;
    }
    return matrix
}

function changeToZeros(array, matrix) {
    console.log("array: ", array)
    for (let coord of array) {
        console.log("coord: ", coord)
        matrix[coord[0]][coord[1]] = 0;
    }
    return matrix
}
/*WRONG APPROACH, CANNOT CHANGE matrix until reach end of island to confirm it doesn't 
touch the edge 
traverse and store the 1's horizontally and vertically, storing the (x,y) in an object
if it makes it to an edge x === matrix[x].length - 1 or y === matrix.length - 1, and it's a 1,
then don't change any of the 1's to 0's and empty the object. If it doesn't make it to an edge, then
go back through the object storing that islands (x,y)'s and change them all to 0's
*/



let mat = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
];
console.log(removeIsland(mat));