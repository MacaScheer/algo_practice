#!/usr/bin/env node
'use strict';

console.log("Pairboarding and Hacker Rank Walk Through")

/*
create an array that has all the rewards (num of students) and give them all 1 value
*/
function minRewards(scores) {
    let rewards = new Array(scores.length).fill(1);
    for (let i = 1; i < scores.length; i++){
        if (scores[i] > scores[i - 1]) {
            rewards[i] = rewards[i - 1] + 1;
        }
    }

    for (i = scores.length - 1; i >= 0; i--){
        if (scores[i] > scores[i + 1]) {
            rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1)
        }
    }
    return rewards.reduce((a,b) => a + b)
}

let input = [8, 4, 2, 1, 3, 6, 7, 9, 5];
console.log(minRewards(input))


function minimumMoves(arr) {
    let copy = [...arr];
    copy = copy.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === copy[i]) count++
    }
    return arr.length - count; //this is the crucial part, all other elements will slide into their correct place after being moved to the end
}

/*copy of array sorted
 Loop thru, compare values
when you find incorrect positions, increment count of incorrect position...?
every element in wrong position is every element that needs to be swapped...
only move every element that's out of place once.
Apparently this is true. 
[1,3,2,4] => [1,2,4,3] => [1,2,3,4] => 2
 */

let keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15]];
function slowestKeyPress(keyTimes) {
    // let prevKeyTime = 0;
    // let longestPress = 0;
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let maxChar = alpha[keyTimes[0][0]];
    let maxDiff = keyTimes[0][1]
    for (let i = 0; i < keyTimes.length; i++){
        let diff = keyTimes[i][1] - keyTimes[i - 1][1];
        if (diff > maxDiff) {
            maxDiff = diff;
            maxChar = alpha[keyTimes[i][0]]
        }
    }
    return maxChar
}

// function giveLetter(idx) {
//     return 'abcdefghijklmnopqrstuvwxyz'[idx]
// }

console.log(slowestKeyPress(keyTimes));
 


// THEORETICAL:
<DataProvider render={data => (<h1>Hello {data.target}</h1>)} />
/*React Render Props is ABSTRACTION (means hiding the implementation details and only showing the functionality to the user)
    NOT ENCAPSULATION
    ENCAPSULATION means not giving the user any permissions to write or change the code attr_reader vs attr_writer
    DECLARATIVE PROGRAMMING means style of building structure which explains what is accomplishes without its control flow
    IMPERATIVE PROGRAMMING means telling the computer how it should accomplish the task
*/