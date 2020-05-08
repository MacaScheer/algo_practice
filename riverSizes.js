#!/usr/bin/env node
'use strict';

console.log("RIVER SIZES");

function riverSizes(matrix) {
    let sizes = [];
    let visited = {};
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            let dig = matrix[i][j];

            

                if (dig === 1) {
                    let size = dfs(i, j, 1)
                    sizes.push(size)
                }

             
        }
        return sizes
    }

    function dfs(i,j, count) {
        if (!visited[[i, j]]) {
            visited[[i, j]] = true
            
            
            }
                // should we just check/write visited in helper function?
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