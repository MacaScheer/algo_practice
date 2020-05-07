#!/usr/bin/env node
'use strict';

console.log("pair boarding session 05/06/2020")
console.log("Tony's Code: ")

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
    if (array.length === 1) return array[0];
    let midIdx = Math.floor(array / 2);
    let midEle = array[midIdx];
    // same to the right
    if (midEle === array[midIdx + 1]) {
        let length = array.length - midIdx;
        if (length % 2 === 0) {          //if side is even length, search left side
            oddOneOut(array.slice(0,midIdx))
        } else {                        //if side if odd length, search right side
            oddOneOut(array.slice(midIdx))
        }
    }
    //same to the left, i.e.  [1,1,2,2,4,5,5]
    else if (midEle === array[midIdx - 1]) {
        let length = midIdx
        if (length % 2 === 0) {  //search right
            oddOneOut(array.slice(midIdx))
        } else {
            oddOneOut(array.slice(0,midIdx))
        }
    } else {
        return midEle
    }

}
let arr1 = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(oddOneOut(arr1));
let arr2 = [3, 3, 7, 7, 10, 11, 11];
console.log(oddOneOut(arr2));