// /
//  *
//  * This function will be called when clicking on any button.
//  * It's going to give you text as a parameter
//  * This is your starting point
//  * If you click on button 0, the text will be "0"
//  * If you click on button +, the text will be "+"
//  * ,... and so on
//  /

let array = [];
let opr;
let result = 0;
let screen = 0;
function buttonClick(text) {
  console.log("Clicking", text);
  let number = Number.isInteger(text);
  input(text);
  if (number === true) {
    printOnConsole(text);
  } else if (text === "+" || text === "*" || text === "-" || text === "/") {
    printOnConsole("");
  } else if (text === "AC") {
    array = [];
    result = 0;
    number = 0;
    screen = 0;
    printOnConsole(0);
  } else if (text === "=") {
    calculate();
  }
  console.log(array);
}

function input(text) {
  array.push(text);
}

function calculate() {
  result = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "+") result = result + array[i + 1];
  }
  printOnConsole(result);
}
// }

//   let numberOne = Number.isInteger(text);
//   let numberTwo = Number.isInteger(text);

//   if (numberOne === true) {
//     printOnConsole(text);
//   } else if (numberTwo === true) {
//     printOnConsole(text);
//   } else {
//     printOnConsole(0);
//   }

// function Calculate(operation, numberOne, numberTwo) {
//   let result;
//   if (operation === "+") {
//     result = numberOne + numberTwo;
//   } else if (operation === "-") {
//     result = numberOne - numberTwo;
//   } else if (operation === "") {
//     result = numberOne * numberTwo;
//   } else if (operation === "/") {
//     result = numberOne / numberTwo;
//   } else if (operation === "%") {
//     result = numberOne / 100;
//   } else if (operation === "±") {
//     result = numberOne * -1;
//   } else {
//     result = 0;
//   }
//   printOnConsole(result);
// }

// console.log("Clicking", text);
// numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// return numbers.find((number) => number.index === text);

// / Supporting functions
//  * 1. printOnConsole(text), takes any text, and renders the console part of the web page
//  * 2. updateHistory(array), takes an array of strings and renders it on the web page
//  */

// Remove Me after testing
// printOnConsole("123");
updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
