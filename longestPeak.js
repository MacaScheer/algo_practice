#! /usr/bin/env node

'use strict';

console.log("LONGEST PEAK ALGORITHM")
const longestPeak = function (array) {
    // at least 3 integers required
    // must be strictly increasing until the tip is reached, after which integers must be strictly decreasing
    // must be increasing until it stays strictly decreasing
    //difference would be positive
    let maxPeak = 0;
    for (let i = 0; i < array.length; i++){
        let count = peak(i, array)
        if (count >= 3 && count > maxPeak) {
            maxPeak = count;
        }
    }
    return maxPeak
}


const peak = function (idx, array){
    let el = array[idx];
    let idxF = idx;
    let idxB = idx - 1;
    let count = 0;
    while (idxF < array.length && array[idxF] > array[idxF + 1]) {
        el = array[idxF];
        idxF++
        count++;
        // console.log("FRWDR: ", el, "  idxF: ", idxF, "  array.length: ", array.length)
    }
    while (idxB >= 0 && array[idxB] < array[idxB + 1]) {
        // console.log("BKWRD: ", el)

        el = array[idxB];
        idxB--
        count++;
    }
    return count + 1;
}

console.log(longestPeak([1,2,3,3,4,0,10,6,5,-1,-3,2,3]))
// console.log(peak(1, [0,10,6,5,-1,-3]))