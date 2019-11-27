/**
 * Three Sum
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique
 * triplets in the array which gives the sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

let front = 0;
let rear = 0;
let array = [-1, 0, 1, 2, -1, -4];
array = array.sort();
let resultsArr = [];
for (let index = 0; index < array.length; index++) {
    let item = array[index];
    (front = index + 1), (rear = array.length - 1);
    while (front < rear) {
        let itemToSearch = item + ( array[front] + array[rear] );
        if( itemToSearch === 0 ){
            resultsArr.push( [ item , array[front] , array[rear] ] );
            front++;
            rear--;
        }
        else if( itemToSearch > 0 ){
            rear--;
        }
        else{
            front ++;
        }
        
    }
    
}
console.log(resultsArr);
