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
const numberButtons = document.querySelector(".numberButtons");
const signIndicator = document.querySelector(".signIndicator")

function doMath() {
  addButton.addEventListener("click", add);
  function add(x, y) {
    // let q = Number(inputArea);
    // console.log(q);
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

subtractButton.addEventListener("click", operate);
multiplyButton.addEventListener("click", operate);
divideButton.addEventListener("click", operate);

function operate(x, operator, y) {}

zeroButton.addEventListener("click", () => (inputArea.innerText += 0));
oneButton.addEventListener("click", () => (inputArea.innerText += 1));
twoButton.addEventListener("click", () => (inputArea.innerText += 2));
threeButton.addEventListener("click", () => (inputArea.innerText += 3));
fourButton.addEventListener("click", () => (inputArea.innerText += 4));
fiveButton.addEventListener("click", () => (inputArea.innerText += 5));
sixButton.addEventListener("click", () => (inputArea.innerText += 6));
sevenButton.addEventListener("click", () => (inputArea.innerText += 7));
eightButton.addEventListener("click", () => (inputArea.innerText += 8));
nineButton.addEventListener("click", () => (inputArea.innerText += 9));
clearButton.addEventListener("click", clearAll);

function clearAll() {
  inputArea.innerText = "";
  signIndicator.innerText = "";
}

addButton.addEventListener("click", () => (signIndicator.innerText = "+"));
subtractButton.addEventListener("click", () => (signIndicator.innerText = "-"));
multiplyButton.addEventListener("click", () => (signIndicator.innerText = "×"));
divideButton.addEventListener("click", () => (signIndicator.innerText = "÷"));

// function createCalculatorButtons() {
//   while (z > 10) {
//     z += 1;
//   }
// }
