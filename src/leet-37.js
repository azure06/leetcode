function getIndices(t) {
  if (t < 3) return [0, 3];
  if (t < 6) return [3, 6];
  if (t < 9) return [6, 9];
}

function findCandidates(board, row, col) {
  const candidates = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < 9; i += 1) {
    if (board[row][i] !== '.') {
      candidates[board[row][i] - 1] = false;
    }
    if (board[i][col] !== '.') {
      candidates[board[i][col] - 1] = false;
    }
  }
  const [rS, rE] = getIndices(row);
  const [cS, cE] = getIndices(col);
  for (let i = rS; i < rE; i += 1) {
    for (let j = cS; j < cE; j += 1) {
      if (board[i][j] !== '.') {
        candidates[board[i][j] - 1] = false;
      }
    }
  }
  const filteredCandidates = [];
  for (let i = 0; i < candidates.length; i += 1) {
    if (Boolean(candidates[i])) {
      filteredCandidates.push(candidates[i]);
    }
  }
  return filteredCandidates;
}

function backtrack(board) {
  // Backtrack
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board.length; col += 1) {
      if (board[row][col] === '.') {
        const candidates = findCandidates(board, row, col);
        if (candidates.length === 0) return false;
        for (let i = 0; i < candidates.length; i += 1) {
          const deepCopy = board.map(r => [...r]);
          deepCopy[row][col] = candidates[i];
          const next = backtrack(deepCopy);
          if (next) return next;
        }
        return false;
      }
    }
  }
  return board;
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const newBoard = backtrack(board);
  for (let row = 0; row < board.length; row += 1) {
    board[row] = newBoard[row];
  }
};

const input = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

solveSudoku(input);
