#!/usr/bin/env node
'use strict';
console.log("BFS")
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    let root = this;
		// console.log(root)
		const queue = [root];
		console.log(queue)
		while (queue.length > 0){
			let node = queue.shift;
			array.push(node.name);
			if (node.children.length > 0){
				queue.push(...node.children)
			}
		}
  }
}