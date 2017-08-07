import rangeRight from 'lodash/rangeRight';
import { swap } from '../../utils';

/**
 * Return the index of the left child in the heap.
 * @param index Index of the current node
 */
export function left(index: number): number {
  return 2 * index + 1;
}

/**
 * Return the index of the right child in the heap.
 * @param index Index of the current node
 */
export function right(index: number): number {
  return 2 * index + 2;
}

function isInHeap(index: number, heapSize: number): boolean {
  return index < heapSize;
}

/**
 * Place the element in the right position of the max-heap. It assumes child nodes
 * are valid heaps.
 * @param input Array rappresented by the heap
 * @param index Index of the element to place
 * @param heapSize Size of the heap
 */
export function maxHeapify(input: number[], index: number, heapSize: number): number[] {
  const leftChild = left(index);
  const rightChild = right(index);
  let maxIndex = index;

  if (isInHeap(leftChild, heapSize) && input[leftChild] > input[index]) {
    maxIndex = leftChild;
  }

  if (isInHeap(rightChild, heapSize) && input[rightChild] > input[maxIndex]) {
    maxIndex = rightChild;
  }

  if (maxIndex !== index) {
    swap(input, index, maxIndex);
    maxHeapify(input, maxIndex, heapSize);
  }

  return input;
}

/**
 * Build max-heap from input.
 * @param input Array to build the max-heap from
 */
export function buildMaxHeap(input: number[]): number[] {
  // All nodes from (input.length / 2) + 1 are leaves
  const firstLeaf = Math.floor(input.length / 2);

  rangeRight(firstLeaf).forEach(index => {
    maxHeapify(input, index, input.length);
  });

  return input;
}

/**
 * Sort the input with heap sort.
 * Time complexity: O(n * lg(n)).
 * @param input The array which should bo sorted
 */
export function heapSort(input: number[]): number[] {
  buildMaxHeap(input);

  rangeRight(input.length).forEach(index => {
    swap(input, 0, index);
    maxHeapify(input, 0, index);
  });

  return input;
}
