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
