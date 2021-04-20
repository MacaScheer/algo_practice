#!/usr/bin/env node
'use strict';

/*
You are given an array of length 24,
where each element represents the number of new subscribers
during the corresponding hour.
Implement a data structure that efficiently supports the following:

update(hour: int, value: int): Increment the element at index hour by value.
query(start: int, end: int): Retrieve the number of subscribers that have signed up between start and end (inclusive).
You can assume that all values get cleared at the end of the day, and that you will not be asked for start and end values that wrap around midnight.
*/


class SubscribersByHour {
    constructor() {
        this.day = new Array(24);
    }

    update(hour, value) {
        this.day[hour] += value
    }
    query(start, end) {
        let total = 0;
        for (let i = start; i <= end; i++) {
            total += this.day[i]
        }
        return total;
    }
}