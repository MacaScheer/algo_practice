#!/usr/bin/env node
'use strict';

function levenshteinDistance(str1, str2) {
    
}

console.log(levenshteinDistance('', ''), "should be 0") //should be 0
console.log(levenshteinDistance('abc', 'abc'), "should be 0") //should be 0
console.log(levenshteinDistance('', 'abc'), "should be 3") //should be 3
console.log(levenshteinDistance('abc', 'yabcx'), "should be 2") //should be 2
console.log(levenshteinDistance('biting', 'mitten'), "should be 4") //should be 0
console.log(levenshteinDistance('cereal', 'saturday'), "should be 6") //should be 0
