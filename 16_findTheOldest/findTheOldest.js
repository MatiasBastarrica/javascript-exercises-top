const findTheOldest = function (arr) {
  let oldestBirthYear = arr.sort((a, b) => a.yearOfBirth - b.yearOfBirth);

  if (oldestBirthYear[0].yearOfDeath === undefined) {
    return oldestBirthYear[0];
  }

  let inAgeOrder = arr.sort((a, b) => {
    let lifeSpanOfA = a.yearOfDeath - a.yearOfBirth;
    let lifeSpanOfB = b.yearOfDeath - b.yearOfBirth;
    if (!(lifeSpanOfB - lifeSpanOfA)) {
      return 1;
    }
    return lifeSpanOfB - lifeSpanOfA;
  });

  return inAgeOrder[0];
};

// Do not edit below this line
module.exports = findTheOldest;
