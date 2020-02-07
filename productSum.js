#!/usr/bin/env node

"use strict";


const productSum = function (array, num=1) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (Array.isArray(array[i])) {
            console.log("arr[i]: ", array[i], "Sum: ", sum)
            sum += productSum(array[i], num += 1)
        } else {
            sum += num * array[i]
        }
    }
return sum
}


const reducer = (acc, currVal) => acc + currVal
const sumMer = function (arr, num) {
    return arr.reduce(reducer) * num
}

console.log(productSum([1,[2,3],1]))
//[5,2,[7,-1],3,[6,[-13,8],4]] => (5 + 2 + 2(7 -1) + 3 + 2(6 + 3(-13 + 8) + 4))

//[1,[2,3[4,5]],6] => (1*(1 + 6)) + (2*(2+3)) + (3*(4 + 5))
//if integer, add to sum
//if array, increment num, iterate through, adding the integers multiplied by the count
//
//
//
//if num add to sum multiplied by current num
//if array recur adding one to num arg
//if 
