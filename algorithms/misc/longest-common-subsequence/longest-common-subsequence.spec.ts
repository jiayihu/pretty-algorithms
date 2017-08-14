import { lcsLengths, findLCS } from './longest-common-subsequence';

describe('lcsLengths', () => {
  it('should return the table of common subsequences lengths', () => {
    const seqA = 'ABCBDAB';
    const seqB = 'BDCABA';
    const lengths = lcsLengths(seqA, seqB);

    // Add sequences to the matrix for prettier snapshot
    (lengths as any).y = ' ' + seqA;
    (lengths as any).x = ' ' + seqB;

    expect(lengths).toMatchSnapshot('LCS subsequences lengths');
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
