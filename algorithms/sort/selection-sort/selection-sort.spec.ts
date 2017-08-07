import { selectionSort } from './selection-sort';

describe('Insertion sort', function() {
  test('It should sort the items', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const result = selectionSort(input);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
