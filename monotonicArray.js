#!/usr/bin/env node
'use strict'
// WRITE a function that takes in an array of integers and returns a boolean representing whether the array is monotonic, 
// i.e. if its elements from left to right, are entirely non-increasing or entirely non-decreasing

// const monotonicArray = function (arr) {
//     let el;
//     let prevEl;
//     let inc = false;
//     let dec = false;
//     for (let i = 1; i < arr.length; i++){
//         el = arr[i];
//         prevEl = arr[i - 1]
//         if (el > prevEl) {
//             inc = true;
//         } else if (el < prevEl) {
//             dec = true;
//         }
//     }
//     let val = inc ^ dec
//     return val === 1 ? true : false
// }


// function isMonotonic(array) {
//     if (array.length <= 1) return true
//     let el;
//     let prevEl;
//     let even = false
//     let inc = false;git
//     let dec = false;
//     for (let i = 1; i < array.length; i++) {
//         el = array[i];
//         prevEl = array[i - 1]
//         if (el > prevEl) {
//             inc = true;
//         } else if (el < prevEl) {
//             dec = true;
//         } else if (el === prevEl) {
//             even = true
//         }
//     }
//     // let val = inc ^ dec
//     if (inc && !dec) return true;
//     if (!inc && dec) return true;
//     if (even && !inc && !dec) return true
//     return false
// }








function isMonotonic(arr) {
    let inc = false;
    let dec = false;
    let even = false;
    let numDifference = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) inc = true;
        if (arr[i] === arr[i + 1]) even = true;
        if (arr[i] < arr[i + 1]) dec = true;
        if (inc && dec) return false;
    }
    return true
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]), "should be true");