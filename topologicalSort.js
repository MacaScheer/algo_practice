#!/usr/bin/env node
'use strict';

/*
create a function that takes in a list of jobs to be completed, and a list of dependencies (the second number depends on the first numbers in the arrays, within the dependencies)
the output of the function should be an array of the order in which the jobs should be completed, if possible.
create a graph object with the second job pointing to its prerequisite
as we traverse the graph, we keep track of which of the jobs (that are needed to get done) have been completed,
each time we complete one of the jobs in the list, we input it in an array.
return that array
*/
function topologicalSort(jobs, deps) {
    let graph = createGraph(deps);    
    console.log(graph)
    // find it as a key, then value
    let output = [];
    let visited = {}
    let job = jobs.shift();
    let stack = [job];  //stack is list of prereq jobs needed to be completed before moving on to next job
    while (output.length < jobs.length) {
        if (graph[job] !== undefined) {
            //has prereqs, need to complete each prereq, first, making sure those don't have prereqs
            stack.unshift(...graph[job]);
            while(stack.length > 0){
            // for (let i = 0; i < stack.length; i++){
                console.log("stack: ", stack);
                console.log("visited: ", visited)
                let preReq = stack[0];
                if (visited[preReq] === undefined) { //if unvisited
                    visited[preReq] = true
                    if (graph[preReq]) {   //if has prereqs
                        stack.unshift(...graph[preReq])  //add more prereqs before doing it
                    } else {               //no prereqs
                        // visited[preReq] = true;
                        output.push(preReq);  //do job
                        stack.shift()  //remove from preReqs
                    }
                } else {    //visited
                    job = stack.shift();
                    // visited[job] = true;
                }
            }

        } else {
            //no prereqs, can do job and move on
            output.push(job)
            visited[job] = true
            job = jobs.shift()
        }
        
    }
    return output;

}
/*

each dep = [prereq(1st), job(2nd)]

graph
{
    2: [1,3,4],
    3: [1,4],
}

traversing the graph:
    start with the first job in jobs, find it in the graph as a key, if not there, find it as a value
    now iterate through the other values on that key, checking first if that have a key in the graph, and
    if you've already visited them in the output array. Once you've finished iterating, visit the key
    now check for remainders and repeat process
    1,2


*/


function createGraph(deps) {
    let graph = {};
    for (let i = 0; i < deps.length; i++){
        let [p, j] = deps[i];
        if (graph[j] === undefined) {
            graph[j] = [p]
        } else {
            graph[j].push(p)
        }
    }
    return graph;
}

let j = [1, 2, 3, 4];
let d = [[1, 2], [1, 3], [3, 2], [4, 2], [4, 3]];

console.log(topologicalSort(j,d) + " should equal: [1,4,3,2] or [4,1,3,2]")


/*
ORD -> SFO
NYC -> DFW
LAX -> ORD
SFO -> NYC
*/

tickets: {
"ORD": "SFO",
"NYC": "DFW",
"LAX": "ORD",
"SFO": "NYC",
}

ticketsArray = [tickets.keys(), tickets.values()]

mySorter = (a, b) => {
    if (ticket[a] === b) {
        return -1;
    } else if (ticket[b] === a) {
        return 1;
    } else {
        return 0;
    }
}

sort(ticketsArray, mySorter)

function findStartCity(tickets){
    let beginCity;
        for(let start in Object.keys(tickets)){
                   if(!Object.values.includes(start)){
                   beginCity = start;
                   }
                   
        }
      return beginCity;  
}


function findPath(tickets, startCity){
    let trip = [startCity];
    let departure = startCity;
   
     while(tickets[departure]){
     let departure = tickets[departure]
     trip.push(departure)
     }
    return trip;
}


/* [{},{} */


// N * (N-2) * (N-4) * (N-6) * ..... 0 Factorial(N)

// N * N-1 * N-2


const debounce = (func, delay) => {
   let event
   return function() {
       const context = this;
       const args = arguments;
       
       clearTimeout(event)
       
       event = setTimeout(()=>{
            func.apply(context, args)
       }, delay)    
   }  
}


const cancelCalls = function(){
 clearTimout()
}
clearTimeout(timeout)

debounceBtn.addEventListener('click', debounce(function() {
  doSearch(`${queryTerm}`)
}, 3000));