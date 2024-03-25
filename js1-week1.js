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

// ======= Statements and expressions =====
// let total = 1 + 1; // assign the value 2 (the value produced by the expression 1 + 1) to a variable total
// let greeting = "hello"; // assign the value "hello" (the value produced by the expression expression "hello") to a variable greeting
// let product = 2 * 4; // assign the value 8 (the value produced by the expression 2 * 4) to a variable product
// let worldGreeting = "Hello" + "World"; // assign the value "HelloWorld" (the value produced by the expression "Hello" + "World" to a variable worldGreeting)


// ========== FUNCTIONS ======
// Functions are blocks of code that can do a task as many times as you ask them to. They take an input and return an output.

// Here's a function that doubles a number:

function double(number) {
  return number * 2;
}

const result = double(2);

console.log(result); // 4

// ==========EXERCISE =========
/*EXERCISE 1

Create a function called formatPenceToPounds that should

take a number as an input ( representing an amount of money in pence )
return a string starting with a £ sign and the input number converted to pounds.
For example, formatPenceToPounds(199) should evaluate to "£1.99"

In your groups, think carefully about the following things:

what the parameter name should be
creating good names for any variables you use
don't use console.log inside the body of the function
Call formatPenceToPounds a few times with different inputs and console.log the outputs in order to check your function. 
*/

function formatPenceToPounds(num) {
  return num;
}

const num = '1.99';
const pence = num

console.log(parseFloat(pence));

function printMessage(x) {
  console.log('Hello, nice to meet you ' + x);
}

function getMessage(name) {
  return 'Hello, nice to meet you ' + name;
}

printMessage('Mitch');

printMessage('August');

getMessage('Laetitia');

