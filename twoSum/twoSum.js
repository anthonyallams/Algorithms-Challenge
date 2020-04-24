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
    if (index2 != null) {
      return [index2, index];
    } else {
      obj[nums[index]] = index;
    }
  }
};
