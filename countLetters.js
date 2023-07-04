const countLetters = function(str) {
  const results = {};
  // str = str.split(" ").join("").toLowerCase();

  for (const letter of str) {

    if (!results[letter])
      results[letter] = 0;

    results[letter] += 1;
  }

  delete results[" "];
  return results;
};

module.exports = countLetters;