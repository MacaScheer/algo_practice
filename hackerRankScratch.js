#!/usr/bin/env node

'use strict';
console.log("HACKER RANK SCRATCH")

let arr = [5, 1, 3, 2]

function getMinimumMoves(arr) {
    let arr2 = Array.from(arr)
    let arr3 = arr2.sort((a,b) => a - b);
    let idxs = [];
    let idxsGraph = {};
    for (let i = 0; i < arr.length; i++){
        let sortedEL = arr3[i];
        let unsortedEl = arr[i];
        let idx = arr3.indexOf(unsortedEl);
        if(idx !== i){
            idxs.push(idx)
            idxsGraph[i] = idx - i
        }
    }
    console.log(idxs, idxsGraph, arr, arr3)

    for (let i = 0; i < idxs.length; i++){

    }
}


function shiftUntilComplete(idxs, arr){
    let counter = 0;
    for (let i = 0; i < idxs.length; i++){
        let idx = idxs[i];
        arr = moveToBack(arr, idx)
    }
}

function moveToBack(arr, i){
    let firstHalf = arr.slice(0,i + 1);
    let lastEl = firstHalf.pop()
    let secondHalf = arr.slice(i + 1);
    return firstHalf.concat(secondHalf).concat(lastEl);
}

console.log(getMinimumMoves(arr))


// console.log(moveToBack([5, 1, 3, 2], 1))







function getMinimumMoves(arr) {
    let arr2 = Array.from(arr)
    let arr3 = arr2.sort((a,b) => a - b);
    let idxsGraph = {};
    // let idxs = []
    for (let i = 0; i < arr.length; i++){
        let unsortedEl = arr[i];
        let idx = arr3.indexOf(unsortedEl);
        if(idx !== i){
            // idxs.push(idx)
            idxsGraph[arr[i]] = idx
        }
    }

}





function findSmallestBeforeSmaller(arr){
    let smallest = Infinity;
    let secondSmallest = null;
    let smallestIdx;
    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            if(arr[i] < smallest){
                smallest = arr[i];
                secondSmallest = arr[i + 1];
                smallestIdx = i;
            }
        }
    }
    return smallestIdx;
}

function shiftUntilComplete(idxs, arr){
    let counter = 0;
    for (let i = 0; i < idxs.length; i++){
        let idx = idxs[i];
        arr = moveToBack(arr, idx)
    }
    //...
}

function moveToBack(arr, i){
    let firstHalf = arr.slice(0,i + 1);
    let lastEl = firstHalf.pop()
    let secondHalf = arr.slice(i + 1);
    return firstHalf.concat(secondHalf).concat(lastEl);
}



function slowestKey(keyTimes) {
    // Write your code here
    let longest = 0;
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    let longestKey;
        let times = [];
    for (let i = 0; i < keyTimes.length; i++){
        // let timeSoFar = 0;
        let [key, timeSinceBegin] = keyTimes[i];
        if(i > 0){
            times.push([keyTimes[i][1] - keyTimes[i - 1][1],i])
        } else {
            times.push([keyTimes[i][1], 0])
        }
        
    }
    let longestIdx = findLongest(times)
    return alph[keyTimes[longestIdx]]
}

function findLongest(arr){
    //returns the index of the longest key press, in ketTimes arr
    let longest = 0;
    let longestIdx = null;
    for (let i = 0; i < arr.length; i++){
        if(arr[i][0] > longest){
            longest = arr[i][0]
            longestIdx = arr[i][1]        
        }
    }
    return longestIdx
}