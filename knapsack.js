#!/usr/bin/env node
'use strict';

function knapsackROUGH(items, capacity) {
    items = sortByDensity(items);
    let currCapacity = capacity;
    let itemIdx = items.length - 1;
    let sack = [];
    while (currCapacity > 0 && itemIdx > -1) {
        let currItem = items[itemIdx];
        console.log('currItem: ', currItem, " currCapacity: ", currCapacity)
        if (currItem[1] <= currCapacity) {
            sack.push(currItem)
            currCapacity -= currItem[1]
        } else {
            itemIdx--
        }
    }
    return sack
}

// function knapsack(items, capacity) {
//     let maxVals = new Array(items.length).fill([]);
//     for (let x = 0; x < maxVals.length; x++){
//         for (let y = 0; y <= capacity; y++){
//             maxVals[x].push(0)
//         }
//     }
//     items = sortByDensity(items);
//     for (let i = 0; i < items.length; i++){
//         let row = maxVals[i];
//         let weight = items[i][1];
//         let val = items[i][0];
        
//         for (let amt = weight; amt <= capacity; amt++){
//             if (amt - weight >= 0) {
//                 // row[amt] = row[amt - weight] + 1
//                 // this isn't the right approach because there aren't an unlimited number of each item
//             } 
//             console.log("val: ", val, " weight: ", weight, " amt: ", amt, " row[amt]:", row[amt])
//         }
//     }
//     console.log("maxVals: ", maxVals);


// }


function knapsack(items, capacity) {
    let sack = new Array(items.length + 1).fill([])
    for (let i = 0; i <= items.length; i++){
        let item;
        let itemRow;
        let amt;
        let weight;
        let val;
        if (i === 0) {
            item = [0, 0];
            weight = 0; val = 0
            itemRow = sack[i];
            for (amt = 0; amt <= capacity; amt++){
                itemRow.push(0)
            }
        } else {
            item = items[i - 1];
            weight = item[1];
            val = item[0]
            itemRow = sack[i];
            for (amt = 0; amt <= capacity; amt++){
                
                if (i === 1) {
                    if (weight <= amt) {
                        itemRow.push(val)
                    } else {
                        itemRow.push(0)
                    }
                } else {
                    if (weight <= amt) {
                        let diff = sack[i - 1][amt - weight] === undefined ? weight : sack[i - 1][amt - weight] + weight;
                        let prevWeight = sack[i - 1][amt]
                        itemRow.push(Math.max(prevWeight, diff))
                    } else {
                        itemRow.push(0)
                    }
                    // if (weight > amt && sack[i - 1][amt] > 0) {
                    //     itemRow.push(sack[i - 1][amt])
                    // } else if (weight <= amt) {
                    //     
                    // } 
                }
                // else if (weight <= amt && sack[i - 1][amt] > 0) {
                //     itemRow.push(Math.max(val, sack[i - 1][amt]))
                // } else {
                //     itemRow.push(0)
                // }
            }
        }
    }
    console.log(sack, sack.length)

    // BACKTRACK: start with last index and check whether or not the value stored, is equal to the value
    // located one row above. If it isn't, then the item represented by the current row is in the knapsack...

}


function knapSackProblem(items, capacity) {
    // initialize empty 2D array
    let knapsackValues = [[]]
    for (let j = 0; j <= capacity; j++){
        knapsackValues[0].push(0)
    }
    for (let i = 1; i <= items.length; i++){
        knapsackValues.push(new Array(capacity + 1))
    }
    // build out dynamic 2D array
    for (let i = 1; i <= items.length; i++){
        let currWeight = items[i - 1][1];
        let currVal = items[i - 1][0];
        for (let c = 0; c <= capacity; c++){
            if (currWeight > c) {
                knapsackValues[i][c] = knapsackValues[i - 1][c]
            } else {
                knapsackValues[i][c] = Math.max(knapsackValues[i - 1][c], currVal + knapsackValues[i - 1][c - currWeight] + currVal)
            }
        }
    }

return [knapsackValues[knapsackValues.length -1][knapsackValues.length - 1], getKnapsackItems(knapsackValues, items)]
}


function getKnapsackItems(knapsackValues, items) {
    let seq = [];
    let i = knapsackValues.length - 1;
    let c = knapsackValues[0].length - 1;
    while (i > 0) {
        if (knapsackValues[i][c] === knapsackValues[i - 1][c]) {
            i--;
        } else {
            seq.push(i - 1);
            c -= items[i - 1][1];
            i--;
        }
        if (c === 0) break;
    }
    return seq.reverse()
}
/*
 v,w  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
[0,0] 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
[1,2] 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1
[4,3] 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1
[5,6]
[6,7]
*/



const density = (item) => item[0] / item[1]

function sortByDensity(items) {
    if(items.length <= 1) return items
    let piv = items.shift();
    let left = items.filter(el => density(el) < density(piv));
    let right = items.filter(el => density(el) >= density(piv));
    return sortByDensity(left).concat([piv]).concat(sortByDensity(right))
}

const items1 = [[1,2],[4,3],[5,6],[6,7]]
const cap = 10;






// console.log(knapsack(items1, cap))
console.log(knapSackProblem(items1, cap))

