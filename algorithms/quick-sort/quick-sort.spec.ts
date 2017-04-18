const last = require('lodash/last');
import { partition, quickSort } from './quick-sort';

describe('Quick sort partition', function() {
  test('It should move the pivot to the correct position', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const pivotIndex = partition(input, 0, input.length - 1);
    expect(pivotIndex).toBe(2);
  });

  test('Smaller numbers should be at pivot left', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const pivot = last(input);
    const pivotIndex = partition(input, 0, input.length - 1);
    const smaller = input.slice(0, pivotIndex);
    smaller.forEach(value => expect(value).toBeLessThanOrEqual(pivot));
  });

  test('Bigger numbers should be at pivot right', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const pivot = last(input);
    const pivotIndex = partition(input, 0, input.length - 1);
    const bigger = input.slice(pivotIndex + 1);
    bigger.forEach(value => expect(value).toBeGreaterThan(pivot));
  });
});

describe('Quick sort', function() {
  test('It should sort the items', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const result = quickSort(input);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
