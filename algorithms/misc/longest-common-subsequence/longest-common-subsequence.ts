import { fill, range } from '../../utils';

/**
 * The longest common subsequence (LCS) problem is the problem of finding the
 * longest subsequence common to two sequences.
 *
 * It differs from problems of finding common substrings since subsequences are
 * not required to occupy consecutive positions within the original sequences.
 */

/**
 * Return the table of common subsequences lengths
 * @param seqA First sequence
 * @param seqB Second sequence
 */
export function lcsLengths(seqA: string, seqB: string): number[][] {
  const lengthA = seqA.length;
  const lengthB = seqB.length;

  const lengths: number[][] = new Array(lengthA + 1);
  fill(lengths, () => new Array(lengthB + 1));

  range(0, lengthA).forEach(i => (lengths[i][0] = 0));
  range(0, lengthB).forEach(i => (lengths[0][i] = 0));

  range(0, lengthA - 1).forEach(indexA => {
    range(0, lengthB - 1).forEach(indexB => {
      const charA = seqA[indexA];
      const charB = seqB[indexB];

      if (charA === charB) {
        lengths[indexA + 1][indexB + 1] = lengths[indexA][indexB] + 1;
      } else if (lengths[indexA][indexB + 1] >= lengths[indexA + 1][indexB]) {
        lengths[indexA + 1][indexB + 1] = lengths[indexA][indexB + 1];
      } else {
        lengths[indexA + 1][indexB + 1] = lengths[indexA + 1][indexB];
      }
    });
  });

  return lengths;
}

/**
 * Return the LCS of two sequences using the table of lengths
 * @param lengths The table of common subsequences lengths returned by `lcsLengths`
 * @param seqA First sequence
 * @param seqB Second sequence
 * @param indexA seqA index in the reverse LCS walk
 * @param indexB seqB index in the reverse LCS walk
 */
function walkLCS(
  lengths: number[][],
  seqA: string,
  seqB: string,
  indexA: number,
  indexB: number
): string {
  if (indexA === 0 || indexB === 0) return '';

  if (seqA[indexA - 1] === seqB[indexB - 1]) {
    const subLCS = walkLCS(lengths, seqA, seqB, indexA - 1, indexB - 1);
    return subLCS + seqA[indexA - 1];
  } else if (lengths[indexA - 1][indexB] >= lengths[indexA][indexB - 1]) {
    return walkLCS(lengths, seqA, seqB, indexA - 1, indexB);
  } else {
    return walkLCS(lengths, seqA, seqB, indexA, indexB - 1);
  }
}

/**
 * Return the longest common subsequence (LCS)
 * @param seqA First sequence
 * @param seqB Second sequence
 */
export function findLCS(seqA: string, seqB: string): string {
  const lengths = lcsLengths(seqA, seqB);
  const lcs = walkLCS(lengths, seqA, seqB, seqA.length, seqB.length);

  return lcs;
}
