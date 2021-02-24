#!/usr/bin/env node
'use strict';

/* Write a function that takes in a non-empty array of integers
and returns the greatest sum that can be generated from a strictly-increasing
subsequence in the array as well as an array of the numbers in the subsequence

start iterating thru array, save first el as max sum and store in an array,
if next el is increasing push it to the array and add to maxSum,
in the example: 
maxSum = 10
if you pass over a number that increases, then decreases, need to still save
the possibility of the number before the number that is followed by a decreasing number.
for example:
10, 70
then 20, where the subsequence might start over, need to save the 10 that came before the decrease
20 is less than 70 but greater than 10. Need to check if the array saved so far contains any numbers 
that are less than the start of the next subsequence.

*/

function maxIncreasingSubsequence(array) {

    let returnArray = [];
    let arr, currMaxSum;
    let maxSum = array[0];
    for (let i = 1; i < array.length; i++) {
        [arr, currMaxSum] = countForward(array[i - 1], i, array)

        if (currMaxSum > maxSum) {
            maxSum = currMaxSum;
            // before replacing the arr, check if there is a number that is less than the start of the new array, 
            // and unshift that into the start of the new array. Export this functionality to another function..
            returnArray = combineArrays(returnArray, arr);
            maxSum = returnArray.reduce((a, b) => a + b)
        }
        // let a = array[i - 1]
        // let b = array[i];

        // if (b > a) {
        //     returnArray.push(b)
        //     if (b > maxSum) {
        //         maxSum += b;
        //     }

        // }
    }
    return [maxSum, returnArray]
}

function combineArrays(arr1, arr2) {
    let firstEl = arr2[0];
    let subseq = [];
    for (let i = 0; i < arr1.length; i++) {
        let el = arr1[i];
        if (el < firstEl) {
            subseq.push(el);
        }
    }
    return subseq.concat(arr2);
}

function countForward(num, i, array) {
    let maxSubSeqArr = [num];
    let sum = num;
    while (i < array.length) {
        if (array[i] > num) {
            sum += array[i];
            maxSubSeqArr.push(array[i]);
            num = array[i];
        }
        console.log("i: ", i, " maxSubSeqArr: ", maxSubSeqArr, " sum: ", sum, " num: ", num)
        i++;
    }
    return [maxSubSeqArr, sum]
}

// console.log(combineArrays([10, 70], [20, 30, 50]))
console.log(maxIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]), "should return [110, [10,20,30,50]]");