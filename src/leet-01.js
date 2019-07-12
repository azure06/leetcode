// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const accumulator = {};
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];
    if (accumulator[temp] !== undefined) {
      return [accumulator[temp], i];
    }
    accumulator[nums[i]] = i;
  }
};
