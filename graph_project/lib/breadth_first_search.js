function breadthFirstSearch(startingNode, targetVal, visited = new Set()) {
  if (startingNode.val === targetVal) return startingNode;
  let queue = [startingNode];

  while (queue.length) {
    node = queue.shift();
    if (node.val === targetVal) return node;
    if (visited.has(node)) continue;
    visited.add(node);
    queue.push(...node.neighbors);
  }

  return null;
}

class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}
module.exports = {
  breadthFirstSearch
};
