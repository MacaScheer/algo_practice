#! /usr/bin/env node

'use strict';

class QuickUnionFind{
    constructor(array) {
        this.array = array;
    }
    reset() {
        for (let i = 0; i < this.array.length; i++) {
            this.array[i] = i;
        }
    }
    root(i){
        while(i !== this.array[i]) i = this.array[i]
        return i;
    }
    connected(p, q) {
        return this.root(q) === this.root(p);
    }
    union(p, q) {
        let i = this.root(p);
        let j = this.root(q);
        this.array[i] = j;
    }

    
}
console.log("QUICK UNION FIND")
let u = new UnionFind([4,1,3,4,4,5,2,3,4,5])
// u.reset();
// console.log(u.root(9))



// WEIGHTING
console.log("WEIGHTING : AVOID TALL TREES")

// AVOID PUTTING LARGE TREE LOWER

class WeightedQuickUnionFind {
    constructor(array) {
        this.array = array;
        this.size = [];
    }
    root(i) {
        while (i !== this.array[i]) i = this.array[i]
        return i;
    }
    quickUnion(p, q) {
        let i = this.root(p);
        let j = this.root(q);
        if (i === j) return;
        if (this.size[i] > this.size[j]) {
            this.array[j] = i;
            this.size[i] += this.size[j];
        } else {
            this.array[i] = j;
            this.size[j] == this.size[i]
        }
    }
}

// FIND: takes time proportional to depth of p and q
// UNION: takes constant time, given roots

// PROPOSITION: DEPTH OF ANY NODE x if at most log(N)