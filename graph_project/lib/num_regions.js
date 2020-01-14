//for each node in graph, perform DFS, add each node thru DFS into visited set
//if node is not in visited, increment count

//dfs function finds all the connected nodes of one region
//numRegions function increments count, 
//as it iterates through graph keys, if a node is not in the visited

function numRegions(graph) {
  let visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (!visited.has(node)) {
    count += 1
    depthFirst(node, graph, visited);
    }
  }

return count
}

function depthFirst(node, graph, visited) {
  if (visited.has(node)) return;
  visited.add(node)
  let neighbors = graph[node];

  neighbors.forEach(n => {
    depthFirst(n, graph, visited)
  })
  return visited
}

// function numRegions(graph, visited = new Set()) {
//     if ()
// }

module.exports = {
  numRegions
};

let graph = {
  a: ["f", "d", "b"],
  b: ["c"],
  c: [],
  d: ["e"],
  e: ["f"],
  h: []
};
