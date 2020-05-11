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
    wordsWithPrefix(string, root = this.root) {
        let allWords = [];
        if (this.root.isTerminal) allWords.push("")
        if (string.length === 0) {
            
            for (let node in this.root.children) {
                if (node.isTerminal) allWords.push("");
                let suffixes = this.root.children[node].wordsWithPrefix("");
                suffixes.map(suf => )
                allWords.push(...suffixes);
            }
        }
    }
}