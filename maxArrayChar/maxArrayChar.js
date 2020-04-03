// SOLUTION 1: Using object to store values

const maxArrayChar = array => {
  const objArr = {};
  const maxChar = "";
  const max = 0;

  for (let arr of array) {
    objArr[arr] = (objArr[arr] || 0) + 1;
  }

  for (let obj in objArr) {
    if (objArr[obj] > max) {
      max = objArr[obj];
      maxChar = obj;
    }
  }
  return maxChar;
};
