import range from 'lodash/range';
import head from 'lodash/head';
import { insertionSort } from '../insertion-sort/insertion-sort';
import { merge } from '../merge-sort/merge-sort';

/**
 * Sort the array with a combination of merge and insertion sort.
 * 
 * Reason:
 * @url https://stackoverflow.com/questions/736920/is-there-ever-a-good-reason-to-use-insertion-sort
 *
 * Although it is one of the elementary sorting algorithms with O(n2) worst-case
 * time, insertion sort is the algorithm of choice either when the data is nearly
 * sorted (because it is adaptive) or when the problem size is small (because it
 * has low overhead).
 *
 * For these reasons, and because it is also stable, insertion sort is often used
 * as the recursive base case (when the problem size is small) for higher overhead
 * divide-and-conquer sorting algorithms, such as merge sort or quick sort.
 * Time complexity: O(n*lg(n/k)).
 * @param input The array which should be sorted
 * @param start Left side of the subarray
 * @param end Right side of the subarray, not included
 * @param threshold Threshold below each sorting is better with insertion sort
 */
export function mergeAndInsertionSort<T>(
  input: T[],
  start = 0,
  end = input.length,
  threshold = 10
): T[] {
  if (end - start <= 1) return [];

  if (end - start <= threshold) return insertionSort(input);

  // Continue classic merge-sort otherwise
  const mid = Math.floor((start + end) / 2);

  mergeAndInsertionSort(input, start, mid);
  mergeAndInsertionSort(input, mid, end);

  return merge(input, start, mid, end);
}
