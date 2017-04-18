/**
 * Swap two items in an array
 * @param array Input array, whose elements are swapped
 * @param from From index
 * @param to Destination index
 */
export function swap<T>(input: T[], from: number, to: number): T[] {
  const temp = input[from];
  input[from] = input[to];
  input[to] = temp;

  return input;
}
