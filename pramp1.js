#!/usr/bin/env node
'use strict';

function reverseWords(arr) {
  // your code goes here
  let output = [];
  for (let i = 0; i < arr.length; i++){
    //let subArr = [];
    let char = arr[i] //p
 
   if(char !== ' '){ //[p'e, r] //['makes']
     subArr.push(char)
   } else {
//[perfect][]
    output = char.concat(subArr).concat(output)
   
    subArr = []
      //output = ['makes,' ',' ' ', 'p'erfect']
   } 
    
  }
  return output
}
//['p','e','r', 'f', ' ' ,'m','a','k',' ', 'p','r','a','c']

//[ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

//[ 'e', 'c', 'i', 't', 'c', 'a', 'r', 'p', '  ', 's', 'e', 'k', 'a', 'm', '  ', 't', 'c', 'e', 'f', 'r', 'e', 'p' ]

//[ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'e', 'r', 'f', 'e', 'c', 't' ]


// Sentence Reverse
// You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

// Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

// Explain your solution and analyze its time and space complexities.

// Example:

// input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
//                 'm', 'a', 'k', 'e', 's', '  ',
//                 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

// output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
//           'm', 'a', 'k', 'e', 's', '  ',
//           'p', 'e', 'r', 'f', 'e', 'c', 't' ]
// Constraints:

// [time limit] 5000ms

// [input] array.character arr

// 0 ≤ arr.length ≤ 100
// [output] array.character


// create a Trie data structure and then a function to traverse the trie from source to target,
// passing into an array

class Node{
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie{
    constructor() {
       this.root = new Node()
    }
    buildTrie(word) {
        let chars = word.split("");
        let node = this.root;
        while (chars.length) {
            let char = chars.shift()
            if (node.children[char]) {
                node = node.children[char];
            } else {
                node.children[char] = new Node();
                node = node.children[char]
            }
        }
        node.isTerminal = true;
    }
    traversePrintDFS() {
        let node = this.root;
        let queue = [node]
        while (queue.length) {
            node = queue.pop()
            console.log(node.children);
            // if(node.isTerminal) return
            for (let child in node.children) {
                child = node.children[child]
                queue.push(child)
            }
            
        }
    }
}
let m = new Trie;
// m.buildTrie("words");
// m.buildTrie("works")
// console.log(m.traversePrintDFS())

function shortestWordPath(source, target, words) {
    // build out trie with words
    // let trie = new Trie;
    // let queue = [source, target,...words]
    // for (let word in queue) {
    //     trie.buildTrie(word)
    // }
    // AFTER SKETCHING OUT A TRIE OF THE SAMPLE INPUTS, IT BECOMES CLEAR
    // THAT A TRIE WON'T REALLY HELP BECAUSE THERE IS NO OBVIOUS DISTANCE BETWEEN WORDS
    // FOR EXAMPLE, TWO WORDS WHOSE ONLY DIFFERENCE IS THEIR FIRST LETTER OR MIDDLE LETTER
    // WILL NOT HAVE A CLOSE RELATIONSHIP ON THE TRIE, OR AT LEAST VISUALLY CLOSE
    // LIKE TWO WORDS THAT ONLY DIFFER IN THEIR LAST LETTER

    // MY NEXT APPROACH IS TO USE THE differenceOfOne HELPER FUNCTION
    // TO KEEP UPDATING A QUEUE OF WORDS THAT ARE ONLY 1 EDIT AWAY
    //  IT WILL BE CLOSER TO DJIKSTRAS ALGORITHM THAN A TRIE SUFFIX COMPARISON
    // SO KEEP TRACK OF VISITED AND UNVISITED AND PREVIOUS AS OBJECTS
    // POSSIBLY ALSO KEEPING TRACK OF MIN DISTANCES OF WORDS FROM THE SOURCE WORD
    // SO I WILL BE USING A NUMBER OF OBJECTS AS GRAPH CONSTRUCTS IN THE SAME WAY THAT DJIKSTRAS DOES
    let neighbors = buildGraph(source, target, words);
    let min = Infinity;
    for (let node in neighbors) {
        for (let subNeighbor in neighbors[node]) {
            console.log(subNeighbor)
            if (subNeighbor === target) {
                if(neighbors[node][target] - 1 < min) min = neighbors[node][target] -1
            }
           
       }
    }
    if (min === Infinity) return -1
    return min
}

    function buildGraph(source, target, words){
    let visited = new Set();
    // let prev = {};
    let unvisited = new Set()
    let neighbors = {};
        unvisited.add(source)
        let level = 0;
    for (let i = 0; i < words.length; i++){
        unvisited.add(words[i])
    }
    // let count = 0;
    let queue = [source]; //['bit',]
    while (queue.length && unvisited.size > 0) {
        let word = queue.shift()  //'bit'//'but'//'big'//'put'//'pot'//'pog'//'lot'//'dog'
        if (word === target) {
        //     return { "unvisited": unvisited,"visited": visited,"neighbors": neighbors }
        return neighbors
        //     // return visited.size - 2
        }
        visited.add(word)  //{'bit','but','big','put','pot','pog','lot','dog'}
        unvisited.delete(word) //{}
        level++
        neighbors = generateNeighbors(level, neighbors, word, words) // {'bit':['but','big'],'but':['bit','put'],'big':['bit'], 'put':['pot','but'],'pot':['pog','put','lot'],'pog':['dog','pot'],'lot':['pot']}
        // count++
        for (let node in neighbors[word]){
           
            // console.log(neighbors[word][node])
            if(!visited.has(node)) queue.push(node)  //queue = ['but','big'] //['big','put']//['put']//['pot']//['pog','lot']//['lot','dog']//['dog']
        }
    }
        // return { "unvisited": unvisited,"visited": visited,"neighbors": neighbors }
        return neighbors
}

function generateNeighbors(level, neighbors, word, words) {

    if (neighbors[word] === undefined) {
        neighbors[word] = {};   
    }
    for (let i = 0; i < words.length; i++){
        // console.log("word1: ",word, " word2: ", words[i])
        if (differenceOfOne(word, words[i])) {
            neighbors[word][words[i]] = level
        }
    }
    // console.log("neighbors: ", neighbors)
    return neighbors
}


function differenceOfOne(word1, word2) {
    let diff = 0;
    if (word1.length !== word2.length) return false;
    for (let i = 0; i < word1.length; i++){
        if(word1.split("")[i] !== word2.split("")[i]) diff++
    }
    if(diff === 1)return true
}

console.log(shortestWordPath("bit", "dog", ["but", "put","big","pot","pog","dog","lot"]))