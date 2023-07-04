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

* `head()`: given an array, returns the first element.
* `middle()`: given an array, returns the middle element.
* `tail()`: given an array, returns all elements expect the first element.
* `assertEqual()`: given an expected value and actual value, logs to the console a message indicating if the two values are equal or not.
* `eqArrays()`: given two arrays, returns true if they are equal and false otherwise.
* `assertArraysEqual()`: given an expected array and actual array, logs to the console a message indicating if the two arrays are equal or not.
* `eqObjects()`: given two objects, returns true if they are equal and false otherwise.
* `assertObjectsEqual()`: given an expected object and actual object, logs to the console a message indicating if the two objects are equal or not.
* `countLetters()`: given a string, returns an object containing counts of each letter in the string.
* `countOnly()`: given an array and an object indicating which elements should be counted, returns an object containing counts of everything that the input object listed.
* `letterPositions()`: given a string, returns an object with the indices of which each letter in the string appears.
* `findKey()`: given an object and a callback function, returns the first key of an object that satisfies the condition specified in the callback function.
* `findKeyByValue()`: given an object and a value of the object, returns the object's key that matches the value.
* `takeUntil()`: given an array and a callback function, returns an array that holds the same values up until the condition specified in the callback function.
* `without()`: give two arrays, returns a subset of a given array, removing unwanted elements.
* `flatten()`: given an array containing elements including nested arrays of elements, returns an array that has all nested arrays "flattened".
* `map()`: given an array and a callback function, returns an array that applies the changes made to each element via the callback function.






