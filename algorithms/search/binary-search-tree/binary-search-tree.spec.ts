import {
  Node,
  Tree,
  createNode,
  inOrderWalk,
  search,
  minimum,
  maximum,
  successor,
  predecessor,
  insert,
  transplant,
  remove,
} from './binary-search-tree';

/**
 * Create a BST for testing. The visual rappresentation is in the __snapshots__
 * folder.
 */
function createBST(): Node {
  return createNode(
    15,
    createNode(
      6,
      createNode(3, createNode(2), createNode(4)),
      createNode(7, null, createNode(13, createNode(9)))
    ),
    createNode(18, createNode(17), createNode(20))
  );
}

describe('createBST', () => {
  it('should create a correct BST', () => {
    expect(createBST()).toMatchSnapshot('createBST');
  });
});

describe('search', () => {
  it('should find the node with a given key', () => {
    const tree = createBST();
    const node = search(tree, 3);

    expect(node.key).toBe(3);
    expect(node.left.key).toBe(2);
    expect(node.right.key).toBe(4);
  });
});

describe('minimum', () => {
  it('should find the node with minimum key', () => {
    const tree = createBST();
    const minimumNode = minimum(tree);

    expect(minimumNode.key).toBe(2);
  });
});

describe('maximum', () => {
  it('should find the node with maximum key', () => {
    const tree = createBST();
    const maximumNode = maximum(tree);

    expect(maximumNode.key).toBe(20);
  });
});

describe('successor', () => {
  it('should find the successor node on right if available', () => {
    const tree = createBST();
    const successorNode = successor(tree);

    expect(successorNode.key).toBe(17);
  });

  it('should find the ancestor successor node if not available on right', () => {
    const tree = createBST();
    const node13 = search(tree, 13);
    const successorNode = successor(node13);

    expect(successorNode.key).toBe(15);
  });
});

describe('predecessor', () => {
  it('should find the predecessor node on left if available', () => {
    const tree = createBST();
    const predecessorNode = predecessor(tree);

    expect(predecessorNode.key).toBe(6);
  });

  it('should find the ancestor predecessor node if not available on left', () => {
    const tree = createBST();
    const node9 = search(tree, 9);
    const predecessorNode = predecessor(node9);

    expect(predecessorNode.key).toBe(7);
  });
});

describe('insert', () => {
  it('should insert a node', () => {
    const tree: Tree = { root: createNode(3) };
    const leaf = createNode(2);
    insert(tree, leaf);

    expect(tree.root.left.key).toBe(2);
    expect(leaf.parent).toEqual(tree.root);
  });

  it('should insert a node if the tree is empty', () => {
    const tree: Tree = { root: null };
    const leaf = createNode(2);
    insert(tree, leaf);

    expect(tree.root).toEqual(tree.root);
    expect(leaf.parent).toBe(null);
  });

  it('should allow creation of a Binary Search Tree', () => {
    const tree: Tree = { root: null };
    insert(tree, createNode(12));
    insert(tree, createNode(5));
    insert(tree, createNode(2));
    insert(tree, createNode(9));
    insert(tree, createNode(18));
    insert(tree, createNode(15));
    insert(tree, createNode(13));
    insert(tree, createNode(17));
    insert(tree, createNode(19));

    expect(tree.root).toMatchSnapshot('BST insertion');
  });
});

describe('remove', () => {
  it('should have a working transplant utility', () => {
    const tree: Tree = {
      root: createBST(),
    };
    const node20 = tree.root.right.right;
    const replacement = createNode(21);
    transplant(tree, node20, replacement);

    expect(tree.root.right.right.key).toBe(21);
    expect(tree.root.right.right.parent.key).toBe(18);
  });

  it('should remove a leaf from the BST', () => {
    const tree: Tree = {
      root: createBST(),
    };
    const node20 = tree.root.right.right;
    remove(tree, node20);

    expect(tree.root.right.right).toBe(null);
  });

  it('should remove an internal node from the BST and replace with the right child', () => {
    const tree: Tree = {
      root: createBST(),
    };
    const node18 = tree.root.right;
    remove(tree, node18);

    expect(tree.root.right.key).toBe(20);
  });

  it('should remove an internal node from the BST and replace with the minimum right child', () => {
    const tree: Tree = {
      root: createBST(),
    };
    remove(tree, tree.root);

    expect(tree.root.key).toBe(17);
    expect(tree.root.right.left).toBe(null);
  });
});
