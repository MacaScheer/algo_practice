const subsets = function(arr) {
  if (arr.length === 0) return [[]];
  let firstVal = arr[0];
  let subs = subsets(arr.slice(1));
  console.log("SUBS: ", subs);
  let newSubs = subs.map(s => s.concat([firstVal]));
  return newSubs.concat(subs);
};

// console.log(subsets([1, 2, 3]));

// const permutations = function(arr) {
//   let combsArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let one = arr.slice(i, i + 1);
//     let rightRest = arr.slice(i + 1);
//     let leftRest = arr.slice(0, i);
//     let comb = leftRest.concat(rightRest);
//     combsArr.push(comb.concat(one));
//   }
//   console.log("PERMS: ", combsArr);
//   return combsArr;
// };

// const reducer = function(arr) {
//   let sum = 0;
//   arr.map(el => {
//     sum += el;
//   });
//   return sum;
// };

// const fourSum = function(nums, target) {
//   let arrs = permutations(nums);
//   return arrs.filter(ar => reducer(ar) === target);
// };

const fourSum = function(nums, target) {
  let combs = permutations(nums);
  let shortened = cutToFour(combs);
  let filtered = shortened.filter(ar => {
    reducer(ar) === target;
  });
  return filtered;
};

const permutations = function(arr) {
  let combsArr = [];
  for (let i = 0; i < arr.length; i++) {
    let one = arr.slice(i, i + 1);
    let rightRest = arr.slice(i + 1);
    let leftRest = arr.slice(0, i);
    let comb = leftRest.concat(rightRest);
    combsArr.push(comb.concat(one));
  }
  console.log("COMBSARR: ", combsArr);
  return combsArr;
};
var cutToFour = function(arr) {
  let newArrs = [];
  arr.forEach(sub => {
    newArrs.push(sub.slice(0, 4));
  });
  console.log("SHORTENED ARRS: ", newArrs);
  return newArrs;
};
var reducer = function(arr) {
  let sum = 0;
  arr.forEach(el => (sum += el));
  return sum;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
