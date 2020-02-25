class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
}
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insertRecur(word, node = this.root) {
        if (word.length === 0) {
            node.isTerminal = true;
            return
        }
        let letter = word[0]
        let nextNode;
        if (!node.children[letter]) {
            nextNode = new Node()
            node.children[letter] = nextNode
        } else {
            nextNode = node.children[letter]
        }
        this.insertRecur(word.slice(1), nextNode)

    }

    insertIter(word) {
        let lettersArr = word.split("");
        let node = this.root
        let letter;
        let nextNode;
        while (lettersArr.length > 0) {
            letter = lettersArr.shift()
            if (!node.children[letter]) {
                nextNode = new Node()
                node.children[letter] = nextNode
                node = nextNode
            } else {
                node = node.children[letter]
            }
        }
        node.isTerminal = true
    }
    searchRecur(word, node = this.root) {
        if (word.length === 0) {
            if (node.isTerminal) return true
            return false
        }
        let letter = word[0]

        if (letter in node.children) {
           return this.searchRecur(word.slice(1), node.children[letter])
        } else {
            return false
        }
    }
    
    searchIter(word) {
        let wordArr = word.split("")
        let letter;
        let node = this.root;
        while (wordArr.length > 0) {
            letter  = wordArr.shift()
            if (node.children[letter]) {
                node = node.children[letter]
            } else {
                return false
            }
        }
        if (node.isTerminal) return true
        return false
    }

    wordsWithPrefix(prefix, node = this.root) {
        if (prefix.length === 0) {
            let allWords = []
            if (node.isTerminal) allWords.push('')
            for (let letter in node.children) {
                let child = node.children[letter]
                let suffs = this.wordsWithPrefix('', child)
                let words = suffs.map(suf => letter + suf)
                allWords.push(...words)
            }
            return allWords

        } else {
            let letter = prefix[0];
            if (node.children[letter] !== undefined) {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), node.children[letter])
                return suffixes.map(suf => letter + suf);
            } else {
                return []
            }
        }
    }
}

module.exports = {
    Node,
    Trie
};