#!/usr/bin/env node

"use strict";

console.log("HERE");
// 23280666036524
// 23280666036524

function numberAmazonGoStores(rows, column, grid)
{
    function dfs(grid, i, j, visited){
        if (i < 0 || i > grid.length || j < 0 || j > grid[i].length ){
            return
        }
        if (visited[i][j] === true){
            return
        }
        visited[i][j] = true;
        if(grid[i][j] === '0'){
            return;
        }
        dfs(grid, i - 1, j, visited)
        dfs(grid, i + 1, j, visited)
        dfs(grid, i, j - 1, visited)
        dfs(grid, i, j + 1, visited)
    }
    let visited = [];
    for (let x = 0; x < grid.length; x++){
        visited[x] = []
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[i].length; j++){
            if(!visited[i][j] && grid[i][j] === '1'){
                count++
                dfs(grid, i, j, visited)
            }
            visited[i][j] = true
        }
    }
    return count;
}

// console.log(numberAmazonGoStores(4, 4, [[1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 1, 1], [0, 0, 0, 0]]))


[   [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]
]




function minimumHours(rows, columns, grid)
{
    // let visited = [];
    // for (let x = 0; x < rows; x++){
    //     visited[x] = [];
    // }
    let hours = 0;
    function dfs(i, j, grid, hours){ //hours, visited
        if(i < 0 || i > rows - 1 || j < 0 || j > columns - 1) return false;
        // if(visited[i][j] === true){
        //     return false
        // }
        // visited[i][j] = true
        console.log(grid, "hours:", hours)
        if(grid[i][j] === 0){
            return false
        }
        grid[i][j] = 1;
        hours += 1
        dfs(i + 1, j, grid, hours) //hours //visited 
        dfs(i - 1, j, grid, hours) //hours //visited
        dfs(i, j + 1, grid, hours) //hours //visited
        dfs(i, j - 1, grid, hours) //hours //visited
        return hours
    }
    
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            if(grid[i][j] === 1){  //!visited[i][j] && 
                // hours++
                dfs(i, j, grid, hours)
            }
            // visited[i][j] = true;
        }
    }
    return hours
}

// [
//     [0, 0, 1],  
//     [0, 0, 0],
//     [1, 0, 0]
// ]
// visited = [[true],[],[]]

// function allSpread(rows, columns, grid) {
//     for (let i = 0; i < rows; i++){
//         for (let j = 0; j < columns; j++){
//             if (grid[i][j] === 0) {
//                 grid[i][j] = 1
//             }
//         }
//     }
// }

// function minimumHours(rows, columns, grid){





    ////////////////////////
    // let visited = [];
    // for (let x = 0; x < rows; x++){
    //     visited[x] = [];
    // }
    // let hours = 1;
    // function dfs(i, j, grid, hours){ //visited
    //     if(i < 0 || i > rows - 1 || j < 0 || j > columns - 1) return;
    //     // if(visited[i][j] === true){
    //     //     return
    //     // }
    //     // visited[i][j] = true
    //     if(grid[i][j] === 1){
    //         return
    //     }
    //     grid[i][j] = 1;
    //     hours += 1
    //     grid[i + 1][j] = 1;
    //     grid[i - 1][j] = 1;
    //     grid[i][j - 1] = 1;
    //     grid[i][j + 1] = 1;
    //     // dfs(i + 1, j, grid, hours) //hours//visited
    //     // dfs(i - 1, j, grid, hours) //hours//visited
    //     // dfs(i, j + 1, grid, hours) //hours//visited
    //     // dfs(i, j - 1, grid, hours) //hours//visited
    // }
    
    // for (let i = 0; i < rows; i++){
    //     for (let j = 0; j < columns; j++){
    //         if(grid[i][j] === 0){
    //             hours++
    //             dfs(i, j, grid, hours)
    //             // console.log(grid)
    //         }
    //         // visited[i][j] = true;
    //     }
    // }
    // return hours
// }



console.log(minimumHours(5, 6,
    [
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0]
    ]))

//     [
//         [0, 1, 1, 1, 0, 0],
//         [0, 0, 1, 0, 0, 1],
//         [0, 0, 0, 0, 1, 1],
//         [0, 1, 0, 0, 0, 1],
//         [1, 1, 1, 0, 0, 0]
//      ]
//     [
//         [1, 1, 1, 1, 0, 1],
//         [0, 1, 1, 0, 1, 1],
//         [0, 1, 1, 1, 1, 1],
//         [1, 1, 1, 0, 1, 1],
//         [1, 1, 1, 1, 0, 1]
// ]

//     [
//         [1, 1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1, 1]
// ]

//3 hours