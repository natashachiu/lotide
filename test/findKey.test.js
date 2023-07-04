const findKey = require("../findKey");
const { expect } = require("chai");


describe("#findKey", () => {
  it("should return the first key for which the callback returns a truthy value", () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2);
    const expectedResult = "noma";

    expect(result).to.equal(expectedResult);

  });
  it("should return `undefined` if no key returns a truthy value for the callback", () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 5);
    const expectedResult = undefined;

    expect(result).to.equal(expectedResult);
  });
});