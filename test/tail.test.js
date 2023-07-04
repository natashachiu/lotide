const { expect } = require("chai");
// const assertEqual = require("../assertEqual");
const tail = require("../tail");

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    expect(tail(["Hello", "Lighthouse", "Labs"])).to.deep.equal(["Lighthouse", "Labs"]);
  });
  it('expect original array ["Yo Yo", "Lighthouse", "Labs"] to be unmodified', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    expect(words.length).to.equal(3);
  });
  it('returns [] for ["one"]', () => {
    expect(tail(["one"])).to.deep.equal([]);
  });
  it('returns [] for []', () => {
    expect(tail([])).to.deep.equal([]);
  });
});