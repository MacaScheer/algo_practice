#! /usr/bin/env node
'use strict';

console.log("PAIRBOARD 04/21 WITH TONY AND MAC")

class BST{
constructor(val){
	this.val = val;
	this.right = null;
this.left = null;
}
//Left, Root, Right//
inOrderTraverse(tree, queue=[]) {
	if (tree !== null){
        inOrderTraverse(tree.left, queue)
        queue.push(tree.value)
        inOrderTraverse(tree.right, queue)
	}
	return queue;
}

preOrderTraverse(tree, array=[]) {
if(tree !== null){
	array.push(tree.value)
	preOrderTraverse(tree.left, array)
	preOrderTraverse(tree.right, array)
}
return array 
}

postOrderTraverse(tree, array=[]) {
  	if (tree !== null){
		postOrderTraverse(tree.left, array)
        postOrderTraverse(tree.right, array)
        array.push(tree.value)	
    }
	return array
}


}

function findThreeLargestNumbers(array) {
	 let outputArr = [];

  while(outputArr.length < 3) {
		let max = Math.max(...array)
     let idxMax = array.indexOf(max);
     outputArr.unshift(max);
     array.splice(idxMax, 1);
		// array.remove(array, idxMax)
  }

  return outputArr;

}