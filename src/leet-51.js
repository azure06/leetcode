/**
 * Runtime: 128 ms
 * Memory Usage: 37.8 MB
 */

var isSpaceAvailable = function(n, map, row, col) {
  if (map[row] !== undefined) return false;

  for (let i = 0; i < n; i++) {
    if (map[i] && map[i][col] === 'Q') {
      return false;
    }
  }

  let rowStart = row > col ? row - col : 0;
  let colStart = col > row ? col - row : 0;

  for (let row = rowStart, col = colStart; row < n; row += 1, col += 1) {
    if (map[row] && map[row][col] === 'Q') {
      return false;
    }
  }

  invCol = n - col - 1;
  rowStart = row > invCol ? row - invCol : 0;
  colStart = invCol > row ? col + row : n - 1;

  for (let row = rowStart, col = colStart; row < n; row += 1, col -= 1) {
    if (map[row] && map[row][col] === 'Q') {
      return false;
    }
  }

  return true;
};

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n, row = 0, map = [], result = []) {
  for (let col = 0; col < n; col += 1) {
    if (isSpaceAvailable(n, map, row, col)) {
      let newMap = [...map];
      newMap[row] = newMap[row] || '';
      for (i = 0; i < n; i += 1) {
        newMap[row] = i === col ? newMap[row] + 'Q' : newMap[row] + '.';
      }

      if (row + 1 < n) solveNQueens(n, row + 1, newMap, result);
      else result.push(newMap);
    }
  }
  return result;
};

console.log('solved', solveNQueens(4));

// [
//     . . Q .
//     . Q . .
//     . . . Q
//     Q . . .
// ]
