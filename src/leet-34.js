/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target, left = 0, right = nums.length - 1) {
  const dist = Math.floor((right - left + 1) / 2);
  const mid = left + dist;

  if (nums[mid] === target) {
    let l = mid;
    let r = mid;
    for (
      let l_ = l - 1, r_ = r + 1;
      nums[l_] === target || nums[r_] === target;
      l_ -= 1, r_ += 1
    ) {
      if (nums[l_] === target) l = l_;
      if (nums[r_] === target) r = r_;
    }
    return [l, r];
  } else if (nums[mid] > target) {
    if (dist <= 1) {
      return nums[left] === target ? [left, left] : [-1, -1];
    }
    return searchRange(nums, target, left, mid);
  } else {
    if (dist <= 1) {
      return nums[right] === target ? [right, right] : [-1, -1];
    }
    return searchRange(nums, target, mid + 1, right);
  }
};

console.warn(searchRange([5, 7, 7, 8, 8, 10], 8));
