function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const A = new TreeNode(1);
const B = new TreeNode(2);
const C = new TreeNode(2);
const D = new TreeNode(3);
const E = new TreeNode(4);
const F = new TreeNode(4);
const G = new TreeNode(3);

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

var isSymmetric = function(root) {
  let node = root;
  if (node.left.val !== node.right.val) {
    return false;
  }
  let left = leftSubTree(node.left);
  let right = rightSubTree(node.right);
  for (let i = 0; i < left; i++) {
    if (left[i] !== right[i]) return false;
  }
  return true;
};

var leftSubTree = function(root) {
  let node = root;
  let queueL = [node];
  let arr = [node.val];
  while (queueL.length > 0) {
    node = queueL.pop();
    if (node.left) {
      queueL.push(node.left);
      arr.push(node.left.val);
    }
    if (node.right) {
      queueL.push(node.right);
      arr.push(node.right.val);
    }
  }
  return arr;
};
var rightSubTree = function(root) {
  let node = root;
  let queueR = [node];
  let arr = [node.val];
  while (queueR.length > 0) {
    node = queueR.pop();
    if (node.right) {
      queueR.push(node.right);
      arr.push(node.right.val);
    }
    if (node.left) {
      queueR.push(node.left);
      arr.push(node.left.val);
    }
  }
  return arr;
};
console.log(isSymmetric(A));
