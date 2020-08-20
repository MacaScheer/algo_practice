#!/usr/bin/env node
'use strict';
/*
Find the maxPathSum for every subtree:

*/
function maxPathSumBinaryTree(root) {
        
}



function subTreeMax(root) {
    if (root.left === undefined && root.right === undefined) {
        return root.val
    }
    if (root === undefined) {
        return
    }


    let max = Math.max(root.val,
        root.val + root.left.val + root.right.val,
        root.left.val + root.val,
        root.val + root.right.val);
    
    
    if (max === root.val) {
        return ['UP']
        // but how to move up?
    } else if (max === root.val + root.left.val + root.right.val) {
        return ['LEFT', 'RIGHT']
    } else if (max === root.left.val + root.val) {
        return ['UP, LEFT']
    } else if (max === root.val + root.right.val) {
        return ['UP', 'RIGHT']
    }
}

class Node{
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}



let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(maxPathSumBinaryTree(a), "should equal 18, because 5 + 2 + 1 + 3 + 7");