import { activitySelector, Activity } from './activity-selection';

describe('activitySelector', () => {
  it('should return a selection of non-conflicting activities', () => {
    const activities: Activity[] = [
      { start: 1, finish: 4 },
      { start: 3, finish: 5 },
      { start: 0, finish: 6 },
      { start: 5, finish: 7 },
      { start: 3, finish: 9 },
      { start: 5, finish: 9 },
      { start: 6, finish: 10 },
      { start: 8, finish: 11 },
      { start: 8, finish: 12 },
      { start: 2, finish: 14 },
      { start: 12, finish: 16 },
    ];
    const selected = activitySelector(activities);

    expect(selected).toEqual([
      { start: 1, finish: 4 },
      { start: 5, finish: 7 },
      { start: 8, finish: 11 },
      { start: 12, finish: 16 },
    ]);
  });
});
