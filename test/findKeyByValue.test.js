const findKeyByValue = require("../findKeyByValue");
const { expect } = require("chai");

describe("#findKeyByValue", () => {
  it("should return the first key which contains the given value", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    const result1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expectedResult1 = "drama";

    const result2 = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
    const expectedResult2 = "comedy";

    const result3 = findKeyByValue(bestTVShowsByGenre, "The Expanse");
    const expectedResult3 = "sci_fi";

    expect(result1).to.equal(expectedResult1);
    expect(result2).to.equal(expectedResult2);
    expect(result3).to.equal(expectedResult3);
  });


  it("should return `undefined` if no key with that given value is found", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    const result = findKeyByValue(bestTVShowsByGenre, "The '70s Show");
    const expectedResult = undefined;

    expect(result).to.equal(expectedResult);
  });
});