#!/usr/bin/env node
'use strict';

console.log("Suffix Trie Construction");

class SuffixTrie{
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
    }

    populateSuffixTrieFrom(string) {
        if (string.length === 1) this.root[this.endSymbol] = new SuffixTrie
        let chars = string.split("");
        let firstChar = chars.shift();
        if (this.root[firstChar]) {
            this.root[firstChar].populateSuffixTrieFrom(chars)
        } else {

        }
    }

    contains(string) {
        
    }
}

let test = new SuffixTrie("test");
test.contains("t");
test.contains("st");
test.contains("est");
test.contains("test");
test.contains("tes");