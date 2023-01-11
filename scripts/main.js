(function () {
  "use strict";

  // Selects elements on document with query selector
  const $calculator = document.querySelector(".calculator");
  const $calScreen = document.querySelector(".calculator-screen");
  const $calKeys = document.querySelectorAll(".calculator-keys");
  const $keyValue = document.querySelectorAll(".number");
  const $operatorSym = document.querySelectorAll(".operator");
  const $calcEquals = document.querySelector(".equal-sign");
  const $clearCalc = document.querySelector(".clear");

  var calculation = [];
  var calcFirstInput = [];
  var calcSecondInput = [];
  // var calcTotal
  // Callback functions for numbers/operators
  function pushNumber(event) {
    const clickedKey = event.target.value;
    calculation.push(clickedKey);
    console.log(calculation);
    alert(event.target.value);
    $calScreen.value = calculation.toString().split(",").join("");
  }

  function pushOperator(event) {
    const clickedKey = event.target.value;
    calculation.push(clickedKey);
    console.log(calculation);
    alert(event.target.value);
    $calScreen.value = calculation.toString().split(",").join("");
  }

  function pushEqual(event) {
    const clickedKey = event.target.value;
    calculation.push(clickedKey);
    console.log(calculation);
    for (let i = 0; i < calculation.length; i++) {
      console.log(calculation[i]);
    }
    alert(event.target.value);
    $calScreen.value = calculation.toString().split(",").join("");
  }

  // Event listeners for numbers/operators

  $keyValue.forEach(function (button) {
    button.addEventListener("click", pushNumber);
  });

  $operatorSym.forEach(function (button) {
    button.addEventListener("click", pushOperator);
  });

  $calcEquals.addEventListener("click", pushEqual);

  //*** | Calculation Section |  ***

  // $calcTotal(function (button) {});

  // *** | Calculation Total ||(SUM)|| **

  // function calcArr(array) {
  //   if ((pushOperator().matches = [("+", "-", "/", "*")])) {
  //     console.log("You're adding");
  //   }
  // }
  //*** | Display |***/

  // DO NOT delete
  // $calScreen = document.querySelector(".calculator-screen");
  console.log("here", $calScreen);
  console.log(typeof $calScreen.value);
  console.log("here", $calKeys.value);
  console.log(typeof $calKeys);
})();
