#!/usr/bin/env node
'use strict';
var returnArr = [];
var usedEls = [];
function permutations(array){

    let i, el;
    for (i = 0; i < array.length; i++){
        el = array.splice(i, 1)[0]; //plucks elements one at a time from the array
        usedEls.push(el)
        if (array.length === 0) { //if array is empty push in usedEls
            returnArr.push(usedEls.slice())
        }
        permutations(array);
        array.splice(i,0, el)
        usedEls.pop()
    }
    return returnArr

}



console.log(permutations([1, 2, 3, 4, 5, 56]))
// const arr = ['a']
// arr.push([1, 2, 3, 4, 5, 6])
// console.log(arr)

var permArr = [],
    usedChars = [];

function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr
};


// console.log(permute([1, 2, 3, 4, 5, 56]))
