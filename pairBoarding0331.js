function helperSplice(array, idx){	
//ASSUME SPLICE RETURNS THE REMOVED PART AND NOT THE CHANGED ARRAY
    // let first = array.splice(0, idx);
	// let second = array.splice(1);
    // array = first.concat(second)
    array.splice(idx, idx)

}



function removeDuplicate(array){
	let idx = 0;

	while(idx < array.length){
		let currEl = array[idx];
		let nextEl = array[idx +1]
	if (currEl !== nextEl){
        idx++

        } else {
	helperSplice(array, idx + 1)					//[1,2,2,3]
        }
     }
return array.length;
}


console.log(removeDuplicate([1,1,2,2,3,3,4,5]))