// crypt:
// ["SEND",
//     "MORE",
//     "MONEY"]
// solution:
// [["O", "0"],
// ["M", "1"],
// ["Y", "2"],
// ["E", "5"],
// ["N", "6"],
// ["D", "7"],
// ["R", "8"],
// ["S", "9"]]
const cryptorithm = function(crypt, solution) {
  let bool = true;
  for (let i = 0; i < 3; i++) {
    let firstLetter = crypt[i][0];
    solution.forEach(let => {
      if (let[0] === firstLetter) {
        let num = let[1];
        if (num === "0") bool = false;
      }
    });
  }
  return bool;
};
function sumMer(word, solution) {
  let sumNum = 0;
  word.split("").forEach(letter => {
    solution.forEach(s => {
      if (letter === s[0]) sumNum += s[1];
    });
  });
  return sumNum;
}

function isCryptSolution(crypt, solution) {
  if (
    sumMer(crypt[0], solution) + sumMer(crypt[1], solution) ===
      sumMer(crypt[2], solution) &&
    cryptorithm(crypt, solution)
  ) {
    return true;
  }
}

console.log(
  cryptorithm(
    ["SEND", "MORE", "MONEY"],
    [
      ["O", "0"],
      ["M", "1"],
      ["Y", "2"],
      ["E", "5"],
      ["N", "6"],
      ["D", "7"],
      ["R", "8"],
      ["S", "9"]
    ]
  )
);
console.log(
  cryptorithm(
    ["TEN", "TWO", "ONE"],
    [
      ["O", "1"],
      ["T", "0"],
      ["W", "9"],
      ["E", "5"],
      ["N", "4"]
    ]
  )
);
