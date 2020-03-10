#!/usr/bin/env node
'use strict';

function minNumberOfCoinsForChange(n, denoms) {
    let ways = [0]
    for (let i = 1; i <= n; i++){
        ways[i] = Infinity
    }
    for (let i = 0; i < denoms.length; i++){
        let denom = denoms[i];
        for (let amt = denom; amt <= n; amt++) {
                let diff = amt - denom;
                let newCoins = 1 + ways[diff]
                ways[amt] = Math.min(newCoins, ways[amt])
        }
    }
 return ways[n] < Infinity ? ways[n] : -1
}

// function qSort(array) {
//     if (array.length <= 1) return array;
//     let piv = array.shift();
//     let left = array.filter(el => el <= piv);
//     let right = array.filter(el => el > piv);
//     let sortedLeft = qSort(left);
//     let sortedRight = qSort(right);
//     return sortedLeft.concat([piv]).concat(sortedRight)
// }

// console.log(qSort([45,7,2,49,3,2,1,77]))
// console.log(minNumberOfCoinsForChange(11, [1,5,10]))
// console.log(minNumberOfCoinsForChange(3, [2,1]))
// console.log(minNumberOfCoinsForChange(4, [1,5,10]))
console.log(minNumberOfCoinsForChange(135, [39, 45, 130, 40, 4, 1, 60, 75]))