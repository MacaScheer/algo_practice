// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/


// 

function canFinish(numCourses, prerequisites) {
    let graph = {}
    let count = 0;
    let taken = new Set()
    for (let i = 0; i < prerequisites.length; i++){
        let key = prerequisites[i][0]
        let val = prerequisites[i][1]
        graph[key] = val
    }

    for (let node in graph) {
        let neighbor = graph[node]
        dfsCourse(neighbor, graph, taken)
        if (!taken.has(neighbor)) count += 1
    }
    return count <= numCourses

}

function dfsCourse(course, graph, taken) {
    if (taken.has(course)) return;
    taken.add(course)
    dfsCourse(graph[course])
    return taken
}
// [
    // 1: 0
    // 0: 1
// ]

// each subArray[0] is node in graph
// each subArray[1] is node's neighbor
// iterate through outer array, add each node in visited graph
// 

// Input: 2, [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.

// Input: 2, [[1,0]] 
// Output: true
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0. So it is possible.