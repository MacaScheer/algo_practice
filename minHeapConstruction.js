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
    siftUp(i) {
        let array = this.heap
        let pIdx = this.getParentIdx(i);
        console.log("parentIdx:", pIdx, " i:", i, " this.heap[i]:", this.heap[i], " this.heap[parentIdx]:", this.heap[pIdx])
        // this.heap[parentIdx,i] = this.heap[i,parentIdx]
        // [array[pIdx], array[i]] = [array[i], array[pIdx]]
        let temp = array[pIdx];
        array[pIdx] = array[i];
        array[i] = temp
    }
}
let test = new MinHeap([8,12,23,17,31,30,44,102,18])
console.log(test.heap)
test.siftUp(4)
console.log(test.heap)
// PSEUDOCODE: heaps are arrays that are ordered 