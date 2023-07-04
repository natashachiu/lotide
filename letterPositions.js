const letterPositions = function(sentence) {
  const results = {};

  for (const i in sentence) {
    const letter = sentence[i];

    if (!results[letter])
      results[letter] = [];

    results[letter].push(Number(i));
  }

  delete results[" "];

  return results;
};

module.exports = letterPositions;