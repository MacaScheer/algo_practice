#!/usr/bin/env node
'use strict';


/*  1) All students must receive at least one reward
    2) Any given student must receive strictly more rewards that an adjacent student 
    (a student immediately to the left or to the right) with a lower score and must receive strictly fewer
    rewards than an adjacent student with a higher score.

    Write a function that takes in a list of scores and 
    returns the minimum number of rewards that you must give out 
    to students to satisfy the two ruless.
    Can assume all scores are unique
*/

function minRewards(scores) {
   


}

function findLocalMins(array, idx) {
    
}


function findLocalMaxs(idx, array) {
    
}

// function findLocalMin(idx, array) {
//     let min = Infinity;
//     let f, r = idx
//     let minIdx;
//     while (f < array.length && r >= 0) {
//         let fEl = array[f];
//         let rEl = array[r];
//         if (fEl < min) {
//             min = fEl
//             minIdx = f
//         }
//         if (rEl < min) {
//             min = rEl;
//             minIdx = r
//         }
//         f++;
//         r--;
//     }
//     return [minIdx, min]
// }

const score = [8, 4, 2, 1, 3, 6, 7, 9, 5]

console.log(minRewards(score), " should be 25, because [4,3,2,1,2,3,4,5,1]")