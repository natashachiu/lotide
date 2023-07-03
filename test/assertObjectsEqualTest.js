const assertObjectsEqual = require("../assertObjectsEqual");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, longSleeveShirtObject);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
// assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);