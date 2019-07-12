// ~Should be solved with pointers. Sort and search...

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let ans;
  for (let left = 0; left < nums.length - 2; left += 1) {
    for (let mid = left + 1; mid < nums.length - 1; mid += 1) {
      for (let right = mid + 1; right < nums.length; right += 1) {
        const tmp = nums[left] + nums[mid] + nums[right];
        const dist1 = Math.abs(target - tmp);
        const dist2 = Math.abs(target - ans);
        ans = ans === undefined ? tmp : dist1 <= dist2 ? tmp : ans;

        if (dist1 === 0) {
          return ans;
        }
      }
    }
  }
  return ans;
};

console.log(threeSumClosest([-1, 0, 1, 2, -1, -4], 0));
