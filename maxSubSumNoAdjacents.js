#!/usr/bin/env node
'use strict';

const maxSubsetSumNoAdjacent = function(array){
    // let maxLength = Math.ceil(array.length / 2)
    let nonAdjElementSums = [];
    let startIdx = 0;
    let nonAdjEls = [];
    while (startIdx < array.length) {
        
        nonAdjEls.push(...helper(array, startIdx))
        nonAdjEls.push(...helper2(array, startIdx))
        // nonAdjElementSums.push(helper(array, startIdx).reduce(sum))
        startIdx++
    }
    console.log(nonAdjEls)
    // console.log("SUMS: ", nonAdjElementSums)

}
//helper function should return array of arrays of all non-consecutive array element-combinations
//increment is constant during inner loop
const helper = function (array, startIdx = 0) { //[0,1,2,3]
    let outerArr = []
    let increment = 2
    while (increment < array.length){
        let idx2 = startIdx + increment;
        let innerArr = [array[startIdx]]

        while (idx2 < array.length) {
                innerArr.push(array[idx2])
                idx2+=increment
        }

        increment++
        outerArr.push(innerArr)
    }
    return outerArr
}
//increment is incremented during inner loop so idxs could be [0,2,5] etc.
const helper2 = function (array, startIdx = 0) {
    let outerArr = [];
    let increment = 2;
    while (increment < array.length) {
        let idx2 = startIdx + increment;
        let innerArr = [array[startIdx]];

        while (idx2 < array.length) {
            console.log("INCREMENT: ", increment, "  idx2: ", idx2, "  innerArr: ", innerArr)
            innerArr.push(array[idx2]);
            idx2 += increment;
            increment++
        }
        outerArr.push(innerArr)
    }
    return outerArr
}


//should not concatenate strings, but sum numbers
const sum = (a,b) => a += b
console.log(helper2([75, 105, 120, 75, 90, 135]))
// console.log(maxSubsetSumNoAdjacent([75,105,120,75,90,135])) //should be 330 [75, 120,135]