import { moveRight, range, swap } from '../../utils';

/**
 * Sort the array with selection sort.
 * Time complexity: O(n^2).
 * @param input The array which should be sorted
 */
export function selectionSort(input: number[]): number[] {
  // The last iteration can be avoided because it will already be the greatest value
  range(0, input.length - 1).forEach(pivotIndex => {
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
