import { countInversions } from './inversions-count';

describe('countInversions', () => {
  it('should count the number of inversions', () => {
    const input = [2, 3, 8, 6, 1];
    const count = countInversions(input);

    expect(count).toBe(5);
  });
});
