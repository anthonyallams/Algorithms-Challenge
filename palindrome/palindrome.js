// SOLUTION 1: Using basic string methods
const palindrome = (str) => {
  // Convert str to array, reverse, join and compare the result to original string
  return str.split("").reverse().join("") === str;
};
