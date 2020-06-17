#!/usr/bin/env node
'use strict';
class BST{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const serializeBST = function (root, string) {
    if (root === null) {
        string += "null,";
    } else {
        string += root.value.concat(", ");
        serializeBST(root.left, string);
        serializeBST(root.right, string)
    }
    return string;
}
