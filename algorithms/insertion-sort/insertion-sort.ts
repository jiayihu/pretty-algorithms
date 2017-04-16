/**
 * Sort the array with insertion sort.
 * Time complexity: O(n^2).
 * @param input The array which should be sorted
 */
export function insertionSort<T>(input: T[]): T[] {
  input.forEach((pivot, index) => {
    let position = index - 1;

    while (position > -1 && input[position] > pivot) {
      input[position + 1] = input[position];
      position -= 1;
    }

    input[position + 1] = pivot;
  });

  return input;
}
