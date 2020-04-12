
SOLUTION: Using memoizer function to record previous function calls

//Previous fib function to be optimized 
const SlowFib = n => {
    if(n < 2){ return n}
    return fib(n-1) + fib(n-2)
}

// Memoization function
const memoizer = fn => {
    // Record previous functions calls on hash map
    const cache = {}

    // Anonymous function used to store result of the slow fib function
    return (...args) => {
        // If the function has been called with args, store in cache
        if(cache[args]){
            cache[args];
        }
        // Else, call the function and store in result
        result = fn.apply(this, args)
        cache[args] = result;

        return result;
    }
}

const fib = memoizer(SlowFib)
fib(10)
