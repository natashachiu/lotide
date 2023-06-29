const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(words, word => word.split("").reverse().join(""));
assertArraysEqual(results2, ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot']);

const results3 = map(words, word => word[0].toUpperCase() + word.slice(1));
assertArraysEqual(results3, ["Ground", "Control", "To", "Major", "Tom"]);

const results4 = map(words, word => word.split("").filter(letter => letter !== "o").join(""));
assertArraysEqual(results4, ['grund', 'cntrl', 't', 'majr', 'tm']);