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