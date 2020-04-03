// SOLUTION 1: Using object to store values. 

const maxArrayChar = array => {
  //Declare variables to be used
  let objArr = {};
  let maxChar = "";
  let max = 0;

  //Iterating through the array to get values and their count
  for (let arr of array) {
    objArr[arr] = (objArr[arr] || 0) + 1;
  }

  Iterating through objectArr to get the array element with max character
    for (let obj in objArr) {
      if (objArr[obj] > max) {
        max = objArr[obj];
        maxChar = obj;
      }
    }
    return maxChar;


};

// SOLUTION 2: Using nested for loop and conditionals. Not ideal solution cos it is 0(n^2)
const maxArrayChar2 = array => {
    //Declare variables to be used
    let maxChar = ""; //Storing the max character
    let max = 1; //Default char frequency
    let count = 0; //Reference counter frequency for every char in the loop
  
    //Iterating through the array using nested for loop
    for(let i=0; i<array.length; i++){
        for(let j=1; j< array.length; j++){
            // Checking for >1 occurence of character
            if(array[i] === array[j] && array.indexOf(array[i] !== i)){
                count++
                if(count>max){
                    max = count;
                    maxChar = array[i];
                }
            }
        }
        count = 0; //Reseting the count for subsequent loops
    }
    return maxChar;
  
  
  };

maxArrayChar(["John", "Lee", "Ki", "Max", "John", "Ki", "John"]);
maxArrayChar([1, 2, 3, 4, 5, 1, 3, 4, 4, 1, 4]);
