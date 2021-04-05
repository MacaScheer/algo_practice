#!/usr/bin/env node
'use strict';

const debounce = (func, delay) => {
    let event;
    return function () {
        let context = this;
        let args = arguments;
        console.log("event: ", event, " args: ", args, " context: ", context)
        clearTimeout(event);
        event = setTimeout(() => {
            func.apply(context, args)
        }, delay)
    }
}

const innerFunc = (arg) => {
    console.log(arg)
}
console.log(debounce(innerFunc("this is being debounced"), 500))
//USE THIS IN FRONT END TO PREVENT SPAMMING BACKEND QUERIES
// THIS
let cat = {
    purr: function () {
        console.log("meow");
    },
    purrMore: function () {
        for (let i = 0; i < 10; i++) {
            this.purr();
        }
    }
};

// cat.purr();
// cat.purrMore();
/* This is because cat.purrMore function
is called method-style, i.e. object.method(arguments, ...).
Using method-style invocation
(a.k.a. dot-notation) sets this to the object preceding the dot.
*/

// SCOPE ISSUES WITH THIS
// function times(num, fun) {
//     for (let i = 0; i < num; i++) {
//         fun(); // call is made "function-style"
//     }
// }

// const cat = {
//     age: 5,

//     ageOneYear: function () {
//         this.age += 1;
//     }
// };

// cat.ageOneYear(); // works

// times(10, cat.ageOneYear); // ReferenceError; this.age is not defined

/*
In the example, we pull out the cat.ageOneYear method
and pass it to times. times calls the method,
but it calls it function-style.
Recall that function-style method calls use window or global as this.
Using method-style invocation (a.k.a. dot-notation)
sets this to the object preceding the dot.
There are two ways around this problem.
The first is to introduce an anonymous closure to capture cat:
*/

// `times` is the same:
// function times(num, fun) {
//     for (let i = 0; i < num; i++) {
//         fun(); // call is made "function-style"
//     }
// }

// const cat = {
//     age: 5,

//     ageOneYear: function () {
//         this.age += 1;
//     }
// };

// Function argument is different:
// times(10, function () {
//     cat.ageOneYear();
// });

/*
This is a very common pattern,
so there is another, less verbose alternative using
Function.prototype.bind
*/
// times(10, cat.ageOneYear.bind(cat));