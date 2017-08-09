import { extractMax, increasePriority, insert } from './priority-queue';

describe('extractMax', () => {
  it('should extract the maximum priority from the queue', () => {
    const queue = [5, 2, 4, 0, 1, 3];
    const max = extractMax(queue);

    expect(max).toBe(5);
    expect(queue).toEqual([4, 2, 3, 0, 1]);
  });
});

describe('increasePriority', () => {
  it('should increase the priority of an item in the queue', () => {
    const queue = [5, 2, 4, 0, 1, 3];
    increasePriority(queue, 2, 2);

    expect(queue).toEqual([6, 2, 5, 0, 1, 3]);
  });
});

describe('insert', () => {
  it('should allow creation of a queue', () => {
    const queue = [];
    insert(queue, 5);
    insert(queue, 2);
    insert(queue, 4);
    insert(queue, 0);
    insert(queue, 1);
    insert(queue, 3);

    expect(queue).toEqual([5, 2, 4, 0, 1, 3]);
  });

  it('should add a priority in the queue', () => {
    const queue = [5, 2, 4, 0, 1, 3];
    insert(queue, 6);

    expect(queue).toEqual([6, 2, 5, 0, 1, 3, 4]);
  });
});
