class Node {
  constructor(val) {
    this.val = val;
    this.children = {};
    this.isTerminal = false;
  }
}

//    O
//     \ t
//      O
//    a/ \e
//    O   O
//   p/    \n
//   O      O
//
//
class Trie {
  constructor() {
    this.root = new Node();
  }

  insertRecur(word, root = this.root) {
    let letter = word[0];
    if (root.children[letter] === undefined) {
      root.children[letter] = new Node();
    }

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insertRecur(word.slice(1), root.children[letter]);
    }
  }
    
    insertIter(word, root = this.root) {
        
    }
    
}
module.exports = {
  Node,
  Trie
};
