const takeUntil = require("../takeUntil");
const { expect } = require("chai");

describe("#takeUntil", () => {
  it("should return an array with all items from a provided array until the callback provided returns a truthy value", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

    const result1 = takeUntil(data1, x => x < 0);
    const expectedResult1 = [1, 2, 5, 7, 2];

    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

    const result2 = takeUntil(data2, x => x === ',');
    const expectedResult2 = ['I\'ve', 'been', 'to', 'Hollywood'];

    expect(result1).to.deep.equal(expectedResult1);
    expect(result2).to.deep.equal(expectedResult2);
  });
});