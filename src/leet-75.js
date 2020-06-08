/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const indexes = new Array(3).fill(0);
  for (let i = 0; i < nums.length; i += 1) {
    indexes[nums[i]] += 1;
  }

  for (let i = 0, k = 0; i < indexes.length; i += 1) {
    for (let j = 0; j < indexes[i]; j += 1) {
      nums[k] = i;
      k += 1;
    }
  }
  return nums;
};

var sortColors = function(nums) {
  let low = 0;
  let high = nums.length - 1;
  let pointer = 0;

  while (pointer <= high) {
    switch (nums[pointer]) {
      case 0:
        const tmp1 = nums[low];
        nums[low] = nums[pointer];
        nums[pointer] = tmp1;
        low += 1;
        pointer += 1;
        break;
      case 1:
        pointer += 1;
        break;
      case 2:
        const tmp3 = nums[high];
        nums[high] = nums[pointer];
        nums[pointer] = tmp3;
        high -= 1;
        break;
    }
  }
};
