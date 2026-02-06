import { disableErrorMsg, enableErrorMsg } from "../errorMsg.js";

const postalInput = document.querySelector(".postal");

const canadaInput = document.querySelector(".canada");

postalInput.addEventListener("input", function () {
  console.log(postalInput.value.length);
  validatePostal();
});

const validatePostal = () => {
  if (!isValidPostal(postalInput)) {
    // if canadian
    if (canadaInput.checked) {
      if (postalInput.value.length === 0) {
        enableErrorMsg(postalInput, "Enter Letter");
      } else if (postalInput.value.length === 1) {
        checkIfMatchesPattern(postalInput, /^[A-Za-z]$/, "Letter", "Number");
      } else if (postalInput.value.length === 2) {
        checkIfMatchesPattern(postalInput, /^[A-Za-z]\d$/, "Number", "Letter");
      } else if (postalInput.value.length === 3) {
        checkIfMatchesPattern(
          postalInput,
          /^[A-Za-z]\d[A-Za-z]$/,
          "Letter",
          "Number",
        );
      }
      // case if 4th input was space or hyphen
      else if (
        postalInput.value.length === 4 &&
        (postalInput.value.includes(" ") || postalInput.value.includes("-"))
      ) {
        checkIfMatchesPattern(
          postalInput,
          /^[A-Za-z]\d[A-Za-z][ -]?$/,
          "space or hyphen",
          "Number",
        );
      }
      // case if 4th input was a number
      else if (postalInput.value.length === 4) {
        checkIfMatchesPattern(
          postalInput,
          /^[A-Za-z]\d[A-Za-z][ -]?\d$/,
          "space or hyphen or number",
          "Letter",
        );
      }

      // length:5 case if 4th input was space or hyphen
      else if (
        postalInput.value.length === 5 &&
        (postalInput.value.includes(" ") || postalInput.value.includes("-"))
      ) {
        checkIfMatchesPattern(
          postalInput,
          /^[A-Za-z]\d[A-Za-z][ -]?\d$/,
          "Number",
          "Letter",
        );
      }
      // length:5 case if 4th input was a number
      else if (postalInput.value.length === 5) {
        checkIfMatchesPattern(
          postalInput,
          /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]$/,
          "Letter",
          "Number",
        );
      }
      // length:6 case if 4th input was space or hyphen
      else if (
        postalInput.value.length === 6 &&
        (postalInput.value.includes(" ") || postalInput.value.includes("-"))
      ) {
        checkIfMatchesPattern(
          postalInput,
          /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]$/,
          "Letter",
          "Number",
        );
      }
      // length:6 case if 4th input was a number
      else if (postalInput.value.length === 6) {
        checkIfMatchesPattern(
          postalInput,
          /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
          "Number",
          "Letter",
        );
      }
      // length:7 case if 4th input was space or hyphen
      else if (
        postalInput.value.length === 7 &&
        (postalInput.value.includes(" ") || postalInput.value.includes("-"))
      ) {
        checkIfMatchesPattern(
          postalInput,
          /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
          "Number",
          "Letter",
        );
      }
      // length greater than 6 if no space or hyphen
      else if (
        postalInput.value.length > 6 &&
        !(postalInput.value.includes(" ") || postalInput.value.includes("-"))
      ) {
        enableErrorMsg(postalInput, "The postal code is too long");
      }
      else if (postalInput.value.length > 7){
        enableErrorMsg(
          postalInput,
          "The postal code is too long",
        );
      }



    }

    // if us
    else if (!canadaInput.checked) {
    }
  } else {
    disableErrorMsg(postalInput);
  }
};

const checkIfMatchesPattern = (
  postalInput,
  pattern,
  validLastInput,
  validNextInput,
) => {
  console.log(pattern);
  const currentAllowedValue = pattern;
  const validity = currentAllowedValue.test(postalInput.value);
  if (!validity) {
    enableErrorMsg(
      postalInput,
      `are you sure your last input was a ${validLastInput} and your previous values are valid?`,
    );
  } else if (validity) {
    enableErrorMsg(postalInput, `Enter ${validNextInput}`);
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
