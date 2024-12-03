// ? Question 1: Branching
// Write a branching statement that checks if a number is even or odd.
// If the number is even, log "The number is even."
// If the number is odd, log "The number is odd."
let number = 3;
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}


// ? Question 2: Nested Branching
// Determine age group based on age.
// If age is below 13, log "You're a child."
// If age is between 13 and 19 (inclusive), log "You're a teenager."
// If age is 20 or above, log "You're an adult."
const age = 19;
if (age < 13) {
    console.log("You're a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You're a teenager.");
} else if (age >= 20) {
    console.log("You're an adult.")
}

// ? Question 3: Logical Operators
// Check if a number is divisible by both 3 and 5.
// If true, log "Divisible by both 3 and 5."
// Otherwise, log "Not divisible by both 3 and 5."
number = 30
if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both 3 and 5.");
} else {
    console.log("Not divisible by both 3 and 5.");
}

// ? Question 4: Looping (for loop)
// Print all numbers from 1 to 10.
for (let number = 1; number <= 10; number++) {
    console.log(number);
}

// ? Question 5: Truthy/Falsey
// Check if a variable is truthy or falsy.
// Log "Truthy" if the variable is truthy.
// Log "Falsy" if the variable is falsy.
const variable = "";
if (variable) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// ? Question 6: While Loop
// Print numbers from 1 to 5 using a while loop.
let number = 1
while (number <= 5) {
    console.log(number);
    number++;
}

// ? Question 7: While Loop
// Print numbers from 5 down to 1 using a while loop.
let number = 5
while (number >= 1) {
    console.log(number);
    number--;
}

// ? Question 8: Simple Comparison
// Write a branching statement to check if a number is greater than 100.
// Log "Greater than 100" or "Not greater than 100."
number = 1000;
if (number > 100) {
    console.log("Greater than 100")
} else {
    console.log("Not greater than 100.")
}

// ? Question 9: Looping and Summing
// Use a loop to sum the numbers from 1 to 5 and log the result.
sum = 0
for (let number = 1; number <= 5; number++) {
   console.log(sum += number);
}

// ? Question 10: Find the Largest Number
// Declare three variables, setting random integers to them, i.e. 1, 15, 27
// Write a branching statement that takes the three numbers and determines the largest.
// Log "The largest number is: X."
const varOne = 10;
const varTwo = 20;
const varThree = 30;

if (varOne > varTwo && varOne > varThree) {
    console.log("The largest number is " + varOne);
} else if (varTwo > varOne && varTwo > varThree) {
    console.log("The largest number is " + varTwo);
} else {
    console.log("The largest number is " + varThree);
}