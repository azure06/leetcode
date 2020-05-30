var minDistance = function (word1, word2) {
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

console.log(minDistance('horse', 'ros'));
