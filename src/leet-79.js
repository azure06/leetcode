/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === word[0]) {
        const mem = Array.from(
          Array(board.length),
          () => new Array(board[y].length)
        );
        const result = recursion(board, word, y, x, 0, mem);
        if (result) {
          return true;
        }
      }
    }
  }
  return false;
};

const recursion = (board, word, y, x, wordIndex, mem) => {
  const nextIndex = wordIndex + 1;
  if (nextIndex === word.length) {
    return true;
  }
  mem[y][x] = true;
  const top =
    board[y - 1] && !mem[y - 1][x] && board[y - 1][x] === word[nextIndex]
      ? recursion(board, word, y - 1, x, nextIndex, mem)
      : false;
  const right =
    !mem[y][x + 1] && board[y][x + 1] === word[nextIndex]
      ? recursion(board, word, y, x + 1, nextIndex, mem)
      : false;
  const bottom =
    board[y + 1] && !mem[y + 1][x] && board[y + 1][x] === word[nextIndex]
      ? recursion(board, word, y + 1, x, nextIndex, mem)
      : false;
  const left =
    !mem[y][x - 1] && board[y][x - 1] === word[nextIndex]
      ? recursion(board, word, y, x - 1, nextIndex, mem)
      : false;
  mem[y][x] = top || right || bottom || left;
  return mem[y][x];
};
