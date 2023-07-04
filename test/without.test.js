const without = require("../without");
const { expect } = require("chai");


describe("#without", () => {
  it("should return a subset of a given array, removing unwanted elements", () => {
    const result1 = without([1, 2, 3], [1]);
    const expectedResult1 = [2, 3];

    const result2 = without(["1", "2", "3"], [1, 2, "3"]);
    const expectedResult2 = ["1", "2"];

    const result3 = without(["1", "2", 5], []);
    const expectedResult3 = ["1", "2", 5];

    const result4 = without([1, "2", "3"], ["3", 4, 1]);
    const expectedResult4 = ["2"];

    expect(result1).to.deep.equal(expectedResult1);
    expect(result2).to.deep.equal(expectedResult2);
    expect(result3).to.deep.equal(expectedResult3);
    expect(result4).to.deep.equal(expectedResult4);
  });
  it("should return an empty array if unwanted elements are not a part of the initial array", () => {
    const result = without([1, 4, 9], [4, 9, 1]);
    const expectedResult = [];

    expect(result).to.deep.equal(expectedResult);
  });
});
