#!/usr/bin/env node
'use strict';
/*/ 
in order to optimize your life, you want to minimize the farthest distance 
you have to walk from your apartment, to any of the required destinations
write a function that takes in a list of blocks and a list of the required buildings
and returns the index of the block that's most optimal for you.
/*/
function apartmentHunting(reqs, blocks) {
    
}

function mapReqsByBlock(reqs, blocks) {
    
}

 let blocks = [
  {
    "gym": false,
    "school": true,
    "store": false,
  },
  {
    "gym": true,
    "school": false,
    "store": false,
  },
  {
    "gym": true,
    "school": true,
    "store": false,
  },
  {
    "gym": false,
    "school": true,
    "store": false,
  },
  {
    "gym": false,
    "school": true,
    "store": true,
  },
]
let reqs = ["gym", "school", "store"]

console.log(apartmentHunting(reqs, blocks), "should return 3")