const countLetters = function(str) {
  const results = {};
  // str = str.split(" ").join("").toLowerCase();

  for (const letter of str) {
    if (results[letter] === " ")
      continue;

    if (!results[letter])
      results[letter] = 0;

    results[letter] += 1;
  }
  return results;
};

module.exports = countLetters;

// const result1 = countLetters('LHL');
// console.log(result1);


// assertEqual(result1["L"], 2);
// assertEqual(result1["H"], 1);

// const result2 = countLetters("lighthouse in the house");
// console.log(result2);

// assertEqual(result2["l"], 1);
// assertEqual(result2["i"], 2);
// assertEqual(result2["g"], 1);
// assertEqual(result2["h"], 4);
// assertEqual(result2["t"], 2);
// assertEqual(result2["o"], 2);
// assertEqual(result2["u"], 2);
// assertEqual(result2["s"], 2);
// assertEqual(result2["e"], 3);
// assertEqual(result2["n"], 1);
// assertEqual(result2["p"], undefined);