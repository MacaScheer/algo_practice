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
        this.hits.push(parseInt(time))
    }
    total() {
        return this.hits.length;
    }
    range(lower, upper) {
        let num = 0;
        // '15:21:05', '16:11:55'
        // hourDiff = 1; 

        // minDiff = 11 + (60 - 21)   if more than 60, then subtract from hour Diff 1 and remainder is min Diff
        let [lowerHour, lowerMin, lowerSec] = lower.split(":");
        let [upperHour, upperMin, upperSec] = upper.split(":");
        // so if hour is equal to or past lowerHour and but before or equal upperHour
        // && if (hour is equal && min >= lower min && )
        for (let hit of this.hits) {
            /* hit = '15:21:02' */
            let [hour, min, sec] = hit.split(":");
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
    isBefore(upperHour, uppeerMin, upperSec, hour, min, sec) {

    }
}


let newCounter = new HitCounter();
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        newCounter.record()
    }, i * 1000)
}
console.log(newCounter.hits);
console.log(newCounter.total());