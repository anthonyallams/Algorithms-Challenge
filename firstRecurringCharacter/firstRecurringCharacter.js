// SOLUTION 1: Using for of loop and object to store array values and retrieve first recurring character

const firstRecurringCharacter = (arr) => {
  const obj = {};
  let firstChar = "";

  // Iterate through the array
  for (let [i, v] of arr.entries()) {
    //If value of array char exists in obj, make it first recurring char and return it
    if (obj[v]) {
      firstChar = v;
      return firstChar;
    } else {
      // Else, set the value to 1
      obj[v] = 1;
    }
  }
  return undefined;
};
