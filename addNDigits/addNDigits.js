//SOLUTION 1: Using reduce method

const addNDigits = (n) => {
  // Convert integer to string and split into array
  const nums = n.toString().split("");

  // Use reduce to add the integers together
  return nums.reduce((acc, num) => {
    return acc + parseInt(num);
  }, 0);
};
