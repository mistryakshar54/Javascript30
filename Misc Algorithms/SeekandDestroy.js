// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are
// of the same value as these arguments.
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]

function destroyer(arr) {
  // Remove all the values
  let args = [...arguments];
  let array = args.shift();
  return array.filter(x => !args.includes(x));
}

destroyer(
  [
    "possum",
    "trollo",
    12,
    "safari",
    "hotdog",
    92,
    65,
    "grandma",
    "bugati",
    "trojan",
    "yacht"
  ],
  "yacht",
  "possum",
  "trollo",
  "safari",
  "hotdog",
  "grandma",
  "bugati",
  "trojan"
);