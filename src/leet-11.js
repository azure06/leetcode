/**
 * Better solution
 * https://leetcode.com/problems/container-with-most-water/solution/
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max;
  let ordered = height.map((h, i) => ({ h, i })).sort((a, b) => a.h - b.h);
  for (let i = 0; i < ordered.length; i++) {
    for (let j = i + 1; j < ordered.length; j++) {
      const tmp = ordered[i].h * Math.abs(ordered[i].i - ordered[j].i);
      if (tmp > max || max === undefined) {
        max = tmp;
      }
    }
  }
  return max;
};
