function TreeNode(val) {
this.val = val;
    this.left = this.right = null;
}


var flatten = function (root) {
    let queue = [root];
    let returnList = [];
    let node
    while (queue.length) {
        node = queue.shift();
        if (node) {
            returnList.push(node.val)
        } else {
            returnList.push(null)
        }
        node ? queue.push(node.left) : queue.push(null)
        node ? queue.push(node.right) : queue.push(null)
    }
    return returnList;
};

console.log(flatten(root))

let
// Given a binary tree, flatten it to a linked list in -place.

// For example, given the following tree:

// 1
//     / \
// 2   5
//     / \   \
// 3   4   6
// The flattened tree should look like:

// 1
// \
// 2
// \
// 3
// \
// 4
// \
// 5
// \
// 6