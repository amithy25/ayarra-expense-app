//Object destructuring:
// const person = {
//   name: "Amith",
//   age: 23,
//   location: {
//     city: "Charlotte",
//     temp: 93,
//   },
// };

// const { name: firstName = "Ashok", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     //name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName); //penguin, self published

//Array destructuring:

const address = [
  "9539 University Terrace Drive",
  "Charlotte",
  "North Carolina",
  "28262",
];

const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}`);

const item = ["Coffee (Iced)", "$2.00", "$2.50", "$2.75"];

const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);
