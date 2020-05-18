#!/usr/bin/env node
'use strict';

console.log(`search sorted matrix: given a two-dimensional array of distinct integers and a target integer, ${"\n"}Write a function that returns the indices or row/column of the target number.${"\n"}Each row in the matrix is sorted and each column in the matrix is sorted. ${"\n"}The matrix does not necessarily have equal height and width.`);
console.log(`PSEUDOCODE: ${"\n"}I plan on using a sort of 2D binary search method on the matrix so that the search time will be logarithmic`)
function searchInSortedMatrix(matrix, target) {
    let midColIdx = Math.floor(matrix[0].length / 2);
    let midRowIdx = Math.floor(matrix.length / 2);
    let midEle = matrix[midRowIdx][midColIdx];
    let smallerMatrix;
    if (midEle > target) {
        smallerMatrix = createSmallerMatrix("LARGE", matrix, midRowIdx, midColIdx);
        let returnVal = searchInSortedMatrix(smallerMatrix, target);
        return returnVal !== [-1,-1] ? [returnVal[0] + midRowIdx, returnVal[1] + midColIdx] : [-1,-1]
    } else if (midEle < target) {
        return smallerMatrix("SMALL", matrix, midRowIdx, midColIdx);
    } else return [midRowIdx, midColIdx]
}

const mat = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99,100,103,106,128,1004]
]

console.log(searchInSortedMatrix(mat, 44))