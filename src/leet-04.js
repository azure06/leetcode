// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const isEven = (nums1.length + nums2.length) % 2 === 0;
  let offset = 0;

  if (nums2.length > nums1.length) {
    const tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
  }

  while (true) {
    const part1 = Math.floor((nums1.length + offset) / 2);
    const part2 = Math.floor((nums1.length + nums2.length) / 2) - part1;

    if (
      (nums1[part1 - 1] === undefined ||
        nums2[part2] === undefined ||
        nums1[part1 - 1] <= nums2[part2]) &&
      (nums2[part2 - 1] === undefined ||
        nums1[part1] === undefined ||
        nums2[part2 - 1] <= nums1[part1])
    ) {
      nums1[part1 - 1] =
        nums1[part1 - 1] === undefined
          ? Number.NEGATIVE_INFINITY
          : nums1[part1 - 1];
      nums2[part2 - 1] =
        nums2[part2 - 1] === undefined
          ? Number.NEGATIVE_INFINITY
          : nums2[part2 - 1];
      nums1[part1] =
        nums1[part1] === undefined ? Number.POSITIVE_INFINITY : nums1[part1];
      nums2[part2] =
        nums2[part2] === undefined ? Number.POSITIVE_INFINITY : nums2[part2];

      const left =
        nums1[part1 - 1] > nums2[part2 - 1]
          ? nums1[part1 - 1]
          : nums2[part2 - 1];

      const right = nums1[part1] < nums2[part2] ? nums1[part1] : nums2[part2];
      return isEven ? (left + right) / 2 : right;
    } else if (nums1[part1 - 1] > nums2[part2]) {
      offset -= 1;
    } else {
      offset += 1;
    }
  }
};

/**
 * x -> x1 x2 | x3 x4 x5 x6
 * y -> y1 y2 y3 y4 y5 | y6 y7 y8
 *
 * x2 < y6
 * y5 <= y3
 */
console.log(findMedianSortedArrays([1, 2, 4, 5, 125], [1, 2, 15]));

/**
 *
 * [1,2,3,4,5]
 *
 * [7]
 */
/**
 *  nums1 = [1, 3]
 *  nums2 = [2]
 *  The median is 2.0
 */
