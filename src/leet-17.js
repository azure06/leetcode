const dictionary = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits, index = 0, comb = '', res = []) {
  if (!digits[index]) {
    if (comb) res.push(comb);
    return res;
  }
  for (let i = 0; i < dictionary[digits[index]].length; i += 1) {
    letterCombinations(
      digits,
      index + 1,
      comb + dictionary[digits[index]][i],
      res
    );
  }
  return res;
};

console.warn(letterCombinations('234'));
