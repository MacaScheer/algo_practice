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
        if (i === 0) {
            item = [0,0]
        } else {
            item = items[i - 1]
        }
        let itemRow = sack[i];
        for (let j = 0; j <= capacity; j++){

        }
    }
}


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






console.log(knapsack(items1, cap))
