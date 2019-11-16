function subsets(arr) {
  if (arr.length === 0) return [[]];
  let first = arr[0];
  let subs = subsets(arr.slice(1));
  let newSubs = subs.map(s => [first].concat(s));
  let ret = newSubs.concat(subs);
  return ret;
}

function subsetsComb(arr) {
  let returnArr = [];
  arr = subsets(arr);
  console.log("ARR: ", arr);
  arr.forEach(subArr => {
    let sum = 0;
    console.log("SUBARR: ", subArr);

    if (subArr.length > 0) {
      subArr.forEach(num => {
        sum += num;
      });
      returnArr.push(sum);
    }
  });
  return returnArr;
}

// console.log(subsets(["*", "+", "-"]));

function subStrings(string) {
  let subsArr = [];
  let chars = string.split("");
  let sub = "";
  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j <= chars.length; j++) {
      sub = chars.slice(i, j);
      subsArr.push(sub.join(""));
    }
  }
  return subsArr;
}

function matchSubs(string) {
  let arr = subStrings(string);
  let n = arr.length;
  let matchArr = [
    [arr[0], arr[n - 2]],
    [arr[0], arr[n - 3], arr[n - 1]],
    [arr[1], arr[n - 1]],
    [arr[2]]
  ];
  console.log(matchArr);
}

console.log(matchSubs("123"));

//arr = [ '1', '12', '123', '2', '23', '3' ]
// length 6
// [0, n-2], [0, n-3, n-1], [1,n-1], [2]
// [[0,4],[0,3,5],[1,5],[2]]  6

