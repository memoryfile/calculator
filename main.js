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
const signIndicator = document.querySelector(".signIndicator");

const numberVariables = [];
const operatorAtPlay = [];

function add() {
  let sum = numberVariables[0] + numberVariables[1];
  inputArea.innerText = sum;
  console.log(sum);
  clearSign();
}

function subtract() {
  clearSign();
  let difference = numberVariables[0] - numberVariables[1];
  console.log(difference);
  inputArea.innerText = difference;
}

function multiply() {
  clearSign();
  let product = numberVariables[0] * numberVariables[1];
  console.log(product);
  inputArea.innerText = product;
}

function divide() {
  clearSign();
  let quotient = numberVariables[0] / numberVariables[1];
  console.log(quotient);
  inputArea.innerText = quotient;
}

function grabX() {
  let x = Number(inputArea.innerText);
  numberVariables.push(x);
  console.log(x);
  inputArea.innerText = "";
}

function grabY() {
  let y = Number(inputArea.innerText);
  numberVariables.push(y);
  console.log(y);
  console.log(numberVariables);
}

function addX() {
  grabX();
  clearAll();
  setPlus();
}

function subtractX() {
  grabX();
  clearAll();
  setMinus();
}

function multiplyX() {
  grabX();
  clearAll();
  setMultiply();
}

function divideX() {
  grabX();
  clearAll();
  setDivide();
}

function setPlus() {
  signIndicator.innerText = "+";
}

function setMinus() {
  signIndicator.innerText = "-";
}

function setMultiply() {
  signIndicator.innerText = "×";
}

function setDivide() {
  signIndicator.innerText = "÷";
}

function operateEquals() {
  grabY();
  switch (signIndicator.innerText) {
    case "+":
      add();
      break;

    case "-":
      subtract();
      break;

    case "×":
      multiply();
      break;

    case "÷":
      divide();
      break;
  }
  numberVariables.length = 0;
}

function operateEqualsAdd() {
  operateEquals();
  add();
}

// Number input in calculator view area

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
clearButton.addEventListener("click", clearButtonFunction);

function clearAll() {
  inputArea.innerText = "";
  signIndicator.innerText = "";
}

function clearButtonFunction() {
  clearAll();
  numberVariables.length = 0;
  console.log(numberVariables);
}

function clearSign() {
  signIndicator.innerText = "";
}

function clearInput() {
  inputArea.innerText = "";
}

addButton.addEventListener("click", addX);
subtractButton.addEventListener("click", subtractX);
multiplyButton.addEventListener("click", multiplyX);
divideButton.addEventListener("click", divideX);
equalsButton.addEventListener("click", operateEquals);