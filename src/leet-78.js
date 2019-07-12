/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  recursion(nums, 0, [], res);
  return res;
};

const recursion = (nums, index, arr, res) => {
  if (index === nums.length) {
    res.push([...arr]);
    return;
  }
  arr.push(nums[index]);
  recursion(nums, index + 1, arr, res);
  arr.pop();
  recursion(nums, index + 1, arr, res);
};
