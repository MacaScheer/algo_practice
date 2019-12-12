// Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring.
// A substring is defined as any consecutive slice of letters from another string.

// Bonus: solve it in O(m * n) using O(m * n) extra space.
// (Hint: the solution involves dynamic programming which will be introduced later in the course.)

const longest_common_substring = function(str1, str2) {
  firstSubstrings = subStrings(str1);
  secondSubstrings = subStrings(str2);
  let length = 0;
  for (let i = 0; i < firstSubstrings.length; i++) {
    let sub = firstSubstrings[i];
    if (secondSubstrings.includes(sub) && sub.length > length) {
      length = sub.length;
    }
  }
  return length;
};

const subStrings = function(str) {
  let subs = [];
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      let sub = chars.slice(i, j + 1);
      subs.push(sub.join(""));
    }
  }
  return subs;
};

const makeMatrix = function (arr) {
    
}

// console.log(/subStrings("abcdefghijk"));

console.log(longest_common_substring("abcdefgh", "xxavcdef"));
