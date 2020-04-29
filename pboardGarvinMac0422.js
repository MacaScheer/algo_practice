#!/usr/bin/env node
'use strict';

console.log("Pair Board Garvin and Mac 04/22")



function spiralTraverse(array) {
    let first = 0;
    let last = 1;
    let subLength = array[0].length
    let output = [];
    let visited = {};
    let idx1, idx2, string;
    let cont = true;
    if (array.length <= 1) return array[0]
    while (cont) {
        console.log("first: ", first, " last: ", last)
        let sub = array[first];
        // traverse right loop
        for (let i = first; i <= sub.length - last; i++) {
            idx1 = first
            idx2 = i
            string = `${idx1},${idx2}`;
            console.log('traverse right loop',string);
            if(!visited[string]){
                visited[string] = true;
                output.push(sub[i]);
            }else return output;
        }
        //traverse down loop
        for (let outer = first + 1; outer <= array.length - last; outer++) {
            
            let length = sub.length - last;
            sub = array[outer];
            idx1 = outer;
            idx2 = length;
            string = `${idx1},${idx2}`;
            console.log("traverse down loop", string);
            if(!visited[string]){
                visited[string] = true;
                output.push(sub[length])
            }else return output;
        }
        // traverse left
        sub = array[array.length - last]
        for (let j = (sub.length - (last + 1)); j >= first; j--) {
            // idx1 = first;
            idx2 = j;
            string = `${idx1},${idx2}`;
            console.log("traverse left loop", string);
            if(!visited[string]){
                visited[string] = true;
                output.push(sub[j])
            }else return output;
        }
        // traverse up
        for (let outer = (array.length - (last + 1)); outer > first; outer--) {
            idx1 = outer;
            idx2 = first;
            string = `${idx1},${idx2}`;
            console.log('traverse up loop',string);
            sub = array[outer]
            if(!visited[string]){
                visited[string] = true;
                output.push(sub[first])
            }else return output;
        }
        first += 1;
        last += 1;
    }
}

// console.log("Test Case #1: ", spiralTraverse([[1]]))

// console.log("Test Case #2: ",spiralTraverse([
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [22, 23, 24, 25, 26, 27, 28, 29, 10],
//     [21, 36, 35, 34, 33, 32, 31, 30, 11],
//     [20, 19, 18, 17, 16, 15, 14, 13, 12]
// ]));


