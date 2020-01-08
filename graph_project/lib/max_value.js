function maxValue(node, max = null, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  if (node.val > max) max = node.val;
  let nodes = node.neighbors.map(neighbor => maxValue(neighbor));
  return Math.max(nodes);
}

module.exports = {
  maxValue
};
