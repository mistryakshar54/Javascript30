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
    ID: "1",
    name: "William"
  },
  {
    ID: "2",
    name: "Olivia"
  },
  {
    ID: "3",
    name: "Irene"
  },
  {
    ID: "4",
    name: "Greta"
  },
  {
    ID: "5",
    name: "Teagan"
  },
  {
    ID: "6",
    name: "Elly"
  },
  {
    ID: "7",
    name: "Alessandra"
  },
  {
    ID: "8",
    name: "Shay"
  },
  {
    ID: "9",
    name: "Daron"
  },
  {
    ID: "10",
    name: "Ramon"
  },
  {
    ID: "11",
    name: "Barry"
  },
  {
    ID: "12",
    name: "Angelina"
  },
  {
    ID: "13",
    name: "Josh"
  },
  {
    ID: "14",
    name: "Ethan"
  },
  {
    ID: "15",
    name: "Alessia"
  }
];
//Array.prototype.sort()

//USE:  Sort the array.
//NOTE: It doesnot mutate the original array!! Map always returns a new Array.

const sortedArr = empArr.sort((emp1 , emp2) => (emp1.name > emp2.name) ? 1 : -1 );
console.log("Array after applying sort", sortedArr);
