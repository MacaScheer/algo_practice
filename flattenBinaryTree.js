function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


const flatten = function (root) {
    if (!root) return [];
    
    let list = [root.val];
    if (root.left) {
        list.push(...flatten(root.left)                )
    }
    if (root.right) {
        list.push(...flatten(root.right))
    }
return list
    // return makeList(list)
}

const outerFunc = function (root) {
    let list = flatten(root);
    // let newList = makeList(list)
    let flatTree = makeFlatTree(list)
    return flatTree
}

const makeFlatTree = function (arr) {
    let nextNode;
    let node;
    let firstNode = new TreeNode(arr[0])
    node = firstNode;
    for (let i = 0; i < arr.length - 1; i+=2){
        if (i !== 0) {
            node = new TreeNode(arr[i]);
            nextNode.right = node
        }
        nextNode = new TreeNode(arr[i + 1])
        node.right = nextNode
    }
return firstNode
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

// var makeList = function (arr) {
//     console.log(arr)
//     let list = [];
//     let i;
//     for (i = 0; i < arr.length - 1; i++){
//         console.log(arr[i])
//         list.push(arr[i])
//         list.push(null)
//     }
//     list.push(arr[i + 1])
// return list
// }


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

console.log(outerFunc(a))

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