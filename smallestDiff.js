function mergeSort(arr){
	if (arr.length <= 1) return arr;
	let piv = arr.shift()
	let l = arr.filter(el => el <= piv)
	let r = arr.filter(el => el > piv)
	return mergeSort(l).concat([piv]).concat(mergeSort(r))
}

function smallestDifference(arrayOne, arrayTwo) {
	let smallestDiff;
	let sortedOne = mergeSort(arrayOne);
	let sortedTwo = mergeSort(arrayTwo);
	let midOne = sortedOne[Math.floor(sortedOne.length / 2)]
	let midTwo = sortedTwo[Math.floor(sortedTwo.length / 2)]
	while(midOne < sortedOne.length && midOne > 0 && midTwo > 0 && midTwo < sortedTwo.length){
		let currDiff = diff()
	}
}

function diff(val1, val2){
	return Math.abs(val1 - val2)
}