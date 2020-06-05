#!/usr/bin/env node
'use strict';
console.log("Four Number Sum");

function twoCombs(array, target) {
    const nums = {};
    for (const num of array) {
        const potentialMatch = target - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num]
        } else {
            nums[num] = true
        }
    }
    // return nums
    return [];
}

function twoSums(array) {
    let output = {};
    for (let i = 0; i < array.length; i++){
        let firstEl = array[i];
        for (let j = i + 1; j < array.length; j++){
            let secondEl = array[j];
            output[firstEl + secondEl] = [firstEl, secondEl];
        }
    }
    return output;
}

// const fourNumberSum = (array, target) => {
const fourNumberSum = function(array, target){
    const output = [];
    console.log(twoSums(array))
    let twos = twoSums(array);
    let sumsArr = Object.keys(twos);
    for (const sum in sumsArr) {
        const potentialMatch = target - sum;
        if (potentialMatch in sumsArr) {
            output.push([...sumsArr[sum], ...sumsArr[potentialMatch]])
        }
    }
    return output
}

const sum = (a, b) => {
    return a + b
}


// console.log(twoSums([7,6,4,-1,1,2], 8))
console.log(fourNumberSum([7,6,4,-1,1,2], 16))

