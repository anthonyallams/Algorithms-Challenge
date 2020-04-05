// SOLUTION 1: Using basic string methods
const palindrome = (str) => {
  // Convert str to array, reverse, join and compare the result to original string, then return a boolean
  return str.split("").reverse().join("") === str;
};

// SOLUTION 2: Using every function
const palindrome = (str) => {
  //Convert string to array, run every method on it

  return str.split("").every((char, index) => {
    // Check if the first character is equivalent to the last character and vice versa. Return a boolean
    return char === str[str.length - i - 1];
  });
};
