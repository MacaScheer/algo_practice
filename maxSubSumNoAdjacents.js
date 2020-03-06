#!/usr/bin/env node
'use strict';


//helper function should return array of arrays of all non-consecutive array element-combinations
//increment is constant during inner loop
    // const helper = function (array, startIdx = 0) { //[0,1,2,3]
    //     let outerArr = []
    //     let increment = 2
    //     while (increment < array.length && startIdx + increment < array.length){
    //         let idx2 = startIdx + increment;
    //         let innerArr = [array[startIdx]]

    //         while (idx2 < array.length) {
    //                 innerArr.push(array[idx2])
    //                 idx2+=increment
    //         }

    //         increment++
    //         outerArr.push(innerArr)
    //     }
    //     return outerArr
    // }

//increment is incremented during inner loop so idxs could be [0,2,5] etc.


// const helper3 = function (array) {
//     let retArr = [];
//     let idx1 = 0;
//     while (idx1 < array.length / 2) {
//         //change starting idx
//         let innerArr = [];
//         let i = 2;
//         let inc = 2
//         for (let i = idx1; i < array.length; i++) {
//             let inc = (i%2 + 2);
//             console.log("inc: ",inc)
//             //change increment
//             innerArr = [array[idx1]]
//             let idx2 = idx1 + inc;
//             while (idx2 < array.length) {
//                 //increment until end of array
//                 innerArr.push(array[idx2])
//                 idx2+=inc
//             }
//             retArr.push(innerArr)
//         }
//         idx1++
//     }
//     return retArr
// }
const maxSubsetSumNoAdjacent = function (array) {
    let sums = [];
    let nonAdjEls = arrayHelper(array);
    nonAdjEls.push(...helper2(array))
    console.log(nonAdjEls)
    for (let i = 0; i < nonAdjEls.length; i++){
        sums.push(sumMer(nonAdjEls[i]))
    }
    let max = -Infinity;
    for (let j = 0; j < sums.length; j++){
        if (sums[j] > max) max = sums[j]
    }
    return max
}
const arrayHelper = function (array) {
    let returnArr = [];
    for (let inc = 2; inc < array.length / 2; inc++){
        let startIdx = 0;
        while (startIdx <= inc) {
            let endIdx = startIdx + inc;
            let innerArr = [array[startIdx]]
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

const sumMer = function (arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// console.log(modder([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(helper4([0,1,2,3,4,5,6,7,8,9,10]))
// console.log(helper2([75, 105, 120, 75, 90, 135]))
// console.log(helper([75, 105, 120, 75, 90, 135]))
// console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])) //should be 330 [75, 120,135]
// console.log(maxSubsetSumNoAdjacent([1,15,3])) //should be 15


 const perms = (array) => {
     if (array.length === 1) return array;
     let returnArr = [];
     let first = array.shift();

}

//creates max sums array then picks the biggest sum
const maxSums = array => {
    if(array.length === 0) return 0
    let maxArray = [array[0]]
        maxArray.push(findmax(array.slice(0,2)))
    
    for (let i = 2; i < array.length; i++){
        maxArray.push(findmax([maxArray[i - 1], array[i]+maxArray[i - 2]]))
    }
    return findmax(maxArray)
}

const findmax = array => {
    if (array.length === 1) return array[0]
    let max = -Infinity;
    for (let i = 0; i < array.length; i++){
        if(array[i] > max) max = array[i]
    }
    return max
}

console.log(maxSums([75, 105, 120, 75, 90, 135])) //should be 330 [75, 120,135]
console.log(maxSums([1, 15, 3]))

// console.log(findmax([1, 15, 3]))
// console.log(findmax([75, 105, 120, 75, 90, 135]))