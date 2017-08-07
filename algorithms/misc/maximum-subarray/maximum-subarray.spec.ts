import { maxCrossSubarray, maxSubarray } from './maximum-subarray';

describe('maxCrossSubarray', () => {
  it('should find the maximum cross-subarray', () => {
    const input = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
    const result = maxCrossSubarray(input, 0, 9, input.length - 1);

    expect(result).toEqual({
      start: 7,
      end: 10,
      sum: 43,
    });
  });
});

describe('maxSubarray', () => {
  it('should find the maximum subarray', () => {
    const input = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
    const result = maxSubarray(input, 0, input.length - 1);

    expect(result).toEqual({
      start: 7,
      end: 10,
      sum: 43,
    });
  });
});
