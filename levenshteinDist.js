#! /usr/bin/env node
'use strict';

console.log("Levenshtein Distance Algo")

function levenshteinDist(str1, str2) {
    
    let arr1 = str1.split("");
    let arr2 = str2.split("");


}

console.log(levenshteinDist("abc", "yabd"), "should be 2")

//  _ a b c
// | | | | |
//y| |0|0|0|
//a| |1|0|0|
//b| |0|1|0|
//d| |0|0|0|

console.log(levenshteinDist("biting", "mitten"), "should be 3?")

//  _ b i t i n g
// | | | | | | | |
//m| |0|0|0|0|0|0|
//i| |0|1|0|1|0|0|
//t| |0|0|1|0|0|0|
//t| |0|0|1|0|0|0|
//e| |0|0|0|0|0|0|
//n| |0|0|0|0|1|0|
