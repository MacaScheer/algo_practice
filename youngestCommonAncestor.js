#!/usr/bin/env node
'use strict';

console.log("Youngest Common Ancestor Algo:");
// PSEUDOCODE:
// use a BFS approach to traversing the tree
// use a queue to keep all nodes of a certain level
// once one of the descendents has been traversed, store that descendent's ancestor, and all descendents
// until the second descendent has been traversed. 
// but since there are only upwards references are stored on each node, we have to traverse upwards.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	let depthOne = findDepth(descendentOne);
	let depthTwo = findDepth(descendentTWo);
	let deeper = depthTwo > depthOne ? descendentTwo : descendentTwo;
	let diff = Math.abs(depthOne - depthTwo)
	let deeperMovedUp = moveUp(deeper, findDepth(deeper,diff))
	
	while(node.ancestor){
		if(node.name === descendentTwo.ancestor.name){
			return descendentTwo.ancestor.name
		}
		let node = node.ancestor
	}
}
function moveUp(node, diff){
	while(diff > 0){
		node = node.ancestor
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