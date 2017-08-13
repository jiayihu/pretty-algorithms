import { lcsLengths, findLCS } from './longest-common-subsequence';

describe('lcsLengths', () => {
  it('should return the table of common subsequences lengths', () => {
    const seqA = 'ABCBDAB';
    const seqB = 'BDCABA';
    const { lengths } = lcsLengths(seqA, seqB);

    // Add sequences to the matrix for prettier snapshot
    (lengths as any).y = ' ' + seqA;
    (lengths as any).x = ' ' + seqB;

    expect(lengths).toMatchSnapshot('LCS subsequences lengths');
  });

  it('should return the table of directions to recreate the LCS', () => {
    const seqA = 'ABCBDAB';
    const seqB = 'BDCABA';
    const { directions } = lcsLengths(seqA, seqB);

    // Add sequences to the matrix for prettier snapshot
    (directions as any).y = ' ' + seqA;
    (directions as any).x = ' ' + seqB;

    expect(directions).toMatchSnapshot('LCS directions');
  });
});

describe('findLCS', () => {
  it('should return the LCS for two sequences', () => {
    const seqA = 'ABCBDAB';
    const seqB = 'BDCABA';
    const lcs = findLCS(seqA, seqB);

    expect(lcs).toBe('BCBA');
  });
});
