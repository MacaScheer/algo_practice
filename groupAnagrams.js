#!/usr/bin/env node
'use strict';

function groupAnagrams(words) {
    let objs = [];
    let output = [];
    for (let i = 0; i < words.length; i++){
        let subArr = [];
        let word = words[i];
        let obj = wordsObj(word)
        if (objs.includes(obj)) {
            
        }
        objs.push()
    }

}

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
        output.push(...el)
    }
    return output.join("")
}

console.log(sorter("zyxwvut"))

// let words1 = ["yo", "act", "flop", "tac", "cat", "oy", "olfp"];
// console.log(groupAnagrams(words1), `[["yo","oy"],["flop","olfp"],["act","tac","cat"]`)