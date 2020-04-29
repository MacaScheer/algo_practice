#!/usr/bin/env node
'use strict';

class BinaryTree{
    constructor(val) {
        this.val = val;
        this.left, this.right = null;
    }
}

function branchSums(root) {
    let results = [];
    let branchSum = 0;
    if (root.val === null) {
        results.push(branchSum)
    }
}

let a = new BinaryTree(1);
let b = new BinaryTree(2);
let c = new BinaryTree(3);
let d = new BinaryTree(4);
let e = new BinaryTree(5);
let f = new BinaryTree(6);
let g = new BinaryTree(7);
let h = new BinaryTree(8);
let i = new BinaryTree(9);
let j = new BinaryTree(10);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
d.right = i;
e.left = j;




// console.log(branchSums(a))


const decodeAtIndex = function(S, K) {
    let tape = "";
    let nums = "23456789";
    let alph = "abcdefghijklmnopqrstuvwxyz"; 
    for(let i = 0; i < S.length; i++){
        let char = S[i];	
        if(nums.includes(char)){
            let num = parseInt(char);
            let nextSection = tape; 
            for (let j = 0; j < num - 1; j++){  
                tape += nextSection       
            }
        } else if (alph.includes(char)){
            tape += char
        }
    }
    console.log(tape)
    return tape[K - 1]
}

let s1 = "leet2code3", k1 = 10
console.log(decodeAtIndex(s1, k1))