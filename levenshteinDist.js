#! /usr/bin/env node
'use strict';

console.log("Levenshtein Distance Algo")

// use 2d array to compare all substrings from length 0 to whole of the two strings
// create compare function that will count how many changes (i.e. substitution/deletion/addition) necessary to obtain identical substring
// as it iterates, building out the substrings, that number can just be added to the previous
function levenshteinDist(str1, str2) {
    
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    let compArr1 = new Array(arr1.length + 1);
    let compArr2 = new Array(arr2.length + 1)
    let compareArr = [];
    for (let i = 0; i <= arr1.length; i++){
        for (let j = 0; j <= arr2.length; j++){
            let char1 = arr1[i];
            let char2 = arr2[j];

            compareArr[i][j]
        }
    }

}

console.log(levenshteinDist("abc", "yabd"), "should be 2")

//       _|a|ab|abc
//      | | |  |   |
//     y| |1|2 |3  |
//    ya| |1|1 |2  |
//   yab| |2|1 |1  |
//  yabd| |3|2 |2  |

console.log(levenshteinDist("biting", "mitten"), "should be 3?")


