#!/usr/bin/env node
'use strict';


//create a ways array that is of length n - 1
//iterate through the denoms:
   //iterate through the ways array
        //if denom <= n, then update ways[n] += ways[n - denom]


function numberOfWaysToMakeChange(n, denoms) {


    let ways = [1];
    for (let i = 1; i <= n; i++){
        ways[i] = 0;
    }
    console.log("ways: ", ways)
        for (let i = 0; i < denoms.length; i++) {
            let denom = denoms[i];
            console.log("denom: ", denom)
            for (let amt = 1; amt <= ways.length; amt++){
                if (denom <= amt) {
                    ways[amt] += ways[amt - denom]
                }
            }
        }
        return ways[n]
}






console.log(numberOfWaysToMakeChange(25, [1,5,10,25]))  //should equal 13
//1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1
//1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+5
//1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+5+5


module.exports = {numberOfWaysToMakeChange}