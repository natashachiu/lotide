const map = require("../map");
const { expect } = require("chai");


describe("#map", () => {
  it("should return a new array based on the results of the callback function", () => {
    const words = ["ground", "control", "to", "major", "tom"];

    const result1 = map(words, word => word[0]);
    const expectedResult1 = ['g', 'c', 't', 'm', 't'];

    const result2 = map(words, word => word.split("").reverse().join(""));
    const expectedResult2 = ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot'];

    const result3 = map(words, word => word[0].toUpperCase() + word.slice(1));
    const expectedResult3 = ["Ground", "Control", "To", "Major", "Tom"];

    const result4 = map(words, word => word.split("").filter(letter => letter !== "o").join(""));
    const expectedResult4 = ['grund', 'cntrl', 't', 'majr', 'tm'];

    expect(result1).to.deep.equal(expectedResult1);
    expect(result2).to.deep.equal(expectedResult2);
    expect(result3).to.deep.equal(expectedResult3);
    expect(result4).to.deep.equal(expectedResult4);
  });
});