const range = require('lodash/range');
import { swap } from '../utils';

/**
 * Partition the subarray for the quicksort
 * @param input The array which subarrays should be sorted
 * @param left The start of the subarray
 * @param right The end of the subarray
 */
export function partition<T>(input: T[], left: number, right: number): number {
  const pivot = input[right];
  let minEnd = left - 1;

  range(left, right).forEach(maxEnd => {
    if (input[maxEnd] <= pivot) {
      minEnd += 1;
      swap(input, minEnd, maxEnd);
    }
  });

  swap(input, minEnd + 1, right);

  return minEnd + 1;
}

/**
 * Sort the input with quick sort.
 * Time complexity: O(n * lg(n)).
 * @param input The array which should be sorted
 * @param start The start of the subarray which should be handled
 * @param end The end of the subarray which should be handled
 */
export function quickSort<T>(input: T[], start: number = 0, end: number = input.length - 1): T[] {
  if (start >= end) return input;

  const mid = partition(input, start, end);
  quickSort(input, start, mid - 1);
  quickSort(input, mid + 1, end);

  return input;
}
