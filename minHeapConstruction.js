#!/usr/bin/env node
'use strict';

console.log(`MIN HEAP CONSTRUCTION. Min Heap property:  ${"\n"}Every node's value has to be less than or equal to its child nodes. ${"\n"}After we add a value to the heap (pushing it onto the end) ${"\n"}we sift it up to the correct position`);

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
        // call siftDown method on every parentNode in heap/tree
        let lastIdx = array.length - 1;
        let pIdx = this.getParentIdx(lastIdx)
        let pNodes = []
        while (pIdx >= 0) {
            pNodes.push(pIdx);
            pIdx = this.getParentIdx(pIdx)
        }
        for (let i = 0; i < pNodes.length; i++){
            this.siftDown(pNodes[i])
        }
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
        if (this.heap[pIdx] > this.heap[idx]) {
            this.swap(pIdx, idx);
            this.siftUp(pIdx)
        }
    }
    siftDown(idx) {
        let LChild = this.getLeftChildIdx(idx);
        let RChild = this.getRightChildIdx(idx);
        let smaller;
        if (this.heap[LChild] && this.heap[RChild]) {     
            smaller = this.heap[LChild] > this.heap[RChild] ? RChild : LChild
        } else if (this.heap[LChild]) {
            smaller = LChild
        } else if (this.heap[RChild]) {
            smaller = RChild
        }
        this.swap(idx, smaller);
        this.siftDown(smaller)
    }
    swap(pIdx, idx) {
         let temp = this.heap[pIdx];
        this.heap[pIdx] = this.heap[idx];
        this.heap[idx] = temp
    }
    insert(val) {
        this.heap.unshift(val);
        
        this.siftDown(0)
    }
    peak(idx) {
        return this.heap[idx]
    }
    remove() {
        let idxE = this.heap.length - 1;
        this.swap(0, idxE);
        this.heap.pop();
        this.siftDown(0)
    }
}
let test = new MinHeap([8,12,23,17,31,30,44,102,18])
console.log(test.heap)
test.siftUp(4)
console.log(test.heap)
// PSEUDOCODE: heaps are arrays that are ordered 