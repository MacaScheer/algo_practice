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
    // if (array.length < k) return -1
    let piv = array[0];
    let lIdx = 1;
    let rIdx = array.length - 1;
    // while (lIdx <= rIdx) {
    while(lIdx <= rIdx){
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
    console.log(array)


    if (k-1 >= rIdx) {
        return array[k-1]
    } else {
        let newArr = array.slice(0, rIdx - 1)
        quickSelect(newArr, k)
    }
    // while (k < rIdx) {
    //     let left = array[lIdx];
    //     let right = array[rIdx];
    //     if (left > piv && right < piv) {
    //         [array[lIdx], array[rIdx]] = [array[rIdx], array[lIdx]]
    //     } else if (left <= piv) {
    //         lIdx++
    //     } else if (right >= piv) {
    //         rIdx--
    //     }
    // }
    return array[k]
}


function quickSELECT(array, k) {
    const position = k - 1;
    return quickSelectHelper(array, 0, array.length - 1, position)
}

function quickSelectHelper(array, startIdx, endIdx, position) {
    while (true) {
        if (startIdx > endIdx) {
            throw new Error('Your algorithm should never arrive here')
        }
        const pivotIdx = startIdx;
        let leftIdx = startIdx + 1;
        let rightIdx = endIdx;
        while (leftIdx <= rightIdx) {
            if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
                swap(leftIdx, rightIdx, array)
            }
            if (array[leftIdx] < array[pivotIdx]) {
                leftIdx++
            }
            if (array[rightIdx] > array[pivotIdx]) {
                rightIdx--
            }
        }
        swap(pivotIdx, rightIdx, array)
            if (rightIdx === position) {
                return array[rightIdx]
            } else if (rightIdx < position) {
                startIdx = rightIdx + 1
            } else {
                endIdx = rightIdx - 1;
            }
        }
}

function swap(i, j, array) {
    return [array[i], array[j]] = [array[j], array[i]]
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

// [-90,-45,-1,0,5,7,22,33,64,77,80]
console.log(quickSELECT([22,-90,5,77,-45,0,-1,33,7,64,80], 4))
function minArr(idx1, idx2, arr) {
    if (arr[idx1] > arr[idx2]) {
        return [arr[idx2], arr[idx1]]
    } else {
        return [arr[idx1], arr[idx2]]        
    }

}