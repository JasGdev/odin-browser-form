const form = document.querySelector("form");
const postalInput = document.querySelector(".postal");
const passwordInput = document.querySelector(".password");
const passwordConfirmInput = document.querySelector(".passwordConfirm");

const emailInput = document.querySelector(".email");


import { isValidEmail, validateEmail } from './Validations/emailValidation.js';
import { isValidPostal, validatePostal } from './Validations/postalValidation.js';
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
    } else if (input.id == 'postal'){
        validatePostal();
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
  console.log(`email valid : ${isValidEmail(emailInput)}`);
  console.log(`postal valid : ${isValidPostal(postalInput)}`);


});


