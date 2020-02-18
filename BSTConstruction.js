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
      if (value < this.value) {
          if (this.left === null) {
              return false;
          } else {
              return this.left.contains(value)
        }
      } else if (value > this.value) {
          if (this.right === null) {
              return false;
          } else {
              return this.right.contains(value)
          }
      } else {
          return true
    }
  }

    findLeftMostChildFromRightSubTree() {
        let node = this;
        while (currNode.left) {
            node = node.left
        }
        return node.value
    }


    remove(self, value, parent = null) {
    //first search for the value
    //if it is a leaf node, make its parent's left/right relation = null
    //if it has left or right child nodes, find the left most child from the right subtree
        if (value < this.value) {
            if (this.left !== null) {
                this.left.remove(value, this)
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this)
            }
        } else {
            if (this.left !== null && this.right !== null) {
                this.value = this.right.getMinValue();
                this.right.remove(value, this);
            } else if (parent === null) {
                if (this.left !== null) {
                    this.value = this.left.value;
                    this.left = this.left.left;
                    this.right = this.left.right;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.right = this.right.right;
                    this.left = this.right.left
                } else {
                    this.value = null;
                }
            }
            else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right
            } else if (parent.right === this) {
                parent.right = this.left !== null ? this.left : this.right
            }
        } 
    return this;
    }
    getMinValue() {
        if (this.left !== null) {
            return this.left.getMinValue()
        } else {
            return this.value
        }
    }
}
