const head = require("./head");
const middle = require("./middle");
const tail = require("./tail");
const assertArraysEqual = require("./ assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const letterPositions = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");


module.exports = {
  head: head,
  middle: middle,
  tail: tail,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};