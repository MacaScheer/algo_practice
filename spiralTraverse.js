#!/usr/bin/env node
'use strict';

console.log("SPIRAL TRAVERSE")


const spiralTraverse = function (matrix) {
    





}

let matrix1 = [      // /\
    [1, 2, 3, 4],    //  |
    [12, 13, 14, 5], //  n
    [11, 16, 15, 6], //  |
    [10, 9, 8, 7],   //  \/
];     //<-m->
// (0, 0-m-1), (1 - (n-1), m-1)


const firstCycle = function (matrix) {
    
    let m = matrix.length;
    let n = matrix[0].length;
    let coordsArr = [];
    // across top l-r
    for (let i = 0; i < m; i++){
        coordsArr.push(matrix[0][i])
    }
    // down rightSide
    for (let i = 1; i < n; i++){
        coordsArr.push(matrix[i][m - 1])
    }
    // across bottom r-l
    for (let i = m - 2; i >= 0; i--){
        coordsArr.push(matrix[n-1][i])
    }
    // up leftSide
    for (let i = n - 2; i > 0; i--){
        coordsArr.push(matrix[i][0])
    }
    console.log(coordsArr)
}

console.log(firstCycle(matrix1))
    // 0,0      0,1     0,2,    0,m-1   across
//        1,m-1,    2,m-1,    n-1,m-1  down
//         n-1,m-2   n-1,m-3   n-1,0   across
//         n-2,0     n-3,0     n-4,0   up
//                                      first circle
// console.log(spiralTraverse(matrix1))