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

reverseString2("apple");
