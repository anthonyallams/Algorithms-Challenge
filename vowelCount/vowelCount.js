// SOLUTION 1: Using reduce method to split str and compare to individual vowels
const vowelCount = (str) => {
  const strArray = str.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u"];

  return strArray.reduce((acc, val) => {
    if (vowels.includes(val)) {
      acc++;
    }
    return acc;
  }, 0);
};
