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
        let wordArr = word.split("...")
        for (let i = 0; i < wordArr.length; i++){
            word = wordArr[i]
            if (wordMap.has(word)) {
                let amt = wordMap.get(word) + 1;
                wordMap.set(word, amt)
            } else {
                wordMap.set(word, 1)
            }
        }
    }
    return wordMap
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
// console.log(wordCloud(sent2))

// USE A CLASS SO WE DON'T HAVE TO PASS TOO MUCH DATA AROUND AS ARGUMENTS

class WordCLoud{
    constructor(sentence) {
        this.sentence = sentence;
        this.wordMap = new Map()
        this.makeCloud()
    }

    makeCloud() {
        let words = this.sentence.split(" ")

        for (let i = 0; i < words.length; i++) {
            let word = this.grammar(words[i])
            let wordArr = word.split("...")
            for (let i = 0; i < wordArr.length; i++) {
                word = wordArr[i]
                if (this.wordMap.has(word)) {
                    let amt = this.wordMap.get(word) + 1;
                    this.wordMap.set(word, amt)
                } else {
                    this.wordMap.set(word, 1)
                }
            }
        }
        return this.wordMap
    }
    capitalized(word) {
        let wordArr = word.split("");
        let firstChar = wordArr.shift();
        let lwCase = firstChar.toLowerCase();
        wordArr = wordArr.join("");
        let nwWord = lwCase + wordArr
        return nwWord
    }
    grammar(word) {
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
        return this.capitalized(word)
    }
}

let cl = new WordCLoud(sent2)
console.log(cl.makeCloud())


// 

class WordCloudData {
    constructor(inputString) {
        this.wordsToCounts = new Map();
        this.populateWordsToCounts(inputString);
    }

    populateWordsToCounts(inputString) {

        // Iterates over each character in the input string, splitting
        // words and passing them to this.addWordToMap()

        let currentWordStartIndex = 0;
        let currentWordLength = 0;

        for (let i = 0; i < inputString.length; i++) {
            const character = inputString.charAt(i);

            // If we reached the end of the string we check if the last
            // character is a letter and add the last word to our map
            if (i === inputString.length - 1) {
                if (this.isLetter(character)) {
                    currentWordLength += 1;
                }
                if (currentWordLength > 0) {
                    const word = inputString.slice(currentWordStartIndex,
                        currentWordStartIndex + currentWordLength);
                    this.addWordToMap(word);
                }

                // If we reach a space or emdash we know we're at the end of a word
                // so we add it to our map and reset our current word
            } else if (character === ' ' || character === '\u2014') {
                if (currentWordLength > 0) {
                    const word = inputString.slice(currentWordStartIndex,
                        currentWordStartIndex + currentWordLength);
                    this.addWordToMap(word);
                    currentWordLength = 0;
                }

                // We want to make sure we split on ellipses so if we get two periods in
                // a row we add the current word to our map and reset our current word
            } else if (character === '.') {
                if (i < inputString.length - 1 && inputString.charAt(i + 1) === '.') {
                    if (currentWordLength > 0) {
                        const word = inputString.slice(currentWordStartIndex,
                            currentWordStartIndex + currentWordLength);
                        this.addWordToMap(word);
                        currentWordLength = 0;
                    }
                }

                // If the character is a letter or an apostrophe, we add it to our current word
            } else if (this.isLetter(character) || character === '\'') {
                if (currentWordLength === 0) {
                    currentWordStartIndex = i;
                }
                currentWordLength += 1;

                // If the character is a hyphen, we want to check if it's surrounded by letters
                // if it is, we add it to our current word
            } else if (character === '-') {
                if (i > 0 && this.isLetter(inputString.charAt(i - 1)) &&
                    this.isLetter(inputString.charAt(i + 1))) {
                    if (currentWordLength === 0) {
                        currentWordStartIndex = i;
                    }
                    currentWordLength += 1;
                } else {
                    if (currentWordLength > 0) {
                        const word = inputString.slice(currentWordStartIndex,
                            currentWordStartIndex + currentWordLength);
                        this.addWordToMap(word);
                        currentWordLength = 0;
                    }
                }
            }
        }
    }

    addWordToMap(word) {
        let newCount;

        // If the word is already in the map we increment its count
        if (this.wordsToCounts.has(word)) {
            newCount = this.wordsToCounts.get(word) + 1;
            this.wordsToCounts.set(word, newCount);

            // If a lowercase version is in the map, we know our input word must be uppercase
            // but we only include uppercase words if they're always uppercase
            // so we just increment the lowercase version's count
        } else if (this.wordsToCounts.has(word.toLowerCase())) {
            newCount = this.wordsToCounts.get(word.toLowerCase()) + 1;
            this.wordsToCounts.set(word.toLowerCase(), newCount);

            // If an uppercase version is in the map, we know our input word must be lowercase.
            // since we only include uppercase words if they're always uppercase, we add the
            // lowercase version and give it the uppercase version's count
        } else if (this.wordsToCounts.has(this.capitalize(word))) {
            newCount = this.wordsToCounts.get(this.capitalize(word)) + 1;
            this.wordsToCounts.set(word, newCount);
            this.wordsToCounts.delete(this.capitalize(word));

            // Otherwise, the word is not in the map at all, lowercase or uppercase
            // so we add it to the map
        } else {
            this.wordsToCounts.set(word, 1);
        }
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    isLetter(character) {
        return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
    }
}