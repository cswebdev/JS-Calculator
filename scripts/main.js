(function () {
  "use strict";

  const $calcDisplay = document.querySelector(".calculator-screen");
  const $numbers = document.querySelectorAll(".number");
  const $operator = document.querySelectorAll(".operator");
  const $equalSign = document.querySelector(".equal-sign");
  const $clear = document.querySelector(".clear");
  const $plusMinus = document.querySelector(".plus-minus");
  const $decimal = document.querySelector(".decimal");

  // ************************************************* //
  // Variable List:
  // targetValue - value should only be used for event targets

  // resultDisplay - calls $calcDisplay

  let calculationArr = [];
  let finalResult = [];
  // ************************************************* //

  // push events - calls event to listner
  function pushNumber(event) {
    let targetValue = event.target.value;
    if ($calcDisplay.value === "0") {
      $calcDisplay.value = targetValue;
    } else {
      $calcDisplay.value += targetValue;
    }
    calculationArr.push(targetValue);
  }

  function pushOperator(event) {
    let targetValue = event.target.value;
    // alert(targetValue);
    calculationArr.push(targetValue);
    $calcDisplay.value += targetValue;
  }
  function equalsSign(event) {
    calculate();
    $calcDisplay.value = finalResult;
    console.log(finalResult);
  }
  // ************************************************* //
  // calculation

  function calculate() {
    let num1 = "",
      num2 = "",
      operator = null;
    const operators = ["+", "-", "*", "/"];

    for (let i = 0; i < calculationArr.length; i++) {
      const value = calculationArr[i];

      if (operators.includes(value)) {
        operator = value;
      } else if (operator == null) {
        num1 += value;
      } else {
        num2 += value;
      }
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === "+") {
      finalResult = num1 + num2;
      console.log(num1, num2);
      console.log(finalResult);
    } else if (operator === "-") {
      finalResult = num1 - num2;
    } else if (operator === "*") {
      finalResult = num1 * num2;
    } else if (operator === "/") {
      finalResult = num1 / num2;
    }

    console.log(finalResult);
  }

  // ************************************************* //
  // clear
  function clear(event) {
    let targetValue = event.target.value;
    calculationArr = [];
    finalResult = [];
    $calcDisplay.value = "";
  }
  function plusMinus(event) {
    if (typeof finalResult === "number") {
      finalResult = finalResult * -1;
      console.log(finalResult);
    }
    $calcDisplay.value = finalResult;
  }

  function decimal(event) {
    let targetValue = event.target.value;
    $calcDisplay.value += targetValue;
  }
  // ************************************************* //
  // Display

  // displayArray = function display(disp) {
  //   $calcDisplay = finalResult.toString();
  // };

  // ************************************************* //
  //  event listner click events

  $operator.forEach(function (number) {
    number.addEventListener("click", pushOperator);
  });

  $numbers.forEach(function (number) {
    number.addEventListener("click", pushNumber);
  });

  $equalSign.addEventListener("click", equalsSign);
  $decimal.addEventListener("click", decimal);
  $plusMinus.addEventListener("click", plusMinus);
  $clear.addEventListener("click", clear);

  // ************************************************* //
})();
