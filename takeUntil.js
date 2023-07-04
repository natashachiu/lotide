const takeUntil = function(array, callback) {
  let output = [];

  for (const item of array) {
    if (!callback(item))
      output.push(item);
    else
      return output;
  }
  return output;
};

module.exports = takeUntil;