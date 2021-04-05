#!/usr/bin/env node
'use strict';
/*
This problem was asked by Facebook.

Given a function f, and N return a debounced f of N milliseconds.

That is, as long as the debounced f continues to be invoked, 
f itself will not be called for N milliseconds.
*/


function debounce(f, N) {
    setTimeout(function () {
        f(N);
    }, N * 100)
}

let printer = N => {
    console.log(`this is the f function! debounced ${N} milliseconds`)
}

debounce(printer, 5)