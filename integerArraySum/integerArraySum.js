// SOLUTION: Using reduce helper and rest operator

const integerArraySum = (...nums) => {
  // Check if index 0 is array or ineger
  // If array, flatten the whole array and sum using reduce
  if (Array.isArray(nums[0])) {
    let numArr = nums.flat();
    return numArr.reduce((acc, num) => {
      return acc + num;
    }, 0);
  } else {
    return nums.reduce((acc, num) => {
      return acc + num;
    }, 0);
  }
};
