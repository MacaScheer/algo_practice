#!/usr/bin/env node

"use strict";

function selectionSort(array) {
	let start = 0
    
    while (start < array.length - 1) {
        let smallest = start;


        for (let i = start + 1; i < array.length; i++){
            if (array[i] <= array[smallest]) smallest = i;            
        }
        [array[start], array[smallest]] = [array[smallest], array[start]]
        start++
    }
        return array
}

console.log(selectionSort([5,8,2,9,6,3,4]))