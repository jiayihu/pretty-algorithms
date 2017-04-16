import { insertionSort } from './insertion-sort';

describe('Insertion sort', function() {
  test('It should sort the items', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const result = insertionSort(input);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
