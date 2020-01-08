class MaxHeap {
  constructor() {
    this.array = [null];
  }
  getParent(idx) {
    return Math.floor(idx / 2);
  }
  getLeftChild(idx) {
    return idx * 2;
  }
  getRightChild(idx) {
    return idx * 2 + 1;
  }
  siftUp(idx) {
    if (idx === 1) return;
    let parentIdx = this.getParent(idx);
    if (this.array[parentIdx] < this.array[idx]) {
      [this.array[parentIdx], this.array[idx]] = [
        this.array[idx],
        this.array[parentIdx]
      ];
      this.siftUp(parentIdx);
    }
  }
  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }
  siftDown(idx) {
    let ar = this.array;
    let leftChildIdx = this.getLeftChild(idx);
    let rightChildIdx = this.getRightChild(idx);
    let leftVal = ar[leftChildIdx];
    let rightVal = ar[rightChildIdx];
    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;
    if (ar[idx] > leftVal && ar[idx] > rightVal) return;
    let swapIdx;
    if (leftVal > rightVal) {
      swapIdx = leftChildIdx;
    } else {
      swapIdx = rightChildIdx;
    }
    [ar[idx], ar[swapIdx]] = [ar[swapIdx], ar[idx]];
    this.siftDown(swapIdx);
  }

  deleteMax() {
    if (this.array.length === 2) return this.array.pop();
    if (this.array.length === 1) return null;
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }
}

const findKthLargest = function(nums, k){
  let heap = new MaxHeap()

  while (nums.length > 0) {
    heap.insert(nums.pop())
  }
  for (let i = 0; i < k - 1; i++){
    heap.deleteMax()
  }
  return heap.deleteMax()
}

console.log(findKthLargest([-1, 2, 0], 2))
console.log("TWO")
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))

module.exports = {
  MaxHeap
};
