const permutations = function (array) {
  if (array.length === 0) {
    return [[]];
  } else if (array.length === 1) {
    return [[1]];
  }

  let numToAdd = array[array.length - 1];

  let prevPartitions;
  prevPartitions = partitions(array.toSpliced(array.length - 1, 1));

  let partitions = [];

  prevPartitions.forEach((partition) => {
    for (let i = 0; i < numToAdd; i++) {
      partitions.push(partition.splice(i, 0, numToAdd));
    }
  });

  return partitions;
};

// Do not edit below this line
module.exports = permutations;
