function rowCheck(grid) {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let valid_sud = true;
  grid.forEach(sq => {
    if (!nums.includes(sq)) valid_sud = false;
  });
  return valid_sud;
}

function sudokuCheck(grid) {
  let gridT = [];
  for (let i = 0; i < 9; i++) {
    gridT.push([]);
  }
  let gridS = [];
  for (let i = 0; i < 9; i++) {
    gridS.push([]);
  }
  valid_sudoku = rowCheck(grid);
  if (!valid_sudoku) return valid_sudoku;

  grid.forEach(row => {
    row.forEach((el, col_ind) => {
      gridT[col_ind].push(el);
    });
  });

  valid_sudoku = rowCheck(gridT);
  if (!valid_sudoku) return valid_sudoku;
  for (let k = 0; k < 9; k++) {
    let iS = (k % 3) * 3;
    let jS = Math.floor(k / 3) * 3;
    //[0,0] [3,0][6,0][0,3][3,3][6,3][0,6]

    for (let i = iS; i < iS + 3; i++) {
      for (let j = jS; j < jS + 3; j++) {
        grid[k].push(grid[i][j]);
      }
    }
  }
  valid_sudoku = rowCheck(gridS);
  return valid_sudoku;
}
