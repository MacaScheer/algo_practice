let word = "abcdcba";
let word2 = "abcdefedcbi";

const isPalindrome = function(str) {
  if (str.length <= 1) return true;
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[chars.length - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome(word2));
