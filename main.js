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
const zeroButton = document.getElementById("zeroButton");
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
  if (zeroButton.click) {
    inputArea.innerText = 0;
  }
  if (oneButton.click) {
    inputArea.innerText = 1;
  }
  if (twoButton.click) {
    inputArea.innerText = 2;
  }
  if (threeButton.click) {
    inputArea.innerText = 3;
  }
  if (fourButton.click) {
    inputArea.innerText = 4;
  }
  if (fiveButton.click) {
    inputArea.innerText = 5;
  }
  if (sixButton.click) {
    inputArea.innerText = 6;
  }
  if (sevenButton.click) {
    inputArea.innerText = 7;
  }
  if (eightButton.click) {
    inputArea.innerText = 8;
  }
  if (nineButton.click) {
    inputArea.innerText = 9;
  }
}

// function createCalculatorButtons() {
//   while (z > 10) {
//     z += 1;
//   }
// }
