/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

let array = [];
let opr;
let result = 0;
let number = 0;

function buttonClick(text) {
  console.log("Clicking", text);
}
//   let numberOne = Number.isInteger(text);
//   let numberTwo = Number.isInteger(text);

//   if (numberOne === true) {
//     printOnConsole(text);
//   } else if (numberTwo === true) {
//     printOnConsole(text);
//   } else {
//     printOnConsole(0);
//   }
// }

// function Calculate(operation, numberOne, numberTwo) {
//   let result;
//   if (operation === "+") {
//     result = numberOne + numberTwo;
//   } else if (operation === "-") {
//     result = numberOne - numberTwo;
//   } else if (operation === "*") {
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

function input(number, opr) {
  array.push(number);
  array.push(opr);
}
// console.log("Clicking", text);
// numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// return numbers.find((number) => number.index === text);

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
printOnConsole("123");
updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
