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
            let dig = matrix[i][j];

            
            if (!visited[[i, j]]) {
                visited[[i, j]] = true
                let size = dfs(i, j, visited)
                sizes.push(size)
            }
                
                

             
        }
        return sizes
    }

    function dfs(i,j, count = 0, visited) {
        visited[[i, j]] = true
        if (matrix[i][j] === 1) {
            dfs(i - 1, j, count++);
            dfs(i + 1, j, count++)
            dfs(i, j - 1, count++);
            dfs(i, j + 1, count++);
                
        } else {
            return count;
        }
                // should we just check/write visited in helper function?
    }
}

const m1 = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];
console.log(riverSizes(m1), "should be [1,2,2,2,5]");

