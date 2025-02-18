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
const calculator = document.querySelector('#calculator');
const buttons = document.querySelectorAll('.button');
/*-------------------------------- Variables --------------------------------*/
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      // console.log(event.target);
      // output:
      // <div class="button number">8</div>..etc

      // console.log(event.target.classList)
      const clickedEl = event.target;
      if (clickedEl.classList.contains('number')) {
        displayEl.innerText += clickedEl.innerText;
      }
    });
  });

function calculate (num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;

    }

}

// calculator.addEventListener('click', (event) => {
//     if (event.target.classList.contains('operator')) {
//         if (event.target.innerText === 'C') {
//             displayEl.innerText = '';
            
//         }
//     // if (event.target.classList.contains('button')) {
//     //     displayEl.innerText = displayEl.innerText += event.target.innerText;
//     // }
    
//         calculate();
// }
// }
// )


// calculator.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log
//     // console.log(event.target.innerText);
  
//     // // Example
//     if (event.target.classList.contains('button')) {
//         displayEl.innerText = displayEl.innerText += event.target.innerText;
//         // console.log(event.target.innerText)
//         // console.log(displayEl.innerText)
//       // Do something with a number
//     }
//     console.dir(event.target)

//     // if (event.target.classList.contains('operator')) {
//     //     if (event.target.innerText === '*') {

//     //     }
//     // }
//     // // Example
//     // if (event.target.innerText === '*') {
//     //   // Do something with this operator
//     }
//   )
  

/*-------------------------------- Functions --------------------------------*/
// function 