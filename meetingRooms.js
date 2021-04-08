#!/usr/bin/env node
'use strict';

/*Problem Description

Given an 2D integer array A of size N x 2 denoting time intervals of different meetings.

Where:

A[i][0] = start time of the ith meeting.
A[i][1] = end time of the ith meeting.
Find the minimum number of conference rooms required so that all meetings can be done.



Problem Constraints
1 <= N <= 10

0 <= A[i][0] < A[i][1] <= 2 * 109

Return the minimum number of conference rooms required so that all meetings can be done.

APPROACH (NAIVE):
Iterate through the matrix in two loops
comparing each sub array against another, making sure not to compare the same two twice
(possibly with an object with arrays as keys)
tally each time an array overlaps another.

helper function compares two arrays start and ends
possible scenarios of overlap:
    [_,_,_]
 [_,_,_]
 a1[0] <= a2[1] && a1[0] >= a2[0]

 [_,_,_]
    [_,_,_]
 a1[0] <= a2[0] && a1[1] >= a2[0]

 [_,_,_,_]
   [_,_]
 a1[0] <= a2[0] && a1[1] >= a2[0]

   [_,_]
 [_,_,_,_]
 a1[0] >= a2[0] && a1[0] <= a2[1]

 [_,_,_,_]
    [_,_]

  [_,_]
  [_,_]

  ORRRRR are there only 2 that matter?:

  a1[0] >= a2[0] && a1[0] <= a2[1]
  startA is ahead/equal of startB and startA is behind/equal endB

  a1[1] <= a2[1] && a1[] >= a2[1]
  startB is ahead/equal of startA and startB is behind/equal endA

THAT DOESN'T COVER EDGE CASE => REUSING ROOMS ONCE THEY'RE NO LONGER IN USE
going to return the length of longest array being pointed to in an object.
Already can see the drawback——we would have to either keep a counter of that length anc compare it
with each new one, or have to look at all the values of the object and compare lengths the same way
each key is a start time which points to an array of the endpoints of the overlapping times.
So there could be more than two endpoints in an array which means that 
i.e.
given the times: [15,28] [23,45]
{
    15: [28,45]
}
return length 2
*/
console.log("MEETING ROOMS")
const meetingRoomsNAIVE = (twoDArr) => {
    let roomHours = {};
    let numRooms = 1;
    for (let i = 0; i < twoDArr.length - 1; i++) {
        let arr1 = twoDArr[i];
        for (let j = i + 1; j < twoDArr.length; j++) {
            let arr2 = twoDArr[j];
            if (overlapsOrNah(arr1, arr2)) {
                // let hoursOfUse = [Math.min(arr1[0], arr2[0])], Math.max(arr1[1], arr2[1])];
                hoursOfUse[Math.min(arr1[0], arr2[0])] = [arr1[1], arr2[1]];

                // I think this would only every generate the result, 2....
                roomHours[hoursOfUse] = 1;
            }
        }
    }
    return numRooms;
}



const overlapsOrNah = (arr1, arr2) => {
    if (arr1[0] >= arr2[0] && arr1[0] <= arr2[1]) {
        return true
    }
    if (arr2[0] >= arr1[0] && arr2[0] <= arr1[1]) {
        return true
    }
    return false;
}

let input1 = [[0, 30],
[5, 10],
[15, 20]
];

let input2 = [[1, 18],
[18, 23],
[15, 29],
[4, 15],
[2, 11],
[5, 13]
];


const meetingRooms = timeSlots => {
    let orderedTimeSlots = timeSlots.sort((slotA, slotB) => slotA[0] - slotB[0]);
    let minHeap = [orderedTimeSlots.shift()[1]];
    while (orderedTimeSlots.length > 0) {
        let currEndTime = minHeap[0];
        let [nextStartTime, nextEndTime] = orderedTimeSlots.shift();
        if (currEndTime < nextEndTime) {
            minHeap.pop();

        }
        minHeap.push(nextEndTime)
        // let currEndRoom = minHeap.unshift();

    }
    return minHeap.length;
}
/*Sort the given meetings by their start time.
Initialize a new min-heap and add the first meeting’s 
ending time to the heap.
We simply need to keep track of the ending times 
as that tells us when a meeting room will get free.

For every meeting room check if the minimum element of the heap 
i.e.the room at the top of the heap is free or not.

If the room is free, then we extract the topmost element 
and add it back with the ending time of the current meeting we are processing.

If not, then we allocate a new room and add it to the heap.
After processing all the meetings, the size of the heap 
will tell us the number of rooms allocated.This will be 
the minimum number of rooms needed to accommodate all the meetings.
Let us not look at the implementation for this algorithm.
*/
console.log(meetingRooms(input1), " should be 2");
console.log(meetingRooms(input2), " should be 4");