function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


const flatten = function (root) {
    if (!root) return [];
    
    let list = [root.val];
    if (root.left) {
        list.push(...flatten(root.left))
    }
    if (root.right) {
        list.push(...flatten(root.right))
    }
    list.join(null);
    list.split("")
}

// const makeFlatTree = function (arr) {
//     let list = []
// }
// var flatten = function (root) {
//     let queue = [root];
//     let returnList = [];
//     let node
//     while (queue.length) {
//         node = queue.pop();   //1 // 2 // 5 // 3 // null
//         // console.log("queue", queue)
//         if (node) {
//             returnList.push(node.val) //1     // 1,2     // 1,2,5        // 1,2,5,3
//             queue.push(node.left)     //[2]   // [5,3]   // [3,null]     // [null, null]
//             queue.push(node.right)    //[2,5] // [5,3,4] // [3, null, 6] // [null, null, null]
//         } else {
//             returnList.push(null)
//             queue.push(null)
//             return returnList
//             // return makeList(returnList)
//         }
//         // node ? queue.push(node.left) : queue.push(null)
//         // node ? queue.push(node.right) : queue.push(null)

//     }
//             return returnList

//     // return makeList(returnList);
// };

var makeList = function (arr) {
    let list = [];
    arr.forEach(el => {
        if (el)  {
            list.push(el);
            list.push(null);
        } else {
            list.push(null)
        }
    })
return list
}


let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(5)
let d = new TreeNode(3)
let e = new TreeNode(4)
let f = new TreeNode(6)
a.left = b
a.right = c
c.right = f
b.left = d
b.right = e

console.log(flatten(a))

// Given a binary tree, flatten it to a linked list in -place.

// For example, given the following tree:

//      1
//     / \
//    2   5
//   / \   \
//  3   4   6
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