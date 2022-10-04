function countVowels(word) {
  if (typeof word !== "string") return undefined;

  let count = 0;

  for (const char of word) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count = count + 1;
    }
  }

  return count;
}

module.exports = {
  countVowels,
};
