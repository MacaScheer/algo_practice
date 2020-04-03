#!/usr/bin/env node

'use strict';

console.log("WATER AMOUNTS")





// TotalArea = 35 + 13 = 48
// LeftPiller = 10
// RightPiller = “3”
// HowManySpaces = 5
// Subtractors = [1, 1]

// Considerations:
// -Peaks are any pillars that are taller than or as their neighbors. 
// - Finding the peaks in an array before calculating a possible pool of water.
// - A pool’s height will be determined by the lower of the two peaks, being multiplied by the sum of the negative space between the heights of all in -between pillars. 
// - Will have to iterate through the entire array, to find peaks. 
// - We won’t start summing pool areas until we have found two peaks to hold it


// Edgcase[1, 0, 1, 0, 3] peaks would be at idxs 0, 2, 4
// Which means 2 pools, the first one is of height 1, second one is also of height 1.

// Edgecase[3, 0, 2, 3] peaks would be only at idxs 0 and 3, because the middle peak is lower than its surrounding peaks, so only 1 pool.

//     Edgecase[10, 0, 0, 5, 0, 0, 6, 0, 3] peaks would be at idxs 0, 3, 6, 8, except peak at idx 3 is overruled by peak at 6.

// PSEUDOCODE:
// Iterate through the array and keep track of any number that is bigger than its neighbors, when come across the second peak, you can sum the spaces in between, using the lower of the two peaks as the height of each space.if you come across another peak that is bigger than a previous peak, you go back to the previous, previous peak to add the difference between the previous smaller peak and the new peak….You will be replacing the smaller of the two peaks as the height.

// Create an object that has keys for each of the indices.The values of those keys will be the height of the smaller peak that it sits between.That value is overwritten with a bigger height only when you come across a peak that is bigger than the shorter of the two peaks.

// There will be a helper function that takes in a height and then then array between the peaks and sums their area.

// Helper function that finds peaks or keep track of the big numbers, two at a time;



const heights = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3];  //48

function waterArea(array) {
    let peaks = [];
    let totalSum;
    let peak = findNextPeak(array, 0);
    while(peak[0] !== "end"){
        peaks.push(peak)
        peak = findNextPeak(array, peak[2])
    }
    for (let i = 0; i < peaks.length - 1; i++){
        let p1 = peaks[i];
        let p2 = peaks[i + 1]
        totalSum += sumMer(p1, p2, array)
    }
    return totalSum
}

function sumMer(idx1, idx2, array) {
    let peak1 = array[idx1];
    let peak2 = array[idx2];
    let height;
    if (peak1 <= peak2) {
        height = peak1
    } else {
        height = peak2
    }
    let totalArea = height * (idx2 - idx1 - 1); 
    for (let i = idx1 + 1; idx < idx2; i++){
        totalArea -= array[i]
    }
    return totalArea;
}

function findNextPeak(array, idx) {
    let firstPeakVal = array[idx];
    while (array[idx] > firstPeakVal) {
        
        if (array[idx] > firstPeakVal && idx < array.length - 1) {
            firstPeakIdx = idx;
            firstPeakVal = array[idx]
        } else if (array[idx] > firstPeakVal && idx === array.length - 1) {
            firstPeakIdx = idx;
            firstPeakVal = array[idx]
            return ["end", firstPeakVal, idx]
        }
        else if (array[idx] <= firstPeakVal && idx === array.length - 1) {
            return ["end", firstPeakVal, idx]
        }
        idx++
    }
     return ["not-end", firstPeakVal, idx] 
}

// function nearestPeak(idx, array) {
//     let currPeak = array[idx];
//     let nextPeakIdx;
//     let nextPeak;
//     for (let i = 0; i < array.length; i++){
//         let el = array[i];
//         if (el > currPeak) {
//             nextPeakIdx = i;
//             nextPeak = array[i];
//         }
//     }
//     return [nextPeakIdx, nextPeak]
// }




console.log(waterArea(heights))





// CODE:

// function waterArea(array) {
//     let heights = {};
//     for (let i = 0; i < array.length; i++) {
//         heights[i] = 0;
//     }
//     let peakIdxs = [];

//     for (let i = 0; i < array.length; i++) {
//         if(peak(array, i)){
//             heightsObjectWriter(heights, i, array[i], array.length)
//     }
// }

// }

// [0, 1, 0, 1, 0, 1]

// const peak = function (array, idx) {
//     if(idx > 0 && idx < array.length - 1){  //in bounds
//         if(array[idx] > array[idx - 1] && array[idx] > array[idx + 1]){
//             return true;
//         } else {
//             return false
//         }
//     } else if (idx === 0) {
//         if (array[idx] > array[idx + 1]) return true
//         return false
//     } else {
//         if(array[idx] > array[idx - 1]) return true
//         return false
//     }
// }

// const heightsObjectWriter = function (heights, idxOfPeak, peakValue, arrayLength) {
//     for (let i = idx; i < arrayLength; i++) {
//         //forwards
//         if(heights[i] < peakValue) heights[i] = peakValue
//         heights[i]
//     }


//     for(let i = idx; i >= 0; i--) {
//         //backwards
//         if(heights[i] < peakValue

// }

// }


// function findTwoPeaks(array, idx){
//     let peak1 = [0];
//     let peak2 = [0];
//     for (let i = idx; i < array.length; i++) {
//         if(array[idx] > peak1[0]){
//             peak1[1] = array[idx];
//             Peak1[0] = idx;
//         }
//         if(array[idx] > peak2[0]){
//             peak2[1] = array[idx];
//             Peak2[0] = idx;
//         }
//         if(peak1[1] > peak2[1]){
//         return peak2;
//         } else {
//         return peak1;  //[idxOfPeak, peakValue]
//     }
// }
	

// }
