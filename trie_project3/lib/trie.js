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
        if (word.length === 0 && node.isTerminal) {
           
       }
   }
}

module.exports = {
    Node,
    Trie
};