#!/usr/bin/env node
'use strict';

console.log("radix sort");


function radixSort(array) {
    const buckets = new Array(10);
    for (let i = 0; i < array.length; i++){
        let el = array[i]
        let last = lastDigit(el);
        if (buckets[last] instanceof Array) {
            buckets[last].push(el)
        } else {
            buckets[last] = [el]
        } 
    }
    let nextList = [];
    while (buckets.length) {
        let el = buckets.shift();
        if(el)nextList.push(...el)
    }
    console.log(nextList)
}

function lastDigit(num) {
    return num % 10;
}

console.log(radixSort([74,5533,757,9764,4154,167,5196,2,5638,8363,2848]))