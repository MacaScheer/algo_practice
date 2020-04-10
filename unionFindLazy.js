#! /usr/bin/env node

'use strict';

class UnionFind{
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

let u = new UnionFind([4,1,3,4,4,5,2,3,4,5])
u.reset();
console.log(u.root(9))