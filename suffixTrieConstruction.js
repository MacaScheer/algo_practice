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
        for (let j = 0; j < string.length; j++){
            this.insertSubstringStartingAt(j, string)
        }
    }
    insertSubstringStartingAt(self, idx, string) {
        let node = self.root;
        for (let i = idx; i < string.length; i++){
            let letter = string[i]
            if (!node[letter]) {
                node[letter] = {}   
            }
            node = node[letter]
        }
        node[this.endSymbol] = true;
    }
    contains(string) {
        let node = this.root;
        for (let i = 0; i < string.length; i++){
            let letter = string[i];
            if (node[letter]) {
                node = node[letter]
            } else {
                return false;
            }
        }
        if(node[this.endSymbol]) return true;
        return false
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
        if (root.isTerminal) allWords.push("")
        if (string.length === 0) {
            
            for (let letter in root.children) {
                let node = this.root.children[letter]
                let suffixes = this.wordsWithPrefix("", node);
                suffixes.map(suf => letter + suf)
                allWords.push(...suffixes);
            }
            return allWords;
        } else {
            let firstLetter = string[0];
            if (root.children[firstLetter]) {
                let nextNode = root.chidren[firstLetter];
       
                let suffs = this.wordsWithPrefix(nextNode, string.slice(1))
                let words = suffs.map(suf => firstLetter + suf)
                return words;
            } else {
                return []
            }
        }
        
    }
}