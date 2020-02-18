#!/usr/bin/env node
'use strict';

// create graph of vertices of the wall


function brickWall(array) {
    let graph = {}
    let sum;
    for (let i = 0; i < array.length; i++){
        let row = array[i];
        sum = 0;
        for (let j = 0; j < row.length; j++){
            let vertice = row[j];
            sum += vertice;
            if (!graph[sum]) {
                graph[sum] = 1
            } else {
                graph[sum] += 1
            }
        }
    }
    console.log(graph)
}

let arr1 = [
    [3, 5, 1, 1],
    [2, 3, 3, 2],
    [5, 5],
    [4, 4, 2],
    [1, 3, 3, 3],
    [1, 1, 6, 1, 1]
]

console.log(brickWall(arr1))