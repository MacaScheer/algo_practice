class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

//       O
//    i / \ t
//     O    O
//  n /  a/ \e
//       O   O
//      p/    \n
//      O      O
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
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (root.children[letter] === undefined) {
        root.children[letter] = new Node();
      }
      root = root.children[letter];
    }
    root.isTerminal = true;
  }

  searchRecur(word, root = this.root) {
    if (word.length === 0 && root.isTerminal) return true;
    let letter = word[0];
    if (root.children[letter] === undefined) {
      return false;
    } else {
      return this.searchRecur(word.slice(1), root.children[letter]);
    }
  }
  searchIter(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (node.children[letter] === undefined) {
        return false;
      } else {
        node = node.children[letter];
      }
    }
    if (node.isTerminal) {
      return true;
    } else {
      return false;
    }
  }
  allStringsArr(node = this.root) {
    let retArr = [];
    // let visited = {};
    let nodeKeyQ = Object.keys(node.children);
    let nodeValQ = Object.values(node.children);
    // let node = nodeKeyQ.shift();
    while (nodeValQ.length) {
      let node = nodeValQ.shift();
      allStringsArr()
    }
    console.log("keys: ", nodeKeyQ);
    console.log("vals: ", nodeValQ);
  }
  wordsWithPrefix(prefix) {
    if (prefix.length === 0) {
      return this.allStringsArr();
    }
  }
}
module.exports = {
  Node,
  Trie
};
