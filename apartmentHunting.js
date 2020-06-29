#!/usr/bin/env node
'use strict';
/*/ 
in order to optimize your life, you want to minimize the farthest distance 
you have to walk from your apartment, to any of the required destinations
write a function that takes in a list of blocks and a list of the required buildings
and returns the index of the block that's most optimal for you.
/*/


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
function apartmentHunting(reqs, blocks) {
    let distances = getDistances(blocks, reqs);
    let shortestWalks = Infinity;
    let optimalBlock = null;
    let maxWalks = {}
    for (let block in distances) {
        let dists = distances[block];
        let maxWalk = 0
        for (let walk in dists) {
            if(maxWalk < dists[walk]) maxWalk = dists[walk]
        }
        maxWalks[block] = maxWalk

    }
    console.log("maxWalks: ", maxWalks)
    let min = Infinity;
    let minIdx;
    for (let walks in maxWalks) {
        if (maxWalks[walks] < min) {
            min = maxWalks[walks];
            minIdx = walks
        }
    }
    console.log(blocks[minIdx])
    return minIdx
}


// returns the distances to the reqs of each block as an object
function getDistances(blocks, reqs) {
    let distance = {}
    for (let x = 0; x < blocks.length; x++) {
        let block = blocks[x]
        distance[x] = {}
        for (let j = 0; j < reqs.length; j++) {
            let req = reqs[j];
            if (block[req] === true) {
                distance[x][req] = 0
            } else {
                let minDist = findNearestBlock(req, x, blocks)  // [dist, idx]
                distance[x][req] = minDist[0]
            }
            // console.log("distanceObj: ", distance[x])
        }
    }
    return distance
}
// finds the nearest block idx from current, containing a specific req
function findNearestBlock(req, j, blocks) {
    let nearest = Infinity;
    let nearestIdx = Infinity;
    for (let i = 0; i < blocks.length; i++){
        if (i !== j) {
            let block = blocks[i];
            // console.log("block: ", block," i:", i," block[req]: ", block[req], " nearest: ", nearest, " dist:", Math.abs(i - j))
            if (block[req] && Math.abs(i - j) < nearest) {
                nearest = Math.abs(i - j);
                nearestIdx = i
            }
        }
    }
    return [nearest, nearestIdx]
}
// console.log(findNearestBlock("store", 1, blocks))

// function mapReqsByBlock(reqs, blocks) {
//     let yetToVisit = new Set();
//     for (let i = 0; i < blocks.length; i++){
//         yetToVisit.add(i)
//     }
//     let j = 0;
//     while (yetToVisit.size > 0) {
//         let block = blocks[j];
//         yetToVisit.delete(j)
//         let distances = getDistances(j, blocks, reqs)
//     }
// }

// console.log(mapReqsByBlock(reqs, blocks))
// console.log(findNearestBlock("gym", 3, blocks))
// console.log(getDistances(blocks, reqs))
console.log(apartmentHunting(reqs, blocks), "should return 3")