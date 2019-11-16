// The first game: roll a die repeatedly.Stop rolling once you get a five followed by a six.
// Your number of rolls is the amount you pay, in dollars.
// The second game: same, except that the stopping condition is a five followed by a five.
// Which of the two games should Alice elect to play ? Does it even matter ?
//     Write a program to simulate the two games and calculate their expected value.

// const fiveFive = function() {
//   let sixArr = [];

//   while (arr[arr.length - 1] !== 5 && aarr[arr.length - 2] !== 5) {
//     sixArr.push(Math.random(6));
//   }
//   let fiveSix = sixArr.reduce(reducer);
// };

// const fiveSix = function() {
//   let fiveArr = [];
//   let fiveSix;
//   let fiveFive;
//   while (arr[arr.length - 1] !== 5 && aarr[arr.length - 2] !== 6) {
//     fiveArr.push(Math.random(6));
//   }
//   let fiveFive = fiveArr.reduce(reducer);
// };

function twoSigma() {
  let sixArr = [];
  let fiveArr = [];
  let fiveSix;
  let fiveFive;
  while (sixArr[sixArr.length - 1] !== 5 && sixArr[sixArr.length - 2] !== 5) {
    sixArr.push(Math.random(6));
  }
  fiveSix = sixArr.reduce(reducer);

  while (
    fiveArr[fiveArr.length - 1] !== 5 &&
    fiveArr[fiveArr.length - 2] !== 6
  ) {
    fiveArr.push(Math.random(6));
  }
  fiveFive = fiveArr.reduce(reducer);
  return fiveFive > fiveSix ? "five six" : "five five";
}
const reducer = (acc, el) => acc + el;

console.log(twoSigma());
