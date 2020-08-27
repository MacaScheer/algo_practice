#!/usr/bin/env node
'use strict';

function markAndToys(prices, amt) {
    let bag = new Array(amt + 1).fill(0);
    bag[0] = 1;
    prices = prices.sort((a, b) => a - b); //is this necessary?
    for (let i = 0; i < prices.length; i++){
        let price = prices[i];
        for (let j = price; j <= amt; j++){
            if (j >= price) {
                bag[j] = bag[j - price] + 1
            }
        }
    }
    return bag[amt]
}
// this is a solution for the constraint of having unlimited number of each toy
// constraint is there is only one of each toy (prices)

let prices1 = [1, 2, 3, 4];
let k1 = 7;

console.log(markAndToys(prices1, k1))