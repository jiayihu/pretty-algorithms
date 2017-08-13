import { lcsLengths, findLCS } from './longest-common-subsequence';

describe('lcsLengths', () => {
  it('should return the table of common subsequences lengths', () => {
    const seqA = 'ABCBDAB';
    const seqB = 'BDCABA';
    const { lengths } = lcsLengths(seqA, seqB);

    expect(lengths).toMatchSnapshot('LCS subsequences lengths');
  });

  it('should return the table of directions to recreate the LCS', () => {
    const seqA = 'ABCBDAB';
    const seqB = 'BDCABA';
    const { directions } = lcsLengths(seqA, seqB);

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
