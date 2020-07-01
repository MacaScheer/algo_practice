#!/usr/bin/env node
'use strict';
/*/
write a function that takes in a list of Cartesian coordinates and returns the number
of rectangles formed by these coordinates
A rectangle must have its four corners amongst the coordinates in order to be counted.
we only care about rectangles with sides parallel to the x or y axes
you can assume that no coordinates will be farther than 100 units from origin
Approach:
when iterating over the coordinates, if there are pairs with the same x coordinates,
make sure there are another set at the same y coordinates as the first pair
iterate through the coordinates, for each coordinate:
for coordinate 'a', find a coordinate 'b' with same x value,
find another coordinate 'c' with same y value, 
make sure there is a fourth coordinate with same x as 'c' and same y as 'b' 
this brute force approach will be O(n**4) time because for each coordinate, 
you have to scan through the other coordinates 4 times for its complimentary coordinates.

POSSIBLE OPTIMIZATION:
the direction taken while searching is arbitrary, I'm chosing clockwise
faster lookup time for the coordinates: for the second, you know the necessary x value,
for the 3rd you know the necessary y value, and 4th you know both x and y.
sort all the coordinates with same x, sort coordinates that have same y
could form trees with nodes that have one coordinate in common
/*/ 

function rectangleMania(coords) {
    let rectCount = 0;
    let sames = [];
    for (let i = 0; i < coords.length - 1; i++){
        let c1 = coords[i];
        let c2 = coords[i + 1]
        console.log("rectangleMania1", c1, c2)
        sames.push(getOtherCoords(c1, c2, coords))
        
    }
    console.log("rectangleMania2: ", sames)
    return sames.length
}

function getOtherCoords(c1, c2, coords) {
    let x1 = c1[0];  //[0,1], [3,1]
    let y1 = c1[1];
    let x2 = c1[0];
    let y2 = c2[1];
    let a;
    let matches;
    if (x1 === x2) {
        // find two coordinates with same y1 and y2
        // [a, y1], [a, y2]
        matches = searchByXorY('x', y1, y2, coords)
    }
    if (y1 === y2) {
        // find two coordinates with same x1 and x2
        // [x1, b], [x2, b]
        matches = searchByXorY('y', x1, x2, coords)
    } 
    // else {
    //     // find two coordinates with x and y in common with one each
    //     // [x1,y2], [x2, y1]
    //     matches = searchByXorY('both', [x1, y2], [x2,y1], coords)
    // }
    // console.log("getOtherCoords: ", matches)
    return matches
 
}

function searchByXorY(sign, a, b, coords) {
    let matches = [];
    let partialMatches = [];
    switch (sign) {
        case 'x':
            for (let i = 0; i < coords.length; i++){
                let coord = coords[i];
                if (coord[1] === a || coord[1] === b) partialMatches.push(coord)
            }
            matches.push(...findMatch(partialMatches, 'x')) //  [a, y1], [a, y2]
            break;
        // case 'y':
        //     for (let i = 0; i < coords.length; i++){
        //         let coord = coords[i];               
        //     }
        //     break;
        // case 'both':
        //     for (let i = 0; i < coords.length; i++) {
        //         let coord = coords[i];
        //     }
        //     break;
    }
    console.log("searchByXorY: ", matches)
    return matches;
}

function findMatch(coords) {  //[a,y1], [a,y2]
    let otherCoords = [];
    for (let i = 0; i < coords.length - 1; i++){
         let c1 = coords[i]
        for (let j = i + 1; j < coords.length; j++){
            let c2 = coords[j]
            if (c1 !== c2 && !otherCoords.includes(c1) && !otherCoords.includes(c2)) {
                if(c1[0] === c2[0] || c1[1] === c1[1]) otherCoords.push(c1,c2)
            }
        }
    }
    // console.log("findMatch: ", otherCoords)
    return otherCoords;
}

// function getCoord(coord,idx, coords) {
//     let same = {'x':[], 'y':[]}
//     for (let i = 0; i < coords.length; i++){
        
//         if (i !== idx) {
//             // prevent against duplicates?
//             // possibly not, since coordinates can serve as vertices of multiple rectangles
//             let x = coord[0];
//             let y = coord[1];
//             let nextCoord = coords[i]
//             if (nextCoord[0] === x) {
//                 same['x'].push(nextCoord)
//             }
//             if (nextCoord[1] === y) {
//                 same['y'].push(nextCoord)
//             }
//         }
//     }
//     return same
// }

// function dfsRectangle(coord, coords) {
//     let rects = [];
//     let [x,y] = coord;
//     // go right
// }
// TREAT EVERY COORDINATE AS POSSIBLE UPPER RIGHT COORDINATE
function rectangleMania(coords) {
    let rects = [];
    for (let i = 0; i < coords.length; i++){
        if (i === 0) {
            
            let coord = coords[i]
            // console.log("firstCoord: ", coord)
            // let innerArr = [coord];
            let twoCoords = findUpperLeft(coords, coord[0], coord[1])
            rects.push(...twoCoords)
            // console.log("rects: ",rects)
            if (rects.length === 2) {
                // find upperRight
                // for (let j = 0; j < rects.length; j++){
                    // let rect = rects[j];
                let upperLeft = rects[1]
                console.log("upper left: ", upperLeft)
                    let slicedCoords = slicer(coords, i)
                    let upperRights = findUpperRight(slicedCoords, upperLeft[0], upperLeft[1])
                console.log("upperRights: ", upperRights) //[ [ 1, 1 ], [ 2, 1 ], [ 3, 1 ] ]
                if (upperRights) {
                    let newRects = []
                    for (let x = 0; x < upperRights.length; x++){
                        let coord = upperRights[x]
                        console.log("coord: ", coord)
                        console.log("rects: ", rects)
                        let temp = rects.slice();
                        temp.push(coord)
                        console.log("temp: ", temp)
                        newRects.push(temp)
                        temp = [];
                    }
                    console.log("newRects: ",newRects)
                }
            }
        }
    }
    // console.log("twoCoords: ", twoCoords)
    // console.log("rects: ", rects)
    // let thirdCoords = [];
    // for (let i = 0; i < rects.length; i++){
    //     let rect = rects[i];
    //     let lR = rect[1];
    //     console.log("uR: ", rect[0],"LR: ", lR);
    //     let rectCopy = [];
    //     let lLs = findLowerLeft(coords, lR[0], lR[1])
    //     for (let j = 0; j < lLs.length; j++){
    //         let lL = lLs[j];
    //         if (lR[1] === lL[1]) {
    //             rectCopy.push(rect.push(lL))
    //         }
    //     }
    //     thirdCoords.push(...rectCopy)
    // }
    // console.log("3rd coords: ", thirdCoords)
    // console.log(rects)
    // return rects.length;
}

function slicer(arr, idx) {
    let left = arr.slice(0, idx);
    let right = arr.slice(idx + 1);
    return left.concat(right)
}

function findUpperRight(coords, x1, y1) {
    let arr = [];
    for (let z = 0; z < coords.length; z++){
        let coord = coords[z];
        if (coord[1] === y1 && coord[0] > x1) {
            arr.push(coord)
        }
    }

    if (arr.length > 0) {
    //    console.log("arr: ", arr)
        return arr;
    }
}

function findUpperLeft(coords, x1, y1) {
    let upperLefts = [];
    for (let i = 0; i < coords.length; i++){
        let inner = [[x1,y1]]
        let coord = coords[i];
        if (coord[0] === x1 && coord[1] > y1) {
            inner.push(coord)
        }
        if (inner.length > 1) {
            upperLefts.push(...inner)
        }
    }
    // console.log("upperLefts: ", upperLefts)
    return upperLefts
}


function lowerRight(coords, x1, y1) {
    let lowerRightmatches = [];
    // clockwise
    for (let i = 0; i < coords.length; i++){
        let rect = [[x1,y1]]
        if (coords[i][0] === x1 && coords[i][1] < y1) {
            rect.push(coords[i])
            lowerRightmatches.push(rect)
        }
    }
    if(lowerRightmatches.length > 0) return lowerRightmatches
}
function findLowerLeft(coords, x2, y2) {
    let lowerLefts = [];
    // find same ys
    for (let i = 0; i < coords.length; i++){
        let c = coords[i];
        if (c[1] === y2 && c[0] < x2) {
            lowerLefts.push(c)
        }
        console.log("upperRight: ", [x2,y2], " ")
    }
    return lowerLefts
}


let coords1 = [[0, 0], [0, 1], [1, 1], [1, 0], [2, 1], [2, 0], [3, 1], [3, 0]]
console.log(rectangleMania(coords1))
// console.log(findMatch(coords))
// console.log(searchByXorY('x',0,1,coords))
// console.log(rectangleMania(coords), " should return 6")