#!/usr/bin/env node
'use strict';
/*
INSTRUCTIONS:
You're given two non-empty strings. First is a pattern consisting of x's and/or y's; 
the other is a normal string of alphanumeric characters. Write a function that checks whether 
the normal string matches the pattern
A strin S0 is said to match a pattern if replacing all the 'x's 
in the pattern with some non-empty substring S1 of S0 and replacing all 'y's in the pattern
with some non-empty substring S2 of S0 yields the same string S0.
The function should return an array with the two substrings S1 and S2 that represent x and y in the normal string
If the pattern doesn't contain any 'x's or 'y's, the respective letter should be represented by an empty string in the final array

PSEUDOCODE:
The things that are needed to make this algo work: being able to iterate through the string, identifying
a pattern in that string. It should move forward in the string, finding the first repetition, that forms the pattern
EXAMPLE: for 'xx' in 'gogopowerranger', we should have a series of checks:
record the first char, if the next char is different, add it to the possible substring, do this until you come upon a repeated character
when you come upon a repeated character, stop adding to the substring, and look for a reappearance of the substring
in this example, immediately following what you've iterated through so far in the string

HINT1
start by checking if pattern starts with an 'x', if not, try swapping all 'x's with 'y's and vice versa, but
make sure to keep track of this change because it will affect the output orer
*/ 






function patternMatcher(pattern, string) {
    
    let [newPattern, side, firstPosition] = patternSwap(pattern);
    let table = hashTable(pattern)
    let possibleString = ''
    let lenOfX = 1;
    let firstYIdx = pattern.indexOf('y')
    if (table['y'] !== undefined) {
        while (lenOfX * pattern.length < string.length) {
            // if(possibleString)
            let substring = string.slice(0,lenOfX)
            let x = substring;
            //'ggyggy'
            let yIdx = lenOfX * firstYIdx
            // console.log("subStringX: ", x, 'yIdx: ', yIdx)
            let lenOfY = lengthOfY(table, pattern, lenOfX, string)
            let y = string.slice(yIdx, lenOfY + yIdx)
            console.log('x: ', x, ' y:',y)
            let possibleString = replaceWithSubString(pattern, x, y)
            if (possibleString === string){
                if(side) return [x,y] 
                return [y,x]
            }
            // x = g, y = string.slice(yIdx, lenOfY) = 'gopowerranger' 
            
            
            // if (x.length * table['x'] + lenOfY * table['y'] === string.length) {
            //     return finalArr(x, string, lenOfY, table)
            // }
            // let firstNonX = firstNonChar(possibleString, x)
            // console.log(possibleString)
            lenOfX++
        }
    } 
    return false
    // if (side) {
    // } else {
    // }
}

function hashTable(pattern) {
    let table = {}
    for (let i = 0; i < pattern.length; i++){
        let char = pattern[i]
        if (table[char] === undefined) {
            table[char] = 1;
        } else {
            table[char]++
        }
    }
    return table
}

function patternSwap(pattern) {
    let newPattern = [];
    if (pattern.split("")[0] === 'x') {
        return [true, pattern, pattern.indexOf('y')]
    } else {
        for (let i = 0; i < pattern.length; i++) {
            let char = pattern[i];
            if (char === 'x') {
                newPattern.push('y')
            } else {
                newPattern.push('x')
            }
        }
    } 
    return [false, newPattern, newPattern.indexOf('y')]
}
function replaceWithSubString(pattern, subStringX, subStringY) {
    let newString = "";
    for (let i = 0; i < pattern.length; i++){
        let patternChar = pattern[i];
        if (patternChar === 'x') {
            newString += subStringX
        } else {
            newString += subStringY
        }
    }
    return newString
}

function finalArr(x, string, lenOfY, table) {
    let arr = [x];
    let ys = [];

    for (let i = 0; i < string.length; i++){
        let chunk = string.slice(i, x.length);
        let nextidx = chunk.indexOf(x);
        ys.push()
    }
}


function lengthOfY(table, pattern, xLength, string) {
    let totalXLength = table['x'] * xLength;
    let remainderLength = (string.length - totalXLength) 
    let yLength = remainderLength / table['y']
    console.log("totalXLength: ", totalXLength, " remainderLength: ", remainderLength, " table: ", table, ' yLength: ', yLength)
    if (remainderLength % table['y'] !== 0) return false
    return yLength
}
function firstNonChar(string, x) {
    let i = 0; 
    let char = string[i]
    let xLength = x.length;
    while (i < string.length && char === x) {
        let nextChunk = string.slice(i, xLength);
        console.log("nextChunk: ",nextChunk)
        if (nextChunk !== x) return i;
        i = xLength + 1
    }
}


// function findFirstPattern(string, substring) {
//     // substring = 'go'
//     //pattern = 'xxy'

//     let i = 0;
//     while (i < string.length) {
        

//         i++
//     }

// }



// console.log(hashTable('xxxxx')['y'])


// "lol","stringlolstringlol"
// function sliceFromString(sub, string) {
//     let otherSubs = [];
//     let i = 0;
//     while (i < string.length && string.length > 0) {
//         let firstIdx = string.indexOf(sub);
//         i = firstIdx;
//         console.log("string:", string, " othersSubs:", otherSubs, " firstidx: ",firstIdx)
//         otherSubs.push(string.slice(0, firstIdx))
//         string = string.slice(firstIdx + sub.length)
//     }
//     return otherSubs
// }
// console.log(sliceFromString("go", "gogopowerrangersgogopowerrangers"))

// console.log(sliceFromString("lol", "stringlolstringlolok"))






let st1 = "gogopowerrangergogopowerranger";
let pattern1 = "xxyxxy"
console.log(patternMatcher(pattern1, st1), `output should match: ["go", "powerranger"]`)