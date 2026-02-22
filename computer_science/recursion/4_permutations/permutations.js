const permutations = function (array) {
  if (array.length === 0) {
    return [[]];
  } else if (array.length === 1) {
    return [[1]];
  }

  let numToAdd = array[array.length - 1];

  let prevPermutations;
  prevPermutations = permutations(array.toSpliced(numToAdd - 1, 1));

  let permutationsArr = [];

  prevPermutations.forEach((partition) => {
    for (let i = 0; i < numToAdd; i++) {
      let newPartition = partition.toSpliced(i, 0, numToAdd);
      permutationsArr.push(newPartition);
    }
  });

  return permutationsArr;
};
// Do not edit below this line
module.exports = permutations;
