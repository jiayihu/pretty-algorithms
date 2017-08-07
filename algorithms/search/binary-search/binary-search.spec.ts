import { binarySearch } from './binary-search';

describe('binarySearch', () => {
  it('should find the index of the value', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const right = binarySearch(input, 5, 0, input.length - 1);
    const left = binarySearch(input, 2, 0, input.length - 1);

    expect(right).toEqual(4);
    expect(left).toEqual(1);
  });

  it('should find the index of the value at the edges', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const right = binarySearch(input, 6, 0, input.length - 1);
    const left = binarySearch(input, 1, 0, input.length - 1);

    expect(right).toEqual(5);
    expect(left).toEqual(0);
  });

  it('should return NULL if the value is not present', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const right = binarySearch(input, 7, 0, input.length - 1);
    const left = binarySearch(input, -1, 0, input.length - 1);

    expect(right).toEqual(null);
    expect(left).toEqual(null);
  });
});
