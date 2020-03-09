#!/usr/bin/env node
'use strict';

function minNumberOfCoinsForChange(n, denoms) {
    let ways = []
    for (let i = 0; i <= n; i++) {
        ways[i] = 0;
    }
    for (let i = denoms.length - 1; i > 0; i--){
        let denom = denoms[i];
        for (let j = denom; j < ways.length; j++){
            if (ways[j] <= denom) {
                ways[j] += ways[j - denom]
            }
        }
    }
    console.log(ways)
}
console.log(minNumberOfCoinsForChange(7, [1, 5, 10]))
console.log(minNumberOfCoinsForChange(3, [2,1]))
console.log(minNumberOfCoinsForChange(4, [1,5,10]))
console.log(minNumberOfCoinsForChange(135, [39, 45, 130, 40, 4, 1, 60, 75]))