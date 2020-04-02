// SOLUTION 1: Using for loop to compare each array value
const isDuplicateArray = array => {
  for (let i = 0; i < array.length; i++) {
    if (array.lastIndexOf(array[i]) !== array.indexOf(array[i])) {
      return true;
    }
  }
  return false;
};

// SOLUTION 2: Using set function to compare original array and filtered array
const isDuplicateArray1 = array => {
  return array.length !== [...new Set(array)].length;
};

// SOLUTION 3: Using some function
const isDuplicateArray2 = array => {
  return array.some((value, index) => {
    return array.indexOf(value) !== index;
  });
};

// SOLUTION 4: Using object to store and compare values
const isDuplicateArray3 = array => {
  const arrayObj = {};

  for (let arr of array) {
    if (arrayObj[arr]) {
      return true;
    } else {
      arrayObj[arr] = 1;
    }
  }
  return false;
};

// SOLUTION 5: Using sort and for loop to check corresponding values for equality
const isDuplicateArray3 = array => {
  let sortedArray = array.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      return true;
    }
  }
  return false;
};

isDuplicateArray([1, 2, 3, 4, 5, 1, 2]);
isDuplicateArray([1, 2, 3, 4, 5]);
