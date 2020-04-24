// SOLUTION 1: Using hashmaps to store values
const sumOfTwo = (arr1, arr2, target) => {
  // Init hashmap
  const obj = {};

  // Loop through arr1 and store the difference as both key and value
  for (let a of arr1) {
    const difference = target - a;
    obj[difference] = difference;
  }

  //Loop through arr2 and check if the each array value is equivalent to hashmap key
  for (let a of arr2) {
    if (obj.hasOwnProperty(a)) {
      return true;
    }
  }
  return false;
};
