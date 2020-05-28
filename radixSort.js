#!/usr/bin/env node
'use strict';

console.log("radix sort");


function radixSort(array) {
    const buckets = new Array(10).fill([]);
    // console.log(buckets[4])
    for (let i = 0; i < array.length; i++){
        let el = array[i]
        let last = lastDigit(el);
        buckets[last].push(el)
        console.log(last, el, buckets[last], buckets)
        
    }
    // console.log(buckets)
    let nextList = [];
    // while (buckets.length) {
    //     let el = buckets.shift();
    //     nextList.push(...el)
    // }
    // console.log(nextList)
}

function lastDigit(num) {
    return num % 10;
}

console.log(radixSort([74,5533,757,9764,4154,167,5196,2,5638,8363,2848]))