#!/usr/bin/env node
'use strict';

console.log("dYdX HackerRank")


/*
n = 0
find maximum stack and their indices,
next find the next highest stack(s),
increment n by the number of max stacks,
overwrite the max stacks with the nexthighest

if all stacks are of equal height, you are done
*/

// function pilesOfBoxes(boxesInPiles) {
//     // Write your code here
//     // console.log(Math.max(...boxesInPiles))
//     let n = 0;
//     let cont = true;

//     while (cont) {
//         let [maxNum, indices] = findMaxes(boxesInPiles);
//         n += indices.length;
//         let newHeight = findNextHighest(boxesInPiles, maxNum)
//         boxesInPiles = changeHeights(newHeight, indices, boxesInPiles);
//         if(areAllSame(boxesInPiles, newHeight)) cont = false
//     }
//     return n;
// }

// function findMaxes(boxesInPiles){
//     let maxNum = Math.max(...boxesInPiles);
//     let indices = [];
//     for(let i = 0; i < boxesInPiles.length; i++){
//         let box = boxesInPiles[i];
//         if(box === maxNum){
//             indices.push(i);
//         }
//     }
//     return [maxNum, indices]
// }


// function findNextHighest(boxesInPiles, height) {
//     let newMaxHeight = 0;
//     for (let i = 0; i < boxesInPiles.length; i++){
//         let box = boxesInPiles[i];
//         if (box > newMaxHeight && box < height) {
//             newMaxHeight = box
//         }
//     }
//     return newMaxHeight
// }

// function changeHeights(newHeight, indices, boxes) {
//     for (let i = 0; i < indices.length; i++){
//         let idx = indices[i];
//         boxes[idx] = newHeight
//     }
//     return boxes
// }

// function areAllSame(boxes, height) {
//     for (let i = 0; i < boxes.length; i++){
//         if(boxes[i] !== height) return false
//     }
//     return true
// }


function pilesOfBoxes(boxesInPiles) {
    // Write your code here
    // console.log(Math.max(...boxesInPiles))
    let n = 0;
    let cont = true;

    // let [maxNum, indices] = findMaxes(boxesInPiles);
    // n += indices.length;
    let indices;
    let newHeight = Math.max(...boxesInPiles);
    while (cont) {
        // findIndices locates indices of the height that is to be changed
        indices = findIndices(boxesInPiles, newHeight); //[1,2]
        // console.log("indices: ", indices)
        // findNext should find the next height
        newHeight = findNextHighest(boxesInPiles, newHeight) // 5 -> 4

        // console.log("newHeight: ", newHeight)
        // changeHeights should go thru boxes, and at the indices of the heights to be changed, change to next highest
        boxesInPiles = changeHeights(newHeight, indices, boxesInPiles);
        n += indices.length
        // console.log("boxesInPiles: ", boxesInPiles, " newHeight: ",newHeight)
        if (areAllSame(boxesInPiles, newHeight)) cont = false
        // break;
    }
    return n;
}


function findNextHighest(boxesInPiles, height) {


    let newMaxHeight = 0;
    let indices = [];
    for (let i = 0; i < boxesInPiles.length; i++) {
        let box = boxesInPiles[i];
        if (box > newMaxHeight && box < height) {
            newMaxHeight = box
        }
    }
    return newMaxHeight;

}
function findIndices(boxesInPiles, h) {
    let idxs = [];
    for (let i = 0; i < boxesInPiles.length; i++) {
        if (boxesInPiles[i] === h) {
            idxs.push(i)
        }
    }
    return idxs
}

function changeHeights(newHeight, indices, boxes) {
    for (let i = 0; i < indices.length; i++) {

        let idx = indices[i];
        boxes[idx] = newHeight
    }

    return boxes
}

function areAllSame(boxes, height) {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] !== height) return false
    }
    return true
}


let sampleBoxes = [4, 5, 5, 2, 4];

// console.log(pilesOfBoxes(sampleBoxes));




let nums = [2, 3];
let k = 1;

let sortedHighToLow = nums.sort((a, b) => {
    return b - a;
});
console.log(sortedHighToLow);

function minSum(num, k) {
    // Write your code here
    // console.log(num, k)
    let max = Math.max(...num);
    let idx = num.indexOf(max)
    num = operate(idx, num)
    return num.reduce((a, b) => a + b)
}

function operate(i, array) {
    let c = Math.ceil(array[i] / 2)
    array[i] = c;
    return array
}

// console.log(operate(0, nums))
// console.log(nums.reduce((a,b) => a + b))


function minSum(num, k) {
    // Write your code here
    // console.log(num, k)
    //     let sortedHighToLow = num.sort((a, b) => {
    //     return b - a;
    //   });
    //   console.log(sortedHighToLow)
    //     let i = 0;
    //     while(i < k){
    //     let max = Math.max(...num);
    //     let idx = num.indexOf(max)
    //     num = operate(idx, num)
    //     i++
    //     }
    //     return num.reduce((a,b) => a + b)
    // }

    // function operate(i, array){
    //     let c = Math.ceil(array[i] / 2)
    //     array[i] = c;
    //     return array

    const length = num.length;
    let sortedHighToLow = num.sort((a, b) => {
        return b - a;
    });
    let smallerValues;
    let sum = 0;

    for (let i = 0; i < k; i++) {
        const maxValue = sortedHighToLow[0];
        if (i % 1000 === 0) {
            console.log(`sono a ${i} di ${k}: ${maxValue}`);
        }

        // If maxValue is 1 then there's no point in running more work
        if (maxValue < 2) {
            console.warn("stop!");
            break;
        }
        // Pre-condition: first item in the array is the largest. This means we should halve its value to minimize the sum.
        const halvedMax = Math.ceil(maxValue / 2);
        sortedHighToLow[0] = halvedMax;

        /**
         * Maintain the pre-condition after mutation.
         * j starts from the end and works its way back to 2nd element (since array is sorted high to low)
         */
        for (let j = length - 1; j >= 1; j--) {
            if (sortedHighToLow[j] > halvedMax) {
                smallerValues = sortedHighToLow.slice(j + 1);
                sortedHighToLow = sortedHighToLow.slice(1, j + 1);
                sortedHighToLow.push(halvedMax);
                sortedHighToLow = sortedHighToLow.concat(smallerValues);
                break;
            }
        }
    }

    for (let i = 0; i < sortedHighToLow.length; i++) {
        sum += sortedHighToLow[i];
    }
    return sum;
}