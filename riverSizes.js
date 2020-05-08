#!/usr/bin/env node
'use strict';



function testscope(array1, arr2) {
    
    for (let i = 0; i < array1.length; i++){
       cprint(array1[i])
    }

    function cprint(i) {
        console.log("i: ",i,)
        console.log(arr2[i])
    }
}
const a1 = [1, 2, 3, 4, 5, 6];
const a2 =
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];
// console.log(testscope(a1,a2))


console.log("RIVER SIZES");

function riverSizes(matrix) {
    let sizes = [];
    let visited = matrix.map(row => row.map(val => false));
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (visited[i][j]) {
                visited[i][j] = true
                if (matrix[i][j] === 1) {
                    let size = dfs(i, j, visited, matrix)
                    sizes.push(size) 
                }
            }
        }
    }

    function dfs(i,j, visited, matrix, count = 0) {
        if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[0].length - 1) return count;
        if (visited[i][j] === true) return count;
        visited[i][j] = true
        if (matrix[i][j] === 1) {
            // count++
            
            count += dfs(i - 1, j, visited, matrix, count++);
            count += dfs(i, j - 1, visited, matrix, count++);
            count += dfs(i, j + 1, visited, matrix, count++);
            count += dfs(i + 1, j, visited, matrix, count++);
                
        } else {
            return count;
        }
                // should we just check/write visited in helper function?
    }
        return sizes
}

const m1 = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];
// console.log(riverSizes(m1), "should be [1,2,2,2,5]");

function riverSizes1(matrix) {
    const sizes = [];
    const visited = matrix.map(row => row.map(val => false));
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (visited[i][j]) continue;
            dfsNode(i, j, matrix, visited, sizes)
        }
    }
    return sizes;
}

function dfsNode(i, j, matrix, visited, sizes) {
    let currRiverSize = 0;
    const nodesToExplore = [[i, j]]
    while (nodesToExplore.length) {
        const currNode = nodesToExplore.pop();
        i = currNode[0];
        j = currNode[1];
        if (visited[i][j]) continue;
        visited[i][j] = true;
        if (matrix[i][j] === 0) continue;
        currRiverSize++
        const unvisited = getUnvisited(i, j, matrix, visited)
        nodesToExplore.push(...unvisited)
    }
    if(currRiverSize > 0) sizes.push(currRiverSize)
}
function getUnvisited(i, j, matrix, visited) {
    const unvisitedNeighbors = [];
    if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
    if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
    if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
    if (j < matrix[0].length - 1 && !visited[i, j + 1]) unvisitedNeighbors.push([i, j + 1]);
    return unvisitedNeighbors
}



console.log(riverSizes1(m1), "should be [1,2,2,2,5]");

