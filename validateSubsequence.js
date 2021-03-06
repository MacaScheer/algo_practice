#!/usr/bin/env node
'use strict';
console.log("VALIDATE SUBSEQUENCE");
console.log("given two non-empty arrays of integers, \n write a function that determines whether the second array is a subsequence of the first one \n a subsequence of an array is a set of numbers that aren't necessarily adjacent in the array \n but are in the same order as they appear in the array")
console.log("PSEUDOCODE: brute force approach: \n iterate through the subsequnce array and not the index of each element as it appears in the larger array \n compare the indices two by two to make sure their order is kept, \n only need two extra spaces in memory but O(n) time")
// function validateSubsequence(array, sequence) {
//     let idx1, idx2, el1, el2;
//     for (let i = 1; i < sequence.length; i+=2){
//         el2 = sequence[i];
//         el1 = sequence[i - 1]
//         idx1 = array.indexOf(el1);
//         idx2 = array.indexOf(el2);
//         console.log("el1:",el1," el2:", el2, " idx1: ",idx1, "idx2: ", idx2, array)
//         if (idx1 === -1 || idx2 === -1 || idx1 >= idx2) return false;
//         array = splicer(idx1, array);
//         array = splicer(idx2, array);
//         // if (array[idx1] === null || array[idx1] === -1) {
//             //     return false;
//             // } else {
//             //     array[idx1] = null;
//         // }
//         // if (array[idx2] === null || array[idx2] === -1) {
//         //     return false;
//         // } else {
//         //     array[idx2] = null;
//         // }

//         // if(array[idx1] === null || array[idx2] === null) return false
       
//         // array[idx2] = null;
//         // if(idx1 >= idx2) return false
//         // console.log(array)
//     }
//     console.log(array)
//     return true;

// }


function validateSubsequence(array, sequence) {
    let i = 0;
    while(i < sequence.length){
        let el = sequence[i];
        let idx = array.indexOf(el);
        console.log(el, idx)
        if (idx === -1) return false
        array = shiftOff(array, idx)
        // counterIdx = idx
        console.log(array)
        i++;
    }
    return true
}

function shiftOff(array, idx) {
    let i = 0;
    while (i <= idx) {
        array.shift()
        i++
    }
    return array;
}


console.log("NEW APPROACH, SPLICE OUT THE ELEMENT AS IT APPEARS IN BOTH ARRAYS")
function splicer(idx, array) {
    return array.slice(0,idx).concat(array.slice(idx+1))
}
console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]), "TRUE");
console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10]), "FALSE");

// console.log([5, 1, 22, 25, 6, -1, 8, 10].indexOf(-1))

console.log(validateSubsequence([1, 1, 1, 1, 1], [1, 1, 1]), "should be true")