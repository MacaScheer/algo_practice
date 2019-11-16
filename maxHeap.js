class Heap {
  constructor(arr) {
    this.arr = arr;
  }
  getParentIdx(idx) {
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
    let parentIdx = this.getParentIdx(idx);
    if (this.arr[idx] > this.arr[parentIdx]) {
      [this.arr[parentIdx], this.arr[idx]] = [
        this.arr[idx],
        this.arr[parentIdx]
      ];
      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.arr.push(val);
    this.siftUp(this.arr.length - 1);
  }
  deleteMax() {
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }
  siftDown(idx) {
    let ary = this.array;
    let leftIdx = this.getLeftChild(1);
    let rightIdx = this.getRightChild(1);
    let leftVal = ary[leftIdx];
    let rightVal = ary[rightIdx];
    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;
    if (ary[idx] > leftVal && ary[idx] > rightVal) return;
    let swapIdx;
    if (rightval < leftVal) {
      swapIdx = leftIdx;
    } else {
      swapIdx = rightIdx;
    }
    [ary[idx], ary[swapIdx]] = [ary[swapIdx], ary[idx]];
    this.siftDown(swapIdx);
  }
}
