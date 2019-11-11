var myArr = ["Saint Martin", "Morocco", "British Indian Ocean Territory", "Aruba", "Taiwan", "Bermuda", "Nepal", "Brazil", "Yemen", "United Kingdom", "Liberia", "Maldives", "Congo - Brazzaville", "Algeria", "French Polynesia", "Colombia", "Vanuatu", "Madagascar", "Central African Republic", "Tanzania", "Serbia", "Bahrain", "Tunisia", "Israel", "Libya", "Kiribati", "Laos", "Faroe Islands", "Lithuania", "Rwanda", "New Caledonia", "Saint Lucia", "Guam", "French Polynesia", "Estonia", "Kiribati", "Turkmenistan", "United Kingdom", "Central African Republic", "Taiwan", "Guinea-Bissau", "Belgium", "United Arab Emirates", "Anguilla", "Midway Islands", "Mali", "São Tomé and Príncipe", "Ethiopia", "Uzbekistan", "Burkina Faso", "Saint Vincent and the Grenadines", "Aruba", "Gabon", "Falkland Islands", "Switzerland", "Western Sahara", "Macau SAR China", "Guinea", "Poland", "Guam", "Uzbekistan", "Panama", "Iran", "Armenia", "Indonesia", "Qatar", "U.S. Miscellaneous Pacific Islands", "Philippines", "Uzbekistan", "Bosnia and Herzegovina", "Kyrgyzstan", "Hungary", "São Tomé and Príncipe", "Moldova", "Grenada", "Wallis and Futuna", "Kuwait", "São Tomé and Príncipe", "Norfolk Island", "Israel", "Germany", "Paraguay", "Panama Canal Zone", "Hong Kong SAR China", "Namibia", "Bhutan", "Micronesia", "Johnston Island", "Panama Canal Zone", "Mongolia", "Mexico", "Bhutan", "Macau SAR China", "Kyrgyzstan", "Canton and Enderbury Islands", "Morocco", "New Caledonia", "Tonga", "Barbados", "Gambia"];

//Array.prototype.filter()

//USE:  To filter array matching the value that we provide
//NOTE: It doesnot mutate the original array!! Filter Method always returns a new Array.

const FILTER_VALUE = 'er';
const filteredArray = myArr.filter(item => item.includes(FILTER_VALUE));
console.log("Array after applying filter" , filteredArray);


//Array.prototype.map()

//USE:  To iterate through the array.
//NOTE: It doesnot mutate the original array!! Map always returns a new Array.

const newArray = myArr.map((item , index) => `${index}. ${item.toUpperCase()}`);
console.log("Array after applying map" , newArray);


var empArr = [
  {
    ID: 1231,
    name: "William",
    age : 28
  },
  {
    ID: 2232,
    name: "Olivia",
    age : 36
  },
  {
    ID: 3464,
    name: "Irene",
    age : 30
  },
  {
    ID: 4564,
    name: "Greta",
    age : 42
  },
  {
    ID: 5743,
    name: "Teagan",
    age : 45
  },
  {
    ID: 6465,
    name: "Elly",
    age : 24
  },
  {
    ID: 7342,
    name: "Alessandra",
    age : 56
  },
  {
    ID: 2853,
    name: "Shay",
    age : 33
  },
  {
    ID: 1649,
    name: "Daron",
    age : 23
  },
  {
    ID: 1049,
    name: "Ramon",
    age : 27
  }
];
//Array.prototype.sort()

//USE:  Sort the array.
//NOTE: It doesnot mutate the original array!! Sort always returns a new Array.

const sortedArr = empArr.sort((emp1 , emp2) => (emp1.name > emp2.name) ? 1 : -1 );
console.log("Array after applying sort", sortedArr);

//Array.prototype.some()
//USE:  Find if some elements of the array meets the given criteria.

const  someYoungPeople = empArr.some( ( emp => emp.age <= 25 ) );
console.log("Are there some employees below 25 years?: " , someYoungPeople );


//Array.prototype.findByIndex()
//USE:  Find the index of the array item that meets the given criteria.
const  indexToSearch = empArr.findIndex( ( emp => emp.ID === 2853 ) );
console.log("Index of emp no 2853: ", indexToSearch);