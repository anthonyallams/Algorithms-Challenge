// SOLUTION 1: Using Math.floor

// Check the avg; Round it to the lowest value and use as index to get the array value
const medianIntegerValue = (arr) => arr[Math.floor((arr.length - 1) / 2)];

// ALTERNATE SOLUTION: Checking for even and odd values
const medianIntegerValue = (arr) => {
  const isEven = arr.length % 2 === 0;

  return isEven ? arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)];
};
