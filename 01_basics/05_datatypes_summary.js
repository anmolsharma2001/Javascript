const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

let userEmail;

const id = Symbol('123')  // symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"]

// let myObj = {
//   name : "Anmol",
//   age : 20
// }

// let myFunction = function() {
//     console.log("Hello world");
// };

// console.log(typeof myFunction);

// ***********************************************************************************************

// Stack(primitive ), Heap (Non-primitive)

let myYoutubename = "Anmolsharmadotcom"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
};

let userTwo = userOne

userTwo.email = "anmol@goggle.com"

console.log(userOne.email);
console.log(userTwo.email);