#!/usr/bin/env node
'use strict';

// const singleCycleCheck = function (array) {
//     let visited = traverse(0, array);
//     for (let key in visited) {
//         if (!visited[key]) return false
//     }
//     return true;
// }

// const traverse = function (idx, array, visited = {}) {
    
//     // FIRST JUMP
    
//     let val = array[idx];
//     if (visited[idx]) {
//         return visited
//     } else {
//         visited[idx] = true
//     }
//     let newIdx;
//     if (idx + val > array.length - 1) {
//         newIdx = (idx + val) % array.length
//     } else if (idx + val < 0) {
//         newIdx = array.length - ((array.length - (idx + val)) % array.length);
//     } else {
//         newIdx = idx + val
//     }
//     // let nextVal = array[newIdx]

//     // SECOND JUMP
//     traverse(newIdx, array, visited);

// }


const singleCycleCheck = function(array){
    let counter = 0;
    let currIdx = 0;
    while (counter < array.length) {
        el = array[el]

        counter++
    }
    return el === firstEl
}

function getNextidx(idx, array) {
    
}


console.log(singleCycleCheck([2,3,1,-4,-4,2]), "should be TRUE")