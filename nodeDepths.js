#!/usr/bin/env node
'use strict';

// console.log("Node Depths: \n PSEUDOCODE: DFS Search through the branches and add node depths to a counter \n keep track of current node depth i.e. within each stack of the DFS search.");
// console.log("Actually it could be BFS approach that sums all of the nodes at that level, using a level-scaler, but need to keep track of when the next level is reached in queue")
class BinaryTree{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// function nodeDepths(root) {
//     let nodeDepth = 1;
//     let queue = [root];
//     // let finalQueue = [root, 1]
//     while (queue.length) {
//         let node = queue.shift();
//         let numNodesperLevel = 0;
//         nodeDepth++
//         if (node.left) {
//             queue.push(node.left);
//             numNodesperLevel++
//             // finalQueue.push(node.left)
//         }
//         if (node.right) {
//             queue.push(node.right);
//             numNodesperLevel++
//         }
//         // finalQueue.push(nodeDepth)
//     }

// }

// function nodeDepths(root, depth = 0) {
//     if (!root) return depth
//     console.log(root.value, depth)
//     if (root.left) {
//         return nodeDepths(root.left, depth+=1)
//     }
//     if (root.right) {
//         return nodeDepths(root.right, depth+=1)
//     }
//     return depth
// }


// function BFS(root)

// function DFS(root, val) {
//     let queue = [root];
//     while (queue.length) {
//         let node = queue.shift()
//         console.log(node.value, val)
//         if (node.value === val) {
//             return true;
//         } else {

//             if (node.right) {
//                 queue.unshift(node.right)
//             }
//             if (node.left) {
//                 queue.unshift(node.left)
//             }
//         }
//     }
//     return false
//     // return ans
//     // else return null;
// }
// f(n, d) = d + f(l, d+1) + f(r, d+1)
// function nodeDepthRecursive(root, depth = 0) {
//     if (!root) {
//         return depth
//     } else depth += 1
//     if (root.left) {
//         return nodeDepthRecursive(root.left, depth)
//     }
//     if (root.right) {
//         // depth += 1;
//         return nodeDepthRecursive(root.right, depth)
//     }
// }

function nodeDepthsRecursive(root, depth = 0) {
    if (root === null) return 0;
    return depth + nodeDepthsRecursive(root.left, depth+1) + nodeDepthsRecursive(root.right, depth + 1)
}

function nodeDepths(root) {
        let stack = [];
    stack.unshift({ node: root, depth: 0});
    let sumDepths = 0
    while (stack.length) {
       const {depth, node} = stack.pop()
        if (node === null) continue
        sumDepths += depth
        stack.push({node: node.left, depth:depth + 1})
        stack.push({node: node.right, depth:depth + 1})
        
    }
    return sumDepths
}

let A = new BinaryTree(1);
let B = new BinaryTree(2);
let C = new BinaryTree(3);
let D = new BinaryTree(4);
let E = new BinaryTree(5);
let F = new BinaryTree(6);
let G = new BinaryTree(7);
let H = new BinaryTree(8);
let I = new BinaryTree(9);
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;
D.left = H;
D.right = I;

// console.log(DFS(A, 9));

console.log(nodeDepths(A));