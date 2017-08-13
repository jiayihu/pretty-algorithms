const repeat = require('lodash/repeat');

function header(matrix) {
  const spaces = repeat(' ', matrix.y ? 5 : 3);

  let result = spaces;

  for (let i = 0; i < matrix[0].length; i++) {
    result += `${i} `;
  }

  if (matrix.x) {
    result += '\n' + spaces;
    for (let i = 0; i < matrix.x.length; i++) {
      result += `${matrix.x[i]} `;
    }
  }

  result += '\n' + spaces;
  result += repeat('__', matrix[0].length);
  result += '\n';

  return result;
}

/**
 * Convert a matrix to ASCII
 */
function convertMatrix(matrix) {
  let result = '';

  result += header(matrix);

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (column === 0) result += `${row} ${matrix.y ? matrix.y[row] : ''}| `;
      const value = matrix[row][column];
      result += `${value === undefined ? '∅' : value} `;
    }

    result += '\n';
  }

  return result;
}

module.exports = {
  print(val, serialize, indent) {
    return convertMatrix(val);
  },

  test(val) {
    return Array.isArray(val) && Array.isArray(val[0]);
  },
};
