import { topDownCutRod, bottomUpCutRod, cutRod } from './rod-cutting';

describe('topDownCutRod', () => {
  it('should return the maximum prices for a rod of given length', () => {
    const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

    const { bestPrices } = topDownCutRod(prices, 4);

    expect(bestPrices[4]).toBe(10);
    expect(bestPrices[3]).toBe(8);
    expect(bestPrices[2]).toBe(5);
    expect(bestPrices[1]).toBe(1);
    expect(bestPrices[0]).toBe(0);
  });

  it('should consider the result with no cut at all', () => {
    const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

    expect(topDownCutRod(prices, 10).bestPrices[10]).toBe(30);
  });
});

describe('bottomUpCutRod', () => {
  it('should return the maximum prices for a rod of given length', () => {
    const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

    const { bestPrices } = bottomUpCutRod(prices, 4);

    expect(bestPrices[4]).toBe(10);
    expect(bestPrices[3]).toBe(8);
    expect(bestPrices[2]).toBe(5);
    expect(bestPrices[1]).toBe(1);
    expect(bestPrices[0]).toBe(0);
  });

  it('should consider the result with no cut at all', () => {
    const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

    expect(bottomUpCutRod(prices, 10).bestPrices[10]).toBe(30);
  });
});

describe('cutRod', () => {
  it('should return the best cuts length for a rod of given length', () => {
    const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    const bestCuts = cutRod(prices, 7);

    expect(bestCuts).toEqual([1, 6]);
  });

  it('should return the same result despite the chosen strategy', () => {
    const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    const bottomUp = cutRod(prices, 7, 'bottomUp');
    const topDown = cutRod(prices, 7, 'topDown');

    expect(bottomUp).toEqual(topDown);
  });
});
