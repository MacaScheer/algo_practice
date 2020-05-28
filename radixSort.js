#!/usr/bin/env node
'use strict';

console.log("radix sort");


function radixSort(array) {
    let maxDigit = getMaxDigits(array)
  
    for (let i = 1; i <= maxDigit; i++){
       array = sortByDigit(i, array)
    }
    return array
}

function getDigit(num, digit) {
    let newDigit = 10 ** digit
    let wholeNum = num % newDigit
    return Math.floor(wholeNum / 10 ** (digit - 1))
}
// console.log(getDigit(54321, 3))

function getMaxDigits(array) {
    let maxNum = Math.max(...array);
    let numString = maxNum.toString();
    return numString.length
}

function sortByDigit(digit, array) {
     const buckets = new Array(10);
    for (let i = 0; i < array.length; i++){
        let el = array[i]
        let dig = getDigit(el, digit);
        if (buckets[dig] instanceof Array) {
            buckets[dig].push(el)
        } else {
            buckets[dig] = [el]
        }
    }
    let nextList = [];
    while (buckets.length) {
        let el = buckets.shift();
        if(el)nextList.push(...el)
    }
    // console.log(nextList)
    return nextList
}

console.log(radixSort([74,5533,757,9764,4154,167,5196,2,5638,8363,2848]))