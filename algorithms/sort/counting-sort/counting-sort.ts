import forEachRight from 'lodash/forEachRight';
import { increaseOfPrevious, range } from '../../utils';

/**
 * Sort the input with counting sort.
 * Time complexity: O(n).
 * @param input The array which should bo sorted
 * @param max The max number between the values
 */
export function countingSort(input: number[], max: number): number[] {
  const result = [];
  const counter = new Array(max + 1);
  counter.fill(0);

  input.forEach(value => (counter[value] += 1));

  range(1, max).forEach(index => increaseOfPrevious(counter, index));

  forEachRight(input, value => {
    counter[value] -= 1;

    const position = counter[value];
    result[position] = value;
  });

  return result;
}
