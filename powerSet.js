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
// THE SET OF ALL SUBSETS OF ANOTHER SET
// function powerSet(array) {
	// if (array.length === 0) return [[]];
	// if (array.length === 1) return [[], array];
	// let outer = [[]]; let i = 0;
	// for (i; i < array.length; i++){
	// 	let el = [array[i]]
	// 	// let inner = outer;
	// 	// console.log("inner: ", inner)
	// 	// let idxToPush = 
		
	// 	// for (let j = 0; j < outer.length; j++){
	// 	// 	inner[j].push(el)
	// 	// }
	// 	outer.push(el)
	// }
	// console.log("outer: ",outer, "  i:",i)
	// let startIdx = 2;
	// for (let j = 0; j < array.length; j++){
	// 	// let nextOuter = outer  //[[],[1],[2],[3]]
	// 	let el2 = array[j];
	// 	// let countUp = startIdx; //2
	// 	// console.log("nextOuter: ",nextOuter)
	// 	(function(n, c, o) {
	// 		while (c < o) {
	// 			let newSub = n[c]
	// 			console.log("outer: ", outer)
	// 			newSub.push(el2)
	// 			n.push(newSub)
	// 			c++
	// 		}
			
	// 	})(outer, startIdx, outer.length)
	// 	startIdx++
// 	}
// 	console.log(outer)

// }

// function powerSet(array) {
// 	let base = [[]];
// 	for (let i = 0; i < array.length; i++){
// 		let el = array[i];
// 		let newArr = [...base]  //[[]]
// 		for (let j = 0; j < newArr.length; j++){
// 			console.log("newArr: ", newArr)
// 			console.log("base: ", base)
// 			let sub = newArr[j]; // []
// 			sub.push(el)
// 		}
// 		base.push(newArr)
// 	}
// console.log(base)
// }

// let arr1 = [[], [], [1]]
// arr1.map(sub => {
// 	sub.push(1)
// 	console.log(sub)
// })
// console.log(arr1)


// function powerSet(array) {
// 	let outer = [[]];
// 	for (let i = 0; i < array.length; i++){
// 		let el = array[i];  //1     //2            //3
// 		// console.log("i: ",i)
// 		let newSub = []
// 		console.log("outer: ", outer)
// 		let newOuter = [...outer]
// 		newOuter.map(sub => {  //[]    //[], [1]      //[],[1],[2],[1,2]
// 			sub.push(el)    //[1]   
// 			newSub.push(sub)//[[1]] //[[2], [1,2]] //[[3],[1,3],[2,3],[1,2,3]]
// 			console.log("sub: ",sub)
// 			console.log("newSub: ", newSub)
// 		})



// 		outer.push(...newSub) //[[],[1]]  //[[],[1],[2],[1,2]]  // [[],[1],[2],[1,2][3],[1,3],[2,3],[1,2,3]]
// 	}
// 	return outer
// }

function powerSet(array) {
	let subsets = [[]];
	for (let i = 0; i < array.length; i++){
		let el = array[i];
		const length = subsets.length
		for (let j = 0; j < length; j++){
			let currSub = subsets[j];
			subsets.push(currSub.concat([el]))
		}
	}
	return subsets
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