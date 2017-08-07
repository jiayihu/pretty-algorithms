import max from 'lodash/max';
import { countingSort } from './counting-sort';

describe('Counting sort', function() {
  test('It should sort the items', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const result = countingSort(input, max(input));

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
