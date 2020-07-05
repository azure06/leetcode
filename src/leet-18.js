/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);
  return recursive(nums, target, 0, nums.length - 1, {}, []);
};

function recursive(nums, target, mostLeft, mostRight, map, result) {
  if (
    mostLeft + 1 >= mostRight - 1 ||
    map[`${mostLeft}${mostRight}`] !== undefined
  ) {
    return result;
  } else {
    map[`${mostLeft}${mostRight}`] = true;
  }
  const partial = nums[mostLeft] + nums[mostRight];
  for (let left = mostLeft + 1, right = mostRight - 1; left < right; ) {
    const sum = partial + nums[left] + nums[right];
    if (sum < target) {
      left += 1;
    } else if (sum > target) {
      right -= 1;
    } else if (sum === target) {
      result.push([nums[mostLeft], nums[mostRight], nums[left], nums[right]]);
      // Skip the same numbers
      while (left < right && nums[left] === nums[left + 1]) {
        left += 1;
      }
      while (left < right && nums[right] === nums[right - 1]) {
        right -= 1;
      }
      left += 1;
      right -= 1;
    }
  }

  let i = 1;
  let j = 1;
  while (nums[mostLeft + i] === nums[mostLeft]) {
    i += 1;
  }
  while (nums[mostRight - j] === nums[mostRight]) {
    j += 1;
  }

  recursive(nums, target, mostLeft + i, mostRight, map, result);
  recursive(nums, target, mostLeft, mostRight - j, map, result);
  return result;
}

console.warn(fourSum([-5, 5, 4, -3, 0, 0, 4, -2], 4));

// Following is better
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let low = j + 1;
      let high = nums.length - 1;

      while (low < high) {
        const sum = nums[i] + nums[j] + nums[low] + nums[high];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[low], nums[high]]);
          while (nums[low] === nums[low + 1]) low++;
          while (nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (sum < target) {
          low++;
        } else {
          high--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};
