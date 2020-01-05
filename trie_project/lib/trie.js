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
  wordsWithPrefix(prefix, root = this.root) {
    let allWords = [];
    if (root.isTerminal) allWords.push("");

    if (prefix.length === 0) {
      for (let letter in root.children) {
        let child = root.children[letter];
        let sufs = this.wordsWithPrefix(prefix, child);
        let words = sufs.map(suf => letter + suf);
        allWords.push(...words);
      }
      return allWords;
    } else {
      let firstLetter = prefix[0];
      let child = root.children[firstLetter];

      if (!child) {
        return [];
      }
      let suffixes = this.wordsWithPrefix(prefix.slice(1), child);
      let words = suffixes.map(suf => firstLetter + suf);
      return words;
    }
  }
}

let trie = new Trie();
trie.insertRecur("ten");
trie.insertRecur("tea");
trie.insertRecur("taco");
trie.insertRecur("tex");
trie.insertRecur("in");
trie.insertRecur("inn");
trie.insertRecur("inside");
trie.insertRecur("instructor");
console.log(trie.wordsWithPrefix(""));
console.log(trie.wordsWithPrefix("te"));

module.exports = {
  Node,
  Trie
};
