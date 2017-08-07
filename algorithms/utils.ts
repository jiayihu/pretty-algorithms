import baseRange from 'lodash/range';
import baseRangeRight from 'lodash/rangeRight';

/**
 * Move the item at given index to the right
 */
export function moveRight(input, index) {
  input[index + 1] = input[index];
}

/**
 * Creates an array of numbers from start to end, both included.
 */
export function range(from: number, to: number): number[] {
  return baseRange(from, to + 1);
}

/**
 * Creates an array of numbers in descending order from start to end, both included.
 */
export function rangeRight(from: number, to: number): number[] {
  return baseRangeRight(from, to + 1);
}

/**
 * Swap two items in an array
 * @param array Input array, whose elements are swapped
 * @param from From index
 * @param to Destination index
 */
export function swap(input: number[], from: number, to: number): number[] {
  const temp = input[from];
  input[from] = input[to];
  input[to] = temp;

  return input;
}
