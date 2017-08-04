import { moveRight } from '../utils';

/**
 * Sort the array with insertion sort.
 * Time complexity: O(n^2).
 * @param input The array which should be sorted
 */
export function insertionSort(input: number[]): number[] {
  input.forEach((pivot, pivotIndex) => {
    let compareIndex = pivotIndex - 1;

    while (compareIndex > -1 && input[compareIndex] > pivot) {
      moveRight(input, compareIndex);
      compareIndex -= 1;
    }

    input[compareIndex + 1] = pivot;
  });

  return input;
}
