import { range } from '../../utils';

/**
 * Problem: Find the best way to cut a rod of length n, assuming that each length
 * has a price.
 *
 * Find best set of cuts to get maximum price. Each cut is integer length and can
 * use any number of cuts, from 0 to n−1.
 */

//
// ─── TOP-DOWN MEMOIZED SOLUTION ──────────────────────────────────────────────────
//

/**
 * Return the maximum price cutting a rod of given length
 * Time complexity: O(n^2)
 * @param prices List of prices for each rod length
 * @param length Length of the full rod
 */
export function memoizedCutRod(prices: number[], length: number): number {
  const memoized: number[] = new Array(length + 1);
  memoized.fill(-Infinity);

  return memoizedCutRodAux(prices, length, memoized);
}

function memoizedCutRodAux(prices: number[], length: number, memoized): number {
  if (memoized[length] >= 0) return memoized[length];

  let max = -Infinity;

  if (length === 0) max = 0;
  else {
    range(1, length).forEach(firstCut => {
      max = Math.max(
        max,
        prices[firstCut] + memoizedCutRodAux(prices, length - firstCut, memoized)
      );
    });
  }

  memoized[length] = max;
  return max;
}
