/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0;
  for (
    let left = 0, right = left + 1;
    left < height.length - 1 && right < height.length;

  ) {
    let units = 0;
    while (height[left] > height[right] && right < height.length) {
      units += height[left] - height[right];
      right += 1;
    }
    if (right >= height.length) {
      height[left] -= 1;
      right = left + 1;
    } else {
      result += units;
      left = right;
      right += 1;
    }
  }
  return result;
};
