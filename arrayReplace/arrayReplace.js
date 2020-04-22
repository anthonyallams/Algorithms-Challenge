// SOLUTION 1: Using reduce method
const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
  return inputArray.reduce((acc, arr) => {
    arr === elemToReplace ? (arr = substitutionElem) : arr;
    // if (arr === elemToReplace) {
    //   arr = substitutionElem;
    // }
    return acc.concat(arr);
  }, []);
};

// SOLUTION 2: Using map method and modifying inputArray
const arrayReplace2 = (inputArray, elemToReplace, substitutionElem) => {
  inputArray.map((arr, index) => {
    arr === elemToReplace
      ? (inputArray[index] = substitutionElem)
      : inputArray[index];
  });
  return inputArray;
};

// SOLUTION 3: Using for of loop and modifying the inputArray
const arrayReplace2 = (inputArray, elemToReplace, substitutionElem) => {
  for (let [i, v] of inputArray.entries()) {
    inputArray[i] === elemToReplace
      ? (inputArray[i] = substitutionElem)
      : inputArray[i];
  }
  return inputArray;
};
