/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const results = {};
  for (let i = 0; i < strs.length; i++) {
    const tmp = strs[i]
      .split('')
      .sort()
      .join('');
    if (results[tmp]) {
      results[tmp].push(strs[i]);
    } else {
      results[tmp] = [strs[i]];
    }
  }

  const res = [];
  const keys = Object.keys(results);
  for (let i = 0; i < keys.length; i++) {
    res.push(results[keys[i]]);
  }
  return res;
};
