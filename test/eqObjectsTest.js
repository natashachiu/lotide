const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");


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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);