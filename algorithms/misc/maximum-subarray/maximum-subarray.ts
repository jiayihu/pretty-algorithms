import { range, rangeRight } from '../../utils';

export function maxCrossSubarray(
  input: number[],
  start: number,
  mid: number,
  end: number
): { start: number; end: number; sum: number } {
  let leftIndex = -1;
  let leftMaxSum = -Infinity;
  let sum = 0;

  rangeRight(start, mid).forEach(index => {
    sum += input[index];
    if (sum > leftMaxSum) {
      leftMaxSum = sum;
      leftIndex = index;
    }
  });

  let rightIndex = -1;
  let rightMaxSum = -Infinity;
  sum = 0;
  range(mid + 1, end).forEach(index => {
    sum += input[index];
    if (sum > rightMaxSum) {
      rightMaxSum = sum;
      rightIndex = index;
    }
  });

  return {
    start: leftIndex,
    end: rightIndex,
    sum: leftMaxSum + rightMaxSum,
  };
}

/**
 * Returns the contiguous subarray within an array of numbers which has the largest
 * sum.
 * Time complexity: O(n*lg(n)).
 * @NOTE: there is also solution with O(n) time complexity.
 * @param input The array which should be sorted
 * @param start Left side of the subarray
 * @param end Right side of the subarray, not included
 */
export function maxSubarray(
  input: number[],
  start: number,
  end: number
): { start: number; end: number; sum: number } {
  if (end - start === 0) return { start, end, sum: input[start] };

  const mid = Math.floor((start + end) / 2);
  const leftMax = maxSubarray(input, start, mid);
  const rightMax = maxSubarray(input, mid + 1, end);
  const crossMax = maxCrossSubarray(input, start, mid, end);

  if (leftMax.sum >= rightMax.sum && leftMax.sum >= crossMax.sum) {
    return leftMax;
  } else if (rightMax.sum >= leftMax.sum && rightMax.sum >= crossMax.sum) {
    return rightMax;
  } else {
    return crossMax;
  }
}
