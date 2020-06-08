function getBoxEdges(t) {
  if (t < 3) return [0, 3];
  if (t < 6) return [3, 6];
  if (t < 9) return [6, 9];
}

var validate = function(board, row, col) {
  const target = board[row][col];
  for (let i = 0; i < 9; i += 1) {
    if (i !== col && board[row][i] === target) return false;
    if (i !== row && board[i][col] === target) return false;
  }

  const [rS, rE] = getBoxEdges(row);
  const [cS, cE] = getBoxEdges(col);
  for (let i = rS; i < rE; i += 1) {
    for (let j = cS; j < cE; j += 1) {
      if (i !== row && j !== col && board[i][j] === target) return false;
    }
  }

  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      if (board[row][col] !== '.' && !validate(board, row, col)) return false;
    }
  }
  return true;
};

console.warn(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
