# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @natashachiu/lotide`

**Require it:**

`const _ = require('@natashachiu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: given an array, returns the first item.
* `middle()`: given an array, returns the middle item.
* `tail()`: given an array, returns all items expect the first item.
* `assertEqual()`: given an expected value and actual value, logs to the console a message indicating if the two values are equal or not.
* `eqArrays()`: given two arrays, returns true if they are equal and false otherwise.
* `assertArraysEqual()`: given an expected array and actual array, logs to the console a message indicating if the two arrays are equal or not.
* `eqObjects()`: given two objects, returns true if they are equal and false otherwise.
* `assertObjectsEqual()`: given an expected object and actual object, logs to the console a message indicating if the two objects are equal or not.
* `countLetters()`: given a string, returns an object with the number of times each letter in the string appears.
* `countOnly()`: given an array and an object indicating which items should be counted, returns an object with the number of times the specified items appear in the array.
* `letterPositions()`: given a string, returns an object with the indices of which each letter in the string appears.
* `findKey()`: given an object and a callback function, returns the first key of an object that satisfies the condition specified in the callback function.
* `findKeyByValue()`: given an object and a value of the object, returns the key of the object that matches that value.
* `takeUntil()`: given an array and a callback function, returns an array that holds the same values up until the condition specified in the callback function is met.
* `without()`: give two arrays, returns an array with the items of the second array removed from the first array.
* `flatten()`: given an array, returns an array that has all nested arrays removed.
* `map()`: given an array and a callback function, returns an array that applies the changes made to each item via the callback function.






