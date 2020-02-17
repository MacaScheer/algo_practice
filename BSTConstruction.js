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
      while (node.value !== value) {
          if (value >= node.value) {
              if (node.right) {
                  node = node.right
              } else {
                  node.right = new BST(value);
                  node = node.right
              }
          } else if (value < node.value) {
              if (node.left) {
                  node = node.left
              } else {
                  node.left = new BST(value);
                  node = node.left
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

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}
