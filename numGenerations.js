#!/usr/bin/env node
'use strict';

class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
d.left = f;


function numGenerations(root) {
    let stack = [];
    stack.unshift({ node: root, level: 0 })
    let levels = [];
    while (stack.length) {
        const { node, level } = stack.pop();
        if (node === null) continue;
        levels.push(level)
        stack.push({ node: node.left, level: level + 1 })
        stack.push({ node:node.right, level: level + 1 })
    }
    return Math.max(...levels)
}

console.log(numGenerations(a));