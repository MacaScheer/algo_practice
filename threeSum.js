#!/usr/bin/env node

"use strict"

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let piv = arr.shift();
    let left = arr.filter(el => el <= piv)
    let right = arr.filter(el => el > piv)
    let sLeft = mergeSort(left);
    let sRight = mergeSort(right)
    return sLeft.concat([piv]).concat(sRight)
}


// function threeNumberSum(array, targetSum) {
//     let sortedArr = mergeSort(array)
//     console.log("sortedArr: ", sortedArr)
//     let sumsArr = [];
//     let cur = 0;
//     let i = cur + 1;
//     let j = array.length - 1;
//     while (cur < array.length) {
//         let l = sortedArr[i]
//         let r = sortedArr[j]
//         let currNum = sortedArr[cur] 
//         let currSum = currNum + l + r;
//         console.log("i: ", i, "  j: ", j)
//         console.log("currNum: ", currNum, "  l:",l, "   r:", r, "  currSum: ", currSum,)
//         if (i > j) {
//             cur += 1;
//             i = cur + 1;
//             j = sortedArr.length - 1

//         }
//         if (currSum < targetSum) {
//             i++
//             continue;
//         }
//         if (currSum > targetSum) {
//             j--
//             continue;
//         }
//         if (currSum === targetSum) {
//             sumsArr.push([sortedArr[cur], l, r])
//             j--;
//             i++
//         }
//     }
// return sumsArr
// }

function threeNumberSum(array, targetSum) {
    let arr = mergeSort(array);
    let triplets = [];
    for (let i = 0; i < arr.length; i++) {
        let left = i + 1;
        let right = arr.length - 1
        let cur = arr[i]
        console.log("arr: ", arr, "cur: ",cur,"  left: ", left, "  right: ", right)
        while (left < right) {
            let currSum = cur + arr[left] + arr[right]
            if (currSum === targetSum) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++
                right--
            } else if (currSum < targetSum) {
                left ++
            } else if (currSum > targetSum) {
                right --
            }
        }
        return triplets
    }

}


// console.log(threeNumberSum([12,3,1,2,-6,5,-8,6], 0))
console.log(threeNumberSum([1, 2, 3], 6))


// console.log(threeNumberSum([1,2,3], 6), "should equal: [[1,2,3]]")
// console.log(threeNumberSum([1,2,3], 7), "should equal: []")
// console.log(threeNumberSum([12,3,1,2,-6,5,-8,6], 0), "should equal: [[-8,2,6], [-8,3,5], [-6,1,5]]")
