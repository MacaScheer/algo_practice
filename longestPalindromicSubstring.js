#!/usr/bin/env node
'use strict';

console.log(`Longest Palindromic Substring${"\n"}PSEUDOCODE APPROACH: `);
console.log(`FIRST APPROACH: treat each idx (starting from the middle, iterating forward and backward${"\n"}comparing each char against the other, mirrored against the supposed middle ${"\n"} Would operate O(n**2) possibly`)
console.log("SECOND APPROACH: create matrix of the characters in the string with the i indices bring the\nstring forwards and the j indices of the matrix as the string going backwards \nand mark with booleans when chars in the rows match in the columns")
//     _ | a | b | a | x | y | z | z | y | x |
// _ |   | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  
// x | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
// y | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
// z | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 |
// z | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
// y | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
// x | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 |
// a | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
// b | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
// a | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
function longestPalidromicSubstring(string) {
    let chArr = string.split("");

}

// console.log(longestPalidromicSubstring("abaxyzzyxf"), "should return 'xyzzyx'");

function bruteForce(string) {
    let arr = [];
    const charArr = string.split("");
    for (let i = 0; i < charArr.length; i++){
        for (let j = i + 1; j < charArr.length; j++){
            let subString = charArr.slice(i, j).join("");
            arr.push(subString);           
        }
    }
    return [arr.length, string.length]
}

console.log(bruteForce("abaxyzzyxf"))