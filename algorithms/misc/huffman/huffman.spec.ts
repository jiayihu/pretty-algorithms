import { huffman, Frequency } from './huffman';
import { toSerializableTree } from '../../utils';

describe('huffman', () => {
  it('should return the tree of prefix codes', () => {
    const frequences: Frequency[] = [
      { char: 'a', frequency: 45 },
      { char: 'b', frequency: 13 },
      { char: 'c', frequency: 12 },
      { char: 'd', frequency: 16 },
      { char: 'e', frequency: 6 },
      { char: 'f', frequency: 8 },
    ];
    const tree = huffman(frequences);

    // Convert the Huffman tree
    const serializable = toSerializableTree(tree, node => {
      const key = node.char ? `${node.char}:${node.frequency}` : node.frequency;

      return { key, left: node.left, right: node.right };
    });

    expect(tree).toMatchSnapshot('Huffman coding tree');
  });
});
