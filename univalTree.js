#!/usr/bin/env node
'use strict';
/*
A unival tree(which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

*/

class unival {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function univalTree(tree) {

}

let a = new unival(0);
let b = new unival(1);
let c = new unival(0);
let d = new unival(1);
let e = new unival(0);
let f = new unival(1);
let g = new unival(1);

a.left = b;
a.right = c;
c.left = d;
c.right = e;
d.left = f;
d.right = g;

console.log(univalTree(a), "should return 5");