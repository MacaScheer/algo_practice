#!/usr/bin/env node
'use strict';
console.log("HERE")

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
		 let node = this;
      while (node) {
          if (value >= node.value) {
              if (node.right) {
                  node = node.right
              } else {
                  node.right = new BST(value);
                  break;
              }
          } else if (value < node.value) {
              if (node.left) {
                  node = node.left
              } else {
                  node.left = new BST(value);
                 break;
              }
          }
      }
    return this;
  }

  contains(value) {
      let node = this;
      
      while (node.value !== value) {
          if (node.value === value) return true;
          if (value > node.value) {
              if (node.right) {
                  node = node.right
              } else {
                    return false
              }
          } else {
              if (node.left) {
                node = node.left
              } else {
                  return false
            }
          }
      }
  }

    findLeftMostChildFromRightSubTree() {
        let node = this;
        let switcher = false;
        node = node.right
        while (switcher === false) {
            switcher = true;
            if (node.left) {
                node = node.left
                switcher = false;
          }
        }
        return node;
    }

    isLeafNode() {
        if (this.left === null && this.right === null) return true

        return false
    }

    remove(self, value, parentNode = null) {
    //first search for the value
    //if it is a leaf node, make its parent's left/right relation = null
    //if it has left or right child nodes, find the left most child from the right subtree
        if (!contains(value)) return false;
        let currNode = self;
        let parentNode;
        while (currNode) {
            if (value < currNode.value) {
                parentNode = currNode
                currNode = currNode.left
                
            } else if (value > currNode.value) {
                parentNode = currNode;
                currNode = currNode.right
            } else {
                if (currNode.left && currNode.right) {
                    currNode.value = currNode.findLeftMostChildFromRightSubTree()
                    currNode.right.remove(currNode.value, currNode)
                } else if (parentNode.left === currNode) {
                    if (currNode.left) {
                        parentNode.left = currNode.left
                    } else {
                        parentNode.left = currNode.right
                    }
                } else if (parentNode.right === currNode) {
                    if (currNode.left) {
                        parentNode.right = currNode.left
                    } else {
                        parentNode.right = currNode.right
                    }
                }
            }
        }
    return this;
  }
}