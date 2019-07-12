/**
 * Runtime: 124 ms, faster than 54.09% of JavaScript online submissions for Longest Palindromic Substring.
 * Memory Usage: 36 MB, less than 69.57% of JavaScript online submissions for Longest Palindromic Substring.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = '';
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};

console.log(longestPalindrome('aba'));
