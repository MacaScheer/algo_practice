#!/usr/bin/env node
'use strict';

console.log(`search sorted matrix: given a two-dimensional array of distinct integers and a target integer, ${"\n"}Write a function that returns the indices or row/column of the target number.${"\n"}Each row in the matrix is sorted and each column in the matrix is sorted. ${"\n"}The matrix does not necessarily have equal height and width.`);
console.log(`PSEUDOCODE: ${"\n"}I plan on using a sort of 2D binary search method on the matrix so that the search time will be logarithmic`)
console.log(`CANNOT eliminate a quarter of the matrix on each call, because there isn't a way to tell (if the target is greater/less than the number in the row/col ${"\n"}being looked at, that the number may still be in the same row and not on the next column`)
console.log("\n");
console.log(`NEW APPROACH: compare the top right element to the target. ${"\n"}We know that the number that is smaller than that number but greater than its neighbor to the left is down and left one${"\n"}We should be searching in a diagonal direction through the matrix, possibly shrinking the array from the top right, down/left`)
function searchInSortedMatrix(matrix, target) {
    let midColIdx = Math.floor(matrix[0].length / 2);
    let midRowIdx = Math.floor(matrix.length / 2);
    let midEle = matrix[midRowIdx][midColIdx];
    let smallerMatrix;
    if (midEle > target) {
        smallerMatrix = createSmallerMatrix("DOWNRIGHT", matrix, midRowIdx, midColIdx);
        let returnVal = searchInSortedMatrix(smallerMatrix, target);
        return returnVal !== [-1,-1] ? [returnVal[0] + midRowIdx + 1, returnVal[1] + midColIdx + 1] : [-1,-1]
    } else if (midEle < target) {
        smallerMatrix = createSmallerMatrix("UPLEFT", matrix, midRowIdx, midColIdx);
        return searchInSortedMatrix(smallerMatrix, target)
    } else return [midRowIdx, midColIdx]
}

// function createSmallerMatrix(whichWay, matrix, row, col) {
//     let newMatrix = [];
//     switch (whichWay) {
//         case "DOWNRIGHT":
//             for (let i = row; i < matrix.length; i++){
//               newMatrix.push(matrix[i].slice(col))
//             }
//             break;
//             case "UPLEFT":
//             for (let j = 0; j <= row; j++){
//                 newMatrix.push(matrix[j].slice(0, col + 1))
//             }
//             break;
//     }
//     return newMatrix
// }

// function lookAtHalves(matrix) {
//     if (matrix.length === 0) return
//     console.log(matrix)
//     let midColIdx = Math.floor(matrix[0].length / 2)
//     console.log("IDX: ", midColIdx)
//     let smaller = createSmallerMatrix("LEFT", matrix, midColIdx);
//     return lookAtHalves(smaller)
// }
function createSmallerMatrix(whichWay, matrix, col) {
    let newMatrix = [];
    switch (whichWay) {
        case "RIGHT":
            for (let i = 0; i < matrix.length; i++){
              newMatrix.push(matrix[i].slice(col))
            }
            break;
            case "LEFT":
            for (let j = 0; j < matrix.length; j++){
                newMatrix.push(matrix[j].slice(0, col + 1))
            }
            break;
    }
    return newMatrix
}
const mat = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99,100,103,106,128,1004]
]

// console.log(searchInSortedMatrix(mat, 44))

// console.log(createSmallerMatrix("LEFT", mat, 2))

// console.log(lookAtHalves(mat))

function searchSortedMatrix(matrix, target) {
    let topRight = matrix[0][matrix[0].length - 1]
    let bool = topRight > target;
    let bool2 = topRight === target;
    if (bool && !bool2) {
        
    } else if (!bool && !bool2) {
        
    } else {
        
    }
}

function crawlDiagonal(matrix, row, col) {
    
}

console.log(searchSortedMatrix(mat, 44))