(function () {
  "use strict";

  const $calcDisplay = document.querySelector(".calculator-screen");
  const $number = document.querySelectorAll(".number");
  const $operator = document.querySelectorAll(".operator");
  const $equalSign = document.querySelector(".equal-sign");
  const $clear = document.querySelector(".clear");
  const $plusMinus = document.querySelector(".plus-minus");
  const $decimal = document.querySelector(".decimal");

  let calculation = [];
  // Push number value to calculation array
  function pushNumber(event) {
    let value = event.target.value;
    calculation.push(value);
    updateDisplay();
    alert(value);
  }
  // Push operator value to calculation array
  function pushOperator(event) {
    let value = event.target.value;
    calculation.push(value);
    updateDisplay();
    alert(value);
  }
  // Perform calculation using input in calculation array
  function calculate() {
    // Start with first number
    let result = calculation[0];
    // loop  through calculation array using the length of the caluclation.
    for (let i = 1; i < calculation.length; i++) {
      // Check the operator and apply corresponding operation
      if (calculation[i] === "+") {
        result = +result + +calculation[i + 1];
      } else if (calculation[i] === "-") {
        result = +result - +calculation[i + 1];
      } else if (calculation[i] === "*") {
        result = +result * +calculation[i + 1];
      } else if (calculation[i] === "/") {
        result = +result / +calculation[i + 1];
      }
    }
    calculation = [result];
    updateDisplay();
  }

  function clear() {
    calculation = [];
    updateDisplay();
  }

  function plusMinus() {
    // Get the current value of the calculator screen

    let currentOutput = Number($calcDisplay.value);

    // Get the last element entered into the calculation array
    let lastElement = calculation[calculation.length - 1];

    // Check if last element entered is not empty
    if (lastElement != "") {
      // Check if last element entered is a negative number
      if (lastElement[0] === "-") {
        // remove the negative sign from the last element
        lastElement = lastElement.slice(1);
      } else {
        // Add a negative sign to the last element
        lastElement = "-" + lastElement;
      }
      // Update the last element in the calculation array with the new value
      calculation[calculation.length - 1] = lastElement;
    }
    // Update the calculator screen with the new value
    $calcDisplay.value = lastElement;
  }
  function decimal() {
    let lastElement = calculation[calculation.length - 1];
    if (typeof lastElement === "number" || lastElement.indexOf(".") === -1) {
      calculation.push(".");
      updateDisplay();
    }
  }

  function updateDisplay() {
    $calcDisplay.value = calculation.join("");
  }

  for (var i = 0; i < $operator.length; i++) {
    $operator[i].addEventListener("click", pushOperator);
  }
  for (var i = 0; i < $number.length; i++) {
    $number[i].addEventListener("click", pushNumber);
  }
  $equalSign.addEventListener("click", calculate);

  $decimal.addEventListener("click", decimal);
  $plusMinus.addEventListener("click", plusMinus);
  $clear.addEventListener("click", clear);
})();
