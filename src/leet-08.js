/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();
  let conversion = '';
  let isPositive = str[0] === '+';
  let isNegative = str[0] === '-';
  for (let i = isNegative || isPositive ? 1 : 0; i < str.length; i++) {
    const ch = str[i];
    if (isNaN(ch) || ch === ' ') {
      break;
    }
    conversion += ch;
  }

  if (isNaN(conversion) || conversion === '') {
    return 0;
  }
  const result = isNegative ? -conversion : +conversion;
  if (result >= 2147483648) {
    return 2147483648 - 1;
  } else if (result < -2147483648) {
    return -2147483648;
  }
  return result;
};

console.log(myAtoi('- 234'));
