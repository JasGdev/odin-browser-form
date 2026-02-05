const form = document.querySelector("form");
const emailInput = document.querySelector(".email");
const countryInput = document.querySelector(".country");
const postalInput = document.querySelector(".postal");
const passwordInput = document.querySelector(".password");
const passwordConfirmInput = document.querySelector(".passwordConfirm");

const inputList = [
  emailInput,
  countryInput,
  postalInput,
  passwordInput,
  passwordConfirmInput,
];

emailInput.addEventListener("input", function () {
    validateEmail();
});

const validateEmail = () => {
    if (!isValidEmail(emailInput)) {
        if (emailInput.value.length === 0){
            enableErrorMsg(
              emailInput,
              "Allowed: a-z 0-9 _ . ! # $ % & ' * + / = ? ^ ` { | } ~ -",
            );
        } else if (emailInput.value.length === 1 && emailInput.value == '@'){
            enableErrorMsg(emailInput, "Error follow instruction for allowed value");
        }
        else if (emailInput.value.length > 0 && emailInput.value.includes('@')){
            enableErrorMsg(emailInput, "Allowed: a-z 0-9 -")
            
        } else if (emailInput.value.length > 0) {
          -enableErrorMsg(emailInput, "You can enter the @ now");
        }
    // enableErrorMsg(emailInput, "Provide proper email format");
    } else {
    disableErrorMsg(emailInput);
    }

}

const isValidEmail = (email) => {
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
  const validity = emailRegExp.test(email.value);
  return validity;
};


const validate = (input) => {
    if (input.id == 'email'){
        validateEmail();
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

const enableErrorMsg = (input, msg) => {
  const errorSpan = document.querySelector(`.${input.id}Error`);
  if (!errorSpan.classList.contains("invalid")) {
    errorSpan.classList.add("invalid");
  }
  errorSpan.textContent = msg;
  input.setCustomValidity("Error");
};

const disableErrorMsg = (input) => {
  const errorSpan = document.querySelector(`.${input.id}Error`);
  errorSpan.classList.remove("invalid");
  errorSpan.textContent = "";
  input.setCustomValidity('')
};
