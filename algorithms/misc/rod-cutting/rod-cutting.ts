import { range } from '../../utils';

/**
 * Problem: Find the best way to cut a rod of length n, assuming that each length
 * has a price.
 *
 * Find best set of cuts to get maximum price. Each cut is integer length and can
 * use any number of cuts, from 0 to n−1.
 *
 * The solution uses dynamic-programming and both strategies (top-down & bottom-up)
 * are provided.
 * @url https://en.wikipedia.org/wiki/Dynamic_programming
 */

export interface BestResults {
  bestPrices: number[];
  bestFirstCuts: number[];
}

//
// ─── TOP-DOWN MEMOIZED SOLUTION ──────────────────────────────────────────────────
//

/**
 * Return the maximum prices and best first cuts up to then given rod length
 * Time complexity: O(n^2). It has worse constants than the following `bottomUpCutRod`
 * but it's more elegant and it's recursive.
 * @param prices List of prices for each rod length
 * @param length Length of the full rod
 */
export function topDownCutRod(prices: number[], length: number): BestResults {
  const bestPrices: number[] = new Array(length + 1);
  bestPrices.fill(-Infinity);

  const bestFirstCuts: number[] = new Array(length + 1);

  return topDownCutRodAux(prices, length, bestPrices, bestFirstCuts);
}

function topDownCutRodAux(
  prices: number[],
  length: number,
  bestPrices: number[],
  bestFirstCuts: number[]
): BestResults {
  if (bestPrices[length] >= 0) return { bestPrices, bestFirstCuts };

  let maxCutPrice = -Infinity;
  let bestFirstCut: number = -1;

  if (length === 0) maxCutPrice = 0;
  else {
    range(1, length).forEach(firstCut => {
      const remainingRod = topDownCutRodAux(prices, length - firstCut, bestPrices, bestFirstCuts);
      const cutPrice = prices[firstCut] + remainingRod.bestPrices[length - firstCut];

      if (cutPrice > maxCutPrice) {
        maxCutPrice = cutPrice;
        bestFirstCut = firstCut;
      }
    });
  }

  bestPrices[length] = maxCutPrice;
  bestFirstCuts[length] = bestFirstCut;

  return {
    bestPrices,
    bestFirstCuts,
  };
}

//
// ─── BOTTOM-UP MEMOIZED SOLUTION ─────────────────────────────────────────────────
//

/**
 * Return the maximum prices and best first cuts up to then given rod length
 * Time complexity: O(n^2) but has better constants than memoizedCutRod, which is
 * recursive.
 * @param prices List of prices for each rod length
 * @param length Length of the full rod
 */
export function bottomUpCutRod(prices: number[], length: number): BestResults {
  const bestPrices: number[] = new Array(length + 1);
  const bestFirstCuts: number[] = new Array(length + 1);

  bestPrices.fill(-Infinity);
  // The price of rod of length 0 is 0
  bestPrices[0] = 0;

  range(1, length).forEach(subLength => {
    let maxCutPrice = -Infinity;

    range(1, subLength).forEach(firstCut => {
      const cutPrice = prices[firstCut] + bestPrices[subLength - firstCut];
      if (cutPrice > maxCutPrice) {
        maxCutPrice = cutPrice;

        bestPrices[subLength] = maxCutPrice;
        bestFirstCuts[subLength] = firstCut;
      }
    });
  });

  return {
    bestPrices,
    bestFirstCuts,
  };
}

/**
 * Return best cuts lengths for a rod of given length
 * Time complexity: O(n^2). It has better constants than memoizedCutRod, which is
 * recursive.
 * @param prices List of prices for each rod length
 * @param length Length of the full rod
 * @param strategy Whether to use 'bottomUp' or 'topDown' strategy. Usually the
 * former is better.
 */
export function cutRod(
  prices: number[],
  length: number,
  strategy: 'bottomUp' | 'topDown' = 'bottomUp'
): number[] {
  const { bestFirstCuts } =
    strategy === 'bottomUp' ? bottomUpCutRod(prices, length) : topDownCutRod(prices, length);

  let remainingRod = length;
  const bestCuts: number[] = [];

  while (remainingRod) {
    bestCuts.push(bestFirstCuts[remainingRod]);
    remainingRod -= bestFirstCuts[remainingRod];
  }

  return bestCuts;
}
