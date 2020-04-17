# CHALLENGE

    Given an array of integers, perform the following operations untill the array contains only one element.
    * On the 1st, 3rd, 5th etc iterations, replace each pair of consecutive elements  with their sum.
    * On the 2nd, 4th, 6th etc iterations, replace each pair of consecutive elements with their product.

    After the algorithm has finished, there will be a single element left in the array. Return that element.

## EXAMPLE

    For inputArray = [1,2,3,4,5,6,7,8], the output should be arrayConversion(inputArray) = 186.
    We have [1,2,3,4,5,6,7,8] -> [3,7,11,15] -> [21,165] -> [186], so the answer is 186
