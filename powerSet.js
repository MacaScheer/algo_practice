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
	let outer = [[]];
	for (let i = 0; i < array.length; i++){
		let el = [array[i]]
		// let inner = outer;
		console.log("inner: ", inner)
		// let idxToPush = 
		
		for (let j = 0; j < outer.length; j++){
			inner[j].push(el)
		}
		outer.push(el)
	}
	console.log(outer)
}

console.log(powerSet([1,2,3]))