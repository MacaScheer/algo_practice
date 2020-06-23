#!/usr/bin/env node
'use strict';

console.log("quickSelect should iterate through an array and return the Kth smallest integer in the array, in O(n) time")
// should iterate through the array once

/*/
PICK A RANDOM NUMBER ~ FIRST NUMBER OF THE ARRAY, AS PIVOT,
ITERATE THRU THE REST OF THE ARRAY USING 2 POINTERS, 
ONE STARTING AT THE LEFT SIDE AND PROGRESSIVELY MOVING TO THE RIGHT
ONE ON THE RIGHT SIDE AND PROGRESSIVELY MOVING TO THE LEFT. AS YOU ITERATE
COMPARE THE LEFT AND RIGHT POINTERS TO THE PIVOT.
IF LEFT NUMBER IS GREATER THAN THE PIVOT AND RIGHT NUMBER IS LESS THAN THE PIVOT, SWAP THEM
THIS WILL EFFECTIVELY SORT THESE NUMBERS WITH RESPECT TO THE PIVOT AT THE END OF ITERATION
IF LEFT NUMBER IS EVER LESS THAN OR EQUAL TO THE PIVOT, INCREMENT THE LEFT POINTER
IF RIGHT NUMBER IS EVER GREATER THAN OR EQUAL TO THE PIVOT, DECREMENT THE RIGHT POINTER.
DO THIS UNTIL THE POINTERS PASS EACH OTHER, AT WHICH POINT SWAPPING THE PIVOT WITH THE RIGHT NUMBER SHOULD POSITION
THE PIVOT IN ITS FINAL POSITION. IF THE PIVOT IS THE KTH POSITION, YOU'RE DONE
IF NOT, FIGURE OUT IF THE KTH SMALLEST IS TO THE LEFT OR RIGHT OF THE PIVOT
/*/
function quickSelect(array, k) {
    // if (array.length < k) return 
    let piv = array[0];
    let lIdx = 1;
    let rIdx = array.length - 1;
    while (lIdx <= rIdx) {
        let left = array[lIdx];
        let right = array[rIdx];
        if (left > piv && right < piv) {
            [array[lIdx], array[rIdx]] = [array[rIdx], array[lIdx]]
        } else if (left <= piv) {
            lIdx++
        } else if (right >= piv) {
            rIdx--
        }
    }
    [array[0], array[rIdx]] = [array[rIdx], array[0]]
    if (rIdx === k) return array[k]
    console.log(array)
    while (k < rIdx) {
        
    }
    while (k > rIdx) {
        
    }
    
}

// function compareSidesLoop(lIdx, rIdx, array) {
//     while (lIdx <= rIdx) {
//         let left = array[lIdx];
//         let right = array[rIdx];
//         if (left > piv && right < piv) {
//             [array[lIdx], array[rIdx]] = [array[rIdx], array[lIdx]]
//         } else if (left <= piv) {
//             lIdx++
//         } else if (right >= piv) {
//             rIdx--
//         }
//     }
// }


console.log(quickSelect([22,-90,5,77,-45,0,-1,33,7,64,80]))
function minArr(idx1, idx2, arr) {
    if (arr[idx1] > arr[idx2]) {
        return [arr[idx2], arr[idx1]]
    } else {
        return [arr[idx1], arr[idx2]]        
    }

}