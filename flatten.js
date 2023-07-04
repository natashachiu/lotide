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