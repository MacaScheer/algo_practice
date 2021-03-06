#!/usr/bin/env node
'use strict';

function levenshteinDistance(str1, str2) {
    let outterArr = twoArrMaker(str1, str2);
        for (let i = 0; i < outterArr.length; i++){
        let row = outterArr[i];
        for (let j = 0; j < row.length; j++){
            if (i > 0 && j > 0) {
                if (str2[i - 1] === str1[j - 1]) {
                    console.log("str1[i]: ",str2[i - 1], " str2[j]: ", str1[j - 1])
                    outterArr[i][j] = outterArr[i-1][j - 1];
                } else {
                    outterArr[i][j] = Math.min(outterArr[i-1][j-1], outterArr[i-1][j], outterArr[i][j - 1]) + 1;
                }
            } else {
                outterArr[i][j] = Math.max(i,j)
            }
        }
        }
    let cols = outterArr[0].length - 1;
    let rows = outterArr.length - 1;
    console.log(outterArr, "rows: ",rows, " cols: ", cols)
    console.log(outterArr[rows][cols])
    return outterArr[rows][cols]
    // return outterArr[outterArr[0].length-1][outterArr.length-1]
}

function twoArrMaker(str1, str2) {
    str2 = ' ' + str2
    str1 = ' ' + str1
    
    let rowArr = str2.split("");
    let colArr = str1.split("");
    let outterArr = [];
    for (let i = 0; i <= rowArr.length; i++){
        let row = [];
        for (let j = 0; j <= colArr.length; j++){
            row.push([])
        }
        outterArr.push(row)
    }
    outterArr[0][0] = 0;
    return outterArr;
}



// console.log(levenshteinDistance('', ''), "should be 0") //should be 0
// console.log(levenshteinDistance('abc', 'abc'), "should be 0") //should be 0
// console.log(levenshteinDistance('', 'abc'), "should be 3") //should be 3
// console.log(levenshteinDistance('abc', 'yabcx'), "should be 2") //should be 2
// console.log(levenshteinDistance('biting', 'mitten'), "should be 4") //should be 0
console.log(levenshteinDistance('cereal', 'saturday'), "should be 6") //should be 0

// console.log(twoArrMaker('abc','yabcx'))