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
	let smallestDiff;
	let sortedOne = mergeSort(arrayOne);
    let sortedTwo = mergeSort(arrayTwo);
    let halfOne = Math.floor(sortedOne.length / 2)
    let halfTwo = Math.floor(sortedTwo.length / 2)
    let midOne = sortedOne[halfOne]
    let midTwo = sortedTwo[halfTwo]

	while(midOne < sortedOne.length && midOne > 0 && midTwo > 0 && midTwo < sortedTwo.length){
        console.log("")
        let currDiff = diff(midOne, midTwo);
        if (currDiff < diff(smalllestDiff[0], smallestDiff[1])) smallestDiff = [midOne, midTwo] 
        if (midOne > midTwo) {
            halfOne--
        } else if (midOne < midTwo) {
            halfTwo++
        }
    }
    
    return smallestDiff
}

console.log(smallestDifference([-1,5,10,20,3],[26,134,135,15,17]), "Should equal: [20,17]")
// console.log(smallestDifference([-1,5,10,20,28,3],[26,134,135,15,17]), "Should equal: [28,26]")
// console.log(smallestDifference([10,0,20,25],[1005,1006,1014,1032,1031]), "Should equal: [25, 1005]")