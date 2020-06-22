#!/usr/bin/env node
'use strict';

function reverseWords(arr) {
  // your code goes here
  let output = [];
  for (let i = 0; i < arr.length; i++){
    //let subArr = [];
    let char = arr[i] //p
 
   if(char !== ' '){ //[p'e, r] //['makes']
     subArr.push(char)
   } else {
//[perfect][]
    output = char.concat(subArr).concat(output)
   
    subArr = []
      //output = ['makes,' ',' ' ', 'p'erfect']
   } 
    
  }
  return output
}
//['p','e','r', 'f', ' ' ,'m','a','k',' ', 'p','r','a','c']

//[ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

//[ 'e', 'c', 'i', 't', 'c', 'a', 'r', 'p', '  ', 's', 'e', 'k', 'a', 'm', '  ', 't', 'c', 'e', 'f', 'r', 'e', 'p' ]

//[ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'e', 'r', 'f', 'e', 'c', 't' ]


// Sentence Reverse
// You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

// Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

// Explain your solution and analyze its time and space complexities.

// Example:

// input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
//                 'm', 'a', 'k', 'e', 's', '  ',
//                 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

// output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
//           'm', 'a', 'k', 'e', 's', '  ',
//           'p', 'e', 'r', 'f', 'e', 'c', 't' ]
// Constraints:

// [time limit] 5000ms

// [input] array.character arr

// 0 ≤ arr.length ≤ 100
// [output] array.character


// work backwards from target word.
// have helper function that checks whether two words are only 1 character different
// run through the words that have pass the helper function and collect them in an array

function shortestWordPath(source, target, words) {
    
}

function differenceOfOne(word1, word2) {
    let diff = 0;
    if (word1.length !== word2.length) return false;
    for (let i = 0; i < word1.length; i++){
        if(word1.split("")[i] !== word2.split("")[i]) diff++
    }
    if(diff === 1)return true
}

console.log(shortestWordPath("bit", "dog", ["but", "put","big","pot","pog","dog","lot"]))