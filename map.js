const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// const results2 = map(words, word => word.split("").reverse().join(""));
// assertArraysEqual(results2, ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot']);

// const results3 = map(words, word => word[0].toUpperCase() + word.slice(1));
// assertArraysEqual(results3, ["Ground", "Control", "To", "Major", "Tom"]);

// const results4 = map(words, word => word.split("").filter(letter => letter !== "o").join(""));
// assertArraysEqual(results4, ['grund', 'cntrl', 't', 'majr', 'tm']);