class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function branchSums(root, sums = [], sum = 0) {
    sum += root.value
    if (!root.left && !root.right) {
        // return root.value
        sums.push(sum)
        // return root.value
    }

    if (root.left) {
        branchSums(root.left, sums, sum)
    }
    if (root.right) {
        branchSums(root.right, sums, sum)
    }
    return sums
}


let a = new BinaryTree(1)
let b = new BinaryTree(2)
let c = new BinaryTree(3)
let d = new BinaryTree(4)
let e = new BinaryTree(5)
let f = new BinaryTree(6)
let g = new BinaryTree(7)
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;





//       1
//     /   \
//    2     3
//   / \   / \
//  4   5 6   7


console.log(branchSums(a))