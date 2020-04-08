//SOLUTION 1: Using for loop and switch statement
const fizzBuzz = () => {
  let output = 0;
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
