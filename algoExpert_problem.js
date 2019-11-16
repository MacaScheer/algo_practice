// function findThreeLargestNumbers(array) {
//   let max3 = [];
//   while (max3.length < 3) {
//     let element = Math.max(...array);
//     max3.unshift(element);
//       let index = array.indexOf(element);
//       delete array[index]

//     console.log(array);
//   }
//   return max3;
// }
console.log(findThreeLargestNumbers([55, 7, 8]));

// console.log(findThreeLargestNumbers([3, 77, 4, 55, 12]));
// console.log(findThreeLargestNumbers([3, 77, 4, 55, 12,99,144, 2, 3456]));

function findThreeLargestNumbers(array) {
  array = qSort(array);
  let i = 0;
  let max3 = [];
  while (i < 3) {
    max3.unshift(array.pop());
    i++;
  }
  return max3;
}

function qSort(array, func) {
  if (array.length < 2) return array;

  if (!func) {
    func = (x, y) => {
      if (x < y) return -1;
      return 1;
    };
  }
  const piv = array[0];
  let left = array.slice(1).filter(el => func(el, piv) === -1);
  let right = array.slice(1).filter(el => func(el, piv) === 1);
  left = qSort(left);
  right = qSort(right);
  return left.concat([piv]).concat(right);
}
