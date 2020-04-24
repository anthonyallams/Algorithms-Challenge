// SOLUTION 1: Using hashmaps to store values and compare
const twoSum = (nums, target) => {
  // Define hashmap for storing key values of the occurence
  const obj = {};
  // Loop through the nums array
  //Get difference between target and each item
  // Store as index2 the value of the difference, then check and return it
  for (let [index, value] of nums.entries()) {
    const difference = target - nums[index];
    const index2 = obj[difference];
    if (index2 !== undefined) {
      return [index2, index];
    } else {
      obj[nums[index]] = index;
    }
  }
};

// SOLUTION 2: Using the suboptimal nested for loop
const twoSum = (nums, target) => {
  // Loop through nums array twice and compare the each value against the other to get and return difference from target
  for (let [i1, v] of nums.entries()) {
    for (let [i2, v] of nums.entries()) {
      if (nums[i1] + nums[i2] === target) {
        return [i1, i2];
      }
    }
  }
};
