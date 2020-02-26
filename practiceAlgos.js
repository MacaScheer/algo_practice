#!/usr/bin/env node
'use strict';


// Step 1 − Set MIN to location 0
// Step 2 − Search the minimum element in the list
// Step 3 − Swap with value at location MIN
// Step 4 − Increment MIN to point to next element
// Step 5 − Repeat until list is sorted


function selectionSort(array) {
    let minIdx = 0;
    let newMinIdx;
    while (minIdx < array.length) {
        newMinIdx = findMin(array, minIdx + 1)
        if (array[newMinIdx] < array[minIdx]) {
            [array[minIdx], array[newMinIdx]] = [array[newMinIdx], array[minIdx]];
        }
        minIdx++;
    }
    return array
}
    
function findMin(array, i) {
    let min = Infinity;
    let minIDX;
    console.log(array)
    while(i < array.length) {
        if (array[i] < min) {
            min = array[i]
            minIDX = i
        }
        i++
    }
    return minIDX
}
    




// console.log(selectionSort([23,7,44,9,8,7,6,5]))

function moveZeros(array) {
    let endIdx = array.length - 1;
    let i = 0;
    while (i < endIdx) {
        if (array[i] === 0) {
            [array[i], array[endIdx]] = [array[endIdx], array[i]];
            endIdx--
        }
        i++
    }
    return array
}

console.log(moveZeros([0, 23,0,0,4,0,4,65,78,3,5,1]))