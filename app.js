/*

Here are the user stories for this lab:

As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.

*/

/*-------------------------------- Constants --------------------------------*/
const displayEl = document.querySelector('.display');
const calculator = document.querySelector('#calculator'); // for event delegation
const buttons = document.querySelectorAll('.button');

/*-------------------------------- Variables --------------------------------*/
let num1 = ''; // Store first number as a string
let num2 = ''; // Store second number as a string
let operator = ''; // Store the operator (+, -, *, /)
let result; // Store the result of calculation

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    const clickedEl = event.target; // Whatever we clicked is the event target

    // If clicked element is a number
    if (clickedEl.classList.contains('number')) {
        if (operator === '') { // If haven't clicked on operator yet
            num1 += clickedEl.innerText; // Then that number would be the first number
        } else {
            num2 += clickedEl.innerText; // Otherwise it's second number (after operator)
        }
        displayEl.innerText = num1 + operator + num2; // Update display
    }

    // If clicked element is an operator
    if (clickedEl.classList.contains('operator')) {
        if (clickedEl.innerText === 'C') { // If pressed C, reset everything
            displayEl.innerText = '';
            num1 = '';
            num2 = '';
            operator = '';
        } else {
            // If an operator is clicked after a number is entered, store it
            if (num1 !== '') { // If num1 not empty (meaning it has input inside it)
                operator = clickedEl.innerText;
                displayEl.innerText = num1 + operator; // Update display with operator
            }
        }
    }

    // If clicked element is the equals sign
    if (clickedEl.innerText === '=') {
        if (true) {
            result = calculate(Number(num1), operator, Number(num2)); // Perform calculation
            displayEl.innerText = ''; // Reset display after one calculation
            num1 = '';
            num2 = '';
            operator = '';
        }
        displayEl.innerText = result;
    }
});

/*-------------------------------- Functions --------------------------------*/
function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
}
