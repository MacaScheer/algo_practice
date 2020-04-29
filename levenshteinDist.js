#! /usr/bin/env node
'use strict';

console.log("Levenshtein Distance Algo")

function levenshteinDist(str1, str2) {
    
    let arr1 = str1.split("");
    let arr2 = str2.split("");


}

console.log(levenshteinDist("abc", "yabd"), "should be 2")

//       _|a|ab|abc
//      | | |  |   |
//     y| |1|2 |3  |
//    ya| |1|1 |2  |
//   yab| |2|1 |1  |
//  yabd| |3|2 |2  |

console.log(levenshteinDist("biting", "mitten"), "should be 3?")


