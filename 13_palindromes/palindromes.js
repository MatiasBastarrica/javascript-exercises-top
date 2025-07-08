const palindromes = function (string) {
  let punctuationMarks = [
    ",",
    ".",
    "-",
    "?",
    "!",
    ":",
    ";",
    "(",
    ")",
    "{",
    "}",
    "'",
    '"',
    "/",
  ];

  function isPunctuationMark(item) {
    return punctuationMarks.includes(item);
  }

  function keepLettersOnly(string) {
    let stringSplitted = string.split("");
    let arrayWithLetters = stringSplitted.filter(
      (item) => !isPunctuationMark(item) && item !== " "
    );
    return arrayWithLetters.join("").toLowerCase();
  }

  let stringFormatted = keepLettersOnly(string);
  let stringFormattedMirrored = stringFormatted.split("").reverse().join("");
  if (!stringFormatted.localeCompare(stringFormattedMirrored)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
