let inputArea = document.querySelector(".inputArea");

const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const backspaceButton = document.getElementById("backspaceButton");
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
const decimalButton = document.getElementById("decimalButton");

const signIndicator = document.querySelector(".signIndicator");

const numberVariables = [];

function add() {
  let z = numberVariables[0] + numberVariables[1];
  if (z % 1 != 0) {
    let newZ = z.toFixed(2);
    console.log(z);
    inputArea.innerText = newZ;
    clearSign();
  } else {
    console.log(z);
    inputArea.innerText = z;
    clearSign();
  }
}

function subtract() {
  let z = numberVariables[0] - numberVariables[1];
  if (z % 1 != 0) {
    let newZ = z.toFixed(2);
    console.log(z);
    inputArea.innerText = newZ;
    clearSign();
  } else {
    console.log(z);
    inputArea.innerText = z;
    clearSign();
  }
}

function multiply() {
  let z = numberVariables[0] * numberVariables[1];
  if (z % 1 != 0) {
    let newZ = z.toFixed(2);
    console.log(z);
    inputArea.innerText = newZ;
    clearSign();
  } else {
    console.log(z);
    inputArea.innerText = z;
    clearSign();
  }
}

function divide() {
  let z = numberVariables[0] / numberVariables[1];
  if (z % 1 != 0) {
    let newZ = z.toFixed(2);
    console.log(z);
    inputArea.innerText = newZ;
    clearSign();
  } else {
    console.log(z);
    inputArea.innerText = z;
    clearSign();
  }
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

function stringHandling() {
  operate();
  let x = Number(inputArea.innerText);
  numberVariables.push(x);
  clearInput();
}

function addX() {
  if (numberVariables.length < 1) {
    grabX();
    clearAll();
    setPlus();
  } else {
    stringHandling();
    setPlus();
  }
}

function subtractX() {
  if (numberVariables.length < 1) {
    grabX();
    clearAll();
    setMinus();
  } else {
    stringHandling();
    setMinus();
  }
}

function multiplyX() {
  if (numberVariables.length < 1) {
    grabX();
    clearAll();
    setMultiply();
  } else {
    stringHandling();
    setMultiply();
  }
}

function divideX() {
  if (numberVariables.length < 1) {
    grabX();
    clearAll();
    setDivide();
  } else {
    stringHandling();
    setDivide();
  }
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

function operate() {
  grabY();
  if (!numberVariables[1]) {
    numberVariables.length = 0;
    console.log("No other variable found for the operation, returning.");
    return;
  }
  switch (signIndicator.innerText) {
    case "+":
      add();
      clearSign();
      break;

    case "-":
      subtract();
      clearSign();
      break;

    case "×":
      multiply();
      clearSign();
      break;

    case "÷":
      divide();
      clearSign();
      break;
  }
  numberVariables.length = 0;
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

// For clearing the input area, sign indicator, variables in arrays

function clearAll() {
  inputArea.innerText = "";
  signIndicator.innerText = "";
}

function clearSign() {
  signIndicator.innerText = "";
}

function clearInput() {
  inputArea.innerText = "";
}

function clearButtonFunction() {
  clearAll();
  numberVariables.length = 0;
  console.log(numberVariables);
}

function backspace() {
  let x = inputArea.innerText;
  let y = x.toString().slice(0, -1);
  let z = Number(y);
  if (z != 0) {
  inputArea.innerText = z;
  } else {
    clearInput();
  }
}

function decimal() {
  if (!inputArea.innerHTML.includes(".")) {
    inputArea.innerHTML += ".";
  }
}

decimalButton.addEventListener("click", decimal);

addButton.addEventListener("click", addX);
subtractButton.addEventListener("click", subtractX);
multiplyButton.addEventListener("click", multiplyX);
divideButton.addEventListener("click", divideX);
equalsButton.addEventListener("click", operate);
backspaceButton.addEventListener("click", backspace);