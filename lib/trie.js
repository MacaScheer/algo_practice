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
  search(word, root = this.root) {
    if (word.length === 0) {
      if (root.isTerminal) {
        return true;
      } else {
        return false;
      }
    }
    let letter = word[0];
    if (letter in root.children) {
      return this.search(word.slice(1), root.children[letter]);
    } else {
      return false;
    }
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

  insertIter(word, root = this.root) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (!(letter in node.children)) {
        node.children[letter] = new Node();
      }

      node = node.children[letter];
    }
    node.isTerminal = true;
  }

  searchRecur(word, root = this.root) {
    if (word.length === 0) {
      if (root.isTerminal === true) {
        return true;
      } else {
        return false;
      }
    }
    let letter = word.slice(0, 1);
    word = word.slice(1);
    if (!(letter in root.children)) return false;
    return this.searchRecur(word, root.children[letter]);
  }

  searchIter(word, root = this.root) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (!(letter in node.children)) {
        return false;
      }
      node = node.children[letter];
    }
    return node.isTerminal;
  }

  wordsWithPrefix(prefix, root = this.root) {
    if (prefix.length === 0) {
      let allWords = [];
      if (root.isTerminal) allWords.push("");
      for (let letter in root.children) {
        let child = root.children[letter];
        let suffixes = this.wordsWithPrefix(prefix, child);
        let words = suffixes.map(suf => letter + suf);
        allWords.push(...words);
      }
      return allWords;
    } else {
      let firstLetter = prefix[0];
      let child = root.children[firstLetter];
      if (child === undefined) {
        return [];
      } else {
        let suffixes = this.wordsWithPrefix(prefix.slice(1), child);
        let words = suffixes.map(suf => firstLetter + suf);
        return words;
      }
    }
  }
}

// if root's children contain first letter
// shift off the letter from the word
// check the children of that child,
// if they contain the next letter of the word, shift off the letter and repeat the process
// if they don't contain the letter, add the letter to the children and shift off the letter
//
module.exports = {
  Node,
  Trie
};
