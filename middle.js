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


const middle = function(arr) {
  const midpoint = Math.floor(arr.length / 2);

  if (arr.length < 3) return [];

  return (arr.length % 2) ?
    [arr[midpoint]] :
    arr.slice(midpoint - 1, midpoint + 1);
};


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

