/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const patterns = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const bracket = s.charAt(i);
    if (bracket === '{' || bracket === '[' || bracket === '(') {
      arr.push(bracket);
    } else {
      if (patterns[bracket] !== arr.pop()) {
        return false;
      }
    }
  }

  return arr.length === 0;
};
