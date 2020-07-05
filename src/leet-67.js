/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a === '') return b;
  if (b === '') return a;
  let res = [];
  if (b.length > a.length) {
    let tmp = a;
    a = b;
    b = tmp;
  }
  let carry = 0;
  let diff = a.length - b.length;
  for (let i = a.length - 1; i >= 0; i -= 1) {
    if (a[i] === '0' && (b[i - diff] === '0' || b[i - diff] === undefined)) {
      res.push(carry);
      carry = 0;
    } else if (a[i] === '1' && b[i - diff] === '1') {
      res.push(carry);
      carry = 1;
    } else if (carry === 0) {
      res.push(1);
    } else {
      res.push(0);
      carry = 1;
    }
  }
  if (carry === 1) {
    res.push(1);
  }
  return res.reverse().join('');
};
