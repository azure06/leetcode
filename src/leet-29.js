/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const dividendSign = dividend / Math.abs(dividend || 1);
  const divisorSign = divisor / Math.abs(divisor || 1);
  let result = '';
  dividend = dividendSign === -1 ? '' + -dividend : '' + dividend;
  divisor = divisorSign === -1 ? -divisor : divisor;

  for (let start = 0, end = 1, curry = 0; end <= dividend.length; ) {
    const target =
      curry > 0
        ? curry + dividend.slice(start, end)
        : dividend.slice(start, end);

    if (+target >= divisor) {
      let times = 0;
      let sum = 0;
      while (sum + divisor <= target) {
        sum += divisor;
        times += 1;
      }
      curry = +target - sum;
      result = result + times;
      start = end;
      end = start + 1;
    } else {
      result = result + 0;
      end += 1;
    }
  }

  if (dividendSign * divisorSign === 1 && result > 2147483647) {
    return 2147483647;
  }
  return dividendSign * divisorSign * result;
};

console.log(divide(2147483647, 2));
