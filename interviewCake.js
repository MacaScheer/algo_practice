#!/usr/bin/env node
// 'use strict';

console.log("Interview Cake Notes");
/*/ problem Qs:
permutataions, djikstras, BST problems, makeChange, leastCoinMakeChange, riverWidths, Suffixtries
ADD MORE: 
/*/



/*/ GREEDY APPROACH: 
Builds up a solution by choosing the option that looks best at every step
Fast, usually just one pass through the input. Ask yourself: Can
we come up with the answer in just one pass through the input, updating the best answer as we go?
What additonal variables or values do we need to keep track of and update as we look at each item in the input
in order to update the 'best answer so far' in constant time?
In this case: 
'best answer so far' is the maxProfit
'additonal value' is the minPrice, we need to keep that updated so we can use it to calculate the new maxProfit so far in constant time
maxProfit is the larger of 1. previous maxProfit and 2. the maxProfit we can get by selling now(currPrice - minPrice)
/*/
function max_profit(prices) {
    if(stockPrices.length < 2) console.error("Getting a profit requires more than one post");
    let minPrice = prices[0];                                     //10
    let maxProfit = prices[1] - prices[0];                        //-3
    for (let currTime = 1; currTime < prices.length; currTime++){
        let currPrice = prices[currTime];                         // 7 // 5// 8 //11// 9
        let potentialProfit = currPrice - minPrice                //-3 //-2// 3 // 6// 4
        maxProfit = Math.max(maxProfit, potentialProfit);         //-3 //-2// 3 // 6// 6
        minPrice = Math.min(minPrice, currPrice)                  // 7 // 5// 5 // 5// 5
    }
    return maxProfit //6
}
// function getMaxProfit(stockPrices) {
//     // let differences = [0, (stockPrices[1] - stockPrices[0])];
//     // for (let i = 2; i < stockPrices.length; i++){
//     //     // let nextDiff = Math.max(stockPrices[i] - stockPrices[0], differences[i - 1] + stockPrices[i] - )
//     //     let diffFromPrev = stockPrices[i] - stockPrices[i - 1];

        
//     //     differences.push(nextDiff)
//     // }
//     // console.log(differences)
//     // return differences.pop()
//     let diff1s = diffs(stockPrices);
//     let maxSum = maxConsecutiveSum(diff1s)
//     return maxSum
// }

// function diffs(array) {
//     let arr = [0];
//     for (let i = 1; i < array.length; i++){
//         arr.push(array[i] - array[i - 1])
//     }
//     return arr;
// }
// // [0, -3, -2, 3, 3, -2]
// function maxConsecutiveSum(diffs) {
//     let maxSum = 0;
//     for (let i = 1; i < diffs.length; i++){                    //-3, -2, 3, 3, -2
//         maxSum = Math.max(maxSum + diffs[i], diffs[i], maxSum) //0, 0, 3, 6, 6
//         console.log("maxSum: ", maxSum)
//     }
//     return maxSum
// }


// const summer = function (a, b) {
//     return a + b
// }
// const yesterdaysPrices = [10, 7, 5, 8, 11, 9];
// console.log(getMaxProfit(yesterdaysPrices))
// [10, 7,  5,      , 8             , 11                ,  9]
// [0 ,-3,(-2 or -5),(3 or -2 or -1), (1 or 4 or 6 or 3), (-1, or 2 or 4 or 1 or -2 or 6)]
// [0, -3, -2,  3, 6, 4] greatest diffs
// [0, -3, -2, 3, 3, -2] diff from Previous

// compare: prices[i] - prices[i - 1] to 

// [10,7,5,8,11,9]
// SLIGHTLY SLOWER, O(n) VS O(2n) => O(n)


const cakeTypes1 = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
];

const capacity1 = 20;

function maxDuffelBagValue(cakeTypes, capacity){
    
}
console.log(maxDuffelBagValue(cakeTypes1, capacity1))