/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow2 = function(x, n) {
  if (n === 0) return 1;
  if (x === 0) return 0;
  if (x === 1) return 1;
  if (x === -1) return n % 2 === 0 ? 1 : -1;

  let result = 1;
  for (let i = 0; i < Math.abs(n); i++) {
    result *= x;
  }
  result = n > 0 ? result : (result = 1 / result);
  if (result > 2147483647) {
    return 2147483647;
  } else if (result < -2147483648) {
    return 2147483648;
  }
  return result;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2);
};

console.log(myPow(2, 4));
