const totalIntegers = function (deep) {
  if (typeof deep !== "object" || deep == null) {
    return undefined;
  }
  let integerCount = 0;
  const values = Object.values(deep);
  const integerValues = values.filter((value) => Number.isInteger(value));
  integerCount += integerValues.length;
  const nestedObjects = values.filter((value) => {
    return typeof value === "object" && value !== null;
  });
  nestedObjects.forEach((obj) => {
    integerCount += totalIntegers(obj);
  });
  return integerCount;
};

// Do not edit below this line
module.exports = totalIntegers;
