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

// const yesterdaysPrices = [10, 7, 5, 8, 11, 9];
// console.log(getMaxProfit(yesterdaysPrices))
// [10, 7,  5,      , 8             , 11                ,  9]
// [0 ,-3,(-2 or -5),(3 or -2 or -1), (1 or 4 or 6 or 3), (-1, or 2 or 4 or 1 or -2 or 6)]
// [0, -3, -2,  3, 6, 4] greatest diffs
// [0, -3, -2, 3, 3, -2] diff from Previous
// [10,7,5,8,11,9]
// SLIGHTLY SLOWER, O(n) VS O(2n) => O(n)

/*/
WHERE GREEDY APPROACH WON'T WORK:
/*/

const cakeTypes1 = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
];

const capacity1 = 20;

function maxDuffelBagValue(cakeTypes, capacity){
    if (capacity === 0) return 0;
    let sumValue = 0;
    let sortedTypesByWorth = sortByWorth(cakeTypes)
    let smallestWeight = sortedTypesByWorth[sortedTypesByWorth.length - 1].weight

        for (let i = 0; i < sortedTypesByWorth.length; i++){
            let cake = sortedTypesByWorth[i];
            if(cake.weight === 0 && cake.value === 0) continue
            console.log("cake: ", cake, " capacity: ", capacity, " cakeWeight: ", cake.weight)
            if (capacity >= cake.weight) {
                let numOfCake = Math.floor(capacity / cake.weight);
                sumValue += (cake.value * numOfCake);
                capacity -= (numOfCake * cake.weight)   
                console.log('numCake: ', numOfCake, " cake: ", cake, " capacity: ", capacity)
            }
            // if(capacity < smallestWeight) return sumValue
        }
    console.log(capacity)
    return sumValue
}

// function numThatFit(capacity, weight) {
    
// }

function spliceOut(array, idx) {
    if (idx === 0) {
        array.shift()
    } else {
        let f = array.slice(0, idx);
        let l = array.slice(idx + 1);
        array = f.concat(l)
    }
    return array
}

function sortByWorth(cakeTypes) {
    let newTypes = [];
    while (cakeTypes.length) {
        let max = maxWorth(cakeTypes)
        newTypes.push(max)
        let idx = cakeTypes.indexOf(max)
        cakeTypes = spliceOut(cakeTypes, idx)
    }
    return newTypes
}
function maxWorth(types) {
    return types.reduce((a, b) => ((b.value/b.weight) > (a.value/a.weight) ? b : a))
}
// console.log(sortByWorth(cakeTypes1))
// function maxWorth(object) {
//     let maxKey;
//     let maxWorth = 0;
//     for (let k in object) {
//         let worth = object[k].value / object[k].weight
//         console.log("k: ", k)
//         if (maxWorth < worth) {
//             maxWorth = worth;
//             maxKey = object[k]
//         } 
//     }
// }
// function insertWorth(types) {
//     for (let i = 0; i < types.length; i++){
//         let cake = types[i];
//         cake['worth'] = cake.value / cake.weight
//     }
//     return types
// }

// CAKE SOLUTION 
  function maxDuffelBagValue(cakeTypes, weightCapacity) {

  // We make an array to hold the maximum possible value at every
  // duffel bag weight capacity from 0 to weightCapacity
  // starting each index with value 0
  const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {

    // Set a variable to hold the max monetary value so far for currentCapacity
    let currentMaxValue = 0;

    // We use a for loop here instead of forEach because we return infinity
    // If we get a cakeType that weighs nothing and has a value. but forEach
    // loops always return undefined and you can't break out of them without
    // throwing an exception
    for (let j = 0; j < cakeTypes.length; j++) {
      const cakeType = cakeTypes[j];

      // If a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }

      // If the current cake weighs as much or less than the current weight capacity
      // it's possible taking the cake would get a better value
      if (cakeType.weight <= currentCapacity) {

        // So we check: should we use the cake or not?
        // If we use the cake, the most kilograms we can include in addition to the cake
        // We're adding is the current capacity minus the cake's weight. we find the max
        // value at that integer capacity in our array maxValuesAtCapacities
        const maxValueUsingCake = cakeType.value
          + maxValuesAtCapacities[currentCapacity - cakeType.weight];

        // Now we see if it's worth taking the cake. how does the
        // value with the cake compare to the currentMaxValue?
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }

    // Add each capacity's max value to our array so we can use them
    // when calculating all the remaining capacities
    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }

  return maxValuesAtCapacities[weightCapacity];
}
// console.log(maxDuffelBagValue(cakeTypes1, capacity1))

// console.log(maxWorth(cakeTypes1))


// ALGORITHMS RUNNING O(n*logn) time:
// MERGE SORT:
// O(logn) comes from splitting the array in half down to lengths of 1
// the n scaler comes from merging the halves back together, because for each of the times you halve the array
// you have to go through all n elements when comparing the elements of both halves to each other

function mergeSort(arrayToSort) {
    if (arrayToSort.length < 2) return arrayToSort;
    const midIdx = Math.floor(arrayToSort.length / 2);
    const left = arrayToSort.slice(0, midIdx);
    const right = arrayToSort.slice(midIdx);
    const sLeft = mergeSort(left);
    const sRight = mergeSort(right);
    const sortedArr = [];
    let currLeftIdx = 0;
    let currRightIdx = 0;

    while (sortedArr.length < left.length + right.length) {
        if (currLeftIdx < left.length && (currRightIdx === right.length || sLeft[currLeftIdx] < sRight[currRightIdx])) {
            sortedArr.push(sLeft[currLeftIdx]);
            currLeftIdx++
        } else {
            sortedArr.push(sRight[currRightIdx]);
            currRightIdx++
        }
    }
    return sortedArr;
}