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

// SOLUTION 2: Using nested loops to compare subsequent chars in the array
const firstRecurringCharacter = (arr) => {
  // Iterate through the array.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // If values in array i&j are equal && both values are not at same position in the array(ie comparing char to itself)
      if (arr[i] === arr[j] && arr.indexOf(arr[i]) !== i) {
        return arr[i];
      }
    }
  }
  return undefined;
};
