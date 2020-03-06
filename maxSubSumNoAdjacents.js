#!/usr/bin/env node
'use strict';

const maxSubsetSumNoAdjacent = function(array){
    // let maxLength = Math.ceil(array.length / 2)
    let nonAdjElementSums = [];
    let startIdx = 0;
    let nonAdjEls = [];
    while (startIdx < array.length) {
        let els1 = helper(array, startIdx)
        let els2 = helper2(array, startIdx)
        console.log(els1)
        console.log(els2)
        // nonAdjEls.push(...els1)
        // nonAdjEls.push(...els2)
        nonAdjElementSums.push(sumMer(els1), sumMer(els2))
        startIdx++
    }
    // console.log(nonAdjEls)
    // console.log("SUMS: ", nonAdjElementSums)

}
//helper function should return array of arrays of all non-consecutive array element-combinations
//increment is constant during inner loop
const helper = function (array, startIdx = 0) { //[0,1,2,3]
    let outerArr = []
    let increment = 2
    while (increment < array.length && startIdx + increment < array.length){
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

const sumMer = function (arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
//increment is incremented during inner loop so idxs could be [0,2,5] etc.
const helper2 = function (array, startIdx = 0) {
    let outerArr = [];
    let increment = 2;
    while (increment < array.length && startIdx + increment < array.length) {
        let idx2 = startIdx + increment;
        let innerArr = [array[startIdx]];

        while (idx2 < array.length) {
            innerArr.push(array[idx2]);
            increment++
            idx2 += increment;
        }
        outerArr.push(innerArr)
    }
    return outerArr
}

const helper3 = function (array) {
    let retArr = [];
    let idx1 = 0;
    while (idx1 < array.length / 2) {
        //change starting idx
        let innerArr = [];
        let i = 2;
        let inc = 2
        for (let i = idx1; i < array.length; i++) {
            let inc = (i%2 + 2);
            console.log("inc: ",inc)
            //change increment
            innerArr = [array[idx1]]
            let idx2 = idx1 + inc;
            while (idx2 < array.length) {
                //increment until end of array
                innerArr.push(array[idx2])
                idx2+=inc
            }
            retArr.push(innerArr)
        }
        idx1++
    }
    return retArr
}

const helper4 = function (array) {
    let returnArr = [];
    //changing increment loop
    for (let inc = 2; inc < array.length / 2; inc++){
        let startIdx = 0;
        
        //changing startIdx loop
        while (startIdx <= inc) {
            let endIdx = startIdx + inc;
            console.log("ENDIDX: ", endIdx)
            let innerArr = [array[startIdx]]
            
            //iterating over the array loop
            while (endIdx < array.length) {
                
                innerArr.push(array[endIdx])
                endIdx += inc
            }
            
            returnArr.push(innerArr)
            startIdx++
        }
    }
    return returnArr
}


// const modder = function (array) {
//     let retArr = [];
//     for (let i = 0; i < array.length; i++){
//         retArr.push(i%2 + 2)
//     }
//     return retArr
// }

// console.log(modder([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(helper4([0,1,2,3,4,5,6,7,8,9,10]))

//should not concatenate strings, but sum numbers
const sum = (a,b) => a += b
// console.log(helper2([75, 105, 120, 75, 90, 135]))
// console.log(helper([75, 105, 120, 75, 90, 135]))
// console.log(maxSubsetSumNoAdjacent([75,105,120,75,90,135])) //should be 330 [75, 120,135]

