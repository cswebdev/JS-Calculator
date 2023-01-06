// **You are not allowed to use the JavaScript function `eval`**

// **For the following, use the code from Eloquent JavaScript to handle click events:**

// **Rember that JS follows PEMDAS

// **List of variables in Index.HTML**
// -----------------------------------
// * .calculator
// * .calculator-screen
// * .calculator-keys
// * <button type="button">
// * .clear
// * .plus-minus
// * .percent
// * .operator
// * .number
// * numers have values attatched 0-9
// * .number btn-lrg
// * .decimal
// * .equal-sign

(function () {
  "use strict";
  // assigning primary classes a variable and using querySelector to interact with associated HTML

  const $calculator = document.querySelector(".calculator");
  const $calScreen = document.querySelector(".calculator-screen");
  const $calKeys = document.querySelectorAll(".calculator-keys");
  const $keyValue = document.querySelectorAll(".number");
  const $operatorSym = document.querySelectorAll(".operator");
  const $calcEquals = document.querySelector(".equal-sign");
  const $clearCalc = document.querySelector(".clear");

  // pushNumber (event)

  // *** | Group Event Listners | ***

  function pushNumber(event) {
    alert(event.target.value);
  }

  $keyValue.forEach(function (button) {
    //**** Do Not Delete ****/
    // alert works
    //
    button.addEventListener("click", pushNumber);
    //
    // alert end
    // console.log(button);
    // console.dir(button);
  });

  function pushOperator(event) {
    alert(event.target.value);
  }
  $operatorSym.forEach(function (button) {
    button.addEventListener("click", pushOperator);
  });

  //*** | Individual Event Listners | ***/
  $calcEquals.addEventListener("click", pushOperator);
  $clearCalc.addEventListener("click", pushOperator);

  function calculate(event) {
    alert(event.target.button);
  }

  //*** | calculation |  ***/
  var calculation = [];

  calculation.push(pushNumber());
  console.log(calculation);
  console.dir(calculation);

  //
  //
  //*** | Display |***/
  // DO NOT delete
  // $calScreen = calculation;
  console.log("here", $calScreen);
  console.log(typeof $calScreen.value);
  console.log("here", $calKeys.value);
  console.log(typeof $calKeys);
})();
