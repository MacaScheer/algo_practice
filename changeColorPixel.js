#!/usr/bin/env node
'use strict';


function changeColorPixel(matrix, location, color) {
    let pixel = matrix[location[0]][location[1]];
    matrix[location[0]][location[1]] = color;
    // if right && right is inside the matrix
    if (location[0] < matrix.length - 1) {
        let right = matrix[location[0] + 1][location[1]];
        if (right === pixel) {
            changeColorPixel(matrix, [location[0] + 1, location[1]], color);
        }
    }
    // if left && left is inside the matrix
    if (location[0] > 0) {
        let left = matrix[location[0] - 1][location[1]];
        if (left === pixel) {
            changeColorPixel(matrix, [location[0] - 1, location[1]], color);
        }
    }
    // if down && down is inside the matrix
    if (location[1] < matrix[1].length - 1) {
        let down = matrix[location[0]][location[1] + 1];
        if (down === pixel) {
            changeColorPixel(matrix, [location[0], location[1] + 1], color);
        }
    }
    // if up && up is inside the matrix
    if (location[1] > 0) {
        let up = matrix[location[0]][location[1] - 1];
        if (up === pixel) {
            changeColorPixel(matrix, [location[0], location[1] - 1], color)
        }
    }
    return matrix;
}

let mat = [
    ['B', 'B', 'W'],
    ['W', 'W', 'W'],
    ['W', 'W', 'W'],
    ['B', 'B', 'B']
]
console.log(changeColorPixel(mat, [2, 2], 'G'), 'should be :',
    [['B', 'B', 'G'],
    ['G', 'G', 'G'],
    ['G', 'G', 'G'],
    ['B', 'B', 'B']]);