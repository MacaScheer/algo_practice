#!/usr/bin/env node
'use strict';


/*  1) All students must receive at least one reward
    2) Any given student must receive strictly more rewards that an adjacent student 
    (a student immediately to the left or to the right) with a lower score and must receive strictly fewer
    rewards than an adjacent student with a higher score.

    Write a function that takes in a list of scores and 
    returns the minimum number of rewards that you must give out 
    to students to satisfy the two ruless.
    Can assume all scores are unique
*/

function minRewardsFAIL(scores) {
    let rewardsArr = [1];
    for (let i = 1; i < scores.length; i++){
        let el1 = scores[i - 1];
        let el2 = scores[i];
        if (el1 < el2) {
            rewardsArr.push(rewardsArr[i - 1] + 1)
        } else {
            // if (i === scores.length - 1) {
                // rewardsArr.push(1)
                // rewardsArr[rewardsArr.length - 2] = Math.max(rewardsArr[i - 1], rewardsArr[i] + 1)
            // } else {

                // push 1, then
                // the new value of rewardsArr[i] is going to be the 
                // Math.max(rewardsArr[i], rewards[i + 1] + 1)
                rewardsArr.push(1)
                rewardsArr = rewardBackwards(rewardsArr)
            // }
            // rewardsArr.push(rewardsArr[i - 1] - 1)
        }
        console.log("el1: ", el1, " el2:", el2, " rewardsArr: ", rewardsArr)
    }
    return rewardsArr.reduce((a,b) => a + b)
}

// [4,3,2,1,2,3,4,i,1]

function rewardBackwards(rewardsArray) {
    for (let i = rewardsArray.length - 2; i >= 0; i--){
        let a = rewardsArray[i]
        let b = rewardsArray[i + 1] + 1
        let max = Math.max(a, b);
        rewardsArray[i] = max
        if (max === a || rewardsArray[i] < rewardsArray[i + 1]) {
            break
        }
    }
   
    // console.log(rewardsArray)
    return rewardsArray
}


// NAIVE SOLUTION:
function minRewardsNAIVE(scores) {
    const rewards = scores.map(el => 1);
    for (let i = 1; i < scores.length; i++){
        let j = i - 1
        if (scores[i] > scores[j]) {
            rewards[i] = rewards[j] + 1
        } else {
            while (j >= 0 && scores[j] > scores[j + 1]) {
                rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
                j--
            }
        }
    }
    return rewards.reduce((a,b) => a + b)
}


////////

function minRewards(scores) {
    let rewards = scores.map(el => 1)
    // let maxss = maxs(scores);
    let minss = mins(scores);
    for (let i = 0; i < minss.length; i++){
        let min = minss[i];
        expandFromLocalMin(min, rewards, scores)
    }
    return rewards.reduce((a,b) => a + b)
}

function expandFromLocalMin(min, rewards, scores) {
    let idxF = min + 1;
    let idxR = min - 1;
    let f = 2; let r = 2;
    let score, prevScore;
    while (idxF < scores.length) {
        score = scores[idxF];
        prevScore = scores[idxF - 1];
        if (score > prevScore) {
            rewards[idxF] = f
            f++
        } else {
            break
        }
        idxF++
    }
    while (idxR >= 0) {
        score = scores[idxR];
        prevScore = scores[idxR + 1]
        if (score > prevScore) {
            rewards[idxR] = Math.max(rewards[idxR], rewards[idxR + 1] + 1)
            // r = rewards[idxR] + 1
        } else {
            rewards[idxR] = rewards[idxR + 1] - 1
        }

        idxR--
    }
    return rewards
}


function mins(scores) {
    let idxs = [];
    for (let i = 1; i < scores.length - 1; i++){
        let first = scores[i - 1];
        let mid = scores[i];
        let last = scores[i + 1]
        if (i === 1) {
            if (mid > first) {
                idxs.push(i - 1)
            }
        } else if (i === scores.length - 2) {
            // if (mid > first && mid > last) {
            //     idxs.push(i)
            // }
            if (last < mid) {
                idxs.push(i + 1)
            } 
        } else {
           if (mid < first && mid < last) {
                idxs.push(i)
            }
        }
    }
    return idxs
}

function maxs(scores) {
    let idxs = [];
    for (let i = 1; i < scores.length - 1; i++) {
        let first = scores[i - 1];
        let mid = scores[i];
        let last = scores[i + 1]
        if (i === 1) {
            if (mid < first) {
                idxs.push(i - 1)
            }
        } else if (i === scores.length - 2) {
            if (last > mid) {
                idxs.push(i + 1)
            }
            if (mid > first && mid > last) {
                idxs.push(i)
            }
         
        } else {
            if (mid > first && mid > last) {
                idxs.push(i)
            }
        }
    }
    return idxs
}
const scoreSet = {
    1: [8, 4, 2, 1, 3, 6, 7, 9, 5],
    2: [0, 4, 2, 1, 3],
    3: [2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0],
    4: [2, 1, 4, 3, 6, 5, 8, 7, 10, 9],
    5: [
        800,
        400,
        20,
        10,
        30,
        61,
        70,
        90,
        17,
        21,
        22,
        13,
        12,
        11,
        8,
        4,
        2,
        1,
        3,
        6,
        7,
        9,
        0,
        68,
        55,
        67,
        57,
        60,
        51,
        661,
        50,
        65,
        53
    ]
}
const answerSet = {
    1: "25",
    2: "9",
    3: "52",
    4: "15",
    5: "93"
}
console.log(minRewards(scoreSet[3]), answerSet[3])
// console.log("mins: ",mins(scoreSet[1]))
// console.log("maxs: ", maxs(scoreSet[1]))
// for (let test in scoreSet) {
//     console.log(`Your code's output: ${minRewards(scoreSet[test])}. The solution is: ${answerSet[test]}`)
// }