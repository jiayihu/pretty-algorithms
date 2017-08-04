import range from 'lodash/range';
import { moveRight, swap } from '../utils';

/**
 * Sort the array with selection sort.
 * Time complexity: O(n^2).
 * @param input The array which should be sorted
 */
export function selectionSort<T>(input: T[]): T[] {
  // @NOTE: actually the last iteration can be avoided because it's already to greatest value
  range(0, input.length).forEach(pivotIndex => {
    let min = input[pivotIndex];
    let minIndex = pivotIndex;

    for (let i = pivotIndex + 1; i < input.length; i++) {
      if (input[i] < min) {
        min = input[i];
        minIndex = i;
      }
    }

    swap(input, minIndex, pivotIndex);
  });

  return input;
}
