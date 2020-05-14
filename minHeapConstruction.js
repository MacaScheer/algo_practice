#!/usr/bin/env node
'use strict';

console.log("MIN HEAP CONSTRUCTION");

class MinHeap{
    constructor(array) {
        this.heap = array
        // this.heap = this.buildHeap(array)
    }

    buildHeap(array) {
        
    }
    getLeftChildIdx(i) {
       return (2 * i) + 1
    }
    getRightChildIdx(i) {
        return (2 * i) + 2
    }
    getParentIdx(i) {
        let newIdx = Math.floor((i - 1) / 2);
        return newIdx >= 0 ? newIdx : 0
    }
    siftUp(idx) {
        let pIdx = this.getParentIdx(idx);
        // console.log("parentIdx:", pIdx, " i:", idx, " this.heap[i]:", this.heap[idx], " this.heap[parentIdx]:", this.heap[pIdx])
        if (this.heap(pIdx) < this.heap(idx)) {
            this.swap(pIdx, idx)
            this.siftUp(pIdx)
        }
        
    }
    swap(pIdx, idx) {
         let temp = this.heap[pIdx];
        this.heap[pIdx] = this.heap[idx];
        this.heap[idx] = temp
    }
}
let test = new MinHeap([8,12,23,17,31,30,44,102,18])
console.log(test.heap)
test.siftUp(4)
console.log(test.heap)
// PSEUDOCODE: heaps are arrays that are ordered 