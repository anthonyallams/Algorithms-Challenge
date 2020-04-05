// SOLUTION 1: Using Object hash table to store values and determine the palindrome

const rearrangePalindrome = (str) => {
  // Declare variables
  const objCollection = {};
  const strArray = str.split("");
  let oddCount = 0;

  // Iterate through the array using for of loop and store no of character occurence in objCollection
  for (let char of strArray) {
    if (objCollection[char]) {
      objCollection[char]++;
    } else {
      objCollection[char] = 1;
    }

    // objCollection[char] = (objCollection[char] || 0) + 1;
  }

  //Iterate through objCollection and check no if no of odd characters is more than 1(Odd values > 1 dont a palindrome make).

  for (let obj in objCollection) {
    if (objCollection[obj] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount > 1 ? false : true;
};
