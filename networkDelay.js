#!/usr/bin/env node
'use strict';
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

// Given times, a list of travel times as directed edges times[i] = (u, v, w), 
// u is the source node, 
// v is the target node, 
// w is the time it takes for a signal to travel from source to target.

const networkDelayTime = function (times, N, K) {
    let graph = buildGraph(times)
    // graph = {2:{1:1,3:1},3:{4:1}}
    // console.log("dist: ", dist)
    // dist[K][K] = 0;
    // console.log(Object.keys(graph), Object.values(graph))

    let unvisited = new Set(Object.values(graph))
    console.log("unvisited: ", unvisited)
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
