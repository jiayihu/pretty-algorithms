/**
 * Binary Search Tree (BST) implementation
 */

export interface Node {
  parent?: Node;
  key: number;
  left?: Node;
  right?: Node;
}

export function createNode(key: number, left: Node = null, right: Node = null): Node {
  const node = {
    key,
    left,
    right,
  };

  if (left) left.parent = node;
  if (right) right.parent = node;

  return node;
}

/**
 * Print a BST in order.
 * Time complexity: O(n)
 */
export function inOrderWalk(node: Node) {
  if (!node) return;

  inOrderWalk(node.left);
  console.log(node);
  inOrderWalk(node.right);
}

/**
 * Search a key in the BST
 * Time complexity: O(lg(n))
 * @param node BST root node
 * @param key Key to look for
 */
export function search(node: Node, key: number): Node {
  if (!node) return null;

  if (node.key === key) return node;
  else if (node.key < key) return search(node.right, key);
  else return search(node.left, key);
}

/**
 * Return the minimum key of the BST
 * @param node BST root node
 */
export function minimum(node: Node): Node {
  let leftMost: Node = node;
  while (leftMost !== null && leftMost.left !== null) {
    leftMost = leftMost.left;
  }

  return leftMost;
}

/**
 * Return the maximum key of the BST
 * @param node BST root node
 */
export function maximum(node: Node): Node {
  let rightMost: Node = node;
  while (rightMost !== null && rightMost.right !== null) {
    rightMost = rightMost.right;
  }

  return rightMost;
}

/**
 * Return the successor node in a in-order walk
 * @param node BST root node
 */
export function successor(node: Node): Node {
  if (node.right !== null) return minimum(node.right);

  let parent = node.parent;
  let current = node;
  while (parent !== null && parent.right === current) {
    current = parent;
    parent = parent.parent;
  }

  return parent;
}

/**
 * Return the predessor node in a in-order walk
 * @param node BST root node
 */
export function predecessor(node: Node): Node {
  if (node.left !== null) return node.left;

  let parent = node.parent;
  let current = node;
  while (parent !== null && parent.left === current) {
    current = parent;
    parent = parent.parent;
  }

  return parent;
}

export interface Tree {
  root: Node;
}

export function insert(tree: Tree, leaf: Node) {
  let parent: Node = null;
  let current = tree.root;

  while (current !== null) {
    parent = current;

    if (current.key < leaf.key) {
      current = current.right;
    } else {
      current = current.left;
    }
  }

  if (parent === null) tree.root = leaf;
  else if (parent.key < leaf.key) parent.right = leaf;
  else parent.left = leaf;

  leaf.parent = parent;
}
