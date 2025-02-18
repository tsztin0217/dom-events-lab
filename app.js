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
let num1;
let num2;
let operator;
let result;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    const clickedEl = event.target;

    if (clickedEl.classList.contains('number')) {
        num1 += clickedEl.innerText;
        displayEl.innerText = num1;
    }

    if (clickedEl.classList.contains('operator')) {
        if (clickedEl.innerText === 'C') {
            displayEl.innerText = '';
            num1 = '';
            num2 = '';
            operator = '';
            displayEl.innerText = '';
        }  else {
            if (num1 === null) {
                num1 = num2;
                num2 = '';
            }
        }
        operator = clickedEl.innerText;
    }

    if (clickedEl.innerText === '=') {
        result = calculate(Number(num1), operator, Number(num2));
        num1 = result;
        displayEl.innerText = result;
        operator = null;
    }
})



function calculate (num1, operator, num2) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default: return num2;

    }

}


/*-------------------------------- Functions --------------------------------*/
// function 