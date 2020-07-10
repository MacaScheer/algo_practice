#!/usr/bin/env node
'use strict';

function inflightEntertainment(flightLength, movieLengths) {
    let times = new Set()
    for (let i = 0; i < movieLengths.length; i++){
        times.add(movieLengths[i])
    }
    for (let i = 0; i < movieLengths.length; i++){
        let secondLength = flightLength - movieLengths[i]
        if(times.has(secondLength)) return true
    }
    return false
}

let movies = [25,45,70,25,65,90,105]
let fLength = 115;

console.log(inflightEntertainment(fLength, movies))