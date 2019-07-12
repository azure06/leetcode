/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let min = new Array(triangle.length + 1);
  min.fill(0);
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      min[j] = Math.min(min[j], min[j + 1]) + triangle[i][j];
    }
  }
  return min[0];
};
