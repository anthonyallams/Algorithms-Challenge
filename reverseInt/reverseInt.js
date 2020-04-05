// SOLUTION 1: Using string and array methods

const reverseInt = (int) =>
  // Convert integer to string and then to array using split
  // Reverse the array and convert back to string using join
  // Convert string to integer using parseInt
  // Check for +ve or -ve values using Math.sign
  parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
