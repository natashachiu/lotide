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

const flatten = function(arr) {
  let output = [];

  for (let val of arr) {
    if (Array.isArray(val)) {
      for (let n of val) {
        output.push(n);
      }
    } else {
      output.push(val);
    }
  }
  return output;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2, 3], 4, 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2, 3, 4, 5, 6]]), [1, 2, 3, 4, 5, 6]);