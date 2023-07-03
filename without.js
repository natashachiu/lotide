const without = function(arr1, arr2) {
  let output = [];

  for (let i = 0; i < arr1.length; i++) {
    let match = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j])
        match = true;
    }
    if (!match)
      output.push(arr1[i]);
  }

  return output;
};

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without(["1", "2", 5], []), ["1", "2", 5]);
// assertArraysEqual(without([1, "2", "3"], ["3", 4, 1]), ["2"]);
// assertArraysEqual(without([1, 4, 9], [4, 9, 1]), []);


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);