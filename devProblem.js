#!/usr/bin/env node

"use strict"




function minimumHours(rows, columns, grid) {
    let hours = 1;
    
    function bfs(i, j, grid, rows, columns) {
        let queue = [[i,j]];
        while (queue.length) {
            let node = queue.pop();
            grid[node[0], node[1]] = 1
            if (node[0] > 0 && node[0] < rows - 1 && node[1] > 0 && node[1] < columns - 1) {
                queue.push([node[0] + 1, node[1]])
                queue.push([node[0] - 1, node[1]])
                queue.push([node[0], node[1] - 1])
                queue.push([node[0], node[1] + 1])
            }
        }
    }
            for (let i = 0; i < rows; i++){
                for (let j = 0; j < columns; j++){
                    if (grid[i][j] === 1) {
                        bfs(i, j, grid, rows, columns);
                        hours++;
                    }
                }
            }
    // console.log(grid)
    return hours
}

console.log(minimumHours(5, 6,
    [
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0]
    ]))



    // NUMBER OF HOURS//
// given a grid of 1s and 0s, each represting a server.
// 1s represent a server that has the file, 0s represent a server that doesn't have the file
// in a single hour, a single server can pass the file to its neighbors (right, left, up and down—but NOT diagonal)
// WRITE AN ALGORITHM THAT WILL COUNT THE NUMBER OF HOURS UNTIL ALL THE SERVERS HAVE THE FILE
// i.e. ALL OF THE 0s TURN TO 1s


// INPUT: 
    // [
    //     [0, 0, 1, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 1],
    //     [0, 0, 0, 0, 0, 0],
    //     [0, 1, 0, 0, 0, 0]
    // ]

// OUTPUT: 3 HOURS 


// 1RST HOUR
//     [
//         [0, 1, 1, 1, 0, 0],
//         [0, 0, 1, 0, 0, 1],
//         [0, 0, 0, 0, 1, 1],
//         [0, 1, 0, 0, 0, 1],
//         [1, 1, 1, 0, 0, 0]
//      ]
// 2ND HOUR
//     [
//         [1, 1, 1, 1, 0, 1],
//         [0, 1, 1, 0, 1, 1],
//         [0, 1, 1, 1, 1, 1],
//         [1, 1, 1, 0, 1, 1],
//         [1, 1, 1, 1, 0, 1]
// ]
// 3RD HOUR
//     [
//         [1, 1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1, 1]
// ]

