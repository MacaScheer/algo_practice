#!/usr/bin/env node
'use strict'
/*
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
...
triangle going from 0 to n (downward)
return the sum of the squares of the digits in horizontal lines
*/


function easyLine(n) {
    /*coefficients can be summed by expanding and summing (x + 1)(x + 1)...n times
    should use memo to store previous answers since given the line above n, one can
    generate the coefficients of n
    so given (n - 1) coefficients, like 1,2,1 and knowing that n has (n + 1) coefficients
    n = 0, 1
    n = 1, 1 1
    n = 2, 1 2 1

    for (let i = 0; i < n - 1; i++){
        
    }

    */
    if (n === 1) return 1;
    let sequence = buildOutTriangle(n, [1])
    let sumSquares = 0;
    for (let i = 0; i < sequence.length; i++) {
        sumSquares += (sequence[i] * sequence[i])
    }
    return sumSquares;
}



function findLastSeqCalculated(n, calculated) {
    console.log("CALCULATED: ", calculated)
    for (let i = n; i >= 0; i--) {
        if (calculated[i]) return calculated[i];
    }
    return [1];
}

function buildOutTriangle(n, seq, calculated = {}) {
    if (n === 0) return [1];
    if (n === 1) return [1, 1];
    if (calculated[n]) {
        return calculated[n];
    }
    calculated[seq.length - 1] = seq;
    if (seq.length === n + 1) {
        calculated[n] = seq;
        return seq;
    }
    // console.log("SEQ: ", seq);
    let newSeq = [1]
    for (let i = 0; i < seq.length - 1; i++) {
        let nextTerm = seq[i] + seq[i + 1];
        newSeq.push(nextTerm);
    }
    newSeq.push(1);
    calculated[seq.length - 1] = newSeq;
    return buildOutTriangle(n, newSeq, calculated);


}

// console.log(buildOutTriangle(5, [1, 2, 1]))
// easyline(0) => 1
// easyline(1) => 2
// easyline(4) => 70
// easyline(50) => 100891344545564193334812497256
let inputs = [0, 1, 4, 50];
let outputs = [1, 2, 70, 100891344545564193334812497256];
// for (let i = 0; i < inputs.length; i++) {
//     console.log(easyLine(inputs[i]) === outputs[i]);
// }
console.log(easyLine(50));