function maxWidth(root){
	let node = root;
	let queue = [node];
	let currLevel =[node.value];                  //   1
	while(queue.length){			//     2        3
		let node = queue.shift();       //  5    null  null   null
		if(node.left || node.right){ 
//instead pass to iterating function that would check node at idx 0 and 
//end and check that they both had at least one child node
			//currLevel.shift()
			if(node.left.value){
				queue.push(node.left)
}
if(node.right.value){
	queue.push(node.right)
}
		  } else {
			return counter(queue)
}
}
}

 function counter(array){
let startIdx = null;
let endIdx = null;
	for (let i = 0; i < array.length; i++){
		let node = array[i];
		if (node.value && !startIdx){
			startIdx = i;
		} 
if(node.value && startIdx){
			endIdx = i;
}
       }
return startIdx - endIdx
}
