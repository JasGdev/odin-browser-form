const form = document.querySelector("form");
const postalInput = document.querySelector(".postal");
const passwordInput = document.querySelector(".password");
const passwordConfirmInput = document.querySelector(".passwordConfirm");
const canadaInput = document.querySelector(".canada")
const usInput = document.querySelector(".us");
const emailInput = document.querySelector(".email");


import { validateEmail } from './emailValidation.js';
import { disableErrorMsg, enableErrorMsg } from './errorMsg.js';


const inputList = [
  emailInput,
  postalInput,
  passwordInput,
  passwordConfirmInput,
];


const validate = (input) => {
    if (input.id == 'email'){
        validateEmail();
    } else if (input.id == ''){

    }
}

// validation on leaving input field
inputList.forEach((input) => {
    input.addEventListener('focusout', function() {
        validate(input)
    })
})

// validation on entering
inputList.forEach((input) => {
    input.addEventListener('focus', function() {
        validate(input)
    })
})

// validation on form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputList.forEach((input) => {
    if (input.validity.valueMissing) {
      enableErrorMsg(input, "Missing value");
    } 
  });
});

