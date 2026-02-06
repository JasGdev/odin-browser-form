const form = document.querySelector("form");
const postalInput = document.querySelector(".postal");
const passwordInput = document.querySelector(".password");
const passwordConfirmInput = document.querySelector(".passwordConfirm");

const emailInput = document.querySelector(".email");

import { isValidEmail, validateEmail } from "./Validations/emailValidation.js";
import {
  isValidPostal,
  validatePostal,
} from "./Validations/postalValidation.js";
import { disableErrorMsg, enableErrorMsg } from "./errorMsg.js";
import {
    isValidPassword,
  isValidPasswordConfirm,
  validatePassword,
  validatePasswordConfirm,
} from "./passwordValidation.js";

const inputList = [
  emailInput,
  postalInput,
  passwordInput,
  passwordConfirmInput,
];

const validate = (input) => {
  if (input.id == "email") {
    validateEmail();
  } else if (input.id == "postal") {
    validatePostal();
  } else if (input.id == "password") {
    validatePassword();
  } else if (input.id == "passwordConfirm") {
    validatePasswordConfirm();
  }
};

// validation on leaving input field
inputList.forEach((input) => {
  input.addEventListener("focusout", function () {
    validate(input);

    // should just turn of span
    const errorSpan = document.querySelector(`.${input.id}Error`);
    errorSpan.classList.remove("invalid");
    errorSpan.textContent = "";
  });
});

// validation on entering
inputList.forEach((input) => {
  input.addEventListener("focus", function () {
    validate(input);
  });
});

// validation on form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputList.forEach((input) => {
    validate(input);
    if (input.validity.valueMissing) {
      enableErrorMsg(input, "Missing value");
    }
  });
  console.log(`email valid : ${isValidEmail(emailInput)}`);
  console.log(`postal valid : ${isValidPostal(postalInput)}`);
  console.log(`password valid : ${isValidPassword(passwordInput)}`);
  console.log(`password confirm valid : ${isValidPasswordConfirm(passwordInput, passwordConfirmInput)}`);
});
