const middle = function(arr) {
  const midpoint = Math.floor(arr.length / 2);

  if (arr.length < 3) return [];

  return (arr.length % 2) ?
    [arr[midpoint]] :
    arr.slice(midpoint - 1, midpoint + 1);
};

module.exports = middle;