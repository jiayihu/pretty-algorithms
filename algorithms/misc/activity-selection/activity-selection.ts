import { range } from '../../utils';

/**
 * The activity selection problem is the selection of non-conflicting activities to
 * perform within a given time frame, given a set of activities each marked by
 * a start time (s[i]) and finish time (f[i]).
 *
 * The problem is to select the maximum number of activities that can be performed.
 * 
 * The solution is a greedy algorithm.
 * @url https://en.wikipedia.org/wiki/Greedy_algorithm
 */

export interface Activity {
  start: number;
  finish: number;
}

/**
 * Return the array of non-conflicting activies within the time frame defined by
 * the input activities array.
 * @NOTE: all input arrays are assumed ordered by ascending finish time, for instance
 * using a quick-sort in P(n*lg(n)) time.
 *
 * Time complexity: O(n)
 * @param activities Array of activities which can be performed in the time frame.
 * activities[0].start - activities[activities.length - 1].finish defines the 
 * time frame.
 */
export function activitySelector<T extends Activity>(activities: T[]): T[] {
  // The first activity always gets selected
  const selected = [activities[0]];
  let lastActivity: Activity = activities[0];

  /**
   * Always select the first activity which starts right after the last one. It's
   * also the one which finishes before any other since the input list is ordered 
   * by finish time.
   * 
   * Proof of optimality can be found here:
   * @url https://en.wikipedia.org/wiki/Activity_selection_problem#Proof_of_optimality
   */
  range(1, activities.length - 1).forEach(index => {
    const currentActivity = activities[index];

    if (currentActivity.start >= lastActivity.finish) {
      selected.push(currentActivity);
      lastActivity = currentActivity;
    }
  });

  return selected;
}
