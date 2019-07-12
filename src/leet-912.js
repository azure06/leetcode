//  Sort an array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  quicksort(nums, 0, nums.length - 1);
  return nums;
};

const partition = (arr, left, right) => {
  const pivot = arr[right];
  let index = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      const tmp = arr[index];
      arr[index] = arr[i];
      arr[i] = tmp;
      index++;
    }
  }
  const tmp = arr[right];
  arr[right] = arr[index];
  arr[index] = tmp;
  return index;
};

const quicksort = (arr, left, right) => {
  if (right - left <= 0) return;
  const partitionIndex = partition(arr, left, right);
  quicksort(arr, left, partitionIndex - 1);
  quicksort(arr, partitionIndex + 1, right);
};
