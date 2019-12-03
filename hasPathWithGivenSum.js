// function hasPathWithGivenSum(t, s) {
//   let sum = [0];
//   let root = t;
//   let queue = [t];
//   while (queue.length) {
//     t = queue.pop();

//     sum.push(sum[sum.length - 1] + t.value);

//     if (t.left) {
//       queue.push(t.left);
//       //   return hasPathWithGivenSum(t.left, s, sum);
//     }
//     if (t.right) {
//       queue.push(t.right);
//       //   return hasPathWithGivenSum(t.right, s, sum);
//     } else {
//       if (sum[sum.length - 1] === s) {
//         return true;
//       } else {
//         sum.pop();
//       }
//     }
//   }
// }

function hasPathWithGivenSum(t, s, res = []) {
  if (!t) return false;
  if (!t.left && !t.right) {
    if (t.value === s) {
      res.unshift(t.value);
      return true;
    } else {
      return false;
    }
  }
  if (hasPathWithGivenSum(t.left, s - t.value, res)) {
    res.unshift(t.value);
    return true;
  }
  if (hasPathWithGivenSum(t.right, s - t.value, res)) {
    res.unshift(t.value);
    return true;
  }
  return false;
}

// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

let t = {
  value: 4,
  left: {
    value: 1,
    left: {
      value: -2,
      left: null,
      right: {
        value: 3,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 2,
      left: {
        value: -2,
        left: null,
        right: null
      },
      right: {
        value: -3,
        left: null,
        right: null
      }
    }
  }
};
let s = 7;
console.log(hasPathWithGivenSum(t, s));

// let arr = [1, 2, 3, 4, 5, 6];

// const sumArr = function(arr) {
//   let sums = [];
//   arr.forEach(el => {
//     if (sums.length === 0) sums.push(el);
//     else sums.push(sums[sums.length - 1] + el);
//   });
//   return sums;
// };

// console.log(sumArr(arr));
