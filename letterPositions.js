const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ?
    console.log("✅ The arrays are equal") :
    console.log("🛑 The arrays are not equal");
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    if (!results[letter])
      results[letter] = [i];
    else
      results[letter].push(i);
  }

  delete results[" "];

  return results;
};

const result1 = letterPositions("hello");
console.log("hello");
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);

console.log("lighthouse in the house");
const result2 = letterPositions("lighthouse in the house");
assertArraysEqual(result2["l"], [0]);
assertArraysEqual(result2["i"], [1, 11]);
assertArraysEqual(result2["g"], [2]);
assertArraysEqual(result2["h"], [3, 5, 15, 18]);
assertArraysEqual(result2["t"], [4, 14]);
assertArraysEqual(result2["o"], [6, 19]);
assertArraysEqual(result2["u"], [7, 20]);
assertArraysEqual(result2["s"], [8, 21]);
assertArraysEqual(result2["e"], [9, 16, 22]);
assertArraysEqual(result2["n"], [12]);

