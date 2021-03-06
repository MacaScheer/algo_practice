// Input: [2, 0, 2, 1, 1, 0];
// Output: [0, 0, 1, 1, 2, 2];

//declare couting variables for 0s,1s,2s
//iterate forward thru the array, incrementing the counting variables appropriately
//overwrite the existing array with #0's then #1's then #2's
//return array

const redWhiteBlue = function(array) {
  let zeros = 0;
  let ones = 0;
  let twos = 0;
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case 0:
        zeros++;
        break;
      case 1:
        ones++;
        break;
      case 2:
        twos++;
        break;
    }
  }
  let i = 0;
  while (zeros > 0) {
    array[i] = 0;
    zeros--;
    i++;
  }
  while (ones > 0) {
    array[i] = 1;
    ones--;
    i++;
  }
  while (twos > 0) {
    array[i] = 2;
    twos--;
    i++;
  }
  return array;
};

// console.log(redWhiteBlue([2, 0, 2, 1, 1, 0]));

function ListNode(head) {
  this.head = head;
  this.next = null;
}

const flattenTree = function(root) {
  let queue = [root];
  let returnList = new ListNode(root.val);
  let list = returnList;
  let node;
  while (queue.length) {
    node = queue.shift();
    list.next = new ListNode(node.val);
    list = list.next;
    if (node.left) queue.unshift(node.left);
    if (node.right) queue.unshift(node.right);
  }
  return returnList;
};



var flatten = function(root) {
  let stack = [];
  function rec(root) {
    if (root) {
      if (root.right) stack.push(root.right);
      root.right = root.left;
      root.left = null;
      if (!root.right) root.right = stack.pop();
      rec(root.right);
    }
  }
  rec(root);
};
// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6
