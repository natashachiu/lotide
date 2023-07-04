const letterPositions = require("../letterPositions");
const { expect } = require("chai");

describe("#letterPositions", () => {
  it("should return an object containing all the indices in the string where each character is found", () => {
    const result1 = letterPositions("hello world");
    const expectedResult1 = {
      h: [0],
      e: [1],
      l: [2, 3, 9],
      o: [4, 7],
      w: [6],
      r: [8],
      d: [10]
    };

    const result2 = letterPositions("lighthouse in the house");
    const expectedResult2 = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };

    expect(result1).to.deep.equal(expectedResult1);
    expect(result2).to.deep.equal(expectedResult2);

  });
});