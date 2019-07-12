/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let answer = '';
  let tmp = '';
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    let index = tmp.indexOf(ch);
    if (index === -1) {
      tmp += ch;
      answer = answer.length < tmp.length ? tmp : answer;
    } else {
      tmp = tmp.slice(index + 1) + ch;
    }
  }
  return answer.length;
};
