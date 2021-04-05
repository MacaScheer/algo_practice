#!/usr/bin/env node
'use strict'

/*
given an array of size n, and another of size k, where n>k
determine the array of size n+k-1 formed by sliding the array fo size k across array n
returning the maximum element in the window. For every position i in the array,
the array ends at the position, covering (i-k, i).
[5,2,3,7,4] k = 3
[5], [5,2], [5,2,3], [2,3,7], [3,7,4], [7,4], [4]
the max of each array pushed into a single output array:
[5,5,5,7,7,7,4]

What I plan to do:
iterate over the array of length n, incrementing two indices that stand for the 
start, i and end, j of the window, k. Stopping when i is at n - 1.
There would have to be an inner loop that pushes elements from n into each k that is formed
and simultaneously could be calculating the maximum element in each of those sub arrays to be pushed into 
the output array.
*/

const slidingWindow = (array, k) => {
    let outputArray = [];
    let start = 0 - k + 1;
    let end = 1;
    while (start < array.length) {

        end = start + k;
        if (start >= 0) {
            outputArray.push(maxOfWindow(start, end, array))
        } else {
            outputArray.push(maxOfWindow(0, end, array));
        }
        start++;
    }
    return outputArray;
}
const maxOfWindow = (start, end, array) => {
    let window = array.slice(start, end);
    // console.log("WINDOW: ", window);
    return Math.max(...window);
}

const slidingWindowTwo = (array, k) => {
    let start = 0 - k + 1;
    let end = 1;
    while (start < array.length) {

        end = start + k;
        if (start >= 0) {
            if (maxOfWindow(start, end, array)) {
                return true;
            }
        } else {
            if (maxOfWindow(0, end, array)) {
                return true;
            };
        }
        start++;
    }
    return false;
}

const containsDuplicates = (start, end, array) => {
    let window = array.slice(start, end);
    let dupesArr = [];
    for (let i = 0; i < window.length; i++) {
        let el = window[i];
        if (dupesArr.includes(el)) return true
        dupesArr.push(el)
    }
    return false
}

// console.log(maxOfWindow(0, 2, [5, 2, 3, 7, 4]))
console.log(slidingWindow([5, 2, 3, 7, 4], 3), " should result in [5,5,5,7,7,7,4]")

console.log(slidingWindowTwo([5, 2, 3, 7, 3, 4], 3), " should return true");