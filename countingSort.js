#!/usr/bin/env node
'use strict';
console.log("COUNTING SORT: \n PSEUDO CODE: (first for strictly positive integers) \n we need to know the largest integer in the array and allocate an index for every possible element in the array")


function countingSort(arr, max) {
    if (arr.length === 0) return [];
    let output = [];
    const countingArr = new Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++){
        let el = arr[i];
        console.log(el)
        countingArr[el]++
    }
    for (let i = 0; i < countingArr.length; i++){
        let el2 = countingArr[i];
        if(el2 !== 0) output.push(i)
    }
    console.log(output)
}

console.log(countingSort([20,19,17,18,13,14,15,1,2,4,3,6,5,5,8,9,10,10],20))