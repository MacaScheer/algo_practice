function breadthFirstSearch(startingNode, targetVal, visited = new Set()) {
  if (startingNode.val === targetVal) return startingNode;
  let queue = [startingNode]
  while (queue.length) {
    node = queue.shift()
    if (visited.has(node)) continue;
    visited.add(node)
  }


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
