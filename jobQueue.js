function createJobQueue() {
  const taskQueue = [];
  const callStack = [];
    this.addJob = function (job) {
        //add job to callStack if empty, else, push onto taskQueue
        const promise1 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(job);
            }, 0);
        }).then(taskQueue.push(resolve));
    };


    this.cancelJob = function (job) {
      //look at taskQueue for job, delete it from taskQueue
  };
    this.processAllJobs = function () {
    //   if taskQueue is empty, 
    //   shift off taskQueue and push onto callStack,
    //   else run jobs on callStack by popping them off
    //   run process REPEAT UNTIL taskQUEUE is empty
  };
}
module.exports = { createJobQueue };

//     Requirements

// Your job is to write a JavaScript module that exports a function createJobQueue, which creates an asynchronous job queue.

// This job queue should have 3 methods:

// addJob(job: () => Promise<mixed>): Promise < mixed >

// cancelJob(job: () => Promise<mixed>): void

// processAllJobs(): Promise < number >
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
