#!/usr/bin/env node
'use strict';

console.log("Youngest Common Ancestor Algo:");
// PSEUDOCODE:
// use a BFS approach to traversing the tree
// use a queue to keep all nodes of a certain level
// OR, find the deeper of the two descendents
// move the deeper up to the level of the other descendent, while noting which one is deeper
// traverse from both up in tandem until finding a common ancestor
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	let depthOne = findDepth(descendantOne);
    let depthTwo = findDepth(descendantTwo);
    let deep, shallow
    if (depthOne > depthTwo) {
        deep = descendantOne;
        shallow = descendantTwo
    } else {
        deep = descendantTwo;
        shallow = descendantOne;
    }

    let diff = Math.abs(depthOne - depthTwo)
    // console.log("diff: ",diff, deep.name,shallow.name)
	let deeperMovedUp = moveUp(deep, diff, topAncestor)
	// console.log("deeperMovedUp: ", deeperMovedUp.name)
	while(deeperMovedUp.ancestor && shallow.ancestor){
        if (deeperMovedUp.name === shallow.name) {
            return shallow.name;
        }
        deeperMovedUp = deeperMovedUp.ancestor
        shallow = shallow.ancestor
    }
    return deeperMovedUp.name
}
function moveUp(node, diff, topAncestor) {
    // console.log("name: ",node.name, " diff: ", diff, " topAncestor: ", topAncestor.name)
    while (diff > 0) {
        // console.log("node.name: ", node.name)
        node = node.ancestor
        diff--
	}
	return node
}

function findDepth(node){
	let counter = 0;
	while(node.ancestor){
		node = node.ancestor;
		counter++
	}
	return counter
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

console.log(getYoungestCommonAncestor(A, E, I), "should be node B")