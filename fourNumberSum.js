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
    // console.log(twoSums(array))
    let twos = twoSums(array);
    // let sumsArr = Object.keys(twos);
    for (const sum in twos) {
        const potentialMatch = target - sum;
        // console.log("sum: ", sum, " potentialMatch: ",potentialMatch)
        if (potentialMatch in twos) {
            let subArr = [...twos[sum], ...twos[potentialMatch]]
            subArr = radixSort(subArr)
            if (!output.includes(subArr)) {
                // console.log("NEW ARRAY:", subArr, " output:", output)
                output.push(subArr)
            }
        }
    }
    return output
}


// function sorter(array) {
//     if (array.length <= 1) return array;
//     let piv = array.shift();
//     let left = array.filter(el => el <= piv);
//     let right = array.filter(el => el > piv);
//     let sLeft = sorter(left);
//     let sRight = sorter(right);
//     return sLeft.concat([piv]).concat(sRight)
// }



function radixSort(array) {
    let maxDigit = getMaxDigits(array)
  
    for (let i = 1; i <= maxDigit; i++){
       array = sortByDigit(i, array)
    }
    return array
}

function getDigit(num, digit) {
    let newDigit = 10 ** digit
    let wholeNum = num % newDigit
    return Math.floor(wholeNum / 10 ** (digit - 1))
}
// console.log(getDigit(54321, 3))

function getMaxDigits(array) {
    let maxNum = Math.max(...array);
    let numString = maxNum.toString();
    return numString.length
}

function sortByDigit(digit, array) {
     const buckets = new Array(10);
    for (let i = 0; i < array.length; i++){
        let el = array[i]
        let dig = getDigit(el, digit);
        if (buckets[dig] instanceof Array) {
            buckets[dig].push(el)
        } else {
            buckets[dig] = [el]
        }
    }
    let nextList = [];
    while (buckets.length) {
        let el = buckets.shift();
        if(el)nextList.push(...el)
    }
    // console.log(nextList)
    return nextList
}


const sum = (a, b) => {
    return a + b
}


// const fourNumberSum = function (array, target) {
    
// }

// console.log(twoSums([7,6,4,-1,1,2], 8))
console.log(fourNumberSum([7,6,4,-1,1,2], 16))
