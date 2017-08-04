import range from 'lodash/range';
import random from 'lodash/random';
import { swap } from '../utils';

/**
 * Partition the subarray for the quicksort
 * @param input The array which subarrays should be sorted
 * @param left The start of the subarray
 * @param right The end of the subarray
 */
export function partition(
  input: number[],
  left: number,
  right: number,
  randomized: boolean,
): number {
  if (randomized) swap(input, random(left, right), right);

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
 * @param randomized Run the randomized version of quick sort
 */
export function quickSort(
  input: number[],
  start = 0,
  end = input.length - 1,
  randomized = false,
): number[] {
  if (start >= end) return input;

  const mid = partition(input, start, end, randomized);
  quickSort(input, start, mid - 1);
  quickSort(input, mid + 1, end);

  return input;
}
