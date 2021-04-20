#!/usr/bin/env node
'use strict';


function bucketSort(arr, max) {
    let result = [];
    let count = new Array(max + 1).fill(0)
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        count[el]++;
    }
    for (let j = 0; j < count.length; j++) {
        let el2 = count[j];
        while (el2 > 0) {
            result.push(j)
            el2--
        }
    }
    return result
}

console.log(bucketSort([122, 344, 2, 66, 0, 12, 2, 5, 6, 77, 12, 26, 999], 999));