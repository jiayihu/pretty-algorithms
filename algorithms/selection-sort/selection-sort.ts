import { moveRight, swap } from '../utils';

/**
 * Sort the array with selection sort.
 * Time complexity: O(n^2).
 * @param input The array which should be sorted
 */
export function selectionSort<T>(input: T[]): T[] {
  input.forEach((pivot, pivotIndex) => {
    let min = pivot;
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
