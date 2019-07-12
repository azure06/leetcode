// 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let lo = i + 1;
    let hi = nums.length - 1;
    // Skip the same numbers
    if (i === 0 || (i > 0 && nums[i] != nums[i - 1])) {
      while (lo < hi) {
        if (-nums[i] === nums[lo] + nums[hi]) {
          res.push([nums[lo], nums[i], nums[hi]]);

          // Skip the same numbers
          while (lo < hi && nums[lo] === nums[lo + 1]) {
            lo += 1;
          }
          while (lo < hi && nums[hi] === nums[hi - 1]) {
            hi -= 1;
          }
          lo += 1;
          hi -= 1;
        } else if (nums[lo] + nums[hi] < -nums[i]) {
          lo += 1;
        } else {
          hi -= 1;
        }
      }
    }
  }
  return res;
};
