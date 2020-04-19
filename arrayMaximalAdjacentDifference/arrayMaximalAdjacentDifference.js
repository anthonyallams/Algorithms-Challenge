// SOLUTION 1: Using for-loop and Math.abs()

const arrayMaximalAdjacentDifference = (arr) => {
  // Init final Max value
  let finalMax = 0;

  // Loop through the array
  // Subtract the current array element from next element to get current max
  // Compare final max and current max value to get final max value and return it.
  for (let i = 0; i < arr.length - 1; i++) {
    const currentMax = Math.abs(arr[i] - arr[i + 1]);
    finalMax = Math.max(finalMax, currentMax);
  }
  return finalMax;
};

/*
ALTERNATIVELY
    const arrayMaximalAdjacentDifference = (arr) => {
  // Init final Max value by subtracting first two array values
  let finalMax = Math.max(arr[0] - arr[1]);

  // Iterate through the array
  // Subtract the previous array element from current to get current max
  // Compare final max and current max value to get final max value and return it.
  for (let [i, v] of arr.entries()) {
    const currentMax = Math.abs(arr[i-1] - arr[i]);
    finalMax = finalMax > currentMax ? finalMax : currentMax;
  }
  return finalMax;
};
*/
