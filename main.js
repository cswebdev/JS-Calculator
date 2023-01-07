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

  var userInputArr = [];
  var calcFirstInput = [];
  var calcSecondInput = [];
  var calcTotal = [];
  // Callback functions for numbers/operators
  function pushNumber(event) {
    const clickedKey = event.target.value;
    userInputArr.push(clickedKey);
    console.log(userInputArr);
  }

  function pushOperator(event) {
    const clickedKey = event.target.value;
    userInputArr.push(clickedKey);
    console.log(userInputArr);
  }

  // Event listeners for numbers/operators
  $keyValue.forEach(function (button) {
    button.addEventListener("click", pushNumber);
  });

  $operatorSym.forEach(function (button) {
    button.addEventListener("click", pushOperator);
  });

  $calcEquals.addEventListener("click", () => {
    for (let i = 0; i < userInputArr.length; i++) {
      console.log(userInputArr[i]);
    }
    console.log("We pressed the equal button ");
  });
  $clearCalc.addEventListener("click", pushOperator);

  //*** | Calculation Section |  ***
  function calculate(event) {
    alert(event.target.button);
  }

  //*** | Display |***/

  // DO NOT delete
  $calScreen = userInputArr[()];
  console.log("here", $calScreen);
  console.log(typeof $calScreen.value);
  console.log("here", $calKeys.value);
  console.log(typeof $calKeys);
})();
