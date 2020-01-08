const digitalRoot = function(num) {
  if (num < 10) return num;
  let lastDigit = num % 10;
  let restOfNum = Math.floor(num / 10);
  return digitalRoot(lastDigit + digitalRoot(restOfNum));
};

// console.log(digitalRoot(25));
// console.log(digitalRoot(2));
// console.log(digitalRoot(2555));
// 5 + 255
// 5 + 12
// 5 + 3

const caesarCipher = function (str, shift) {
  
}