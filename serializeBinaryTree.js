#!/usr/bin/env node
'use strict';

const serializeBST = function (root, string) {
    if (root === null) {
        string += "null,";
    } else {
        string += value.concat(", ")
    }
    return string;
}

class BST{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}