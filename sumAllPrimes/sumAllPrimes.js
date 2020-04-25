// SOLUTION 1: Using a helper function to iterate,check for prime and add them
const sumAllPrimes = (num) => {
  let sum = 0;
  // Helper function to check if a number is number is prime
  const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0 && n !== i) {
        return false;
      }
    }
    return true;
  };

  // Loop through the array, check if each no is prime then add to sum
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};
