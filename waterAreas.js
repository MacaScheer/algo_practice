#!/usr/bin/env node
'use strict';
/*/
PSEUDOCODE:
ITERATE THROUGH THE ARRAY, AS YOU MOVE FROM ONE HEIGHT TO THE NEXT,
MICRO LEVEL:
IF AT THE BEGINNING AND THE NEXT IS SMALLER, RECORD THAT PEAK,
IF AT A HEIGHT IN THE MIDDLE AND A HEIGHT IS BIGGER THAN ITS PREVIOUS AND FOLLOWING, RECORD THAT PEAK,
IF AT THE END AND THE HEIGHT IS BIGGER THAN THE PREVIOUS, RECORD THAT PEAK
MACRO LEVEL
IF THERE ARE 2 OR MORE PEAKS THAT ARE BIGGER THAN OTHER PEAKS, AND ENCLOSE OTHER PEAKS,
THEY WILL DWARF THOSE OTHER PEAKS AND WATER WILL BE CAPTURED ABOVE THOSE PEAKS,
STARTING FROM LEFT TO RIGHT, FILL EACH VALLEY WHEN THERE IS ONE, RECORDING THE TWO BIGGEST PEAKS SO FAR
WHEN YOU COME UPON ANOTHER PEAK THAT IS BIGGER THAN PREVIOUS BUT NOT A PEAK EVEN MORE PREVIOUS,
YOU ADD THE DIFFERENCE -- AS A RECTANGULAR AREA-- TO THE WATER AREA COVERED FROM THAT EARLIER PEAK TO 
THE CURRENT

APPROACH:
SOLVE FOR EACH INDIVIDUAL HEIGHT, THE AMOUNT OF WATER ABOVE IT,
FOR EACH INDIVIDUAL PEAK, FIND THE BIGGEST PEAK TO ITS LEFT AND THE BIGGEST TO ITS RIGHT
OF THE SMALLER OF THE TWO, THAT WILL BE THE HEIGHT OF THE WATER ABOVE THAT INDIVIDUAL PEAK (WIDTH 1)
/*/
function waterAreas(heights) {
    console.log("heights: ", heights)
    let peaks = findPeakIdxs(heights)
    let maxs = findTwoMax(heights)
    console.log(maxs)
    console.log("peaks: ", peaks)
    // console.log(peaks)
    let borderWallIdxs = [];
    for (let i = 0; i < peaks.length - 1; i++){
        // console.log(heights[peaks[i]])
        let p1 = heights[peaks[i]];
        let p2 = heights[peaks[i + 1]]
        let min = Math.min(p1, p2);
        // console.log(" min: ", min, " indices:",i, i+1)
        if (min === p1) {
            borderWallIdxs.push(peaks[i])
        } else {
            borderWallIdxs.push(peaks[i + 1])
        }
    }
    // console.log(borderWallIdxs)
    
}
function findTwoMax(heights) {
    let max = [0,0];
    let nextMax = [0,0];
    for (let i = 0; i < heights.length; i++){
        let h = heights[i];
        if (h > max[1]) {
            nextMax[0] = max[0];
            nextMax[1] = max[1]
            max[1] = h;
            max[0] = i
            
        }
        if (h < max[1] && h > nextMax[1]) {
            nextMax[1] = h;
            nextMax[0] = i;
        }
        // console.log("height: ",h, " max:",max, " nextmax:", nextMax)
    }
    return {max, nextMax}
}

function findPeakIdxs(array) {
    let peakIdxs = [];
    let p1Idx = 0
    let p2Idx = 1;
    while(p1Idx < array.length){
        let p1 = array[p1Idx]
        let p2 = array[p2Idx];
        // console.log("p1: ", p1, " p2: ", p2)
        // if (p1 <= p2) {
            //     p1Idx = p2Idx;
            // } else {
                //     peakIdxs.push(p1Idx)
                // }
                
        if(p1 > p2) peakIdxs.push(p1Idx)
        // console.log(peakIdxs)
            p2Idx++
            p1Idx++
    }
    if(array[array.length - 2] < array[array.length - 1]) peakIdxs.push(array.length - 1)
    return peakIdxs
}

console.log(waterAreas([0,8,0,0,5,0,0,10,0,0,1,1,0,3]))