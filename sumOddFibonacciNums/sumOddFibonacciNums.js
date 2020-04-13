// SOLUTION 1: Using for loop Iterative approach
const sumOddFibonacciNums = (n) => {
  let sumOdds = 0;
  const results = [0, 1];

  // Loop through from 2 to n and add the prev and current values to results
  for (let i = 2; i <= n; i++) {
    const a = results[i - 1];
    const b = results[i - 2];

    results.push(a + b);
  }

  // Loop through result array. Check if each value is odd and less than n
  // Add the qualified values to sumOdds
  results.forEach((result) => {
    if (result % 2 !== 0 && result <= n) {
      sumOdds += result;
    }
  });
  return sumOdds;
};

// SOLUTION 2: Using Iterative while loop
const sumOddFibonacciNums2 = (n) => {
    let sumOdds = 0;
    let prev = 0;
    let curr = 1;
  
    // While the current value is less than n
    // Check if the value is odd and add it to sumOdds
    while (curr <= n) {
      if (curr % 2 !== 0) {
        sumOdds += curr;
      }
      // Add the two preceding values to get the current value and return the sumOdds
      const newCurr = prev + curr;
      prev = curr;
      curr = newCurr;
    }
  
    return sumOdds;