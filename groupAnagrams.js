#!/usr/bin/env node
'use strict';
// build out array of objects of the words sorted alphabetically pointing to the unsorted words
// when inserting a new word, check if the word already exists in array
// if it does,

function groupAnagrams(words) {
    let output = {};
    for (let i = 0; i < words.length; i++){
        let word = words[i];
        let sortedWord = sorter(word);
        
        if (!output[sortedWord]){
            output[sortedWord] = [word]
        } else if (output[sortedWord] instanceof Array) {
            output[sortedWord].push(word)
        }
        
        
    }
    let arr = [];
    for (let obj in output) {
        // if (output[obj].length > 1) {
            arr.push(output[obj])
        // }
    }
    // console.log(arr)
    return arr
}

function sorter(word) {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let wordArr = new Array(alph.length + 1);
    let output = [];
    for (let i = 0; i < word.length; i++){
        let char = word[i];
        let idx = alph.indexOf(char);
        if (wordArr[idx] instanceof Array) {
            
            wordArr[idx].push(char)
        } else {
            wordArr[idx] = [char]
        }
    }
    while (wordArr.length > 0) {
        let el = wordArr.shift();
        if(el)output.push(...el)
    }
    return output.join("")
}

// console.log(sorter("zyxwvut"))

let words1 = ["yo", "act", "flop", "tac", "cat", "oy", "olfp"];
console.log(groupAnagrams(words1), `[["yo","oy"],["flop","olfp"],["act","tac","cat"]`)


// function wordsObj(word) {
//     let obj = {};
//     for (let i = 0; i < word.length; i++){
//         let char = word[i];
//         if (obj[char]) {
//             obj[char]++
//         } else {
//             obj[char] = 1;
//         }
//     }
//     return obj
// }