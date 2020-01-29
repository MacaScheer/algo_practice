function findClosestValueInBst(tree, target) {
    let closestVal = Infinity
    if (closest(tree.val) < closestVal || tree.val === target) closestVal = tree.val


    if (target > tree.val) {
        findClosestValueInBst
    }
    if (target < tree.val) {

    }

    if (!tree.right && !tree.left) {
        return closestVal
    }
}

function closest(target, val) {
    return Math.abs(val - target)
}

class BstNode{
    constructor(value) {
        this.value = value;
        this.right = this.left = null;
    }
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