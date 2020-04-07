// SOLUTION 1: Using reduce and recursion
const flattenArray = (array) => {
  // Run reduce on the array value
  return array.reduce((acc, val) => {
    // Check if current array value is actually an array
    if (Array.isArray(val)) {
      // If so, run recursive flattenArray on it and concat method to merge this array value into the acc
      acc = acc.concat(flattenArray(val));
    } else {
      // Run the push method to add array value to the end of the acc;
      acc.push(val);
    }
    return acc;
  }, []);
};
