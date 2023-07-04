const flatten = require("../flatten");
const { expect } = require("chai");


describe("#flatten", () => {
  it("should return an array with all nesting removed", () => {
    const result1 = flatten([1, 2, [3, 4], 5, [6]]);
    const expectedResult1 = [1, 2, 3, 4, 5, 6];

    const result2 = flatten([[1, 2, 3], 4, 5, [6]]);
    const expectedResult2 = [1, 2, 3, 4, 5, 6];

    const result3 = flatten([[1, 2, 3, 4, 5, 6]]);
    const expectedResult3 = [1, 2, 3, 4, 5, 6];

    expect(result1).to.deep.equal(expectedResult1);
    expect(result2).to.deep.equal(expectedResult2);
    expect(result3).to.deep.equal(expectedResult3);
  });
});