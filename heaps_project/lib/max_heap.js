class MaxHeap {
    constructor() {
        this.array = [null]
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
        if (idx === 1) return
        let parentIdx = this.getParent(idx)
        let parentVal = this.array[parentIdx];
        if (parentVal < this.array[idx]) {
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]]
            this.siftUp(parentIdx)
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1)
    }

    siftDown(idx) {
        
        let leftChildIdx = this.getLeftChild(idx);
        let rightChildIdx = this.getRightChild(idx);
        let leftVal = this.array[leftChildIdx] 
        let rightVal = this.array[rightChildIdx]
        leftVal = leftVal === undefined ? -Infinity : leftVal
        rightVal = rightVal === undefined ? -Infinity : rightVal
        let val = this.array[idx]
        if (val > leftVal && val > rightVal) {
            return
        }
            let swapIdx;
            if (leftVal > rightVal) {
                swapIdx = leftChildIdx;
            } else {
                swapIdx = rightChildIdx;
            }
        [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]]
        this.siftDown(swapIdx)
    }
}

module.exports = {
    MaxHeap
};