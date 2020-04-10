SOLUTION 1: Using sort method to sort strings and compare.

// Replace non-letter characters from string
// Convert string to lowercase and split to convert to array
// Sort alphabetically and join
const sortString = str => str.replace(/[^\w]/gi, '').toLowerCase().split('').sort().join("")

// Use the sorted string
const anagrams = (str1, str2) => sortString(str1) === sortString(str2)