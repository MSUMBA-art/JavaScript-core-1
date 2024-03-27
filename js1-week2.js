// ========== Booleans ============
let codeYourFutureIsGreat = true;
let thisIsATerribleClass = false;

console.log(codeYourFutureIsGreat);
console.log(thisIsATerribleClass);

// ======= Comparison Operators =====

let age = 23;
let years = 23;
console.log(age === years);

function checkIfTrue() {
  if (10 === 10) {
    console.log('Yes it is true');
  } else {
    console.log('Not true');
  }
}
checkIfTrue();

// >   greater than
// <   less than
// <=  less than or equal
// >=  greater than or equal
// === same value and same type
// !== not the same value and type

// EXERCISE 1

// What do typeof true and typeof false evaluate to - write some code and log the output to the console to work out the answer.

// console.log(typeof true);
// console.log(typeof false);

/*EXERCISE 2
Create a function called isEven that should

take a number as an input
return a boolean indicating if the number is even or odd
Remember to avoid using console.log inside the function itself

E.g. isEven(100) should return true E.g. isEven(53) should return false

Call your function with a number of different inputs to check your function is working as expected. 😄

Bonus: Can you ensure your function doesn't use an if statement for this exercise 😎
*/
let num = 100
function isEven(num) {
return num * 4
}

isEven()
