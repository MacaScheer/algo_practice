#!/usr/bin/env node
'use strict'

let word = "abcdcba";
let word2 = "abcdefedcbi";

const isPalindrome = function(str) {
  if (str.length <= 1) return true;
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[chars.length - 1 - i]) return false;
  }
  return true;
};

// console.log(isPalindrome(word2));


// function hasPalindromePermutation(string) {
//   let charSet = {}
//   for (let i = 0; i < string.length; i++){
//     let char = string[i];
//     charSet[char] === undefined ? charSet[char] = 1 : charSet[char] += 1
//   }
//   return charCount(charSet)
// }

// function charCount(set) {
//   let evenCount = 0; let oddCount = 0;
//   for (let key in set) {
//     console.log("set[key]: ",set[key])
//     set[key] % 2 === 0 ? evenCount += set[key] : oddCount += set[key]
//   }
//   console.log(evenCount, " oddCount: ",oddCount)
//   if (oddCount % 2 === 0) {
//     return true
//   } else {
//      return false
//   }
// }


function hasPalindromePermutation(string) {
  let charSet = new Set();
  for (let i = 0; i < string.length; i++){
    let char = string[i];
    if (!charSet.has(char)) {
      charSet.add(char)
    } else {
      charSet.delete(char)
    }
  }
  return charSet.size <= 1
}
console.log(hasPalindromePermutation("civic"), " is true")
console.log(hasPalindromePermutation("ivicc"), " is true")
console.log(hasPalindromePermutation("civil"), " is false")
console.log(hasPalindromePermutation("livci"), " is false");

// lirouruoril