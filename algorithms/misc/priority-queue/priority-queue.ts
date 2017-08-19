import head from 'lodash/head';
import last from 'lodash/last';
import { parent, maxHeapify } from '../../sort/heap-sort/heap-sort';
import { setHead, swap } from '../../utils';

/**
 * A priority queue implementation based on max-heap. Time complexity of every operation
 * is O(lg(n)) at most.
 */

/**
 * Return the maximum priority of the queue
 * Time complexity: O(1)
 * @param queue Max-heap queue
 */
export function maximum(queue: number[]): number {
  return head(queue);
}

/**
 * Extract and return the maximum priority of the queue
 * Time complexity: O(lg(n))
 * @param queue Max-heap queue
 */
export function extractMax(queue: number[]): number {
  const max = maximum(queue);

  setHead(queue, last(queue));
  queue.pop();
  maxHeapify(queue, 0, queue.length);

  return max;
}

/**
 * Return whether the parent follows the max-heap rule
 * Time complexity: O(1)
 */
function isParentInvalid(queue: number[], index: number): boolean {
  return queue[parent(index)] < queue[index];
}

/**
 * Increase the priority of an item in the queue
 * Time complexity: O(lg(n))
 * @param queue Max-heap queue
 * @param index Index of the priority to increase
 * @param increase Increase amount
 */
export function increasePriority(queue: number[], index: number, increase: number): number[] {
  queue[index] += increase;

  // Ensure the queue is still a valid max-heap from the index to the root
  let validHeapIndex = index;
  while (isParentInvalid(queue, validHeapIndex) && validHeapIndex !== 0) {
    swap(queue, validHeapIndex, parent(validHeapIndex));
    validHeapIndex = parent(validHeapIndex);
  }

  return queue;
}

/**
 * Add a new priority in the queue
 * Time complexity: O(lg(n))
 * @param queue Max-heap queue
 * @param value New priority to add
 */
export function insert(queue: number[], value: number): number[] {
  queue.push(0);
  increasePriority(queue, queue.length - 1, value);

  return queue;
}
