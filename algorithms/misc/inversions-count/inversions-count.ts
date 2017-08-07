/**
 * Given array A[1... n], for every i < j, find all inversion pairs such that A[i] > A[j].
 * Solution must have complexity O(n*lg(n)).
 *
 * Tip: modify merge-sort
 */

import range from 'lodash/range';
import head from 'lodash/head';

function merge(input: number[], start: number, mid: number, end: number): number {
  const left = input.slice(start, mid);
  const right = input.slice(mid, end);

  left[left.length] = -Infinity as any;
  right[right.length] = -Infinity as any;

  let inversionCount = 0;

  range(start, end).forEach(index => {
    if (head(left) > head(right)) {
      inversionCount += right.length - 1; // Do not include Infinity in the count
      input[index] = left.shift();
    } else {
      input[index] = right.shift();
    }
  });

  return inversionCount;
}

/**
 * Count the number of inversions
 * Time complexity: O(n*lg(n)).
 * @param input The array which should be sorted
 * @param start Left side of the subarray
 * @param end Right side of the subarray, not included
 */
export function countInversions(
  input: number[],
  start: number = 0,
  end: number = input.length
): number {
  if (end - start <= 1) return 0;

  const mid = Math.floor((start + end) / 2);
  const leftCount = countInversions(input, start, mid);
  const rightCount = countInversions(input, mid, end);

  return leftCount + rightCount + merge(input, start, mid, end);
}
