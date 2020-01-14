 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
 
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, root = new TreeNode()) {
    if (!nums.length) return null;
    let midIdx = Math.floor(nums.length / 2)
    let secHalf = nums.slice(midIdx + 1)
    let firstHalf = nums.slice(0, midIdx)
    let root = new TreeNode(nums[midIdx])
    root.left = sortedArrayToBST(firstHalf)
    root.right = sortedArrayToBST(secHalf)

    return root
};

class BST {
    constructor() {
        this.root = null;
    }
    insert(val, root = this.root) {
        if (!this.root) {
            this.root = new TreeNode(val)
            return
        }
        if (val < root.val) {
            if (!root.left) {
                root.left = new TreeNode(val)
            } else {
                this.insert(val, root.left)
            }
        }
        else {
            if (!root.right) {
                root.right = new TreeNode(val)
            } else {
                this.insert(val, root.right)
            }
            
        }

    }
    bstArr() {
        const arr = [];
        const queue = [this.root]
        while (queue.length) {
            let node = queue.shift()
            arr.push(node.val)
            if (node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return arr
    }
}

console.log(sortedArrayToBST([-10,-3,0,5,9]))

// var insertBST = function()

// root of tree should be middle of array

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5