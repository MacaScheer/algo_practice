#!/usr/bin/env node
'use strict';

function threeNumberSum(array, target) {
    let arr = mergeSort(array);
    let triplets = [];
    for (let i = 0; i < array.length - 1; i++){
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let currSum = arr[i] + arr[left] + arr[right];
            if (currSum === target) {
                triplets.push([arr[i],arr[left],arr[right]])
                left++; right--;
            } else if (currSum < target) {
                left++
            } else if (currSum > target) {
                right--
            }
        }
    }
    return triplets
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    let piv = array.shift();
    let left = array.filter(el => el <= piv);
    let right = array.filter(el => el > piv);
    let sLeft = mergeSort(left);
    let sRight = mergeSort(right);
    return sLeft.concat([piv]).concat(sRight)
}