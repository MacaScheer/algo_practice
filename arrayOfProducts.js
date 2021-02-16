#!/usr/bin/env node
'use strict'

function arrayOfProducts(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let prod = multOtherEls(arr, i);
        output.push(prod);
    }
    return output;
}
function multOtherEls(arr, idx) {
    let prod = 1;
    for (let i = 0; i < arr.length; i++) {
        if (i === idx) continue;
        prod *= arr[i]
    }
    return prod;
}
const samp = [5, 1, 4, 2];
console.log(arrayOfProducts(samp), "should be [8,40,10,20]");