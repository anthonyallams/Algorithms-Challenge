// SOLUTION 1: Using for loop
const isDuplicateArray = array => {
  for (let i = 0; i < array.length; i++) {
    if (array.lastIndexOf(array[i]) !== array.indexOf(array[i])) {
      return true;
    }
  }
  return false;
};
