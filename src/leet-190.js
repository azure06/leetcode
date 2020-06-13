/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let s = '';
  while (n > 0) {
    s += n % 2 == 0 ? '0' : '1';
    n = Math.floor(n / 2);
  }
  while (s.length < 32) {
    s += '0';
  }
  let base = 1;
  for (let i = s.length - 1; i >= 0; i -= 1) {
    n += +s[i] * base;
    base *= 2;
  }
  return n;
};

console.warn(reverseBits(43261596));
