#!/usr/bin/env node
'use strict';


const makeChange = (n, coins) => {
    let ways = new Array(n + 1).fill(0);
    ways[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        for (let amt = coin; amt <= n; amt++) {
            if (coin <= amt) {
                ways[amt] += ways[amt - coin]
            }
        }
    }
    return ways[n];
}

console.log(makeChange(30, [1, 5, 10, 25]));