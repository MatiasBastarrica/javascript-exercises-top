const getTheTitles = function (arr) {
  let result = [];
  for (item of arr) {
    result.push(item.title);
  }
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
