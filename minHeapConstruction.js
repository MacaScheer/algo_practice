#!/usr/bin/env node
'use strict';

console.log("MIN HEAP CONSTRUCTION. Min Heap property: Every node's value has to be less than or equal to its child nodes.");

class MinHeap{
    constructor(array) {
        // this.heap = array
        this.heap = this.buildHeap(array)
    }

    buildHeap(array) {
        // for (let i = 0; i < array.length; i++){
        //     let el = array[i];
        //     this.insert(el)
        // }
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
        // let pIdx = this.getParentIdx(idx);
        // // console.log("parentIdx:", pIdx, " i:", idx, " this.heap[i]:", this.heap[idx], " this.heap[parentIdx]:", this.heap[pIdx])
        // if (this.heap(pIdx) < this.heap(idx)) {
        //     this.swap(pIdx, idx)
        //     this.siftUp(pIdx)
        // }  
    }
    siftDown(idx) {
        // let LChild = this.getLeftChildIdx(idx);
        // let RChild = this.getRightChildIdx(idx);
        // if (this.heap[idx] > this.heap[RChild]) {
        //     this.swap(LChild, idx);
        //     this.siftDown(LChild)
        // } else if (this.heap[idx] > this.heap[RChild]) {
        //     this.swap(RChild, idx);
        //     this.siftDown(RChild)
        // }
    }
    swap(pIdx, idx) {
         let temp = this.heap[pIdx];
        this.heap[pIdx] = this.heap[idx];
        this.heap[idx] = temp
    }
    insert(val) {
        this.heap.push(val);
        let idx = this.heap.length - 1;
        this.siftUp(idx)
    }
    peak(idx) {
        return this.heap[idx]
    }
    remove(idx) {
        
    }
}
let test = new MinHeap([8,12,23,17,31,30,44,102,18])
console.log(test.heap)
test.siftUp(4)
console.log(test.heap)
// PSEUDOCODE: heaps are arrays that are ordered 