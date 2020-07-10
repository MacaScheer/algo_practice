#!/usr/bin/env node
'use strict';

// MAPS: LIKE AN OBJECT WITH SOME CRUCIAL DIFFERENCES:
// MAP'S key can be any value (function, string, number, etc.)
// MAP'S keys are ordered in their insertion order
// MAP does not contain any keys/values by default
// MAP has a size property

// let contacts = new Map()
// contacts.set('Jessie', { phone: "213-555-1234", address: "123 N 1st Ave" })
// contacts.has('Jessie') // true
// contacts.get('Hilary') // undefined
// contacts.set('Hilary', { phone: "617-555-4321", address: "321 S 2nd St" })
// contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
// contacts.delete('Raymond') // false
// contacts.delete('Jessie') // true
// console.log(contacts.size) // 1

function wordCloud(sentence) {
    let wordMap = new Map();
    let words = sentence.split(" ")
    
    for (let i = 0; i < words.length; i++){
       let word = grammar(words[i])    
        if (wordMap.has(word)) {
            let amt = wordMap.get(word) + 1;
              wordMap.set(word, amt)
            } else {
                wordMap.set(word, 1)
            }
    }
    console.log(wordMap)
}

function capitalized(word) {
    let wordArr = word.split("");
    let firstChar = wordArr.shift();
    let lwCase = firstChar.toLowerCase();
    wordArr = wordArr.join("");
    let nwWord = lwCase + wordArr
    console.log(nwWord)
    return nwWord
}

// console.log(capitalized("Dang"))
// console.log(grammar("Hello!"))

function grammar(word) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let lastChar = word[word.length - 1].toLowerCase()
    let firstChar = word[0].toLowerCase()
    let wordArr = word.split("");
    if (!alph.includes(lastChar)) {
        wordArr.pop();
    }
    if (!alph.includes(firstChar)) {
        wordArr.shift();
    }
    word = wordArr.join("")
    return capitalized(word)
}

let sent1 = "After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar."
let sent2 = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
// console.log(wordCloud(sent1))
console.log(wordCloud(sent2))