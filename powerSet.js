#!/usr/bin/env node
'use strict'

// function powerSet(array){
//    if (array.length === 0) return [[]];
// 	if(array.length === 1) return[[],array]

// 	let firstEl = array.shift();
// 	let remainders = powerSet(array);
// 	let combinedArr = remainders.concat(remainders.map(el => el.unshift(firstEl)))
//     return combinedArr;


// }

// console.log(powerSet([1,2,3]))

function powerSet(array) {
	// if (array.length === 0) return [[]];
	// if (array.length === 1) return [[], array];
	let outer = [[]]; let i = 0;
	for (i; i < array.length; i++){
		let el = [array[i]]
		// let inner = outer;
		// console.log("inner: ", inner)
		// let idxToPush = 
		
		// for (let j = 0; j < outer.length; j++){
		// 	inner[j].push(el)
		// }
		outer.push(el)
	}
	console.log("outer: ",outer, "  i:",i)
	for (let j = 0; j < array.length; j++){
		let el2 = array[j];
		let idx = outer.indexOf(el2)
		let subArr = outer[idx + 1]
		console.log("idx: ", idx)
	}

}

console.log(powerSet([1, 2, 3]))
// [[],[1],[2],[3]...[1,2],[1,3],[2,3],[1,2,3]]
// [[]] //first array to iterate over with input array
// [[],[1]]
// [[],[1],[2]]
// [[],[1],[2],[3]]
// now iterate over this built array, adding into idx + 1 of the idx you're on
// [[1,2], [1,3]] starting with 1 + idx of 1  in output array or the next element from the one you're unshifting in
// [2,3] for 1 + idx of 2 + idx of 2 in output array
//  [1,2,3] for 1 + idx of 3 in output array