/**
 * Two Sum
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

 let arr = [2, 7, 11, 15 , 18 , 4 , 3];
  let sum = 26;

 for (let index = 0; index < arr.length; index++) {
    let noToSearch = sum - arr[index];
    if (arr.includes(noToSearch)){
        console.log([ index , arr.indexOf(noToSearch) ]);
    }
     
 }