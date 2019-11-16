function ListNode(val) {
  this.val = val;
  this.next = null;
}

let a1 = new ListNode(5);
let b1 = new ListNode(6);
let c1 = new ListNode(4);
a1.next = b1;
b1.next = c1;

let a = new ListNode(2);
let b = new ListNode(4);
let c = new ListNode(3);
a.next = b;
b.next = c;

var addTwoNumbers = function(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let newNode;
  let incrementor = 0;
  let pastNode = null;
  let newHead = null;
  while (node1.next && node2.next) {
    if (node1.val + node2.val + incrementor >= 10) {
      newNode = new ListNode(((node1.val + node2.val) % 10) + incrementor);
      incrementor += 1;
      console.log(" >=10 NEW NODE:  ", newNode);
    } else {
      newNode = new ListNode(node1.val + node2.val + incrementor);
      incrementor = 0;
      console.log(" <10 NEW NODE:  ", newNode);
    }
    node1 = node1.next;
    node2 = node2.next;
    if (!newHead) newHead = newNode;
    if (pastNode) pastNode.next = newNode;
    pastNode = newNode;
  }
  newNode.next = new ListNode(node1.val + node2.val + incrementor);
  printAllNodes(newHead);
  return newHead;
};

var printAllNodes = function(head) {
  let node = head;
  while (node.next) {
    console.log(node.val);
    node = node.next;
  }
  console.log(node.val);
};

console.log(addTwoNumbers(a, a1));
// console.log(printAllNodes(a));

function converter(list) {
  let node = list;
  let res = 0;
  let multiplier = 1;
  let incrementers = 0;
  if (node.next) {
    res += node.value * multiplier;
    multiplier *= 10;
    node = node.next;
  } else {
    res += node * multiplier;
  }
}

function linkedListSum(list1, list2) {
  let node1 = list1;
  let node2 = list2;
  let multiplier = 1;
  let incrementer = 0;
  let val;
  let placeHolder;
  let res = null;
  let newNode;
  let nextNewNode; //2 4 3 = 342
  if (node1.next) {
    // 5 6 4 = 465
    if (node1.val + node2.val >= 10) {
      val = (node1.val + node2.val + incrementer) % 10; //res = 7  inc = 1 , 100
      newNode = new ListNode(res);
      if (res === null) res = newNode;
      if (placeHolder) placeHolder.next = newNode;
      placeHolder = newNode;
      incrementer += 1;
    } else {
      val = (node1.val + node2.val + incrementer) % 10; // res 7,
      newNode = new ListNode(res);
      if (res === null) res = newNode;
      if (placeHolder) placeHolder.next = newNode;
      placeHolder = newNode;
      incrementer = 0;
    }
    node1 = node1.next;
    node2 = node2.next;
  } else {
    res += node1.val + node2.val + incrementer;
  }
  return res;
}

// 2 4 3
// 5 6 4

// 7 0 8
