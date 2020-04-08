//SOLUTION 1: Using for loop and switch statement
const fizzBuzz = () => {
  let output = "";
  //Iterate from 1 to 100
  //Run switch statement to check for conditions
  //Store the result in output variable
  for (let i = 1; i <= 100; i++) {
    switch (true) {
      case i % 15 === 0:
        output = "FizzBuzz";
        break;

      case i % 3 === 0:
        output = "Fizz";
        break;

      case i % 5 === 0:
        output = "Buzz";
        break;

      default:
        output = i;
        break;
    }
    console.log(output);
  }
};

// SOLUTION 2: Implement FizzBuzz without using for loop
// Using Array.map function
const fizzBuzz = () => {
  let output = "";
  //Array spread to get 100 arrays of undefined values and index 0-99
  //map the array starting at index i
  return [...Array(100)].map((_, i) => {
    //Increment index to start at 1
    //Run the switch statement for conditions and check for conditions
    //Store the result in output
    i = i + 1;
    switch (true) {
      case i % 15 === 0:
        output = "FizzBuzz";
        break;
      case i % 3 === 0:
        output = "Fizz";
        break;
      case i % 5 === 0:
        output = "Buzz";
        break;
      default:
        output = i;
        break;
    }
    return output;
  });
};
