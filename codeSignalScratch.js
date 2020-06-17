#!/usr/bin/env node
"use strict";
console.log("HERE");

// function addTwoDigits(n) {
    
// }
// let camel = []
// let words = ["is", "valid"]
// let newWords = []
// for (let i = 0; i < words.length; i++){
//     let word = words[i].split("");
//     let firstLetter = word.shift().toUpperCase()
//     word = word.join("")
//     console.log(word)
//     let newWordArr = firstLetter.concat(word)
//     newWords.push(newWordArr)
//     let newWord = newWordArr.join("")
// }
// // console.log(newWords)
// let i = 0;
// let n = 50;
// let counter = 0;
// for (let ind = 1; ind < n; ind *= 2){
//     // counter = 0;
//     i++;
//     while (counter < n) {
//         counter++
//     }
// }

// // console.log(counter, i)




// function isValid(words, string) {
//     let stringArr = string.split("")
//     let checkString = '';
//     // let stringsArr = []
//     for (let i = 0; i < stringArr.length; i++){
//         let char = stringArr[i];
//         if (char === char.toUpperCase()) {
//             checkString += " ";
//             checkString += char.toLowerCase()
//         } else {
//             checkString += char;
//         }
//     }
//     let stringsArr = checkString.split(" ");
//     for (let j = 0; j < stringsArr.length; j++){
//         let word = stringsArr[j];
//         if (word.length > 0 && !words.includes(word)) return false
//     }
// return true
// }

// console.log(isValid(['is', 'valid'], 'IsValid'))
// console.log(isValid(['is', 'valid'], 'isValid'))
// console.log(isValid(['is', 'valid'], 'isValId'))



function isBeautifulString(inputString){
    let chars = inputString.split("");
    let charsObject = {};
    for (let i = 0; i < chars.length; i++){
        let char = chars[i];
        if(charsObject[char]){
            charsObject[char]++
        } else {
            charsObject[char] = 1
        }
    }
    return checkNums(charsObject)
}
function checkNums(obj){
    for (let char in obj){
        let numTimes = obj[char];
        let prevLetter = returnPrevLetter(char);
        let prevLetterNumTimes = obj[prevLetter] ? obj[prevLetter] : 0;
        if(numTimes > prevLetterNumTimes){
            return false
        }
    }
    return true
}
function returnPrevLetter(char){
    if(char === 'a' || char === 'A') return 'a'
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let idx = alph.indexOf(char.toLowerCase());
    return alph.split("")[idx - 1]
}

console.log('bbaacdafe',isBeautifulString('bbaacdafe'))

// console.log(returnPrevLetter('l'))