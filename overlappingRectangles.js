#!/usr/bin/env node
'use strict';

let rectangles = [
    {
        "top_left": [1, 4],
        "dimensions": [3, 3]
    },
    {
        "top_left": [-1, 3],
        "dimensions": [2, 1]
    },
    {
        "top_left": [0, 5],
        "dimensions": [4, 3]
    }
];
/*
Need to compare each rectangle to each other...
can compare just the top lefts knowing the width/height of each
example: top left (1,4) with width and height of 3 with 
top left (0,5) with width of 4 and height of 3.
so the heights would have to over lap and the widths too
first rect height is between 4 and 1 and width between 1 and 4
second rect height is between 5 adn 2 and width between 0 and 4
so they over lap
*/
function overlappingRectangles(rectangles) {
    // let allCoordsObj = insertAllCoords(rectangles);
    for (let i = 0; i < rectangles.length; i++) {
        let firstRec = rectangles[i];
        let firstMinX = firstRec["top_left"][0];
        let firstMaxX = firstMinX + firstRec["dimensions"][0];
        let firstMaxY = firstRec["top_left"][1];
        let firstMinY = firstMaxY - firstRec["dimensions"][1];

        for (let j = i + 1; j < rectangles.length; j++) {
            let secondRec = rectangles[j];
            let secondMinX = secondRec["top_left"][0];
            let secondMaxX = secondRec["dimensions"][0] + secondMinX;
            let secondMaxY = secondRec["top_left"][1];
            let secondMinY = secondMaxY - secondRec["dimensions"][1];
            if (overlaps(firstMinX, firstMaxX, secondMinX, secondMaxX) && overlaps(firstMinY, firstMaxY, secondMinY, secondMaxY)) {
                return true;
            }
        }
    }
    return false;
}

function overlaps(fx1, fx2, sx1, sx2) {
    // x's
    /*
     fx1-------fx2
         sx1------sx2
   */
    if (fx1 <= sx1 && fx2 >= sx1) {
        return true;
    }
    /*
          fx1-----fx2
      sx1-----sx2
    */
    else if (fx1 >= sx1 && sx2 >= fx1) {
        return true;
    }

    /*
         fx1---fx2
      sx1---------sx2
    */
    else if (fx1 >= sx1 && fx2 <= sx2) {
        return true;
    } else {
        return false;
    }
}

// function insertAllCoords(rects) {
//     let topLeft, topRight, bottomLeft, bottomRight;
//     for (let i = 0; i < rects.length; i++) {
//         let obj = rects[i];
//         let width = obj["dimensions"][0];
//         let height = obj["dimensions"][1];
//         [topLeft, topRight, bottomLeft, bottomRight] = otherCoords(obj["top_left"], width, height)
//         rects[i]["top_right"] = topRight;
//         rects[i]["bottom_left"] = bottomLeft;
//         rects[i]["bottom_right"] = bottomRight;
//     }
//     console.log(rects);
//     return rects;
// }
// function otherCoords(topLeft, width, height) {
//     return [topLeft, [topLeft[0] + width, topLeft[1]], [topLeft[0], topLeft[1] - height], [topLeft[0] + width, topLeft[1] - height]];
// }

console.log(overlappingRectangles(rectangles))