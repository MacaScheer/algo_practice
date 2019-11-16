function subStrings(string) {
  let subsArr = [];
  let chars = string.split("");
  let sub = "";
  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j <= chars.length; j++) {
      sub = chars.slice(i, j);
      subsArr.push(sub.join(""));
    }
  }
  return subsArr;
}

// console.log(subStrings("12345"));
// [ '1', '12', '123', '2', '23', '3' ]

class TreeNode {
  constructor(value) {
    this.value = value;
    this.passedInStr = null;
    this.accComb = [];
  }
}
//value = 12345
function createTreeAndFindComb(str) {
  let parentNode = new TreeNode(str);
  parentNode.passedInStr = str;
  let queue = [parentNode];
  let res = [];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode.value !== str) currentNode.accComb.push(currentNode.value);

    if (currentNode.passedInStr !== null) {
      for (let i = 1; i <= currentNode.passedInStr.length; i++) {
        let nextVal =
          currentNode.passedInStr.slice(0, i) === str
            ? ""
            : currentNode.passedInStr.slice(0, i);
        let nextLeftOver = currentNode.passedInStr.slice(
          i,
          currentNode.passedInStr.length
        );
        if (nextVal !== "") {
          let child = new TreeNode(nextVal);
          if (nextLeftOver !== "") child.passedInStr = nextLeftOver;
          child.accComb = child.accComb.concat(currentNode.accComb);
          queue.push(child);
        }
      }
    } else {
      res.push(currentNode.accComb);
    }
  }
  return res;
}

// console.log(createTreeAndFindComb("12345"));

function combinations(length) {
  let ops = ["+", "-", "*"];
  let arr = [];
}

function twoNumberSum(array, targetSum) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return array[i] > array[j]
          ? [array[i], array[j]]
          : [array[j], array[i]];
      }
    }
  }
}

// function findClosestValueInBst(tree, target) {
//   let diff = Math.abs(target - tree.value)
//   let queue = [tree]
//   while (queue.length > 0) {
//     let currentNode = queue.shift()
//     if (currentNode.left && Math.abs(target - currentNode.left.value) < diff && Math.abs(target - currentNode.right.value) > Math.abs(target - currentNode.left.value)) {
//         queue.push(currentNode.left)
//     } else if ( currentNode.right && Math.abs(target - currentNode.right.value) < diff && Math.abs(target - currentNode.left.value) > Math.abs(target - currentNode.right.value)) {
//       queue.push(currentNode.right)
//     }else {
//         return currentNode.value
//       }
//   }
// }

function printAllNodes(root) {
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

function findClosestValueInBst(root, target) {
  let closest = Math.abs(target - root.value);
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    console.log("NODE.VALUE:  ", node.value);
    console.log("DIFF: ", Math.abs(node.value - target));

    if (
      Math.abs(closest - target) > Math.abs(node.value - target) &&
      node.value !== target
    ) {
      closest = node.value;
    }
    if (node.left) {
      if (node.left.value > target) {
        queue.push(node.left);
      }
    }
    if (node.right) {
      if (node.right.value < target) {
        queue.push(node.right);
      }
    }
  }
  return closest;
}

class bstNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class bstT {
  constructor(root) {
    this.root = root;
  }
}

const A = new bstNode(10);
const B = new bstNode(5);
const C = new bstNode(15);
const D = new bstNode(2);
const E = new bstNode(5);
const F = new bstNode(13);
const G = new bstNode(22);
const H = new bstNode(1);
const I = new bstNode(14);
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;
D.left = H;
F.right = I;

printAllNodes(A);

console.log("~~~~~~~~~~~~~~~~~~~~~");
console.log(findClosestValueInBst(A, 3));

// console.log(B)
