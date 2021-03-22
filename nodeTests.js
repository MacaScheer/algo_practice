#!/usr/bin/env node
'use strict';

// console.log(arguments);
// console.log(process.argv[2]);


// function whatToDoWhenIWakeUp() {
//     console.log("Goddam I'm awake!");
// }


// console.log("file ran");
// setTimeout(whatToDoWhenIWakeUp, 1000);

/*
global object that acts like a bridge between a Node script
and the host operating system  => process
*/

const fs = require('fs');
const os = require('os');

const system = os.platform();
const user = os.userInfo().username;

fs.appendFile('hello.txt', `Hello ${user} on ${system}!`, (err) => {
    // if (err)
})