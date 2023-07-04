const countOnly = require("../countOnly");
const { expect } = require("chai");

describe("#countOnly", () => {
  it("should return an object with number of appearances of names with a `true` value", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    const expectedResult = { Fang: 2, Jason: 1 };

    expect(result).to.deep.equal(expectedResult);
  });
});