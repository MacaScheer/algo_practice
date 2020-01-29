// check if current node value === target or is closer to target than previous
// if current node value is less than target, check left child node recursively
// if current node value is more than target, check right child node recursively
// if right node is greater than target and farther away than current closest, return current closest, finish

function findClosestValueInBst(tree, target, diff = Infinity) {
    let closestNode = tree;

    let current = closest(target, tree.value)
    if (current < diff || tree.value === target) {
        diff = current
        closestNode = tree
    }

    if (target > tree.value) {
        return findClosestValueInBst(tree.right, target)
    }
    else if (target < tree.value) {
        return findClosestValueInBst(tree.left, target)
    }

    if (!tree.right && !tree.left) {
        return closestNode.value
    }
}

function closest(target, val) {
    return Math.abs(val - target)
}


    function BstNode(value) {
        this.value = value;
        this.right = this.left = null;
    }



let a = new BstNode(10)
let b = new BstNode(5)
let c = new BstNode(15)
let d = new BstNode(2)
let e = new BstNode(5)
let f = new BstNode(13)
let g = new BstNode(22)
let h = new BstNode(1)
let i = new BstNode(14)

a.left = b;
a.right = c;
b.left = d;
b.right = e;
d.left = h;
c.left = f;
c.right = g;
f.right = i;

console.log(findClosestValueInBst(a,12))