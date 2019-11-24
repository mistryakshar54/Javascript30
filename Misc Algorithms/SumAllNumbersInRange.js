// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10
//This solution is based on the Arithmetic Progression formula : Sum of N nos : N/2(2A + (N - 1)D)
//A : First term of the progression
//N : Number of elements
//D : Difference between the numbers ( in our case is 1)

function sumAll(arr) {
  let a = Math.min(...arr);
  let n = Math.abs(arr[0] - arr[1]) + 1;
  return (n / 2) * (2 * a + (n - 1));
}
sumAll([1, 4]);
