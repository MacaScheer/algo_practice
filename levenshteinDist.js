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

function levDist(str1, str2) {
    const edits = [];
    for (let i = 0; i < str2.length + 1; i++){
        const row = [];
        for (let j = 0; j < str1.length + 1; j++){
            row.push(j)
        }
        row[0] = i;
        edits.push(row)
    }


    for (let i = 1; i < str2.length + 1; i++){
        for (let j = 1; j < str1.length + 1; j++){
            if (str2[i - 1] === str1[j - 1]) {
                edits[i][j] = edits[i - 1][j - 1]
            } else {
                edits[i][j] = 1 + Math.min(edits[i - 1][j],edits[i][j-1], edits[i - 1][j - 1])
            }
        }
    }
    console.log(edits)
    return edits[str2.length][str1.length]
}


// console.log(levDist('abc', 'yabd'))
console.log(levenshteinDist("abc", "yabd"), "should be 2")

//       _|a|ab|abc
//      | | |  |   |
//     y| |1|2 |3  |
//    ya| |1|1 |2  |
//   yab| |2|1 |1  |
//  yabd| |3|2 |2  |

// console.log(levenshteinDist("biting", "mitten"), "should be 4?")


function levDistOptimized(str1, str2) {
    const small = str1.length > str2.length ? str2 : str1;  //'abc'
    const big = str1.length > str2.length ? str1 : str2;    //'yabd'

    const evenEdits = [];
    const oddEdits = new Array(small.length + 1, 0); //odd = [0,0,0,0]
    for (let j = 0; j < small.length + 1; j++){   //even = [0,1,2,3]
        evenEdits.push(j)
    }
    for (let i = 1; i < big.length + 1; i++){  //i = 1
        let currentEdits, previousEdits;
        if (i % 2 === 0) {
            currentEdits = evenEdits;
            previousEdits = oddEdits
        } else {
            currentEdits = oddEdits;                //  currentEdits = [0,1,0,0]
            previousEdits = evenEdits;              //  previousEdits = [0,1,2,3]
        }
        currentEdits[0] = i;                        //   currentEdits = [1,1,2,0]
        for (let j = 1; j < small.length + 1; j++){      //j = 1       //           j = 2
            if (big[i - 1] === small[j - 1]) {        //'[y]abd'    '[a]bc'    //'[y]abd'  'a[b]c'
                currentEdits[j] = previousEdits[j - 1]
            } else {
                currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1])  // currentEdits[2] = 1 + (previousEdits[1] = 1, previousEdits[1] = 2, currentEdits[0] = 1)
            }
        }
        console.log(" currentEdits: ",currentEdits, "  previousEdits:",previousEdits, "evenEdits: ", evenEdits, "  oddEdits: ",oddEdits)
    }
    return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length]

}
// console.log(levDistOptimized('abc', 'yabd'))
// console.log(levDistOptimized('biting', 'mitten'), "should be 4")

function pointers() {
    let a = [0,5];
    let b = a;
    b[1] += 1
    console.log(a)
    a[0] += 1
    console.log(b)
}

// console.log(pointers())