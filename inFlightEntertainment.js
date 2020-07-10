#!/usr/bin/env node
'use strict';

function inflightEntertainment(flightLength, movieLengths) {
    let times = new Set()
    for (let i = 0; i < movieLengths.length; i++){
        let length = movieLengths[i];
        let remainingLength = flightLength - length;
        if (times.has(remainingLength)) return true
        times.add(length)
    }
    return false
}

let movies = [25,45,70,25,65,90,105]
let fLength = 115;

console.log(inflightEntertainment(fLength, movies))


function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Movie lengths we've seen so far
    const movieLengthsSeen = new Set();

    for (let i = 0; i < movieLengths.length; i++) {
        const firstMovieLength = movieLengths[i];

        const matchingSecondMovieLength = flightLength - firstMovieLength;
        if (movieLengthsSeen.has(matchingSecondMovieLength)) {
            return true;
        }

        movieLengthsSeen.add(firstMovieLength);
    }

    // We never found a match, so return false
    return false;
}