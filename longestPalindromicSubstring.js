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
function createMatrix(string) {
    let string1 = " " + string;
    let string2 = string + " ";
    let chArr1 = string1.split("");
    let chArr2 = string2.split("")
    let matrix = chArr1.map(el => (chArr2.map(ch => 0)))
    for (let i = 0; i < matrix.length; i++){
        let ch = chArr1[i];
        let ch2 = chArr2[chArr2.length - 1 - i]
        matrix[i][0] = ch;
        matrix[0][i] = ch2
    }
    return matrix
}


function longestPalidromicSubstring1(string) {
    const matrix = createMatrix(string);
    console.log(matrix);
    for (let i = 1; i < matrix.length; i++){
        for (let j = 1; j < matrix[i].length; j++){
            let el = matrix[i][j]
            let row = matrix[i][0]
            let col = matrix[0][j]
            // console.log("el:", el, " row:", row, " col:", col)
            if (row === col) {
                matrix[i][j] = 1
            }
        }
    }
    // console.log(matrix)
    let retString = findLongestStreak(matrix)
    return retString
}


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

// console.log(bruteForce("abaxyzzyxf"))

function longestPalidromicSubstring(string) {
    let pals = [];
    for (let i = 0; i < string.length; i++) {
        let pal1 = outwardCheckOdd(string, i)
        let pal2 = outwardCheckEven(string, i)
        pal1.length > pal2.length ? pals.push(pal1) : pals.push(pal2)
    }
    let max = -Infinity
    for (let j = 0; j < pals.length; j++){
        if (pals[j].length > max.length) max = pals[j]
    }
    return max
}

function outwardCheckEven(string, i) {
    let pal = ''
    let x = i;
    let y = i - 1;
    while (x < string.length && y >= 0) {
        if (string[x] === string[y]) {
            pal += string[x]
            pal = string[y].concat(pal)
            x++;
            y--;
        } else {
            return pal
        }
    }
    return pal
}
function outwardCheckOdd(string, i) {
    let pal = string[i];
    let x = i + 1;
    let y = i - 1;
    while (x < string.length && y >= 0) {
        if (string[x] === string[y]) {
            pal += string[x]
            pal = string[y].concat(pal)
            x++;
            y--
        } else {
            return pal
        }
    }
    return pal
}


console.log(outwardCheckEven('aabbaacc', 3));
console.log(outwardCheckOdd('aabbcbbaax', 4))
// console.log(longestPalidromicSubstring("abba"))
// console.log(longestPalidromicSubstring("abcba"))
// console.log(longestPalidromicSubstring("abaxyzzyxf"), "should return 'xyzzyx'");
