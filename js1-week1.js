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
const sum = 10 + 2; // 12
const product = 10 * 2; // 20
const quotient = 10 / 2; // 5
const difference = 10 - 2; // 8

// Numbers with decimals can be rounded to the nearest whole number using the Math.round function: 
const preciseAge = 30.487;
const roughAge = Math.round(preciseAge)
console.log(roughAge)

// == EXERCISE =====
// 1. Create two variables numberOfTrainees and numberOfMentors
// 2. Log a message that displays the total number of trainees and mentors

// Expected Result
// Number of trainees: 15
// Number of mentors: 8
// Total number of trainees and mentors: 23
const numberOfTrainees = 15;
const numberOfMentors = 8;

const total = numberOfTrainees + numberOfMentors;
console.log(total)

// ==== EXERCISE ===== 
// Using the variables you created in the previous steps, calculate the percentage of mentors and trainees in the group (percentages must be rounded to the nearest integer)

// You should then log this number to the console.

// Expected Result

// Percentage of trainees: 65%
// Percentage of mentors: 35%

let percentageOfTrainees = (numberOfTrainees / total) *  100
console.log(Math.round(percentageOfTrainees));

let percentageOfMentors = (numberOfMentors / total) * 100;
console.log(Math.round(percentageOfMentors));

