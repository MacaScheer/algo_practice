/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 
 * Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.
//  *
//  * 
//  * 
//  */
// var removeNthFromEnd = function(head, n) {
//   let arr = [];
//   let node = head;
//   while (node.next) {
//     arr.push(node);
//     node = node.next;
//   }
//   arr.push(node);
//   let nthFromLast = arr[arr.length - n];
//   if (n < arr.length) {
//     let prevNode = arr[arr.length - 1 - n];
//     prevNode.next = nthFromlast.next;
//   } else {
//      nthFromLast.next = null
//   }

// };

/////////////////////

/// jumpgame

// Given an array of non - negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

//   Example:

// Input: [2, 3, 1, 1, 4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
// Jump 1 step from index 0 to 1, then 3 steps to the last index.
//   Note:
class TreeNode {
  constructor(index, passedInVal, numOfJumps) {
    this.index = index;
    this.value = null;
    this.passedInVal = passedInVal;
    this.numOfJumps = numOfJumps;
  }
}

let minNumOfJumps = function(arr) {
  if (arr.length === 1) return 0;

  let headNode = new TreeNode(0, arr[0], 0);
  headNode.value = arr[headNode.index];
  headNode.numOfJumps = 0;
  headNode.passedInVal = 0;
  let terminatingValue = arr.length - 1;
  let queue = [];
  let leastNumOfJumps = arr.length;
  queue.push(headNode);
  while (queue.length > 0) {
    let currentNode = queue.pop();
    for (let i = currentNode.value; i >= 1; i--) {
      let nextIndex = currentNode.index + i;
      let nextNode = new TreeNode(
        nextIndex,
        i + currentNode.passedInVal,
        currentNode.numOfJumps + 1
      ); /// [......6,3,1,2,4, 9]
      nextNode.value = arr[nextNode.index];
      if (
        i === terminatingValue &&
        currentNode.numOfJumps + 1 < leastNumOfJumps
      ) {
        leastNumOfJumps = currentNode.numOfJumps + 1;
      }
      if (
        nextNode.value + nextNode.passedInVal >= terminatingValue &&
        nextNode.numOfJumps + 1 < leastNumOfJumps
      ) {
        leastNumOfJumps = nextNode.numOfJumps + 1;
        break;
      }
      if (
        nextNode.value + nextNode.passedInVal < terminatingValue &&
        nextNode.numOfJumps < leastNumOfJumps
      ) {
        queue.push(nextNode);
      }
    }
  }
  return leastNumOfJumps;
};

// [1,2,3]index[m] = min_length is x
// You can assume that you can always reach the last index.

// console.log(minNumOfJumps([2, 3, 1, 1, 4]));
// console.log(minNumOfJumps([2, 1, 3, 4, 4, 1, 1]));
// console.log(minNumOfJumps([1, 2]));

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    let mod3 = i % 3 === 0 ? true : false;
    let mod5 = i % 5 === 0 ? true : false;
    if (mod3) console.log("Fizz");
    if (mod5) console.log("Buzz");
    if (!mod3 && !mod5) console.log(i);
  }
}

// fizzBuzz();

// var

var addOperators = function(num, target) {
  // console.log(chars)
  for (let i = 0; i < chars.length; i++) {}
};
var combinations = function(num) {
  let chars = num.split("");
  let ops = ["-", "+", "*", "/"];

  // let combStrings = ["","",""]
  // for (let i = 0; i < chars.length; i++){ combStrings.push("") }
  //["1", "2", "3"]
  //combStrings[0].concat(chars[0])  ["1","",""]
  //combStrings[0].concat(ops[0])    ["1+","",""]
  //combStrings[0].concat(chars[1])  ["1+2","",""]
  //combStrings[0].concat(ops[0])    ["1+2+","",""]
  //combStrings[0].concat(chars[2])  ["1+2+3","",""]

  //combStrings[1].concat(chars[0])  ["1+2+3","1",""]
  //combStrings[1].concat(ops[0])    ["1+2+3","1+",""]
  //combStrings[1].concat(chars[1])    ["1+2+3","1+2",""]
  //combStrings[1].concat(ops[1])    ["1+2+3","1+2-",""]
  //combStrings[1].concat(chars[2])    ["1+2+3","1+2-3",""]

  for (let j = 0; j < chars.length; j++) {
    chars.forEach(c => {
      combStrings[j].concat(chars[j]);
    });
  }

  // console.log(combStrings)
};
// console.log(combinations("1234"))

var combs = function(chars) {
  const combsArr = [];
  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j <= chars.length; j++) {
      combsArr.push(chars.slice(i, j));
    }
  }
  return combsArr.map(c => c.join(""));
};
// console.log(combs(["1", "2", "3"]));

var opCombs = function(ops=["+","-","*"], len) {
  let ar = [];
  let secAr = [];
 let i = 0;
  for (let j = 0; j < ops.length; j++) {
    secAr = [];
    while (secAr.length < len) {
      
      secAr.push(ops[j]);
      secAr.push(ops[i]);
    }
    ar.push(secAr);
  }
  return ar;
};
// console.log(opCombs(["+", "-", "*"]));

// "12345"
// 1 2 3 4 5
// 12 3 45
// 1 23 4 5
// 1 234 5

function subsets(arr) {
  if (arr.length === 0) return [[]]
  let first = arr[0];
  let subs = subsets(arr.slice(1))
  let newSubs = subs.map(s => [first].concat(s))
  let ret = newSubs.concat(subs)
  return ret
}

function subsetsComb(arr){
  let arr = []
  arr.forEach(subArr => {
    let sum = 0
    subArr.forEach(num => {
    sum += num
    })
    arr.push(sum)
  })
  return arr;
}
// console.log(subsets([1, 2, 3, 4]));

function allCombs(str){
  let arr = str.split("")
    
  }

  var theString = 'somerandomword';
  console.log(getAllSubstrings(theString));


