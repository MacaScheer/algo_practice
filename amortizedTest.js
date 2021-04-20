#!/usr/bin/env node
'use strict';

function amortizedAnalysis(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        let newAmt = n / (2 ** i)
        console.log(`${n} / ${2 ** i}`)
        sum += newAmt
    }
    return sum;
}

for (let i = 1; i <= 20; i++) {
    console.log(amortizedAnalysis(i), ` amortization of ${i}`)
}


String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}