let nums1 = [12, 122, -44, 0, 23, 45, 0, -12, 123];
let nums2 = [1, 1, 1, 1, 1, -6];

//non-optimized O(n^2)

const greatestSumSubsections = function(arr) {
  let greatestSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let subArr = arr.slice(i, j + 1);
      if (adder(subArr) > greatestSum) greatestSum = adder(subArr);
    }
  }
  return greatestSum;
};

const adder = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// console.log(greatestSumSubsections(nums1));
// console.log(greatestSumSubsections(nums2));

//OPTIMIZED KADANE'S ALGORITHM//O(n)

const greatestSumSubsections1 = function(arr) {
  let sums = [0];
  let sum = 0;
  let max = 0;
  let min = 0;
  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    sum += el;
    sums.push(sum);
    if (sum < minSum) {
      minSum = sum;
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (el < min) {
      min = el;
    }
    if (el > max) {
      max = el;
    }
  }
  console.log("minSum: ", minSum);
  console.log("maxSum: ", maxSum);
  console.log("min: ", min);
  console.log("max: ", max);
  console.log("sums: ", sums);
  return (max = maxSum > max ? maxSum : max);

  //   console.log(biggestPosDiff(arr));
};

const biggestPosDiff = function(array) {
  let diffsArray = [];
  let sum = 0;
  let max = Math.max(array);
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    sum += el;
  }
  //   let max = Math.max(diffsArray);
  console.log("diffsArray: ", diffsArray);
  //   return max;
};
console.log(greatestSumSubsections([1, 1, 1, 1, 1, 1, 1, -99, 105, -20, 20]));

console.log(greatestSumSubsections1([1, 1, 1, 1, 1, 1, 1, -99, 7, -20, 20]));
