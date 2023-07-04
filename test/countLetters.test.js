const countLetters = require("../countLetters");
const { expect } = require("chai");

describe("#countLetters", () => {
  it("should return object with number of occurrences of each appearing letter", () => {
    const result1 = countLetters('LHL');
    const expectedResult1 = { L: 2, H: 1 };

    const result2 = countLetters("lighthouse in the house");
    const expectedResult2 = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };


    expect(result1).to.deep.equal(expectedResult1);
    expect(result2).to.deep.equal(expectedResult2);
  });
});