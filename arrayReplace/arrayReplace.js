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

// SOLUTION 2: Using map method
const arrayReplace2 = (inputArray, elemToReplace, substitutionElem) => {
  inputArray.map((arr, index) => {
    arr === elemToReplace
      ? (inputArray[index] = substitutionElem)
      : inputArray[index];
  });
  return inputArray;
};
