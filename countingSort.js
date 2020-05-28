#!/usr/bin/env node
'use strict';
console.log("COUNTING SORT: \n PSEUDO CODE: (first for strictly positive integers) \n we need to know the largest integer in the array and allocate an index for every possible element in the array")


function countingSort(arr, max) {
    if (arr.length === 0) return [];
    const countingArr = new Array(max);
    for (let i = 0; i < max; i++){
        countingArr[i] = 0;
    }
    console.log(countingArr)
}

console.log(countingSort([90,1,2,3,4,54,6,5,44,66,56,45,34,44,23,12,34,12],90))