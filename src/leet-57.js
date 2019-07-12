/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, [newLeft, newRight]) {
  let leftIndex;
  let leftInside;
  let rightIndex;
  let rightInside;

  for (let i = 0; i < intervals.length; i += 1) {
    const [left, right] = intervals[i];
    if (leftIndex === undefined) {
      if (newLeft < left) {
        leftIndex = i;
        leftInside = false;
      } else if (newLeft >= left && newLeft <= right) {
        leftIndex = i;
        leftInside = true;
      }
    }
    if (leftIndex !== undefined && rightIndex === undefined) {
      if (newRight < left) {
        rightIndex = i;
        rightInside = false;
      } else if (newRight >= left && newRight <= right) {
        rightIndex = i;
        rightInside = true;
      }
    }

    if (leftIndex !== undefined && rightIndex !== undefined) {
      break;
    }
  }

  if (leftIndex === undefined && rightIndex === undefined) {
    return [...intervals, [newLeft, newRight]];
  } else if (leftIndex !== undefined && rightIndex === undefined) {
    if (leftInside) {
      const leftPart = intervals.slice(0, leftIndex);
      return [...leftPart, [intervals[leftIndex][0], newRight]];
    } else {
      const leftPart = intervals.slice(0, leftIndex);
      return [...leftPart, [newLeft, newRight]];
    }
  } else if (leftIndex !== undefined && rightIndex !== undefined) {
    if (leftInside && rightInside) {
      const leftPart = intervals.slice(0, leftIndex);
      const rightPart = intervals.slice(rightIndex + 1, intervals.length);
      return [
        ...leftPart,
        [intervals[leftIndex][0], intervals[rightIndex][1]],
        ...rightPart
      ];
    } else if (leftInside && !rightInside) {
      const leftPart = intervals.slice(0, leftIndex);
      const rightPart = intervals.slice(rightIndex, intervals.length);
      return [...leftPart, [intervals[leftIndex][0], newRight], ...rightPart];
    } else if (rightInside && !leftInside) {
      const leftPart = intervals.slice(0, leftIndex);
      const rightPart = intervals.slice(rightIndex + 1, intervals.length);
      return [...leftPart, [newLeft, intervals[rightIndex][1]], ...rightPart];
    } else {
      const leftPart = intervals.slice(0, leftIndex);
      const rightPart = intervals.slice(rightIndex, intervals.length);
      return [...leftPart, [newLeft, newRight], ...rightPart];
    }
  } else {
    return intervals;
  }
};

console.log(insert([[1, 5]], [0, 0]));
