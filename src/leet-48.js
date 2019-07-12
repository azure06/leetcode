/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const mid = Math.floor(matrix[i].length / 2);
    for (let j = 0; j < mid; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[i].length - j - 1];
      matrix[i][matrix[i].length - j - 1] = tmp;
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

rotate(matrix);
console.log(matrix);
