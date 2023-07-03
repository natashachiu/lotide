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
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;

  for (const key in object1) {
    if (!Array.isArray(object1[key]) && typeof object1[key] === 'object') {
      if (!eqObjects(object1[key], object2[key]))
        return false;

    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


const obj1 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
const obj2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
const obj3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
const obj4 = eqObjects({ a: { z: { y: 0 } }, b: 2 }, { a: { z: { y: 0 } }, b: 2 }); // => true
const obj5 = eqObjects({ a: { z: { y: 0 }, d: { e: { f: 1 } } }, b: 2 }, { a: { z: { y: 0 }, d: { e: { f: 1 } } }, b: 2 },); // => true

assertEqual(obj1, true);
assertEqual(obj2, false);
assertEqual(obj3, false);
assertEqual(obj4, true);
assertEqual(obj5, true);

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);