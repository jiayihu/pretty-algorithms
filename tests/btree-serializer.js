/**
 * Convert a Binary Tree to ASCII
 * Original source in Swift: https://gist.github.com/khanov/4f1472b5ae001da817db
 */
function buildTreeString(node, prefix = '', isTail) {
  let result = '';

  if (node.right) {
    const newPrefix = prefix + (isTail ? '│   ' : '    ');
    result += buildTreeString(node.right, newPrefix, false);
  }

  result += prefix + (isTail ? '└── ' : '┌── ') + node.key + '\n';

  if (node.left) {
    const newPrefix = prefix + (isTail ? '    ' : '│   ');
    result += buildTreeString(node.left, newPrefix, true);
  }

  return result;
}

module.exports = {
  print(val, serialize, indent) {
    return buildTreeString(val, '', true);
  },

  test(val) {
    return (
      val && val.hasOwnProperty('key') && val.hasOwnProperty('left') && val.hasOwnProperty('right')
    );
  },
};
