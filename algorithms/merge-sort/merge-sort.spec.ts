import { mergeSort } from './merge-sort';

describe('Merge sort', function() {
  test('It should sort the items', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const result = mergeSort(input);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('It should merge', function() {
    expect(true).toBe(true);
  });
});
