function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const dfsPath = function (root, sums, sum) {
    sum += root.value
    if (!root.left && !root.right) {
        // return root.value
        sums.push(sum)
        // return root.value
    }

    if (root.left) {
        dfsPath(root.left, sums, sum)
    }
    if (root.right) {
        dfsPath(root.right, sums, sum)
    }
    return sums
}



const reducer = (acc, currVal) => acc + currVal 
const sumMer = function (arr) {
   return arr.reduce(reducer)

}
// push node value to array
// else if node has left child, search left child node
// else if node has right child, search right child node
// else if summed array === sum value return true
// 
let a = new TreeNode(5)
let b = new TreeNode(4)
let c = new TreeNode(8)
let d = new TreeNode(11)
let e = new TreeNode(13)
let f = new TreeNode(4)
let g = new TreeNode(7)
let h = new TreeNode(2)
let i = new TreeNode(1)

a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;
d.left = g;
d.right = h;
f.right = i;

// console.log(sumMer([1,2,3,4]))

console.log(dfsPath(a, 22))





