/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *
 */
var minWindow = function(s, t) {
  const tMap = {};
  const wMap = {};
  for (let i = 0; i < t.length; i++) {
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }
  const required = Object.keys(tMap).length;
  let formed = 0;
  let ans = { length: -1, left: 0, right: 0 };
  for (let l = 0, r = 0; r < s.length; r += 1) {
    wMap[s[r]] = (wMap[s[r]] || 0) + 1;
    if (tMap[s[r]] === wMap[s[r]]) {
      formed += 1;
    }

    console.log(l, r);
    for (; l <= r && formed === required; l += 1) {
      if (ans.length === -1 || r - l + 1 < ans.length) {
        ans.length = r - l + 1;
        ans.left = l;
        ans.right = r;
      }
      wMap[s[l]] -= 1;
      if (wMap[s[l]] < tMap[s[l]]) {
        formed--;
      }
    }
  }
  return ans.length === -1 ? '' : s.substring(ans.left, ans.right + 1);
};

console.log(minWindow('a', 'a'));
