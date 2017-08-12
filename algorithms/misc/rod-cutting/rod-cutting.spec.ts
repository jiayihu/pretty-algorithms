import { memoizedCutRod } from './rod-cutting';

describe('memoizedCutRod', () => {
  it('should return the maximum prices for a rod of given length', () => {
    const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

    expect(memoizedCutRod(prices, 4)).toBe(10);
  });

  it('should consider the result with no cut at all', () => {
    const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

    expect(memoizedCutRod(prices, 10)).toBe(30);
  });
});
