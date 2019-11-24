// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
function mutation(arr) {
  let [str1, str2] = arr;
  const strElem = [...str2.toLowerCase()];
  str1 = str1.toLowerCase();
  return strElem.every(item => str1.includes(item));
}
mutation(["hello", "hey"]);
