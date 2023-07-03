const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ?
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

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
console.log;

const result1 = letterPositions("hello world");
console.log(result1);
// assertArraysEqual(result1["h"], [0]);
// assertArraysEqual(result1["e"], [1]);
// assertArraysEqual(result1["l"], [2, 3]);
// assertArraysEqual(result1["o"], [4]);

const result2 = letterPositions("lighthouse in the house");
console.log(result2);

// assertArraysEqual(result2["l"], [0]);
// assertArraysEqual(result2["i"], [1, 11]);
// assertArraysEqual(result2["g"], [2]);
// assertArraysEqual(result2["h"], [3, 5, 15, 18]);
// assertArraysEqual(result2["t"], [4, 14]);
// assertArraysEqual(result2["o"], [6, 19]);
// assertArraysEqual(result2["u"], [7, 20]);
// assertArraysEqual(result2["s"], [8, 21]);
// assertArraysEqual(result2["e"], [9, 16, 22]);
// assertArraysEqual(result2["n"], [12]);

