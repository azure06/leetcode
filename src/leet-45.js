/**
 *
 * Runtime: 64 ms, faster than 31.75% of JavaScript online submissions for Jump Game II.
 * Memory Usage: 35.5 MB, less than 83.33% of JavaScript online submissions for Jump Game II.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let jumpCount = 0;
  for (let position = 0; position < nums.length; ) {
    const steps = nums[position];

    if (position + steps >= nums.length - 1) {
      return position >= nums.length - 1 ? jumpCount : jumpCount + 1;
    }

    let nextPos = 0;

    for (let i = position + 1, max; i <= position + steps; i += 1) {
      const losing = steps - (i - position);
      const realSteps = nums[i] - losing;
      if (max === undefined || realSteps > max) {
        max = realSteps;
        nextPos = i;
      }
    }

    position = nextPos;
    jumpCount += 1;
  }
};
