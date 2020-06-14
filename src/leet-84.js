/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let result;
  for (let i = 0; i < heights.length; i += 1) {
    if (heights[i] === heights[i - 1]) continue;
    let left = 0;
    let right = 0;
    for (
      let l = i - 1, r = i + 1;
      heights[l] >= heights[i] || heights[r] >= heights[i];

    ) {
      if (heights[l] >= heights[i]) {
        left += 1;
        l -= 1;
      }
      if (heights[r] >= heights[i]) {
        right += 1;
        r += 1;
      }
    }
    const area = (1 + left + right) * heights[i];
    if (area > result || result === undefined) result = area;
  }
  return result || 0;
};

console.warn(largestRectangleArea([3, 6, 5, 7, 4, 8, 1, 1]));

var largestRectangleArea = function(heights) {
  let area = 0;
  let stack = [];
  for (let i = 0; i < heights.length; i += 1) {
    let start = i;
    while (
      stack[stack.length - 1] !== undefined &&
      stack[stack.length - 1][1] > heights[i]
    ) {
      const [index, h] = stack.pop();
      start = index;
      area = Math.max(area, h * (i - start));
    }
    stack.push([start, heights[i]]);
  }
  while (stack.length > 0) {
    const [start, h] = stack.pop();
    area = Math.max(area, h * (heights.length - start));
  }
  return area;
};

console.warn(largestRectangleArea([3, 6, 5, 7, 4, 8, 1, 1]));

//      1
//    1 1
//  1 1 1
//  111 1
//  11111
// 111111
// 111111
// 1111111_
// 01234567
