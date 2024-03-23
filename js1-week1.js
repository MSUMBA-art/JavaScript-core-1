console.log('Hello World');

// ====== VARIABLES ============
let greeting = 'Hello World';
console.log(greeting);

const herName = 'Irene';
console.log(herName);

// ===== EXERCISE =====
// 1. Add a variable greeting to js1-week1.js and assign a greeting of your choice to the variable
// 2. Print your greeting to the console 3 times. You should see your greeting 3 times on the console, one on each line.
let greetings = 'Good Morning';
console.log(greetings);
console.log(greetings);
console.log(greetings);

// ====== STRINGS =======
const message = 'This is a massage';
console.log(typeof message);

// ====== EXERCISE ====
/*1. Write a program that:
creates a variable called colors
assigns colors "blue" and "yellow" as a comma separate string to colors
logs the type colors using typeof.
2. What is the typeof a number?
*/
let colors = 'blue, yellow';
console.log(typeof colors);

// ===== String concatenation ======
const greetingStart = 'Hello my name is ';
const myName = 'Alexander';

const fullGreeting = greetingStart + myName;
console.log(fullGreeting);

const anotherGreeting = 'Hello my name is ' + 'Alex';
console.log(anotherGreeting);

// Here is example using the String interpolation to concat strings
const anotherGreetingStart = 'Hello';
const surname = 'Junior';
const sayHallo = `${anotherGreetingStart} my surname is ${surname}`;
console.log(sayHallo);

// ====== EXERCISE ========
// Writ e a program that logs a message with a greeting and your name using the two concatenation methods we used
const sayHello = 'Hello, my name is';
const fullName = 'Alexander Msumba';
const helloName = `${sayHello} ${fullName}`;
console.log(helloName);

// =====Numbers======
