import { fill, range } from '../../utils';

/**
 * The longest common subsequence (LCS) problem is the problem of finding the
 * longest subsequence common to two sequences.
 *
 * It differs from problems of finding common substrings since subsequences are
 * not required to occupy consecutive positions within the original sequences.
 */

export type Directions = Array<Array<'←' | '↑' | '↖'>>;

export interface BestResults {
  lengths: number[][];
  directions: Directions;
}

export function lcsLengths(seqA: string, seqB: string): BestResults {
  const lengthA = seqA.length;
  const lengthB = seqB.length;

  const lengths: number[][] = new Array(lengthA + 1);
  fill(lengths, () => new Array(lengthB + 1));

  const directions: Directions = new Array(lengthA + 1);
  fill(directions, () => new Array(lengthB + 1));

  range(0, lengthA).forEach(i => (lengths[i][0] = 0));
  range(0, lengthB).forEach(i => (lengths[0][i] = 0));

  range(0, lengthA - 1).forEach(indexA => {
    range(0, lengthB - 1).forEach(indexB => {
      const charA = seqA[indexA];
      const charB = seqB[indexB];

      if (charA === charB) {
        lengths[indexA + 1][indexB + 1] = lengths[indexA][indexB] + 1;
        directions[indexA + 1][indexB + 1] = '↖';
      } else if (lengths[indexA][indexB + 1] >= lengths[indexA + 1][indexB]) {
        lengths[indexA + 1][indexB + 1] = lengths[indexA][indexB + 1];
        directions[indexA + 1][indexB + 1] = '↑';
      } else {
        lengths[indexA + 1][indexB + 1] = lengths[indexA + 1][indexB];
        directions[indexA + 1][indexB + 1] = '←';
      }
    });
  });

  return {
    lengths,
    directions,
  };
}

function walkLCS(directions: Directions, seqA: string, indexA: number, indexB: number): string {
  if (indexA === 0 || indexB === 0) return '';

  const direction = directions[indexA][indexB];

  if (direction === '↖') {
    const subLCS = walkLCS(directions, seqA, indexA - 1, indexB - 1);
    return subLCS + seqA[indexA - 1];
  } else if (direction === '←') {
    return walkLCS(directions, seqA, indexA, indexB - 1);
  } else {
    return walkLCS(directions, seqA, indexA - 1, indexB);
  }
}

/**
 * Return the longest common subsequence (LCS)
 * @param seqA First sequence
 * @param seqB Second sequence
 */
export function findLCS(seqA: string, seqB: string): string {
  const { directions } = lcsLengths(seqA, seqB);
  const lcs = walkLCS(directions, seqA, seqA.length, seqB.length);

  return lcs;
}
