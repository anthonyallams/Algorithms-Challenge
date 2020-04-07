// SOLUTION 1: Using for loop to

const capitalize = (sen) => {
  // Capitalize the character with index 0
  let capitalized = sen[0].toUpperCase();

  // Iterate through the sentence, starting at index 1
  for (let i = 1; i < sen.length; i++) {
    // Check if the preceding character is space or letter
    if (sen[i - 1] === " ") {
      // Capitalize the next character if preceding char is space
      capitalized += sen[i].toUpperCase();
    } else {
      // If not, just add the characters up
      capitalized += sen[i];
    }
  }
  return capitalized;
};
