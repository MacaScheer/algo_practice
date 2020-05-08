#!/usr/bin/env node
'use strict';



function testscope(array1, arr2) {
    
    for (let i = 0; i < array1.length; i++){
       cprint(array1[i])
    }

    function cprint(i) {
        console.log("i: ",i,)
        console.log(arr2[i])
    }
}
const a1 = [1, 2, 3, 4, 5, 6];
const a2 =
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];
// console.log(testscope(a1,a2))


console.log("RIVER SIZES");

function riverSizes(matrix) {
    let sizes = [];
    let visited = {};
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (!visited[[i, j]]) {
                visited[[i, j]] = true
                if (matrix[i][j] === 1) {
                    let size = dfs(i, j, visited, matrix)
                    sizes.push(size) 
                }
            }
        }
    }

    function dfs(i,j, visited, matrix, count = 0,) {
        if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[0].length - 1) return count;
        if (visited[[i, j]] === true) return count;
        visited[[i, j]] = true
        if (matrix[i][j] === 1) {
            // count++
            
            dfs(i - 1, j, visited, matrix, count++);
            dfs(i, j - 1, visited, matrix, count++);
            dfs(i, j + 1, visited, matrix, count++);
            dfs(i + 1, j, visited, matrix, count++);
                
        } else {
            return count;
        }
                // should we just check/write visited in helper function?
    }
        return sizes
}

const m1 = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];
console.log(riverSizes(m1), "should be [1,2,2,2,5]");

