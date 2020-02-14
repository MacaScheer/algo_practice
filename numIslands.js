let ocean1 = [
  [0, 0, 1, 0, 0], //[0,2], [0,3]
  [1, 1, 1, 0, 0], //[1,2]
  [1, 1, 0, 0, 1],
  [0, 0, 1, 1, 1],
  [1, 1, 0, 1, 1]
];
// let memo = {
//   [i,j]: true
// }

const numIIslands = function(grid) {
  const dfs = function(grid, i, j) {
    //is new island?
    //set 1s to 0s, return true
    if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length - 1) {
      return;
    }

    if (grid[i][j] === 0) {
      return;
    }

    grid[i][j] = 0;
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
  };
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

// const dfs = function(grid, i, j, visited = {}) {
//   //is new island?
//   //set 1s to 0s, return true
//   if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length - 1) {
//     return;
//   }
//   if (visited[[i, j]] === true) return;
//   if (grid[i][j] === 0) {
//     return;
//   }
//   visited[[i, j]] = true;
//   grid[i][j] = 0;
//   dfs(grid, i - 1, j, visited);
//   dfs(grid, i + 1, j, visited);
//   dfs(grid, i, j - 1, visited);
//   dfs(grid, i, j + 1, visited);
// };

// console.log(numIIslands(ocean1));
///////

let numIslands = function(grid) {
  let markIsland = function(grid, x, y, visited) {
    if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) {
      return;
    }
    if (visited[x][y] === true) {
      return;
    }
    visited[x][y] = true;
    if (grid[x][y] === "0") {
      return;
    }
    markIsland(grid, x - 1, y, visited);
    markIsland(grid, x + 1, y, visited);
    markIsland(grid, x, y - 1, visited);
    markIsland(grid, x, y + 1, visited);
  };

  let visited = [];
  for (let i = 0; i < grid.length; i++) {
    visited[i] = [];
  }
  let count = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (!visited[x][y] && grid[x][y] === "1") {
        count++;
        markIsland(grid, x, y, visited);
      }
      visited[x][y] = true;
    }
  }
  return count;
};

let example2 = [
  ["1", "1", "0", "0", "1"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["1", "0", "0", "1", "1"],
  ["1", "0", "0", "1", "1"]
];
console.log(numIslands(example2))
// let islandMap = document.getElementById("islandMap");
// let output = "";
// for (let i of example2) {
//   output += "<br />" + i;
// }
// islandMap.innerHTML = output + "<br />";

// let islandCount = document.getElementById("islandCount");
// islandCount.innerHTML = "Count: " + numIslands(example2);
