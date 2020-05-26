#!/usr/bin/env node
'use strict';

console.log("Node Depths: \n PSEUDOCODE: DFS Search through the branches and add node depths to a counter \n keep track of current node depth i.e. within each stack of the DFS search.");

class BinaryTree{
    constructor(value) {
        this.value = value;
        this.left, this.right = null;
    }
}
function nodeDepths(root) {
    let nodeDepth = 0;

}

function DFS(node, val) {

    if (node.value === val) return true;
    if (node.left) {
        return DFS(node.left, val)
    }
    if (node.right) {
        return DFS(node.right, val)
    }
    if (!node.left && !node.right) return;
}


let A = new BinaryTree(1);
let B = new BinaryTree(2);
let C = new BinaryTree(3);
let D = new BinaryTree(4);
let E = new BinaryTree(5);
let F = new BinaryTree(6);
let G = new BinaryTree(7);
let H = new BinaryTree(8);
let I = new BinaryTree(9);
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;
D.left = H;
D.right = I;

console.log(DFS(A, 9));

// console.log(nodeDepths(A));