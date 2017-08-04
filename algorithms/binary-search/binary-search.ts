/**
 * Return the index of the value in the input
 * @param input An ordered array where to find the value
 * @param value Value to find
 * @param start Initial index
 * @param end Ending index
 */
export function binarySearch<T>(input: T[], value: T, start: number, end: number): number {
  if (start > end || value < input[start] || value > input[end]) return null;

  const mid = Math.floor((end + start) / 2);
  if (input[mid] === value) return mid;
  else if (input[mid] < value) return binarySearch(input, value, mid + 1, end);
  else return binarySearch(input, value, start, mid - 1);
}
