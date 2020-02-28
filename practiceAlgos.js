#!/usr/bin/env node
'use strict';


// Step 1 − Set MIN to location 0
// Step 2 − Search the minimum element in the list
// Step 3 − Swap with value at location MIN
// Step 4 − Increment MIN to point to next element
// Step 5 − Repeat until list is sorted


function selectionSort(array) {
    let minIdx = 0;
    let newMinIdx;
    while (minIdx < array.length) {
        newMinIdx = findMin(array, minIdx + 1)
        if (array[newMinIdx] < array[minIdx]) {
            [array[minIdx], array[newMinIdx]] = [array[newMinIdx], array[minIdx]];
        }
        minIdx++;
    }
    return array
}
    
function findMin(array, i) {
    let min = Infinity;
    let minIDX;
    console.log(array)
    while(i < array.length) {
        if (array[i] < min) {
            min = array[i]
            minIDX = i
        }
        i++
    }
    return minIDX
}
    




// console.log(selectionSort([23,7,44,9,8,7,6,5]))

function moveZeros(array) {
    let endIdx = array.length - 1;
    let i = 0;
    while (i < endIdx) {
        if (array[i] === 0) {
            [array[i], array[endIdx]] = [array[endIdx], array[i]];
            endIdx--
        }
        i++
    }
    return array
}

// console.log(moveZeros([0, 23,0,0,4,0,4,65,78,3,5,1]))

class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// class BST{
//     constructor(root) {
//         this.root = root;
//     }

//     findIdenticalNodes(root1, root2, val) {
//         if (val < root1.val) {
//             if(root1.left) return this.findIdenticalNodes(root1.left, root2.left, val)
//         } else if (val > root1.val){
//            if(root1.right) return this.findIdenticalNodes(root1.right, root2.right, val)
//         } else {
//             return [root1, root2]
//         }
//     }
// }

let a = new Node(13);
let a1 = new Node(13);
let b = new Node(11);
let b1 = new Node(11);
let c = new Node(19);
let c1 = new Node(19);
let d = new Node(8);
let d1 = new Node(8);
let e = new Node(12);
let e1 = new Node(12);
let f = new Node(22);
let f1 = new Node(22);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
// let bst1 = new BST(a);
// let bst2 = new BST(a1)

//       13
//      /  \
//     11  19
//    / \    \
//   8   12   22

// console.log(bst1.findIdenticalNodes(a, a1, 12));




class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, max = Infinity, min = -Infinity) {
    if (tree === null) return true;
    let val = tree.value;
    if (val >= max || val < min) return false;
        const letfValid = this.validateBST(tree.left, val, min) 
        const rightValid = this.validateBST(tree.right, max, val)
    
    return letfValid && rightValid

}


function inOrderTraverse(tree, array) {
    if (tree.left) this.inOrderTraverse(tree.left, array)
    array.push(tree.value)
    if (tree.right) this.inOrderTraverse(tree.right, array)
    return array
}

function preOrderTraverse(tree, array) {
	array.push(tree.value)
	if(tree.left) this.preOrderTraverse(tree.left, array)
	if(tree.right) this.preOrderTraverse(tree.right, array)
	return array
}

function postOrderTraverse(tree, array) {
    if(tree.left) this.postOrderTraverse(tree.left, array)
	if(tree.right) this.postOrderTraverse(tree.right, array)
	array.push(tree.value)
	return array
}

function invertBinaryTree(tree) {
	if(tree === null) return
	let newLeft = null;
	let newRight = null;
	if(tree.left) newRight = tree.left
	if(tree.right) newLeft = tree.right
	tree.left = newLeft
	tree.right = newRight
	invertBinaryTree(tree.left)
	invertBinaryTree(tree.right)
}

function kadanesAlgorithm(array) {
	let idx1 = 0;
	let idx2 = 1;
	let maxSum = -Infinity;
    while (idx1 < array.length) {
        let nextSum = sumHelper(array.slice(idx1, idx2))
        console.log("idx1:", idx1, "  idx2:", idx2,"  maxSum:", maxSum, "   nextSum:", nextSum)
        if (nextSum > maxSum) {
            maxSum = nextSum;
            idx2++
        } else if (array[idx2] > maxSum) {
            maxSum = array[idx2];
            idx1 = idx2;
            idx2++
         }
        else {
            idx1 = idx2;
            idx2 = idx1 + 1;
        }
    }
    return maxSum
}

function sumHelper(subArr) {
    if (subArr.length === 1) return subArr[0]
	return subArr.reduce(summ)
}
const summ = (el1, el2) => {
	return el1+ el2
}
                        //    0,1,2,3, 4, 5
// console.log(kadanesAlgorithm([1, 1, 1, 1, -9, 10]))
console.log(kadanesAlgorithm([-10,-2,-9,-4,-8,-6,-7, -1,-3,-5]))