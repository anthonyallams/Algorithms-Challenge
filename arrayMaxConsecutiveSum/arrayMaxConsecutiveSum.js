// SOLUTION 1: Using kanban Algorithm

const arrayMaxConsecutiveSum = (arr, k) => {
  // Initialize sum and max values to 0
  let sum = 0;
  let max = 0;

  // Get the init sum and max values based on k
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = sum;

  // Loop through the array starting from k to arr.length -1
  for (let i = k - 1; i < arr.length - 1; i++) {
    // Sum will become max of consecutive additions or existing sum
    sum = Math.max(sum, arr[i] + arr[i + 1]);
    max = Math.max(sum, max);
  }
  return max;
};
