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
      if (value < this.value) {
          if (this.left === null) {
              this.left = new BST(value);
            } else {
                this.left.insert(value)
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value)
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


    remove(value, parent = null) {
    //first search for the value
    //if it is a leaf node, make its parent's left/right relation = null
    //if it has left or right child nodes, find the left most child from the right subtree
        
        if (value < this.value) {  //traverse the tree until you reach the right place, recursively
            if (this.left !== null) {
                this.left.remove(value, this)
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this)
            }
        } else {
            if (this.left !== null && this.right !== null) { //if there are both left and right nodes
                this.value = this.right.getMinValue();       //replace with smallest value on right subtree
                this.right.remove(this.value, this);         //remove the smallest
            
            } else if (parent === null) {          //if this is the root node and only has a left or a right
                if (this.left !== null) {          //if it's only child node is the left, 
                    this.value = this.left.value;  //replace all connections and values with left
                    this.left = this.left.left;
                    this.right = this.left.right;
                } else if (this.right !== null) {  //if it's only child is the right,
                    this.value = this.right.value; //replace all connections and values with right
                    this.right = this.right.right;
                    this.left = this.right.left
                } else {                            //if its a single node tree, set value to null
                    this.value = null;
                }
            }
            else if (parent.left === this) {        //if is an only child on the left, with only a left or right child
                parent.left = this.left !== null ? this.left : this.right  //if it has a left, replace with left
            } else if (parent.right === this) {
                parent.right = this.left !== null ? this.left : this.right //if it has a right, replace with right
            
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
