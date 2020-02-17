#!/usr/bin/env node
'use strict';
console.log("HERE")

function moveElementToEnd(array, toMove) {
    if (array.length === 0) return array;
    let i = 0; let j = array.length - 1;
    while (i !== j) {
        let iEl = array[i]
        let jEl = array[j]
        if (iEl === toMove && jEl !== toMove) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        } else if (iEl === toMove && jEl === toMove) {
            j--
        } else if (iEl !== toMove) {
            i++
        }
    }
    return array
}

console.log(moveElementToEnd([2,1,2,2,2,3,4,2], 2))