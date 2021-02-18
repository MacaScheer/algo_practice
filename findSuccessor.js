#!/usr/bin/env node
'use strict';

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findSuccessor(tree, node) {
    let inOrderTraverse = getOrderTraverse(tree);
    for (let i = 0; i < inOrderTraverse.length; i++) {
        let currNode = inOrderTraverse[i];
        if (currNode !== node) continue;
        if (i === inOrderTraverse.length - 1) return null;
        return inOrderTraverse[idx + 1];
    }
    return null;
}

function getOrderTraverse(node, order = []) {
    if (node === null) return order;
    if (node.left) getOrderTraverse(node.left, order);
    order.push(node);
    if (node.right) getOrderTraverse(node.right, order);
    return order
}

let n = {
    "tree": {
        "nodes": [
            { "id": "1", "left": "2", "parent": null, "right": "3", "value": 1 },
            { "id": "2", "left": "4", "parent": "1", "right": "5", "value": 2 },
            { "id": "3", "left": null, "parent": "1", "right": null, "value": 3 },
            { "id": "4", "left": "6", "parent": "2", "right": null, "value": 4 },
            { "id": "5", "left": null, "parent": "2", "right": null, "value": 5 },
            { "id": "6", "left": null, "parent": "4", "right": null, "value": 6 }
        ],
        "root": "1"
    },
    "node": "5"
}
let bNode;
for (let node of n.tree.nodes) {
    console.log(node);
    bNode = new BinaryTree(node.value);
    bNode.left = node.left;
    bNode.right = node.right;
    bNode.parent = node.parent;
}
console.log(findSuccessor())

// IN ORDER TRAVERSAL
let queue = [];
/*
tree <ref *2> BinaryTreeWithParent {
  value: 1,
  left: <ref *1> BinaryTreeWithParent {
    value: 2,
    left: BinaryTreeWithParent {
      value: 4,
      left: [BinaryTreeWithParent],
      right: null,
      parent: [Circular *1]
    },
    right: BinaryTreeWithParent {
      value: 5,
      left: null,
      right: null,
      parent: [Circular *1]
    },
    parent: [Circular *2]
  },
  right: BinaryTreeWithParent {
    value: 3,
    left: null,
    right: null,
    parent: [Circular *2]
  },
  parent: null
}
node <ref *2> BinaryTreeWithParent {
  value: 5,
  left: null,
  right: null,
  parent: <ref *1> BinaryTreeWithParent {
    value: 2,
    left: BinaryTreeWithParent {
      value: 4,
      left: [BinaryTreeWithParent],
      right: null,
      parent: [Circular *1]
    },
    right: [Circular *2],
    parent: BinaryTreeWithParent {
      value: 1,
      left: [Circular *1],
      right: [BinaryTreeWithParent],
      parent: null
    }
  }
}
*/