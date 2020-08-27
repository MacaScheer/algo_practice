#!/usr/bin/env node
'use strict';

// function markAndToys(prices, amt) {
//     let bag = new Array(amt + 1).fill(0);
//     bag[0] = 1;
//     prices = prices.sort((a, b) => a - b); //is this necessary?
//     for (let i = 0; i < prices.length; i++){
//         let price = prices[i];
//         for (let j = price; j <= amt; j++){
//             if (j >= price) {
//                 bag[j] = bag[j - price] + 1
//             }
//         }
//     }
//     return bag[amt]
// }
// ^^^^^^
// this is a solution for the constraint of having unlimited number of each toy
// constraint is there is only one of each toy (prices)

//  0, 1, 2, 3, 4   amt
//[  ,  ,  ,  ,  ]  num toys
//[  ,  ,  ,  ,  ]  

function markAndToys(prices, k) {
    // PSEUDO:
    // sort small to large, can have more of the cheaper
    // iterate through the prices, checking if purchasing that prices[i]
    // how many other prices could be purchased?
    // check idx0, with idx1/idx2/idx3/idx4
    // check idx1, with idx2/idx3
    // 0,1,2,3...until maxed out
    // 0,2,3...until maxed out
    // 0,3...until maxed out
    // 1,2,3...
    // 1,3...
    // 2,3...until maxed out
    prices = prices.sort((a, b) => a - b);
    let maxBagSize = 0;
    let i = 0;
    // console.log("amount: ", k)
    while (i < prices.length) {
        let cost = 0;
        let bag = [];
        bag.push(prices[i]);
        cost += prices[i]
        let j = i + 1;
        while (j < prices.length) {
            if (prices[j] <= k - cost) {   
                bag.push(prices[j]);
                cost += prices[j]
            }
            j++
        }
        // console.log("bag: ",bag, " cost: ", cost)
        if (bag.length > maxBagSize) {
            maxBagSize = bag.length
        }
        i++
    }
    return maxBagSize;
}


let priceList = [[1, 2, 3, 4], [1, 12, 5, 111, 200, 1000, 10], [3,7,2,9,4]];
let kList = [7, 50, 15];
let results = [3, 4, 3];
for (let i = 0; i < priceList.length; i++){
    let k = kList[i];
    let price = priceList[i];
    let res = results[i];
    console.log(markAndToys(price, k), `should result in ${res}`)
}