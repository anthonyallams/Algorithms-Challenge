SOLUTION 1: Using sort method to sort strings and compare.


// sortString helper function: Replace non-letter characters from string
// Convert string to lowercase and split to convert to array
// Sort alphabetically and join
const sortString = str => str.replace(/[^\w]/gi, '').toLowerCase().split('').sort().join("")

// anagram function: Use the sorted string
const anagrams = (str1, str2) => sortString(str1) === sortString(str2)




SOLUTION 2: Using object character map to compare characters

// objCharMap function
const objCharMap = str => {
    const obj = {}
    const strMod = str.replace(/[^\w]/gi, "").toLowerCase();
        
    //Iterate through the strMod and store the char occurence as key values in the obj 
    for(let s of strMod){
        obj[s] = obj[s] + 1 || 1;
    }
    return obj;
}

const anagrams = (str1, str2 )=> {
    const cleanStr1 = objCharMap(str1);
    const cleanStr2 = objCharMap(str2);

        // Compare the object keys for the two strs for equality
    if(Object.keys(cleanStr1).length !== Object.keys(cleanStr2).length){
        return false;
    }

        //Iterate through the str and compare the obj values(char occurence)
    for(let s of str1){
        if(cleanStr1[s] !== cleanStr2[s]){
            return false
        }
    }
    return true;
}
















