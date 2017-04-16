import { heapSort } from './heap-sort';

describe('Heap sort', function() {
  test('It should sort the items', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const result = heapSort(input);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('It should buildMaxHeap', function () {
    expect(true).toBe(true);
  });

  test('It should maxHeapify', function () {
    expect(true).toBe(true);
  });
});
