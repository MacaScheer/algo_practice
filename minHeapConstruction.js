#!/usr/bin/env node
'use strict';

console.log(`MIN HEAP CONSTRUCTION. Min Heap property:  ${"\n"}Every node's value has to be less than or equal to its child nodes. ${"\n"}After we add a value to the heap (pushing it onto the end) ${"\n"}we sift it up to the correct position`);
console.log("siftDown and siftUp time-complexity: O(logN), eliminating half of the tree on every comparison")
// console.log("buildHeap time: O(N) using siftDown because as the number of nodes grows, the number of nodes that needed to be inspected in siftDown increases linear-ly")
console.log(`using siftDown, buildHeap takes O(N) time because the majority of the nodes are at the bottom and have less far to be sifted, ${"\n"}whereas if we call siftUp, the majority of the nodes being called siftUp on are at the bottom and have farther to sift and so will operate at O(NlogN)}`)
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
   const firstParentIdx = Math.floor((array.length - 2)/2)
		for (let currIdx = firstParentIdx; currIdx >= 0; currIdx--){
			this.siftDown(currIdx, array.length - 1, array)
		}
		return array
  }
  getLeftChildIdx(i, length) {
    let childIdx = (2 * i) + 1 <= length ? (2 * i) + 1 : -1
    return childIdx
  }
  getRightChildIdx(i, length) {
    let childIdx = (2 * i) + 2 <= length ? (2 * i) + 2 : -1
    return childIdx
  }
  getParentIdx(i) {
    let newIdx = Math.floor((i - 1) / 2);
    return newIdx >= 0 ? newIdx : -1
  }
  siftUp(idx, heap = this.heap) {
    let pIdx = this.getParentIdx(idx);
    while(pIdx !== -1 && heap[pIdx] > heap[idx]){
			this.swap(pIdx, idx, heap);
			idx = pIdx;
			pIdx = this.getParentIdx(pIdx)
		}
  }
	// siftDown(idx, endIdx, array) {
	//     let LChildIdx = this.getLeftChildIdx(idx, endIdx);
	//     let RChildIdx = this.getRightChildIdx(idx, endIdx);
	//     while (LChildIdx !== -1 && LChildIdx <= endIdx) {
	// 			let idxToSwap;
	// 			if (RChildIdx !== -1 && array[RChildIdx] < array[LChildIdx]) {
	// 					idxToSwap = RChildIdx
	// 			} else {
	// 					idxToSwap = LChildIdx
	// 			}
	// 			if (array[idxToSwap] < array[idx]) {
	// 					this.swap(idx, idxToSwap, array)
	// 					idx = idxToSwap;
	// 					LChildIdx = this.getLeftChildIdx(idx, endIdx)
	// 			} else {
	// 					return
	// 			}
	// 		}
	// }
	siftDown(currentIdx, endIdx, heap){
		let childOneIdx = currentIdx * 2 + 1;
		while(childOneIdx <= endIdx){
			const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
			let idxToSwap;
			if(childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]){
				idxToSwap = childTwoIdx
			} else {
				idxToSwap = childOneIdx
			}
			if(heap[idxToSwap] < heap[currentIdx]){
				this.swap(currentIdx, idxToSwap, heap);
				currentIdx = idxToSwap;
				childOneIdx = currentIdx * 2 + 1
			} else {
				return
			}
		}
	}
	
  swap(pIdx, idx, array = this.heap) {
       const temp = array[pIdx];
      array[pIdx] = array[idx];
      array[idx] = temp
  }
  insert(val) {
      this.heap.push(val);
      let idx = this.heap.length - 1;
      this.siftUp(idx, this.heap)
  }
  peek() {
      return this.heap[0]
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
		const valToRemove = this.heap.pop();
		this.siftDown(0, this.heap.length, this.heap)
		return valToRemove
  }
}
let test = new MinHeap([8,12,23,17,31,30,44,102,18])
console.log(test.heap)
test.siftUp(4)
console.log(test.heap)
// PSEUDOCODE: heaps are arrays that are ordered 