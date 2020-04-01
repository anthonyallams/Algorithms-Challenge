//SOLUTION 1: Using for loop
const reverseString = str => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

// SOLUTION 2: Using reverse methods
const reverseString2 = str =>
  str
    .split("")
    .reverse()
    .join("");

// SOLUTION 3: Using reduce
const reverseString3 = str => {
  return str.split("").reduce((reversed, value) => {
    return value + reversed;
  }, "");
};

reverseString3("apple");
