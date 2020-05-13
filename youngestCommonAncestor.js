#!/usr/bin/env node
'use strict';

console.log("Youngest Common Ancestor Algo:");

class AncestralTree{
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getYoungestCommonAncestor(topAncestor, descendent1, descendent2) {
    
}

let A = new AncestralTree("A");
let B = new AncestralTree("B");
B.ancestor = A;
let C = new AncestralTree("C");
C.ancestor = A;
let D = new AncestralTree("D");
D.ancestor = B;
let E = new AncestralTree("E");
E.ancestor = B;
let F = new AncestralTree("F");
F.ancestor - C;
let G = new AncestralTree("G");
G.ancestor = C;
let H = new AncestralTree("H");
H.ancestor = D;
let I = new AncestralTree("I");
I.ancestor = D;