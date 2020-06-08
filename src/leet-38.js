/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1';
  const str = countAndSay(n - 1);
  let prev;
  let res = '';
  console.warn(str);
  for (let i = 0; i <= str.length; i += 1) {
    if (prev === undefined) {
      prev = str[i];
      count = 1;
    } else if (str[i] === prev) {
      count += 1;
    } else {
      res += '' + count + prev;
      prev = str[i];
      count = 1;
    }
  }
  return res;
};

console.log(countAndSay(6));
