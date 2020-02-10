#!/usr/bin/env node

"use strict"

function threeNumberSum(array, targetSum) {
    let sortedArr = radixSort(array)
    let sumsArr = [];
    let cur = 0;
    let i, j;
    while (cur < array.length) {
        let l = sortedArr[i]
        let r = sortedArr[j]
        let currNum = sortedArr[cur] 
        let currSum = currNum + l + r;
        if (i > j) cur += 1
        if (currSum < targetSum) {
            r--
        }
        if (currSum > targetSum) {
            l++
        }
        if (currSumm === targetSum) {
            sumsArr.push([sortedArr[cur], l, r])
        }
    }
return sumsArr
}

function radixSort(arr) {
  if (!Array.isArray(arr)) return null;
  let maxDigits = getMaxDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigitFrom(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

const getDigitFrom = (num, place) =>
  Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

const getIntLength = num =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

console.log(threeNumberSum([1,2,3], 6), "should equal: [[1,2,3]]")
console.log(threeNumberSum([1,2,3], 7), "should equal: []")
console.log(threeNumberSum([12,3,1,2,-6,5,-8,6], 0), "should equal: [[-8,2,6], [-8,3,5], [-6,1,5]]")
