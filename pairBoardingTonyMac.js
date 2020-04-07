#!usr/bin/env node
'use strict';


class MinMaxStack{
    constructor() {
        this.stack = [];
        this.minMaxStack = [];
    
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    pop() {
        this.minMaxStack.pop();
        return this.stack.pop();
    }
    push(number) {
        const newMinMax = { min: number, max: number };
        if (this.minMaxStack.length) {
            const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
            newMinMax.min = Math.min(lastMinMax.min, number);
            newMinMax.max = Math.max(lastMinMax.max, number)
        }
        this.minMaxStack.push(newMinMax);
        this.stack.push(number)
    }

    getMin() {
        let last = this.minMaxStack.length - 1;
        return this.minMaxStack[last].min
    }
    getMax() {
        let last = this.minMaxStack.length - 1;
        return this.minMaxStack[last].max
    }
    
}

function binarySearch(array, target) {
    if (array.length === 0) return -1;
    let midIdx = Math.floor(array.length / 2)
    let mid = array[midIdx];

    if (target > mid) {
        let returnVal = binarySearch(array.slice(midIdx + 1), target)
        return returnVal !== -1 ? returnVal + mididx + 1 : -1
    } else if (target < mid) {
        return binarySearch(array.slice(0, midIdx), target)
    } else {
        return midIdx
    }
}