/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const left = s.charAt(i);
    const right = s.charAt(i + 1);
    let value;
    if (left === 'I' && (right === 'V' || right === 'X')) {
      value = map[right] - map[left];
      i++;
    } else if (left === 'X' && (right === 'L' || right === 'C')) {
      value = map[right] - map[left];
      i++;
    } else if (left === 'C' && (right === 'D' || right === 'M')) {
      value = map[right] - map[left];
      i++;
    } else {
      value = map[left];
    }
    result += value;
  }

  return result;
};
