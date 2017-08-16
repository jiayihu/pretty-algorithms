const MinHeap = require('min-heap');
import { range } from '../../utils';

export interface Frequency {
  char: string;
  frequency: number;
}

/**
 * Return a Huffman Tree for the prefix codes
 * @url https://en.wikipedia.org/wiki/Huffman_coding
 * 
 * Time complexity: O(n*lg(n))
 * @param frequences Characters frequencies
 */
export function huffman(frequences: Frequency[]) {
  /**
   * Create a min priority queue with min-heap. An almost identical implementation
   * can be found in 'algorithms/misc/priority-queue' but for max priority.
   */
  const queue = new MinHeap((a: Frequency, b: Frequency) => a.frequency - b.frequency);
  frequences.forEach(freq => queue.insert(freq));

  range(0, frequences.length - 2).forEach(() => {
    const left: Frequency = queue.removeHead();
    const right: Frequency = queue.removeHead();
    const merged = {
      frequency: left.frequency + right.frequency,
      left,
      right,
    };

    queue.insert(merged);
  });

  return queue.removeHead();
}
