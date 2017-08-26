import { range } from '../../utils';

/**
 * Problem: find the minimum number of coins (of certain denominations) that add
 * up to a given amount of money.
 * @url https://en.wikipedia.org/wiki/Change-making_problem
 * 
 * The solution uses dynamic-programming with top-down strategy instead of bottom-up
 * to avoid resolution of every sub-problem, which is not needed for this problem.
 * @url https://en.wikipedia.org/wiki/Dynamic_programming
 */

/**
 * Return the minimum of coins that add up to a given amount of money.
 * Time complexity: O(m*n) where m = coins.length, n = amount
 * @param coins The available coins
 * @param amount The value to add up to
 */
export function changeMaking(coins: number[], amount: number): number {
  // Memoization array used to store best results for problems up to `amount` dimension
  const results: number[] = new Array(amount + 1);
  results.fill(-Infinity);

  // Zero coins are needed for amount 0
  results[0] = 0;
  // Only one coin is needed if the amount is equal to one of the coins
  coins.forEach(coin => (results[coin] = 1));

  return minCoins(coins, results, amount);
}

function minCoins(coins: number[], results: number[], amount: number): number {
  if (results[amount] >= 0) return results[amount];

  let result: number = Infinity;

  coins.filter(coin => coin <= amount).forEach(coin => {
    result = Math.min(result, 1 + minCoins(coins, results, amount - coin));
  });

  results[amount] = result;

  return result;
}
