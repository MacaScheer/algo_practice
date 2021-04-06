#!/usr/bin/env node
'use strict';

const minRewardsNaive = scores => {
    let rewards = scores.map(s => 1);
    for (let i = 1; i < scores.length; i++) {
        let j = i - 1;
        if (scores[i] > scores[j]) {
            rewards[i] = rewards[j] + 1;
        } else {
            while (j >= 0 && scores[j] > scores[j + 1]) {
                rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1)
                j--;
            }
        }
    }
    console.log("rewards: ", rewards)
    return rewards.reduce((a, b) => a + b);
}

const minRewardsOptimized = scores => {
    let rewards = scores.map(s => 1);
    let localMinIdxs = getLocalMinIdxs(scores);
    // console.log("localMinIdxs: ", localMinIdxs)
    localMinIdxs.forEach(localMinIdx => {
        rewards = expandFromLocalMin(localMinIdx, scores, rewards)
    })
    return rewards.reduce((a, b) => a + b);
}

const getLocalMinIdxs = array => {
    if (array.length === 1) return array[0];
    let localMinIdxs = [];
    for (let i = 0; i < array.length; i++) {
        if (i === 0 && array[i] < array[i + 1]) {
            localMinIdxs.push(i)
        } else if (i === array.length - 1 && array[i] < array[i - 1]) {
            localMinIdxs.push(i);
        } else if (array[i] < array[i + 1] && array[i] < array[i - 1]) {
            localMinIdxs.push(i)
        }
    }
    return localMinIdxs
}

const expandFromLocalMin = (localMinIdx, scores, rewards) => {
    let leftIdx = localMinIdx - 1
    while (leftIdx >= 0 && scores[leftIdx] > scores[leftIdx + 1]) {
        rewards[leftIdx] = Math.max(rewards[leftIdx], rewards[leftIdx + 1] + 1);
        leftIdx--;
    }
    let rightIdx = localMinIdx + 1;
    while (rightIdx < scores.length && scores[rightIdx] > scores[rightIdx - 1]) {
        rewards[rightIdx] = rewards[rightIdx - 1] + 1;
        rightIdx++;
    }
    return rewards
}

// console.log(minRewardsNaive([8, 4, 2, 1, 3, 6, 7, 9, 5]), "should be [4,3,2,1,2,3,4,5,1] reduced to 25");
console.log(minRewardsOptimized([8, 4, 2, 1, 3, 6, 7, 9, 5]), "should be [4,3,2,1,2,3,4,5,1] reduced to 25");
