// function codingScoreReport(scores) {
//   let ans = [];
//   let good = ["Good - ", 0];
//   let poor = ["Poor - ", 0];
//   let elite = ["Elite - ", 0];
//   let excellent = ["Excellent - ", 0];
//   let fair = ["Fair - ", 0];
//   scores.forEach(score => {
//     if (score >= 300 && score <= 599) {
//       poor[1] += 1;
//     }
//     if (score >= 600 && score <= 699) {
//       fair[1] += 1;
//     }
//     if (score >= 700 && score <= 749) {
//       good[1] += 1;
//     }
//     if (score >= 750 && score <= 799) {
//       excellent[1] += 1;
//     }
//     if (score >= 800) {
//       elite[1] += 1;
//     }
//   });
//   [poor, fair, good, excellent, elite].forEach(cat => {
//     if (cat[1] > 0) ans.push(cat);
//   });
//   ans = sorter(ans);
//   finAns = ans.map(cat => {
//     console.log(cat);
//     cat.join("");
//   });
//   return finAns;
// }

function codingScoreReport(scores) {
  let ans = [];
  let passing = [];
  let good = ["Good - ", 0];
  let poor = ["Poor - ", 0];
  let elite = ["Elite - ", 0];
  let excellent = ["Excellent - ", 0];
  let fair = ["Fair - ", 0];
  scores.forEach(score => {
    if (score >= 300 && score <= 599) {
      poor[1] += 1;
      passing.push(poor);
    }
    if (score >= 600 && score <= 699) {
      fair[1] += 1;
      passing.push(fair);
    }
    if (score >= 700 && score <= 749) {
      good[1] += 1;
      passing.push(good);
    }
    if (score >= 750 && score <= 799) {
      excellent[1] += 1;
      passing.push(excellent);
    }
    if (score >= 800) {
      elite[1] += 1;
      passing.push(elite);
    }
  });
  [poor, fair, good, excellent, elite].reverse().forEach(cat => {
    if (cat[1] > 0) ans.push(cat);
  });
  ans = sorter(ans);
  let finAns = [];
  ans.forEach(cat => {
    finAns.push(cat.join(""));
  });
  return finAns;
}

function sorter(arr, func) {
  if (arr.length < 2) return arr;
  if (!func) {
    func = (el1, el2) => {
      if (el1[1] > el2[1]) return -1;
      return 1;
    };
  }
  const pivot = arr[0];
  let left = arr.slice(1).filter(el => func(el, pivot) === -1);
  let right = arr.slice(1).filter(el => func(el, pivot) !== -1);
  left = sorter(left, func);
  right = sorter(right, func);
  let newList = left.concat([pivot]).concat(right);
  return newList;
}

function indexCompare(el1, el2) {
    let good = ["Good - ", 0];
    let poor = ["Poor - ", 0];
    let elite = ["Elite - ", 0];
    let excellent = ["Excellent - ", 0];
    let fair = ["Fair - ", 0];
    let order = [poor, fair, good, excellent, elite].reverse();
    if (order.indexOf(el1[0]) < order.indexOf(el2[0])) return -1;
    return 1;
}

// function secondSort(arr, poor, fair, good, excellent, elite) {
//   let newArr = [];
//   console.log("ARR: ", arr);
//   console.log(poor);
//   arr.forEach(cat => {});
// }
// scores: [330, 723, 730, 825];
// Expected Output:
// ["Good - 2",
//     "Elite - 1",
//     "Poor - 1"]

console.log(codingScoreReport([330, 723, 730, 825]));



// Codewriting

// Background

// While working on our application servers, we realized that sometimes we have a long list of asynchronous network requests that need to be resolved in a specific, sequential order.

// As a result, we want to create a job queue that can accumulate asynchronous jobs, then process them one at a time.

//     Requirements

// Your job is to write a JavaScript module that exports a function createJobQueue, which creates an asynchronous job queue.

// This job queue should have 3 methods:

// addJob(job: () => Promise<mixed>): Promise < mixed >

//     cancelJob(job: () => Promise<mixed>): void

//         processAllJobs(): Promise < number >
//     addJob adds a job to the end of the queue.It should return a promise that resolves with the value returned by job, whenever job ends up getting executed. (But, note that addJob itself should not trigger execution of any jobs.) If job throws an error, then the promise returned by addJob should be rejected.

// cancelJob removes a job from the queue.This should reject the promise returned by addJob.If no matching job is found, it does nothing.

// When processAllJobs is called, the queue should process jobs(by invoking them) one - at - a - time in FIFO order until there are none left, then resolve with the number of jobs successfully processed(i.e., that did not reject or throw an error).

// If any job cannot be processed-- because job rejects or throws an error when invoked-- the promise returned by addJob should be rejected.However, this should not stop processAllJobs from processing the rest of the queue.

// For simplicity:

// Assume that addJob and cancelJob will not be called while processAllJobs is in progress.
// Assume that the same job will not be added to the queue more than once.
//     Hints

// You are permitted to reference JavaScript language documentation, as long as you do not copy or share any code
// Your code will be scored by the unit tests in tests.js(this file is visible but read - only)
// If it is helpful, you can write your own unit tests in customTests.js
// To debug, you can see the raw Node / Mocha output by choosing Run Without Tests and running mocha specs from main.sh
// [execution time limit]10 seconds