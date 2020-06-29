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
    let yetToVisit = new Set();
    for (let i = 0; i < blocks.length; i++){
        yetToVisit.add(i)
    }
    let j = 0;
    while (yetToVisit.size > 0) {
        let block = blocks[j];
        yetToVisit.remove(j)
        let distances = distances(j, blocks, reqs)
    }
}

// returns the distances to the reqs of each block as an object
function distances(i, blocks, reqs) {
    let distance = {}
    let block = blocks[i]
    for (let j = 0; j < reqs.length; j++){
        let req = reqs[j];
        if (block.req) {
            distance[req] = 0
        } else {
            let minDist = findNearestBlock(req, i, blocks)  // [dist, idx]
            
        }
    }
}
// finds the nearest block idx from current, containing a specific req
function findNearestBlock(req, j, blocks) {
    let nearest = Infinity;
    let nearestIdx = Infinity;
    for (let i = 0; i < blocks.length; i++){
        if (i !== j) {
            let block = block[i];
            if (block[req] && Math.abs(i - j) < nearest) {
                nearest = Math.abs(i - j);
                nearestIdx = i
            }
        }
    }
    return [nearest, nearestIdx]
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