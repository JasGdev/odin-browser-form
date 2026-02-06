import { disableErrorMsg, enableErrorMsg } from "../errorMsg.js";

const postalInput = document.querySelector(".postal");

const canadaInput = document.querySelector(".canada");

postalInput.addEventListener("input", function () {
  console.log(1);
  validatePostal();
});

const validatePostal = () => {
  if (!isValidPostal(postalInput)) {
    if (canadaInput.checked) {
      if (postalInput.value.length === 0) {
        enableErrorMsg(postalInput, "Enter Letter");
      } else if (postalInput.value.length === 1) {
        enableErrorMsg(postalInput, "Enter Number");
      } else if (postalInput.value.length === 2) {
        enableErrorMsg(postalInput, "Enter Letter");
      } else if (postalInput.value.length === 3) {
        enableErrorMsg(postalInput, "Enter space, hyphen or another number");
      } else if (postalInput.value.length === 4 &&
        (postalInput.value.includes(" ") || postalInput.value.includes("-"))

        
        
      ) {
        enableErrorMsg(postalInput, "Enter Number");
      } else if (postalInput.value.length === 4) {
        enableErrorMsg(postalInput, "Enter Letter");
      } else if (
        postalInput.value.length === 5 &&
        (postalInput.value.includes(" ") || postalInput.value.includes("-"))
      ) {
        enableErrorMsg(postalInput, "Enter Letter");
      } } else if (postalInput.value.length === 5) {
        enableErrorMsg(postalInput, "Enter Number");
      }
    
  } else {
    disableErrorMsg(postalInput);
  }
};

const isValidPostal = (postal) => {
  // exactly 5 numbers or if have hyphen can extend 4 numbers
  const usPostalRegExp = /^\d{5}(-\d{4})?$/;
  //   letter > number > letter > number > letter > number (with middle separated by space or dash)
  const canadaPostalRegExp = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  if (canadaInput.checked) {
    return canadaPostalRegExp.test(postal.value);
  } else {
    return usPostalRegExp.test(postal.value);
  }
};

export { validatePostal };
