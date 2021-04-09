#!/usr/bin/env node
'use strict';

let palindrome = 'ecz'; //ecz , cec  
/*
get length of the string.
assign pointers based on a conditional of the length:
assign pointers to the ends, left and right
if the chars don't match, increment the counter
*/

const isOneWordFromPalindrome = word => {
    let leftIdx = 0;
    let rightIdx = word.length - 1;
    while (leftIdx < rightIdx) {
        let leftChar = word[leftIdx];
        let rightChar = word[rightIdx];
        if (leftChar !== rightChar) {
            if (isPalindrome(word.slice(leftIdx + 1, rightIdx)) || isPalindrome(word.slice(rightIdx - 1))) {
                return true;
            }
        }
        leftIdx++;
        rightIdx--;
    }
    return false;
}

// r a c e z c a r
const isPalindrome = word => {
    let halfWayPt = Math.floor(word.length / 2);
    let rightIdx, leftIdx;
    if (word.length % 2 === 0) {
        leftIdx = halfWayPt - 1;
        rightIdx = halfWayPt;
    } else {
        leftIdx = halfWayPt - 1;
        rightIdx = halfWayPt + 1;
    }
    while (leftIdx >= 0) {
        if (word[leftIdx] !== word[rightIdx]) return false;
        leftIdx--;
        rightIdx++;
    }
    return true;
}

console.log(isOneWordFromPalindrome('racecarz'), " should be true");
console.log(isOneWordFromPalindrome('racezcar'), " should be true");
console.log(isOneWordFromPalindrome('racezcars'), " should be false");

