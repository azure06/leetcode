var minDistance = function(word1, word2) {
  const matrix = new Array(word1.length + 1).fill().map(() => []);
  for (let row = 0; row <= word1.length; row += 1) {
    for (let col = 0; col <= word2.length; col += 1) {
      if (row == 0) matrix[0][col] = col;
      else if (col == 0) matrix[row][0] = row;
      else if (word1[row - 1] == word2[col - 1])
        matrix[row][col] = matrix[row - 1][col - 1];
      else
        matrix[row][col] =
          Math.min(
            matrix[row][col - 1],
            matrix[row - 1][col - 1],
            matrix[row - 1][col]
          ) + 1;
    }
  }
  return matrix[word1.length][word2.length];
};
console.log(minDistance('distance', 'distancing'));

const memoize = ((values = {}) => ({
  memoized(word1, word2) {
    return values[word1 + word2];
  },
  memoize(word1, word2, value) {
    values[word1 + word2] = value;
    return value;
  }
}))();

/** Slower recursive
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance_ = function(word1, word2) {
  if ((val = memoize.memoized(word1, word2))) {
    return val;
  }

  if (word1.length === 0) return word2.length;
  else if (word2.length === 0) return word1.length;
  const delta = (val1, val2) => (val1 === val2 ? 0 : 1);
  return memoize.memoize(
    word1,
    word2,
    Math.min(
      minDistance_(word1.slice(1), word2.slice(1)) + delta(word1[0], word2[0]),
      minDistance_(word1, word2.slice(1)) + 1,
      minDistance_(word1.slice(1), word2) + 1
    )
  );
};
console.log(minDistance_('distance', 'distancing'));
