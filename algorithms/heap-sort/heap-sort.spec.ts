import { left, right, maxHeapify, buildMaxHeap, heapSort } from './heap-sort';

describe('Utilities', function() {
  test('left', function() {
    expect(left(0)).toEqual(1);
  });

  test('right', function () {
    expect(right(0)).toEqual(2);
  });
});

describe('maxHeapify', function() {
  test('It should move the item to the right position', function() {
    const input = [0, 5, 4, 2, 1, 3];
    const result = maxHeapify(input, 0, input.length);

    expect(result).toEqual([5, 2, 4, 0, 1, 3]);
  });
});

describe('buildMaxHeap', function() {
  test('It should build a max heap from given input', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const result = buildMaxHeap(input);

    expect(result).toEqual([6, 5, 4, 2, 1, 3]);
  });
});

describe('Heap sort', function() {
  test('It should sort the items', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const result = heapSort(input);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
