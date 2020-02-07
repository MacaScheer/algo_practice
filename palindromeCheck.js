function isPalindrome(string) {
	let midIdx = Math.floor(string.length / 2)
	if(string.length % 2 !== 0) {
		if (string[midIdx] !== string[midIdx - 1]) return false;
		for (let j = midIdx; j < string.length; j++)
	} else {
		
		for (let i = midIdx; i < string.length; i++){
		
		}
	}	
}


console.log(isPalindrome('cabac'), "should be true")
console.log(isPalindrome('abccba'), "should be true")
console.log(isPalindrome('abccbaf'), "should be false")