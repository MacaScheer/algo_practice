class Node {
  constructor() {
    this.isTerminal = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insertRecur(word, root = this.root) {
    let letter = word[0];
    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }
    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insertRecur(word.slice(1), root.children[letter]);
    }
  }

  searchRecur(word, root = this.root) {
    if (word.length === 0 && root.isTerminal === true) {
      return true;
    }
    let letter = word.slice(0, 1);
    word = word.slice(1);
    if (!(letter in root.children)) return false;
    this.searchRecur(word, root.children[letter]);
  }

  printAllNode(root = this.root) {
      let queue = [root];
      let letters = [];
    while (queue.length > 0) {
        let node = queue.shift();
        letters.concat(Object.keys(node.children))
        
    }
  }
}

let trie = new Trie();
trie.insertRecur("ten");
trie.insertRecur("tea");
trie.insertRecur("tennesse");
trie.insertRecur("in");
trie.insertRecur("inn");
// console.log(trie.searchRecur("tennesse"));
trie.printAllNode();
