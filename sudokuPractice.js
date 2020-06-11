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
const ys = [[0,1,2],[3,4,5],[6,7,8]]
for (let i = 0; i < 3; i++){   // i = 1  
    for (let x = (3 * i); x < ((3 * i) + 3); x++){ //x = 3 // 4 // 5 
        for (let j = 0; j < 3; j++){    //j = 0 // 1 // 2
            let subsub = ys[i];  //[3,4,5]                       
            let y = subsub[j] //y = 3 // 4 // 5
            numsObj[array[x][y]]++
            console.log(`coordinate: (${x}, ${y})`)
        }
    }
    if (!checkObj(numsObj)) return false
    numsObj = restObj(numsObj)
}
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

const indices = [
    [1, 2, 3, 1, 2, 3, 1, 2, 3],
    [3, 4, 5, 3, 4, 5, 3, 4, 5],
    [6, 7, 8, 6, 7, 8, 6, 7, 8],
    
]

// for (let i = 0; i < 9; i++){
//     // let start = Math.floor(i / 3);
//     // let arr = [];
//     let start = Math.floor(i / 3) * 3;
//     for (let x = 0; x < 3; x++){
//         // let subArr = []
//         for (let y = 0; y < 3; y++){
//             // console.log(board[j + start][x + start])
//             // console.log("start: ", start, " x:", x," y:",y, "coord:", [x + start, y + start])
//             // console.log(`coordinate: (${j + start}, ${x + start})`)
//         }
//         // arr.push(subArr)
//     }
//     // console.log(arr)
// }

// const ys = [[0,1,2],[3,4,5],[6,7,8]]
// for (let i = 0; i < 3; i++){   // i = 1  
//     for (let x = (3 * i); x < ((3 * i) + 3); x++){ //x = 3 // 4 // 5 
//         for (let j = 0; j < 3; j++){    //j = 0 // 1 // 2
//             let subsub = ys[i];  //[3,4,5]                       
//             let y = subsub[j] //y = 3 // 4 // 5
//             numsObj[array[x][y]]++
//             console.log(`coordinate: (${x}, ${y})`)
//         }
//     }
//     if (!checkObj(numsObj)) return false
//     numsObj = restObj(numsObj)
// }