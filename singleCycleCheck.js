#!/usr/bin/env ndoe
'use strict';

const singleCycleCheck = function (array) {
    // for (let i = 0; i < array.length; i++){
    //     visited[array[i]] = 0;
    // }
    // let firstEl = array[0];
    // visited[firstEl] += 1

}
const visitedObject = function (array) {
    
}

const traverse = function (idx, array, visited) {
    
    // FIRST JUMP
    
    let val = array[idx];
    if (visited[idx]) {
        return
    } else {
        visited[idx] = true
    }
    let newIdx;
    if (idx + val > array.length - 1) {
        newIdx = (idx + val) % array.length
    } else if (idx + val < 0) {
        newIdx = arr.length - ((array.length - (idx + val)) % arr.length);
    } else {
        newIdx = idx + val
    }
    // let nextVal = array[newIdx]

    // SECOND JUMP
    traverse(newIdx, array, visited);

}

const check = function (visited) {
    for (let key in visited) {
        if (visited[key] === false) return false
    }
    return true;
}

console.log(singleCycleCheck([2,3,1,-4,-4,2]), "should be TRUE")