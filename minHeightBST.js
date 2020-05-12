#!/usr/bin/env node
'use strict';

console.log("min height bst algorithm")

class BST{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value)
            } else {
                this.left.insert(value)
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value)
            } else {
                this.right.insert(value)
            }
        }
    }
}

function minHeightBst(array) {
    if (array.length === 0) return
    let midIdx = Math.floor(array.length / 2)
    let mid = array[midIdx]
    let root = new BST(mid);
    root.left = minHeightBst(array.slice(0, midIdx))
    root.right = minHeightBst(array.slice(midIdx))
}
let b1 = minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22])
console.log("using minHeightBst: ", b1)

let a = new BST(10);
let b = new BST(2);
let c = new BST(14);
let d = new BST(1);
let e = new BST(5);
let f = new BST(13);
let g = new BST(15);
let h = new BST(7);
let i = new BST(22);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.right = h;
g.right = i;

console.log("  a: ", a)
