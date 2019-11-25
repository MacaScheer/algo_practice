// /**
//  * Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
var zigzagLevelOrder = function(root) {
  let node = root;
  let queue = [node];
  let arr = [[node.val]];
  let leftRight = ["R", "L"];
  while (queue.length > 0) {
    node = queue.shift();
    let length = arr.length;
    let nextArr = [];
    if (leftRight[0] === "L") {
      if (node.left) nextArr.push(node.left.val);
      if (node.left) queue.push(node.left);
      if (node.right) nextArr.push(node.right.val);
      if (node.right) queue.push(node.right);
    } else {
      if (node.right) nextArr.push(node.right.val);
      if (node.right) queue.push(node.right);
      if (node.left) nextArr.push(node.left.val);
      if (node.left) queue.push(node.left);
    }
    if (nextArr.length > 0) arr.push(nextArr);
    if (arr.length > length) {
      let one = leftRight.shift();
      leftRight.push(one);
    }
  }
  return arr;
};

const A = new TreeNode(3);
const B = new TreeNode(9);
const C = new TreeNode(20);
const D = new TreeNode(15);
const E = new TreeNode(7);
A.left = B;
A.right = C;
C.left = D;
C.right = E;
console.log(zigzagLevelOrder(A));

// [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]
