#!/usr/bin/env node
'use strict'; 

// const numWaysToMakeChange = function(coins, target){


// }


// console.log(numWaysToMakeChange([1, 5, 10], 6), "should be 2") //⇒ 2
// console.log(numWaysToMakeChange([2, 3, 4, 7], 0), "should be 1") //⇒ 1
// console.log(numWaysToMakeChange([2, 4], 7), "should be 0") //⇒ 0
// console.log(numWaysToMakeChange([1, 5, 10, 25], 25), "should be 13" )//⇒ 13


const kadanesalgo = function (array) {
    
    let sumsArr = [array[0]];

    for (let i = 1; i < array.length; i++) {
        let element = array[i];
        let prevSum = array[i - 1]
        let newSum = prevSum + element
        if(newSum >= prevSum){
            sumsArr.push(newSum)
        } else {
            sumsArr.push(prevSum)
        }
    }
    return max(sumsArr)
}


function max(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i]> max) max = arr[i]
    }
    return max
}

console.log(kadanesalgo([3,5,-9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))