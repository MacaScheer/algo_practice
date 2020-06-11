#!/usr/bin/env node
'use strict';

console.log("Sudoku Practice");

const sudokuTest = function (array) {
    // object keeping track of num occurences
    let numsObj = restObj({});
    // row test
    for (let i = 0; i < array.length; i++){
        let row = array[i];
        for (let i = 0; i < row.length; i++){
            numsObj[row[i]]++
        }
        if(!checkObj(numsObj)) return false
        numsObj = resetObj(numsObj)
    }
    // column test
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            numsObj[array[j][i]]++
        }
        if (!checkObj(numsObj)) return false;
        numsObj = resetObj(numsObj)
    }
    // grid test
}

const checkObj = function (object) {
    for (let i = 1; i < 10; i++){
        if (!obj[i] || obj[i] !== 1) {
            return false;
        }
    }
    return true;
}

const resetObj = function (object) {
     for (let i = 1; i < 10; i++){
        object[i] = 0;
     }
    return object
}


const board = [
    [8, 2, 7, 1, 5, 4, 3, 9, 6],
    [9, 6, 5, 3, 2, 7, 1, 4, 8],
    [3, 4, 1, 6, 8, 9, 7, 5, 2],
    [5, 9, 3, 4, 6, 8, 2, 7, 1],
    [4, 7, 2, 5, 1, 3, 6, 8, 9],
    [6, 1, 8, 9, 7, 2, 4, 3, 5],
    [7, 8, 6, 2, 3, 5, 9, 1, 4],
    [1, 5, 4, 7, 9, 6, 8, 2, 3],
    [2, 3, 9, 8, 4, 1, 5, 6, 7]
];

    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board.length; j++){
            console.log(board[j][i])
        }
    }