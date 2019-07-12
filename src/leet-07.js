/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const str = '' + x;
  const isPositive = str[0] !== '-';
  let reversed = '';
  for (let i = str.length - 1; isPositive ? i >= 0 : i > 0; i--) {
    reversed += str[i];
  }

  const result = isPositive ? +reversed : -reversed;
  return result <= 2147483647 && result >= -2147483647 ? result : 0;
};

console.log(reverse(-321));
