// 3 2 3 : numElelments = 3; rotationCount = 2; numQueries = 3;
// 1 2 3 : a[0] = 1 ; a[1] = 2 ; a[2] = 3
//
// indexes of elements to return:
// 0
// 1
// 2
const fs = require("fs");

let text = fs.readFileSync("./input.txt").toString("utf-8");

const rotateArrRight = function(array, n) {
  if (n === 0) return array;
  let last = array.pop();
  array.unshift(last);
  return rotateArrRight(array, n - 1);
};

let k = text.split("\n")[0].split(" ")[1];
let q = text.split("\n")[0].split(" ")[2];
let queries = text.split("\n").slice(2);
console.log(queries);
let arr = text.split("\n")[1].split(" ");

let n = text.split("\n")[0].split(" ")[0];
const circularArrayRotation = function(n, k, q) {
  let returnArray = rotateArrRight(arr, k);
  for (let i = 0; i < queries.length; i++) {
    console.log(returnArray[queries[i]]);
  }
};

console.log(circularArrayRotation(n, k, q));
