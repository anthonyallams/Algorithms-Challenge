// SOLUTION 1: Using two functions, while loop and push method

const arrayConversion = (arr) => {
  // Variable for holding the odd iteration
  let isOdd = true;

  // Iterate through the array till it has only one value
  // Call sumProduct to sum or multiply the array values
  while (arr.length !== 1) {
    arr = sumProduct(arr, isOdd);
    isOdd = !isOdd;
  }
  // Return the value in the array
  return arr[0];
};

// Function to add the values of odd or multiply the values of even
const sumProduct = (numArr, bool) => {
  let nums = [];
  // Check if the iteration is odd or even and loop through
  if (bool) {
    for (let i = 0; i < numArr.length; i += 2) {
      nums.push(numArr[i] + numArr[i + 1]);
    }
  } else {
    for (let i = 0; i < numArr.length; i += 2) {
      nums.push(numArr[i] * numArr[i + 1]);
    }
  }
  return nums;
};
