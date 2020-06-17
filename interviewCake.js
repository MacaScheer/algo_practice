#!/usr/bin/env node
// 'use strict';

console.log("Interview Cake Notes");
/*/ problem Qs:
permutataions, djikstras, BST problems, makeChange, leastCoinMakeChange, riverWidths, Suffixtries
ADD MORE: 
/*/

function getMaxProfit(stockPrices) {
    // let differences = [0, (stockPrices[1] - stockPrices[0])];
    // for (let i = 2; i < stockPrices.length; i++){
    //     // let nextDiff = Math.max(stockPrices[i] - stockPrices[0], differences[i - 1] + stockPrices[i] - )
    //     let diffFromPrev = stockPrices[i] - stockPrices[i - 1];

        
    //     differences.push(nextDiff)
    // }
    // console.log(differences)
    // return differences.pop()
    let diff1s = diffs(stockPrices);
    let maxSum = maxConsecutiveSum(diff1s)
    return maxSum
}

function diffs(array) {
    let arr = [0];
    for (let i = 1; i < array.length; i++){
        arr.push(array[i] - array[i - 1])
    }
    return arr;
}
// [0, -3, -2, 3, 3, -2]
function maxConsecutiveSum(diffs) {
    let maxSum = 0;
    for (let i = 1; i < diffs.length; i++){                    //-3, -2, 3, 3, -2
        maxSum = Math.max(maxSum + diffs[i], diffs[i], maxSum) //0, 0, 3, 6, 6
        console.log("maxSum: ", maxSum)
    }
    return maxSum
}


const summer = function (a, b) {
    return a + b
}
const yesterdaysPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(yesterdaysPrices))
// [10, 7,  5,      , 8             , 11                ,  9]
// [0 ,-3,(-2 or -5),(3 or -2 or -1), (1 or 4 or 6 or 3), (-1, or 2 or 4 or 1 or -2 or 6)]
// [0, -3, -2,  3, 6, 4] greatest diffs
// [0, -3, -2, 3, 3, -2] diff from Previous

// compare: prices[i] - prices[i - 1] to 