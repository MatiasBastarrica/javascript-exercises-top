const removeFromArray = function (array, a, b, c, d) {
  let filtered;
  filtered = array.filter(
    (item) => !(item === a || item === b || item === c || item === d)
  );
  return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
