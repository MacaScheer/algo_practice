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
// When does depth of x increase?

// Increase by 1 when tree T1 containing x is merged into another tree T2
// The size of the tree containing x at least doubles since |T2| >= |T1|
// size of tree containing x can double at most Log N times...Why?


// PATH COMPRESSION

// Quick Union with Path Compression. Just after computing the root of p,
// set the id of each examined node to point to that root


// TWO-PASS IMPLEMENTATION: add second loop to root() method to set the array[i] of each examined node to the root
// SIMPLER ONE-PASS VARIANT: Make every other node in path point to its grandparent (thereby halving the length).


class UnionFindPathCompression{
    constructor(idArr) {
        this.idArr = idArr;
        this.size = [];
    }
    // ...
    root(i) {
        while (this.idArr[i] !== i) {
            this.idArr[i] = this.idArr[this.idArr[i]];
            i = this.idArr[i]
        }
        return i;
    }
}

// for (let i = 1; i < 2 ** 65336; i *=2){
//     console.log("i: ", i, "  logi: ", Math.floor(Math.log(i)))
// }


// PROPOSITION:
// Starting from an empty data structure, any sequence of M union-find ops of N objects
//  makes <= c(N + Mlog*N) array accesses
// log * N is the number of times you have to take log of N to get 1
// Analysis can be improved to N + M@(M, N) where "@" is alpha  NOT SURE WHAT THAT EXPRESSION IS