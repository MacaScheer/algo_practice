#!/usr/bin/env node
'use strict';
/*
takes in an array of integers and returns an array of length two, 
representing the largest range of integers contained in that array.
A range of numbers is defined as a set of numbers that come right after each other
in the set of real integers. For instance, 
the output array [2,6] represents the range {2,3,4,5,6}, which is of length 5.
Numbers don't need to be sorted or adjacent in the input array in order to form a range
APPROACH:
It's necessary to iterate over the integers at least once,
and to keep track as each integer as possibly the start of a new range.
Build an object that has each integer as a key, representing the starting integer,
with its value being an array, with the following integers that are contiguous

For each number in the integer array, 
check if it is one bigger than any of the integers already in the object
If it isn't, then add it in as another possible starting integer

To check, we need to check if there is a number that precedes the current one, and further,
that it's array for that key, has an integer in the last place of its array that is the very number
before the integer we're checking.

To build this, we need to build an object with the integers as the keys, each with an array as its value, that would contain
all of the numbers that directly follow that key in sequence

However, the array would need to be sorted for this to work!



ALGOEXPERT HINTS:
Iterate through once, creating an object with each unique integer as a key pointing to false
iterate through once more, this time stopping at every nnumber to check if the number is marked as "visited"
in the object. If it is, skip  it;if it isn't, start expanding outwards from the number 
with a left number and a right number, continuously checking if those left and right numbers are in the object
mark them as visited if they are. This should allow you to quickly find the largest range in which the current
number is contained, all while setting you up not to perform unnecessary work later.
*/
function largestRange(integers) {
    let obj = {};
    for (let i = 0; i < integers.length; i++) {
        let int = integers[i]
        if (obj[int] === undefined) {
            obj[int] = false
        }
    }
    let range = [];
    for (let i = 0; i < integers.length; i++){
        let int = integers[i]
        if (obj[int] !== "visited") {
            let newRange = [...countOutwards(int, integers, obj)];
            if (newRange.length > range.length) {
                range = newRange;
            }
        } 
    }
    return [range[0], range[range.length - 1]]
}

    function countOutwards(int, integers, object) {
        let range = [int]
        let cont = true
        let Fint = int;        
        let Rint = int - 1;
        while (cont) {
            console.log("Fint: ", Fint, " Rint:", Rint, " range: ", range)
            Fint++
            if (object[Fint] !== undefined) {
                object[Fint] = "visited"
                // cont = true
                range.push(Fint)
            }
            if (object[Rint] !== undefined) {
                object[Rint] = "visited"
                // cont = true
                range.unshift(Rint)
                Rint--
            }
            else if (object[Fint] === undefined && object[Rint] === undefined) {
                cont = false
            }
        }
        return range
    }

console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]))




    // integers = radixSort(integers)
    // // let startInt;
    // let arr = []
    // for (let i = 0; i < integers.length; i++){
        
    // }
    // console.log(obj)
    // return findLongestArr(obj)
// }
// function insertObj(integers) {
//     let obj = {}
//     for (let i = 0; i < integers.length; i++){
//         obj[integers[i]] = []
//     }
//     return obj
// }



function findLongestArr(object) {
    let nums;
    let longest;
    for (let key in object) {
        if (object[key].length > longest) {
            longest = object[key].length;
            nums = [key, object[key][longst - 1]]
        }
    }
    return nums
}

function radixSort(array) {
    let maxDig = longestDigits(array);
    for (let i = 1; i <=maxDig; i++){
        array = sortByDigit(i, array)
    }
    return array
}

function sortByDigit(digit, array) {
    let buckets = [];
    for (let i = 0; i < 10; i++){ buckets.push([]) }
    for (let i = 0; i < array.length; i++){
        let num = array[i];
        let dig = getDigitAtPlace(num, digit)
        buckets[dig].push(num)
    }
    let newArr = [];
    for (let i = 0; i < buckets.length; i++){
        if (buckets[i].length > 0) {
            newArr.push(...buckets[i])
        }
    }
    return newArr
}

function getDigitAtPlace(number, place) {
    let dig = number % (10 ** place)
   return Math.floor(dig / (10 ** (place - 1)))
}

// console.log(getDigitAtPlace(3456, 2));

function longestDigits(array) {
    let max = Math.max(...array);
    return max.toString().length
}



// console.log(sortByDigit(3,[22,34534,546,766,4,23,45,999,34300,12345,234,55,343,4556]))
// console.log(getDigitAtPlace(12345,5))
// console.log(radixSort([22, 34534, 546, 766, 4, 23, 45, 999, 34300, 12345, 234, 55, 343, 4556]))

// console.log(largestRange([1,11,3,0,15,5,2,4,10,7,12,6]), "should be [0,7], because {0,1,2,3,4,5,6,7} is present in the input array")