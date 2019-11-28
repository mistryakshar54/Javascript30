
// Plus One
// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
// You may assume the integer do not contain any leading zero, except the number 0 itself.
// The digits are stored such that the most significant digit is at the head of the list.
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.


const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
};
