[-,-,+,-,+,-,+]
[1,1, 3,2,3,2]


function wiggleSeq(array){
	// let currDiff = difference(array[0], array[1])     0//false
for (let i = 1; i < array.length - 1; i++){
		// let el1 = array[i];                                 el1=3//el2=2
		// let el2 = array[i + 1]
		let newDiff = difference(array[i], array[i + 1])   //false//true
if (currDiff === 0) {
	slicer(array, i)
    i--
} else if (currDiff === newDiff || newDiff === 0){
			slicer(array, i + 1)
	    i--
} 
currDiff = newDiff;   //curerDiff = false  //true
}
	return array.length;
}

function difference(el1, el2){
let diff = el1 - el2;
switch(diff){
	case(diff > 0):
	return true;
	break
	case(diff < 0):
	return false
	break;
	case(diff === 0):
	return 0;
}
}


function slicer(array, idx){
	let firstHalf = array.slice(0, idx);
	let secondHalf = array.slice(idx + 1);
	return firstHalf.concat(secondHalf)
}




SOLUTION:

var wiggleMaxLength = function(nums) {
      if (nums.length < 2)
            return nums.length;
        var down = 1, up = 1;
        for (var i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1])
                up = down + 1;
            else if (nums[i] < nums[i - 1])
                down = up + 1;
        }
        return Math.max(down, up);
};

