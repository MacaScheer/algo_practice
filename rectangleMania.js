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
    for (let i = 0; i < coords.length; i++){
        let coord = coords[i];
        let same = getCoord(coord, i, coords);
        for (let x = 0; x < same['x'].length; x++){
            let c = same['x'][x]
        }   
        for (let y = 0; y < same['y'].length; y++){

        }
    }
}

function getOtherCoords(c1, c2) {
    let x1 = c1[0];
    let y1 = c1[1];
    let x2 = c1[0];
    let y2 = c2[1];

    if (x1 === x2) {
      // find two coordinates with same y1 and y2
        // [a, y1], [a, y2]
    } else if (y1 === y2) {
    // find two coordinates with same x1 and x2
        // [x1, b], [x2, b]
    } else {
        // find two coordinates with x and y in common with one each
        // [x1,y2], [x2, y1]
    }
}

function getCoord(coord,idx, coords) {
    let same = {'x':[], 'y':[]}
    for (let i = 0; i < coords.length; i++){
        
        if (i !== idx) {
            // prevent against duplicates?
            // possibly not, since coordinates can serve as vertices of multiple rectangles
            let x = coord[0];
            let y = coord[1];
            let nextCoord = coords[i]
            if (nextCoord[0] === x) {
                same['x'].push(nextCoord)
            }
            if (nextCoord[1] === y) {
                same['y'].push(nextCoord)
            }
        }
    }
    return same
}

let coords = [[0, 0], [0, 1], [1, 1], [1, 0], [2, 1], [2, 0], [3, 1], [3, 0]]
console.log(rectangleMania(coords), " should return 6")