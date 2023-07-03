const flatten = function(arr) {
  let output = [];

  for (let val of arr) {
    if (Array.isArray(val)) {
      for (let n of val) {
        output.push(n);
      }
    } else {
      output.push(val);
    }
  }
  return output;
};

module.exports = flatten;


// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([[1, 2, 3], 4, 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([[1, 2, 3, 4, 5, 6]]), [1, 2, 3, 4, 5, 6]);