// SOLUTION 1: Using for-of loop to get the diference and increment

const arrayChange = (arr) => {
  let count = 0;

  //Loop through the array
  for (let [i, v] of arr.entries()) {
    // Check if current value is greater or equal than next value
    // If yes, get difference by adding 1 to current and thereafter
    // Set the next array value to current + 1;
    // Inrement count with difference
    if (arr[i] >= arr[i + 1]) {
      const difference = arr[i] + 1 - arr[i + 1];
      arr[i + 1] = arr[i] + 1;
      count += difference;
    }
  }
  return count;
};
