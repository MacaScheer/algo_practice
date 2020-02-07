#!/usr/bin/env node
'use strict';

function isPalindrome(string) {
	let midIdx = Math.floor(string.length / 2)
    if (string.length % 2 !== 0) {  //['acbca'] midIdx = 2  string.length = 5
                                    //[ 01234 ]  1<->3  0<->4
        for (let j = midIdx; j < string.length; j++){
            if (string[j + 1] !== string[string.length - (j + 2)]) return false
        }
        return true
    } else {
        
        for (let i = midIdx; i < string.length; i++){    //midIdx = 2 string.length = 4
            if (string[i] !== string[string.length - (i + 1)]) return false; //['abba'] 1<->2 0<->3
                                                                //[ 0123 ] 
            
        }
        return true
	}	
}


console.log(isPalindrome('cabac'), "should be true")
console.log(isPalindrome('abccba'), "should be true")
console.log(isPalindrome('abccbaf'), "should be false")