/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const obj = {};
  let smallestPositive = 1;
  for (let i = 0; i < nums.length; i += 1) {
    obj[nums[i]] = true;
    if (nums[i] === smallestPositive) {
      for (let i = 1; ; i += 1) {
        if (!obj[smallestPositive + i]) {
          smallestPositive = smallestPositive + i;
          break;
        }
      }
    }
  }
  return smallestPositive;
};

console.log(firstMissingPositive([7, 8, 9, 11, 12]));
