#!/usr/bin/env node
'use strict';

console.log("PERMUTATIONS");

function getPermutations(array){
    let counter = 0
    let i = 0;
    let permsArr = [];
    // while (i < numFact(array.length)) {
        
    // }
    for (let i = 0; i < array.length; i++){
        let el = array[i];
        let newRemainders = pluck(array, i);
        let subArr = [];
        for (let j = 0; j < newRemainders.length; j++){
            
        }

    }
    // getPermutations(array, i, permsArr);
    // let permsArr = rems.map(r => rems.unshift(firstEl));
    // return permsArr.push(...array);
}

function onePerm(array) {
    let onePerm = []
     for (let i = 0; i < array.length; i++){
        let el = array[i];
         let remainders = pluck(array, i);
        for (let j = 0; j < remainders.length; j++){
            onePerm.push(insert(remainders, j, el))
        }

     }
    return onePerm
}

function insert(array, idx, el) {
    if (idx === 0) {
        return array.unshift(el)
    } else if (idx === array.length - 1) {
        return array.push(el)
    } else {
        let firstHalf = array.slice(0, idx);
        let secondHalf = array.slice(idx);
        return firstHalf.concat[el].concat(secondHalf);
    }
}
function pluck(array, idx) {
    if (idx === 0) {
        return array.slice(1)
    } else if (idx === array.length - 1) {
        return array.slice(0, idx)
    } else {
        let firstHalf = array.slice(0, idx);
        let secondHalf = array.slice(idx + 1);
        return firstHalf.concat(secondHalf)
    }
}
// console.log(pluck([0, 1, 2, 3, 4, 5, 6], 5))
// console.log(pluck([0, 1, 2, 3, 4, 5, 6], 0));
// console.log(pluck([0, 1, 2, 3, 4, 5, 6], 6));

function numFact(n) {
    if (n === 1) return n;
    return numFact(n - 1) * n
}

// console.log(getPermutations([1, 2, 3]), "should be [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]");