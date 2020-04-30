#! /usr/bin/env node
'use strict';

console.log("Levenshtein Distance Algo")

// use 2d array to compare all substrings from length 0 to whole of the two strings
// create compare function that will count how many changes (i.e. substitution/deletion/addition) necessary to obtain identical substring
// as it iterates, building out the substrings, that number can just be added to the previous
function levenshteinDist(str1, str2) {
    
    let arr1 = " ".concat(str1).split("");
    let arr2 = " ".concat(str2).split("");
    let compareArr = [];

    for (let i = 0; i < arr1.length; i++){
        compareArr.push([])
        let char1 = arr1[i];
        for (let j = 0; j < arr2.length; j++){
            let char2 = arr2[j];
            if (i > 0 && j > 0) {
                if (char1 !== char2) {
                    compareArr[i][j] = Math.min(compareArr[i][j - 1], compareArr[i - 1][j]) + 1
                } else {
                    compareArr[i][j] = compareArr[i - 1][j - 1]
                }
            } else {
                if (char1 === char2) {
                    compareArr[i][j] = 0
                } else {
                    compareArr[i][j] = 1
                }
            }
            
        }
    }
    console.log(compareArr)
    return compareArr[compareArr.length - 1][compareArr[0].length - 1]
}

// function numDiffs(str1, str2) {
    
// }

console.log(levenshteinDist("abc", "yabd"), "should be 2")

//       _|a|ab|abc
//      | | |  |   |
//     y| |1|2 |3  |
//    ya| |1|1 |2  |
//   yab| |2|1 |1  |
//  yabd| |3|2 |2  |

// console.log(levenshteinDist("biting", "mitten"), "should be 4?")


