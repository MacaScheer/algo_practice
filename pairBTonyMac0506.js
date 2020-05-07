#!/usr/bin/env node
'use strict';

console.log("pair boarding session 05/06/2020")
// console.log("Tony's Code: ")

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
 
}
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    if (root === null) return null;
    if (root.val < L) {
        
    }
    if (root.val > R) {
        
    } else {

        return root
    }
};


let A = new TreeNode()
// console.log(trimBST(root1, A, D))

// Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10
// [1,1,2,2,4,5,5]
// [1,1,2,3,3,4,4]


function oddOneOut(array) {
    // console.log(array)
    if (array.length === 1) return array[0];
    let midIdx = Math.floor(array.length / 2);
    let midEle = array[midIdx];
    // same to the right
    // console.log("midEle: ", midEle)
    // console.log("to the left: ", array[midIdx - 1])
    // console.log("to the right : ", array[midIdx + 1])
    if (midEle === array[midIdx + 1]) {
        // console.log("same to the right")
        let length = array.length - midIdx;
        if (length % 2 === 0) {
            let newArr = array.splice(0,midIdx)          //if side is even length, search left side
            // console.log("search left side:", newArr)
            oddOneOut(newArr)
        } else {
            let newArr = array.splice(midIdx)
            // console.log("search right side: ", newArr)                  //if side if odd length, search right side
            oddOneOut(newArr)
        }
    }
    //same to the left, i.e.  [1,1,2,2,4,5,5]
    else if (midEle === array[midIdx - 1]) {
        // console.log("same to the left")
        let length = midIdx - 1
        if (length % 2 === 0) {  //search right
            let newArr = array.splice(midIdx)   
            // console.log("search right side: ", newArr)
            oddOneOut(newArr)
        } else {
            let newArr = array.splice(0,midIdx)  
            // console.log("search left side:", newArr)
            oddOneOut(newArr)
        }
    } else {
        console.log("found the odd one out", midEle)
        return midEle
    }

}
let arr1 = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(oddOneOut(arr1));
// let arr2 = [3, 3, 7, 7, 10, 11, 11];
// console.log(oddOneOut(arr2));