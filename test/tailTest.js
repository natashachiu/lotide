const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const one = tail(["one"]);
assertEqual(one.length, 0);
assertEqual(one[0], undefined);

const empty = tail([]);
assertEqual(empty.length, 0);
assertEqual(empty[0], undefined);