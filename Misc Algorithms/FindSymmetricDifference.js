// Symmetric Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
// and  ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"]

//ES6 Way!!
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  let symmetricDiff = arr1
    .filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)));
  return symmetricDiff;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
