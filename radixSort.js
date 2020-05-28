#!/usr/bin/env node
'use strict';

console.log("radix sort");


function radixSort(array) {
    const buckets = new Array(10)
    for (let i = 0; i < array.length; i++){
        let last = lastDigit(array[i]);
        buckets[last] = array[i];
    }
    console.log(buckets)
}

function lasDigit(num) {
    return num % 10;
}

console.log(radixSort([74,5533,757,9764,4154,167,5196,2,5638,8363,2848]))