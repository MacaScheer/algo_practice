#!/usr/bin/env node

"use strict"


function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let piv = arr.shift()
	let l = arr.filter(el => el <= piv)
    let r = arr.filter(el => el > piv)
    let sL = mergeSort(l)
    let sR = mergeSort(r)
	return sL.concat([piv]).concat(sR)
}
function diff(val1, val2){
    return Math.abs(val1 - val2)
}

function smallestDifference(arrayOne, arrayTwo) {
    let smallestDiffArr = [];
    let smallestDiff = Infinity
	let sortedOne = mergeSort(arrayOne);
    let sortedTwo = mergeSort(arrayTwo);
    let i = 0; let j = 0;
    
	while(i < sortedOne.length && j < sortedTwo.length){
        let val1 = sortedOne[i]
        let val2 = sortedTwo[j]
        let currDiff = diff(val1, val2);
        if (currDiff < smallestDiff) {
            smallestDiffArr = [val1, val2]
            smallestDiff = currDiff
        }
        if (val1 < val2) i++
        else if (val1 > val2) j++
        else return [val, val1]
    }
    
    return smallestDiffArr
}



console.log(smallestDifference([-1,5,10,20,3],[26,134,135,15,17]), "Should equal: [20,17]")
console.log(smallestDifference([-1,5,10,20,28,3],[26,134,135,15,17]), "Should equal: [28,26]")
console.log(smallestDifference([10,0,20,25],[1005,1006,1014,1032,1031]), "Should equal: [25, 1005]")