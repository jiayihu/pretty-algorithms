import { insertion } from './insertion';

describe('Insertion sort', function() {
  test('It should sort ASC the items', function() {
    const input = [5, 2, 4, 6, 1, 3];
    const result = insertion(input);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('It should sort DESC the items', function () {
    const input = [5, 2, 4, 6, 1, 3];
    const result = insertion(input, (item, pivot) => pivot - item);

    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
