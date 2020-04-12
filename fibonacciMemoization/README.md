# CHALLENGE

    Improve the runtime(performance) of fibonacci recursive solution using memoization. Memoization is the art of storing arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the functin call again.

    SLOW FIBONACCI:
    const SlowFibonacci = n => {
        if(n < 2){ return n}
        return fibonacci(n-1) + fibonacci(n-2)
    }

## EXAMPLE

    memoizer(10) ==> 55
    memoizer(3) ==> 2

## BEST PRACTICES

    1. Ensure the code is readable and maintainable
    2. Ensure the code is clean and properly linted
    3. Ensure the code is scalabile
    4. Ensure code is tested
