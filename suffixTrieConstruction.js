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

class TrieNode{
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}
class Trie{
    constructor(root) {
        this.root = root;
    }
    addWord(string, node = this.root) {
        if (string.length === 0) {
            node.isTerminal = true;
            return;
        }
        let chars = string.split("");
        let firstChar = chars.shift();
        let nextNode;
        if (node.children[firstChar]) {
            nextNode = node.children[firstChar]
            nextNode.addWord(chars.join(""))
        } else {
            node.children[firstChar] = new TrieNode();
            nextNode = node.children[firstChar]
            nextNode.addWord(chars.join(""))
        }
    }
    wordsWithPrefix(string) {
        let allWords = [];
        if (string.length === 0) {
            let nodes = this.root.children;
            for (let node of nodes) {
                
                if(node.children)
            }
        }
    }
}