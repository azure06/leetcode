/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const mem = Array.from(Array(m), () => new Array(n));
  return recursion(m, n, 1, 1, 1, mem);
};

const recursion = (m, n, x, y, count, mem) => {
  if (x < m && y < n) {
    if (mem[x][y] !== undefined) {
      return mem[x][y];
    }
    const r1 = recursion(m, n, x + 1, y, count, mem);
    const r2 = recursion(m, n, x, y + 1, count, mem);
    mem[x][y] = r1 + r2;
    return mem[x][y];
  } else {
    return count;
  }
};
