#! /usr/bin/env node
'use strict';

console.log("Levenshtein Distance Algo")

// iterate through the two strings comparing each of the possible substrings against the other (O(n**2)) in a nested array
// since we start with just one char compared against one, as each char is added/compared against the other, if it
// is the same, the number of changes at (i, j) will be equal (i - 1, j - 1), otherwise it will be equal to the minimum changes between
// (i, j - 1) and (i - 1, j)
function levenshteinDist(str1, str2) {
    
    let arr1 = " ".concat(str1).split(""); //[' ', 'a', 'ab', 'abc']
    let arr2 = " ".concat(str2).split("");// [' ', 'y', 'ya', 'yabd']
    let compareArr = [];

    for (let i = 0; i < arr1.length; i++){
        compareArr.push([])
        let char1 = arr1[i];
        for (let j = 0; j < arr2.length; j++){
            let char2 = arr2[j];
            if (i === 0 && j === 0) {
                compareArr[i][j] = 0;
            }
            if (i === 0 && j !== 0) {
                if (char1 === char2) {
                    compareArr[i][j] = compareArr[i][j - 1]
                } else {
                    compareArr[i][j] = compareArr[i][j - 1] + 1
                }
            } else if (i !== 0 && j === 0) {
               if (char1 === char2) {
                    compareArr[i][j] = compareArr[i - 1][j]
                } else {
                    compareArr[i][j] = compareArr[i - 1][j] + 1
                } 
            } else if (i > 0 && j > 0) {
                    if (char1 !== char2) {
                        compareArr[i][j] = Math.min(compareArr[i][j - 1], compareArr[i - 1][j], compareArr[i-1][j-1]) + 1
                    } else {
                        compareArr[i][j] = compareArr[i - 1][j - 1]
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


