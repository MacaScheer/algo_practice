#!/usr/bin/env node
'use strict';

function minNumberOfCoinsForChange(n, denoms) {
    let ways = []
    for (let i = 0; i <= n; i++) {
        ways[i] = 0;
    }
    denoms = qSort(denoms)
    console.log(denoms)
    for (let i = 0; i < denoms.length; i++){
        let denom = denoms[i];
        for (let amt = denom; amt <= n; amt++){
            // if (denom <= amt) {
            //     ways[amt] += ways[amt - denom]
            // }
            let quot = Math.floor(amt / denom);
            let rem = amt % denom;
            ways[amt] = quot + ways[rem]

            // console.log("amt: ", amt, " denom: ", denom, "  quot: ", quot, "  rem: ", rem, "  ways[amt]: ", ways[amt])
        }
    }
    // console.log(ways)
    return ways[n]
}

function qSort(array) {
    if (array.length <= 1) return array;
    let piv = array.shift();
    let left = array.filter(el => el <= piv);
    let right = array.filter(el => el > piv);
    let sortedLeft = qSort(left);
    let sortedRight = qSort(right);
    return sortedLeft.concat([piv]).concat(sortedRight)
}

// console.log(qSort([45,7,2,49,3,2,1,77]))
// console.log(minNumberOfCoinsForChange(11, [1,5,10]))
// console.log(minNumberOfCoinsForChange(3, [2,1]))
// console.log(minNumberOfCoinsForChange(4, [1,5,10]))
console.log(minNumberOfCoinsForChange(135, [39, 45, 130, 40, 4, 1, 60, 75]))