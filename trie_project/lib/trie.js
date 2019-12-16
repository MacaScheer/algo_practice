class Node {
  constructor(val) {
    this.val = val;
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insertRecur(word, node = this.root) {
    let letter = word.slice(0, 1);
    let rest = word.slice(1, word.length + 1);
    let nextnode;
    if (word.length === 0) {
      node.isTerminal = true;
    }
    if (node.children[letter] === undefined) {
      nextnode = new Node();
      node.children[letter] = nextnode;
    } else {
      nextnode = node.children[letter];
    }
    this.insertRecur(rest, nextnode);
  }
}
module.exports = {
  Node,
  Trie
};
