#!/usr/bin/env node
'use strict'; 

// MAC CODE

// If either array is empty, return an empty array
// Create holder array that will hold the longest subsequence found yet,
// Take array A, take the first element and push into a temporary array, scan array B for that element,
// If not there, move to second element of A, and empty holder array
// If it is there, take B index, look at the next element in B, compared to the next element in A.
// If they match push next element into holder array

// WRONG



// NEW APPROACH:
// We first element of A and scan B for that element
// If found, we push into results array, and slice from B,
//     Move to second element in A, and repeat the process.
// If we don’t find an element, we skip to next element in A.
// Given one empty array, return an empty array

// const intersectionOfArrays = function (arr1, arr2) {
    
    
//     if (arr1.length === 0 || arr2.length === 0) return [];
//     let arrA = arr1.length >= arr2.length ? arr1 : arr2;
//     let arrB = arr1.length < arr2.length ? arr1 : arr2;

//     let results = []
//     for (let i = 0; i < arrA.length; i++) {  //[9, 4, 8, 9, 4]
//         let a1 = arrA[i];
//         let idx = arrB.indexOf(a1)
//         // console.log(arrB)
        
//         if (idx >= 0) {
//             results.push(arrB[idx]);
//             arrB = remove(idx, arrB)  ///MISSED THIS REASSIGNMENT, instead just called remove, which doesn't change array in place
//         }
//         if(arrB.length === 0) return results;
//     }
//     return results;
// }
// const remove = function (idx, array) {

//     let firstHalf = array.slice(0, idx)
//     let secondHalf = array.slice(idx + 1);
//     return firstHalf.concat(secondHalf)

// }


const intersectionOfArrays = function (arr1, arr2) {
    let objA = {}
    let results = [];
    arr1.forEach(el => {
        if (objA[el]) {
            objA[el] += 1
        } else {
            objA[el] = 1
        }
    });
    for (let i = 0; i < arr2.length; i++){
        let b = arr2[i];
        if (objA[b] >= 1) {
            results.push(b)
            objA[b] -= 1
        }
    }
return results
}


// WORSTCASE O(n): O(n*m)



let arrA = [1, 2, 2, 1]
let arrB = [2, 2]

// console.log(intersectionOfArrays(arrA, arrB))
arrA = [4, 9, 5];
arrB = [9, 4, 8, 9, 4];
// console.log(intersectionOfArrays(arrA, arrB))


// WORST CASE TIME COMPLEXITY: O(n ** 2 * m)
// SPACE COMPLEXITY: O(n) where n is the smaller array


// OPTIMIZED: USE HASH



// GARVIN CODE: