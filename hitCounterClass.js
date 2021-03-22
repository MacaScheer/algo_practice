#!/usr/bin/env node
'use strict';

/*
Design and implement a HitCounter class that
keeps track of requests (or hits).
It should support the following operations:

record(timestamp): records a hit that happened at timestamp
total(): returns the total number of hits recorded
range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)
Follow-up: What if our system has limited memory?
*/

class HitCounter {
    constructor() {
        this.hits = [];
    }
    record() {
        let timestamp = new Date().toTimeString().split(" ");

        let time = timestamp.slice(0, 1)
        console.log(time)
        this.hits.push(time)
    }
    total() {
        return this.hits.length;
    }
    range(lower, upper) {
        console.log("lower: ", lower[0], " upper: ", upper[0])
        let num = 0;
        // '15:21:05', '16:11:55'
        // hourDiff = 1; 
        // minDiff = 11 + (60 - 21)   if more than 60, then subtract from hour Diff 1 and remainder is min Diff
        let [lowerHour, lowerMin, lowerSec] = lower[0].split(":");
        let [upperHour, upperMin, upperSec] = upper[0].split(":");
        // so if hour is equal to or past lowerHour and but before or equal upperHour
        // && if (hour is equal && min >= lower min && )
        for (let hit of this.hits) {
            /* hit = '15:21:02' */
            let [hour, min, sec] = hit[0].split(":");
            if (this.isAfter(lowerHour, lowerMin, lowerSec, hour, min, sec) && this.isBefore(upperHour, upperMin, upperSec, hour, min, sec)) {
                num++;
            }
        }
        return num;
    }
    isAfter(lowerHour, lowerMin, lowerSec, hour, min, sec) {
        if (hour >= lowerHour) {
            if (hour - lowerHour < 1) {
                if (min >= lowerMin) {
                    if (min - lowerMin < 1) {
                        if (sec >= lowerSec) {
                            if (sec - lowerSec < 1) {
                                return false;
                            } else {
                                return true;
                            }
                        }
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
        return false
    }
    isBefore(upperHour, upperMin, upperSec, hour, min, sec) {
        if (hour <= upperHour) {
            if (upperHour - hour < 1) {
                if (upperMin >= min) {
                    if (upperMin - min < 1) {
                        if (upperSec >= sec) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}


let newCounter = new HitCounter();
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        newCounter.record()
    }, i * 1000)
}
setTimeout(function () {
    console.log("hits array: ", newCounter.hits);
    console.log("total: ", newCounter.total());
    console.log("range: ", newCounter.range(newCounter.hits[0], newCounter.hits[newCounter.hits.length - 2]))
}, 6000)