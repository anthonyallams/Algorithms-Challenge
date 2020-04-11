SOLUTION 1: Using iterative approach

const fibonacci = n => {
        //Result array holds the fibonacci array till the nth-entry 
        //Fibonacci of 0 & 1 are always constant, so manually insert them to the array.
    const result = [0,1]
    
        //Loop through n, starting from 2, since 0 & 1 are always in result
        for(let i=2; i<=n; i++){
            //Get the value of the previous two entries(how fibs are generated) and add them.
            const a = result[i-1];
            const b = result[i-2];

            result.push(a+b)
        } 
        return result[n];
}

SOLUTION 2: Using recursive Solution 

const fibonacci = n => {
    //Since fibonacci of 0 & 1 are constant, return n if its 0 or 1
    if(n < 2){ return n}
    
    //Recursively call fibonacci on previous 2 entries till it returns to the nth-entry 
    return fibonacci(n-1) + fibonacci(n-2)
}