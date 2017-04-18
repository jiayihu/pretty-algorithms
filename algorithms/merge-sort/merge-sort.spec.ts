import { merge, mergeSort } from './merge-sort';

describe('Merge', function() {
  test('It should merge the two ordered sub-arrays with final result ordered', function () {
    const input = [4, 5, 6, 1, 2, 3];
    const result = merge(input, 0, 3, 6);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('Merge sort', function() {
  test('It should sort the items', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const result = mergeSort(input);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
