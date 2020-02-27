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

class BST{
    constructor(root) {
        this.root = root;
    }

    findIdenticalNodes(root1 = this.root, root2, value) {
        if (value < root1.value) {
            this.findIdenticalNodes(root1.left, root.left, value)
        } else if (value > root1.value){
            this.findIdenticalNodes(root1.right, root2.right, value)
        } else {
            return [root1, root2]
        }
    }
}

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

//       13
//      /  \
//     11  19
//    / \    \
//   8   12   22

console.log(a.findIdenticalNodes(a1, 12));