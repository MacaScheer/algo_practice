#!/usr/bin/env node
'use strict';

/*Given n numbers, find the greatest common denominator between them.

For example, given the numbers [42, 56, 14], return 14 */


function greatestCommonDenominator(arr) {
    let min = Math.min(...arr);
    let i = 2;
    let greatestComm = 1;
    while (i <= min) {
        if (isRoundQuotient(arr, i)) {
            greatestComm = i;
        }
        i++;
    }
    return greatestComm;
}

function isRoundQuotient(arr, quot) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (el % quot !== 0) {
            return false;
        }
    }
    return true;
}

console.log(greatestCommonDenominator([42, 56, 14]), " is 14");