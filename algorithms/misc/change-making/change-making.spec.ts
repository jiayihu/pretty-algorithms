import { changeMaking } from './change-making';

describe('changeMaking', () => {
  it('should return the minimum number of coins for a given value', () => {
    const coins = [25, 10, 5];
    const result = changeMaking(coins, 30);

    expect(result).toBe(2); // 25 + 5
  });

  it('should return the minimum number of coins for a given value', () => {
    const coins = [9, 6, 5, 1];
    const result = changeMaking(coins, 11);

    expect(result).toBe(2); // 6 + 5
  });

  it('should return 1 if the amount is available as coin', () => {
    const coins = [9, 6, 5, 1];

    expect(changeMaking(coins, 9)).toBe(1);
    expect(changeMaking(coins, 6)).toBe(1);
    expect(changeMaking(coins, 5)).toBe(1);
    expect(changeMaking(coins, 1)).toBe(1);
  });
});
