var isPalindrome = function(x) {
  let string = x.toString();
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - i - 1]) return false;
  }
  return true;
};

// console.log(isPalindrome(121)) //TRUE

// console.log(isPalindrome(-121)) //FALSE

// console.log(isPalindrome(13211211231)) //TRUE

var isPalLinkedList = function(head) {
  let arr = [];
  let node = head;
  if (!head) return true;
  while (node.next) {
    arr.push(node.val);
    node = node.next;
  }
  arr.push(node.val);
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
  }
  return true;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const A = new Node(1);
const B = new Node(2);
const C = new Node(1);
A.next = B;
B.next = C;

const a1 = new Node(1);
const b1 = new Node(2);
const c1 = new Node(3);
const d1 = new Node(4);
const e1 = new Node(5);
const f1 = new Node(6);
a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;
e1.next = f1;

// console.log(isPalLinkedList(A)); //TRUE;

// console.log(isPalLinkedList(a1)); // FALSE;  a1 -> b1 -> c1 -> d1 -> e1

var reverseList = function(head) {
  let node = head; //a1
  let temp;
  let temp2;
  while (node.next) {
    console.log("next loop VALUE: ", node.val);
    console.log("next loop NEXT: ", node.next);
    //node = a1          node = c1      node = e1
    temp = node; //temp = a1           temp = c1      temp = e1
    node = node.next; //node = b1      node = d1      node = null;
    if (node.next) temp2 = node.next; //temp2 = c1   temp2 = e1
    if (node.next) node.next = temp; //b1.next = a1 c1.next = c1
    if (temp2.next) temp2.next = node; //c1.next = b1 temp2.next = d1
    node = temp2; //node = c1           node = e1
  }
  return node;
  // temp = node;
  // node = node.next;
  // node.next = temp;
};

// var printAllNode = function(head) {
//   let node = head;
//   while (node.next) {
//     console.log("node VAL: ", node.val);
//     console.log("node NEXT: ", node.next.val);
//     node = node.next;
//   }
//   console.log("node VAL: ", node.val);
//   console.log("node NEXT: ", node.next);
// };
// console.log(printAllNode(a1));
// console.log(reverseList(a1));
// console.lof(printAllNode(e1));

var slowReverLinkedList = function(head) {
  let arr = [];
  let node = head;
  while (node.next) {
    arr.push(node);
    node = node.next;
  }
  arr.push(node);
  for (let i = arr.length - 1; i > 0; i--) {
    node = arr[i];
    node.next = arr[i - 1];
  }
  let tail = node.next;
  tail.next = null;
  return putListintoArray(arr[arr.length - 1]);
};

var putListintoArray = function(node) {
  let arr = [];
  while (node.next) {
    arr.push(node.val);
    node = node.next;
  }
  arr.push(node.val);
  return arr;
};

// console.log(slowReverLinkedList(a1));

// const recursiveReverseLinkedList = node => {
//   if (!node.next) return node;
//   let nextNode = node.next;
//   console.log("NEXTNODE: ", nextNode);
//   recursiveReverseLinkedList(nextNode);
//   nextNode.next = node;
//   return nextNode;
// };

// console.log(recursiveReverseLinkedList(a1));
//1 -> 2 -> 3 -> 4
const reverseLinkedList = function(head) {
  //1
  let node = head; // 1
  if (!node) return node;
  let pre = null;
  while (node.next) {
    let next = node.next;
    node.next = pre;
    pre = node;
    node = next;
    // console.log("NODE: ", node, "PRE: ", pre, "NEXT: ", next);
  }
  node.next = pre; //
  return node;
};

const printAllNode = function(head) {
  let node = head;
  while (node.next) {
    console.log("VAL: ", node.val);
    console.log("NEXT VAL: ", node.next.val);
    node = node.next;
  }
  console.log("VAL: ", node.val);
};
// console.log(reverseLinkedList(a1));
// console.log(printAllNode(f1));
