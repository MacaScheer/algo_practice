var lengthOfLongestSubstring = function(s) {
  let chars = s.split("");
  let subString = [];
  let longest = 0;
  for (let i = 0; i < chars.length; i++) {
    let c = chars[i];
    if (!subString.includes(c)) {
      subString.push(c);
    } else {
      subString.push(c);
      console.log("SUBSTRING BEFORE SPLICE: ", subString);
      subString = subString.splice(subString.indexOf(c) + 1);
      console.log("CHAR: ", c, "     i: ", i);
      console.log("SUBSTRING AFTER SPLICE: ", subString);
      console.log("CHARS:             ", chars);
    }

    if (subString.length > longest) longest = subString.length;
  }
  return longest;
};

console.log(lengthOfLongestSubstring("aabaab!b"));
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("bbb"));
