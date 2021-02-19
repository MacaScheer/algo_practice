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
    let visited = {};
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (visited[i][j]) continue;
            dfsIslands(matrix, i, j, visited)
        }

    }
    return matrix;
}
function dfsIslands(matrix, x, y, visited) {
    if (visited[x, y] ||
        matrix[x][y] === 0 ||
        x > matrix[x].length - 1 ||
        y > matrix.length - 1) continue;
    matrix[x][y] = 0;
    visited[x, y] = true;
    dfsIslands(matrix, x + 1, y, visited);
    dfsIslands(matrix, x, y + 1, visited);
}

let mat = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
];
console.log(removeIsland(mat));