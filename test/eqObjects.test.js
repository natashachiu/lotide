const eqObjects = require("../eqObjects");
const { expect } = require("chai");

describe("#eqObjects", () => {
  it("should return true if the two objects are equal", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };

    const result = eqObjects(shirtObject, anotherShirtObject);
    expect(result).to.be.true;
  });

  it("should return false if the two objects are not equal", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

    const result = eqObjects(shirtObject, longSleeveShirtObject);
    expect(result).to.be.false;
  });

  it("should return true if the two objects with nesting are equal", () => {
    const result1 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    const result2 = eqObjects({ a: { z: { y: 0 } }, b: 2 }, { a: { z: { y: 0 } }, b: 2 });
    const result3 = eqObjects({ a: { z: { y: 0 }, d: { e: { f: 1 } } }, b: 2 }, { a: { z: { y: 0 }, d: { e: { f: 1 } } }, b: 2 },);

    expect(result1).to.be.true;
    expect(result2).to.be.true;
    expect(result3).to.be.true;
  });

  it("should return false if the two objects with nesting are not equal", () => {
    const result1 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    const result2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 });

    expect(result1).to.be.false;
    expect(result2).to.be.false;
  });
});