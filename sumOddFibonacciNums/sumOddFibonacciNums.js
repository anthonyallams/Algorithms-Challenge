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
