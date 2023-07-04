const eqArrays = require("../eqArrays");
const { expect } = require("chai");

describe("#eqArrays", () => {
  it("should return true if the two arrays are equal", () => {
    const result1 = eqArrays([1, 2, 3], [1, 2, 3]);
    const result2 = eqArrays(["1", "2", "3"], ["1", "2", "3"]);

    expect(result1).to.be.true;
    expect(result2).to.be.true;
  });

  it("should return false if the two arrays are not equal", () => {
    const result1 = eqArrays([1, 2, 3], [3, 2, 1]);
    const result2 = eqArrays(["1", "2", "3"], ["1", "2", 3]);

    expect(result1).to.be.false;
    expect(result2).to.be.false;
  });

  it("should return true if the two arrays with nesting are equal", () => {
    const result1 = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    const result2 = eqArrays([[2, [3]], [4]], [[2, [3]], [4]]);
    const result3 = eqArrays([[2, [3]], [4, [5, [6]]]], [[2, [3]], [4, [5, [6]]]]);

    expect(result1).to.be.true;
    expect(result2).to.be.true;
    expect(result3).to.be.true;
  });

  it("should return false if the two arrays with nesting are not equal", () => {
    const result1 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    const result2 = eqArrays([[2, 3], [4]], [[2, 3], 4]);

    expect(result1).to.be.false;
    expect(result2).to.be.false;
  });
});