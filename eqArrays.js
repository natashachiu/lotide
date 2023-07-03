const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {

    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i]))
        return false;

    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const arr1 = eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true

const arr2 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
const arr3 = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false

const arr4 = eqArrays([[2, [3]], [4]], [[2, [3]], [4]]);
const arr5 = eqArrays([[2, [3]], [4, [5, [6]]]], [[2, [3]], [4, [5, [6]]]]);

assertEqual(arr1, true);
assertEqual(arr2, false);
assertEqual(arr3, false);
assertEqual(arr4, true);
assertEqual(arr5, true);



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false