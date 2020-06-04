#!/usr/bin/env node
'use strict';
// console.log("SuffixTrieAlgos")

const trie = {
    "c": { "*": true },
    "b": {
        "c": { "*": true },
        "a": { "b": { "c": { "*": true } } },
    },
    "a":{"b":{"c":{"*":true}}}
}

class SuffixTrie{
    constructor(string) {
        this.root = {};
        this.endSymbol = "*";
        this.populateSuffixTrieFrom(string)
    }    
    populateSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++){
            this.insertSubstring(string, i);
        }
    }
    insertSubstring(string, i) {
        let node = this.root;
        for (let j = i; j < string.length; j++){
            let char = string[j]
            if (!node[char]) node[char] = {};
            node = node[char]
        }
        node['*'] = true;
    }
}

let sufX = new SuffixTrie('babc')
console.log(sufX)