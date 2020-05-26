#!/usr/bin/env node
'use strict';

// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False


// function checkRecord(s) {
    
// }
// There are N network nodes, labelled 1 to N.

// Given times, a list of travel times as directed edges times[i] = (u, v, w), 
// u is the source node, 
// v is the target node, 
// w is the time it takes for a signal to travel from source to target.

// Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

 

// Example 1:



// Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
// Output: 2
 

// Note:

// N will be in the range [1, 100].
// K will be in the range [1, N].
// The length of times will be in the range [1, 6000].
// All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 0 <= w <= 100.


var networkDelayTimeOLD = function(times, N, K) {
    let visited = {};
    let time = 0;
    let targets = {};
//     find start node
    // let numVisited = 0;
    let nodes = findNextNode(times, K)
//     find next nodes, add their travel times
    while(nodes.length){
        let node = nodes.shift();
        // console.log(node)
        if (!targets[node[1]]) {
            targets[node[1]] = true;
        }
        if (!visited[node[0]]) {
            visited[node[0]] = true
            time += node[2]
        }  
            nodes.push(...findNextNode(times, node[1]))
    }
    let numVisited = 0;
    for (let obj in targets) {
        numVisited++
    }
    console.log("numVisited: ", numVisited)
    if (numVisited < N) {
        return -1
    } else {
        return time;
    }
};


// CAN'T COUNT SIMULTANEOUS TRAVEL TIMES AS SEPARATE
// SHOULD SORT DIFFERENT TRAVEL TIMES TO THE SAME NODE, AND ONLY CONSIDER THE SHORTER DISTANCE
var findNextNode = function(times, target){
    let nextNodes = []
    for (let i = 0; i < times.length; i++){
        let node = times[i];
        if(node[0] === target){
            nextNodes.push(node)
        }
    }
    // console.log("nextNodes",nextNodes)
    return nextNodes;
}

const findShortestDist = function (times, targetA) {
    let minTime = Infinity;
 
    for (let i = 0; i < times.lenth; i++){
        let node = times[i];
        let targetB = node[1];
        let time = node[2];
        if (targetA === targetB) {
            
        }
    }
}


// console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2))
// 
// console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2))

// Let's record the time dist[node] when the signal reaches the node. 
// If some signal arrived earlier, we don't need to broadcast it anymore. 
// Otherwise, we should broadcast the signal.

// We'll maintain dist[node], the earliest that we arrived at each node. 
// When visiting a node while elapsed time has elapsed, 
// if this is the currently - fastest signal at this node, let's broadcast signals from this node.
// To speed things up, at each visited node we'll consider signals exiting the node that are faster first, by sorting the edges.

const times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]];
// [src, target, time]
// K is starting node;
// N is total number of nodes
const networkDelayTime = function (times, N, K) {
    let graph = buildGraph(times)
    // dist = {2:{1:1,3:1},3:{4:1}}
    // console.log("dist: ", dist)
    // dist[K][K] = 0;
    // console.log(Object.keys(graph), Object.values(graph))

    let unvisited = new Set(Object.values(graph))
    console.log("unvisited: ",unvisited)
    let totalDelayTime = 0;

   
}

function buildGraph(times) {
    let dist = {};
    // let paths = {};
    for (let i = 0; i < times.length; i++){
        let node = times[i]
        dist[node[0]] = {};
    }
    // console.log("dist:",dist)
    // dist = {2:{1:1,3:1},3:{4:1}}
    for (let i = 0; i < times.length; i++){
        let node = times[i];
        let source = node[0];
        let target = node[1];
        let time = node[2];
        dist[source][target] = time
    }
    return dist
}

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))
