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


function dist(S, C) {
	outputArr = [];
	for (let i = 0; i < S.length; i++) {
		let char = S[i];
		forwardCount = 0;
		reverseCount = 0;
		if (char === C) {
			outputArr.push(0);
		} else {
            for (j = i + 1; j < S.length; j++) {
                console.log("j: ",j)
                forwardCount++;
                if (S[j] === C) {
                break;
                }
            }
            for (k = i - 1; k >= 0; k--) {
                console.log("k: ",k)
                
                reverseCount++;
                if (S[k] === C) break;
            }
            console.log("forwardCOunt: ", forwardCount, " reverseCOunt: ", reverseCount)
            outputArr.push(Math.min(forwardCount, reverseCount));
        }
 
    }
	return outputArr;
}




// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]



console.log(dist("loveleetcode",'e'), "should be [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]")