// let input = a;
// let input2 = b;
let z = 0;
// const inputtedNumbers = [x, y];

let inputArea = document.querySelector(".inputArea");


const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const clearButton = document.getElementById("clearButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");
const equalsButton = document.getElementById("equalsButton");

function doMath() {
  function add(x, y) {
    let sum = x + y;
    return sum;
  }

  function subtract(x, y) {
    let difference = x - y;
    return difference;
  }

  function multiply(x, y) {
    let product = x * y;
    return product;
  }

  function divide(x, y) {
    let quotient = x / y;
    return quotient;
  }
}
doMath();

addButton.addEventListener("click", operate);
subtractButton.addEventListener("click", operate);
multiplyButton.addEventListener("click", operate);
divideButton.addEventListener("click", operate);
// divideButton.addEventListener("click", clearInput);

oneButton.addEventListener("click", updateInput);

function operate(x, operator, y) {}

function updateInput() {
  if (oneButton.click) {
    let numbersInput = inputArea.createElement("div");
    // numbersInput.
  }
}

// function createCalculatorButtons() {
//   while (z > 10) {
//     z += 1;
//   }
// }
