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

function minRewards(scores) {
    let rewardsArr = [1];
    for (let i = 1; i < scores.length; i++){
        let el1 = scores[i - 1];
        let el2 = scores[i];
        if (el1 < el2) {
            rewardsArr.push(rewardsArr[i - 1] + 1)
        } else {
            if (i === scores.length - 1) {
                rewardsArr.push(1)
                // rewardsArr.push(Math.max(rewardsArr[i - 1], rewardsArr[i] + 1))
            } else {

                // push 1, then
                // the new value of rewardsArr[i] is going to be the 
                // Math.max(rewardsArr[i], rewards[i + 1] + 1)
                rewardsArr = rewardBackwards(rewardsArr)
                rewardsArr.push(1)
            }
            // rewardsArr.push(rewardsArr[i - 1] - 1)
        }
        // console.log("el1: ", el1, " el2:", el2, " rewardsArr: ", rewardsArr)
    }
    return rewardsArr.reduce((a,b) => a + b)
}


function latestReward(rewardsArr) {
    return rewardsArr[rewardsArr.length - 1]
}



function rewardBackwards(rewardsArray) {
    for (let i = rewardsArray.length - 1; i >= 0; i--){
        rewardsArray[i]+=1
    }
    return rewardsArray
}

// const score = [8, 4, 2, 1, 3, 6, 7, 9, 5]
// const score1 = [0,4,2,1,3]
// console.log(minRewards(score), " should be 25, because [4,3,2,1,2,3,4,5,1]")
// console.log(minRewards(score1), " should be 9")


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

for (let test in scoreSet) {
    console.log(`Your code's output: ${minRewards(scoreSet[test])}. The solution is: ${answerSet[test]}`)
}