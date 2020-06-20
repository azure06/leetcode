/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const array = [];
  const values = Object.keys(recursive(s));
  for (let i = 0; i < values.length; i += 1) {
    if (!array[values[i].length]) {
      array[values[i].length] = [values[i]];
    } else {
      array[values[i].length].push(values[i]);
    }
  }
  return array[array.length - 1];
};

var recursive = function(s, l = 0, open = 0, res = {}, mem = {}) {
  for (; l < s.length; l += 1) {
    if (open >= 0) {
      if (s[l] === '(' || s[l] === ')') {
        const str = s.substring(0, l) + s.substring(l + 1, s.length);
        if (mem[s] === undefined) recursive(str, l, open, res, mem);
        open += s[l] === '(' ? 1 : -1;
      }
    }
  }
  if (open === 0) res[s] = true;
  mem[s] = s;
  return res;
};

console.log(removeInvalidParentheses('(((((())'));
