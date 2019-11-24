// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let iterations = Math.ceil(arr.length / size);
  let finalArr = [];
  while (iterations > 0) {
    finalArr.push(arr.splice(0, size));
    iterations--;
  }
  return finalArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
