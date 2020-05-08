#!/usr/bin/env node
'use strict';

console.log("RIVER SIZES");

function riverSizes(matrix) {
    let sizes = [];
    let visited = {};
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            let dig = matrix[i][j];

            if (!visited[[i, j]]) {

                if (dig === 1) {
                    let size = dfs(i, j, 1)
                    sizes.push(size)
                }

                visited[[i,j]] = true
            }
        }
        return sizes
    }

    function dfs(i,j, count) {
        
    }
}


function dfs(idx, matrix) { }


const m1 = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];
console.log(riverSizes(m1), "should be [1,2,2,2,5]");