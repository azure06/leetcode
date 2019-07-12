/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let tmp = 0;
  let max;
  for (let i = 0; i < k; i++) {
    tmp += nums[i];
  }
  max = tmp;
  for (let i = 1; i <= nums.length - k; i++) {
    tmp = tmp - nums[i - 1] + nums[k + i - 1];
    max = tmp > max || max === undefined ? tmp : max;
  }
  return max / k;
};
