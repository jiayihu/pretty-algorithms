import baseRange from 'lodash/range';
import baseRangeRight from 'lodash/rangeRight';

export function fill<T>(array: T[], valueFn: (index: number) => any): T[] {
  for (let i = 0; i < array.length; i++) array[i] = valueFn(i);

  return array;
}

export function increaseOfPrevious(array: number[], index: number) {
  array[index] += array[index - 1];
}

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
export function reverseRange(from: number, to: number = 0): number[] {
  return baseRangeRight(to, from + 1);
}

export function setHead(input: number[], value: number): number[] {
  input[0] = value;
  return input;
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
