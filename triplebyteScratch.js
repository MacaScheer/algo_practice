#!/usr/bin/env node
'use strict';

const { assert } = require("chai");

console.log("triplebyte scratch space")

// let x = { 'foo': 'bar' }
// let y = { 'baz': x }
// let z = y['baz']['foo']
// console.log(z)

// function foo() {
//     function bar() {
//         setTimeout(() => console.log('Curly'), 1000)
//     }

//     console.log('Larry')
//     return bar
// }

// let x = foo();
// x();
// console.log('Moe')


// function makeAdder(x) {
//     return function () {
//         return arguments[0] + arguments[1]
//     }
// }

// var add5 = makeAdder(5);
// assert(add5(10) === 15)

// function f(x) {
//     x *= 2;
//     return function (y) {
//         y *= x;
//         return function (z) {
//             return z * y
//         }
//     }
// }
// let g = f(3)(4)(5)

// const f = n => n <= 1 ? 1 : n * f(n - 1);
// let g = f(4)
// console.log(g)


// function strToFloat(str) {
//     return parseFloat(str)
// }

// console.log(strToFloat("1020.2"))


// let event = {
//     name: "hotfogfg",
//     financials: {
//         baseCost:"$19.99"
//     }
// }



// let s = "ratdogstrinratdog"
// console.log(s.split("dog").join("cat"))

// WEBPACK VS BABEL
/* The goal of a module bundler, such as Webpack,
    is to combine separate pieces of code(together with any associated dependencies) 
    into larger bundle files.On the other hand, the goal of a Javascript compiler, 
    such as Babel, is to transform code from a format that’s optimized for readability 
    and programmer efficiency(e.g.JSX) to a more machine - friendly format
    (e.g.vanilla Javascript or a Javascript version that's supported by older browsers).
*/