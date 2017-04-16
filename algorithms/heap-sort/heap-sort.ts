const rangeRight = require('lodash/rangeRight');
import { swap } from '../utils';

function left(index: number): number {
  return 2 * index + 1;
}

function right(index: number): number {
  return 2 * index + 2;
}

export function maxHeapify<T>(input: T[], index: number, heapSize: number): void {
  const leftChild = left(index);
  const rightChild = right(index);
  let maxIndex = index;

  if (leftChild < heapSize && input[leftChild] > input[index]) {
    maxIndex = leftChild;
  }

  if (rightChild < heapSize && input[rightChild] > input[maxIndex]) {
    maxIndex = rightChild;
  }

  if (maxIndex !== index) {
    swap(input, index, maxIndex);
    maxHeapify(input, maxIndex, heapSize);
  }
}

export function buildMaxHeap<T>(input: T[]): void {
  // All nodes from (input.length / 2) are leaves
  const firstLeaf = Math.floor(input.length / 2);

  rangeRight(firstLeaf).forEach(index => {
    maxHeapify(input, index, input.length)
  });
}

/**
 * Sort the input with heap sort.
 * Time complexity: O(n * lg(n)).
 * @param input The array which should besorted
 */
export function heapSort<T>(input: T[]): T[] {
  buildMaxHeap(input);

  rangeRight(input.length).forEach(index => {
    swap(input, 0, index);
    maxHeapify(input, 0, index);
  });

  return input;
}

