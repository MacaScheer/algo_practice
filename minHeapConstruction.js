#!/usr/bin/env node
'use strict';

console.log("MIN HEAP CONSTRUCTION");

class MinHeap{
    constructor(array) {
        this.heap = this.buildHeap(array)
    }

    buildHeap(array) {
        
    }
    getLeftChild(i, array) {
       return array[(2 * i) + 1] 
    }
    getRightChild(i, array) {
        return array[(2 * i) + 2]
    }
    getParent(i, array) {
        let newIdx = Math.floor((i - 1) / 2);
        return newIdx >= 0 ? array[newIdx] : array[0]
    }
}


// PSEUDOCODE: heaps are arrays that are ordered 