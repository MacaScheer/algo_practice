const depthFirstSearch = function (graph, target, visited = new Set()) {
    if (visited.has(target)) return;
    console.log(target)
    visited.add(target)
    graph[target].forEach(node => depthFirstSearch(graph, node, visited))
}


let graph = {
    'a': ['b', 'c', 'e'],
    'b': [],
    'c': ['b', 'd'],
    'd': [],
    'e': ['a'],
    'f':['e']
}

console.log(depthFirstSearch(graph, 'e'))