let heap = new Heap([null, 42, 32, 24, 30, 9, 20, 18, 2, 7]);

class Heap {
  constructor(arr) {
    this.arr = arr;
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
  insert(num) {
    this.arr.push(num);
    this.siftUp(this.arr.length);
  }
  siftUp(idx) {
    if (idx === 1) return;
    let parentIdx = this.getParent(idx);
    if (this.arr[parentIdx] < this.arr[idx]) {
      [this.arr[parentIdx], this.arr[idx]] = [
        this.arr[idx],
        this.arr[parentIdx]
      ];
    }
    this.siftUp(parentIdx);
  }
}
