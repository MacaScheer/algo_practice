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
// 0,0      0,1     0,2,    0,m-1   across
//        1,m-1,    2,m-1,    n-1,m-1  down
//         n-1,m-2   n-1,m-3   n-1,0   across
//         n-2,0     n-3,0     n-4,0   up
//                                      first circle
console.log(spiralTraverse(matrix1))