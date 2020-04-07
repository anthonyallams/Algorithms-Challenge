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

// SOLUTION 2: Using for of loop to loop through str and compare with vowels to get count
const vowelCount = (str) => {
  const strArray = str.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  //Iterate through the string array
  for (let str of strArray) {
    //If char in the array is contained in the vowels array, increment
    if (vowels.includes(str)) {
      count++;
    }
  }
  return count;
};
