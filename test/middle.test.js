const { expect } = require("chai");
// const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

describe("#middle", () => {
  it("return [] for [1]", () => {
    expect(middle([1])).to.deep.equal([]);
  });
  it("return [] for [1, 2]", () => {
    expect(middle([1, 2])).to.deep.equal([]);
  });
  it("return [2] for [1, 2, 3]", () => {
    expect(middle([1, 2, 3])).to.deep.equal([2]);
  });
  it("return [3] for [1, 2, 3, 4, 5]", () => {
    expect(middle([1, 2, 3, 4, 5])).to.deep.equal([3]);
  });
  it("return [3] for [1, 2, 3, 4]", () => {
    expect(middle([1, 2, 3, 4])).to.deep.equal([2, 3]);
  });
  it("return [3] for [1, 2, 3, 4, 5, 6]", () => {
    expect(middle([1, 2, 3, 4, 5, 6])).to.deep.equal([3, 4]);
  });
});
