// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (!results[item] && itemsToCount[item])
      results[item] = 0;

    if (results[item] >= 0)
      results[item]++;
  }

  return results;
};

module.exports = countOnly;