import { disableErrorMsg, enableErrorMsg } from "../errorMsg.js";

const emailInput = document.querySelector(".email");

// Setting up Email

emailInput.addEventListener("input", function () {
  validateEmail();
});

const validateEmail = () => {
  if (!isValidEmail(emailInput)) {
    if (emailInput.value.length === 0 && !emailInput.value.includes("@")) {
      enableErrorMsg(
        emailInput,
        "Allowed: a-z 0-9 _ . ! # $ % & ' * + / = ? ^ ` { | } ~ -",
      );
    } else if (
      emailInput.value.length === 1 &&
      emailInput.value.includes("@")
    ) {
      enableErrorMsg(
        emailInput,
        "Are you sure your input is: a-z 0-9 _ . ! # $ % & ' * + / = ? ^ ` { | } ~ -",
      );
    } else if (emailInput.value.length > 0 && !emailInput.value.includes("@")) {
      const currentAllowedValue = /^[\w.!#$%&'*+/=?^`{|}~-]+$/;
      const validity = currentAllowedValue.test(emailInput.value);
      if (!validity) {
        enableErrorMsg(
          emailInput,
          "Are you sure your input is: a-z 0-9 _ . ! # $ % & ' * + / = ? ^ ` { | } ~ -",
        );
      } else if (validity) {
        enableErrorMsg(emailInput, "You can enter @ now");
      }
    } else if (emailInput.value.length > 1 && emailInput.value.includes("@")) {
      const currentAllowedValue = /^[a-z\d-]+(?:\.[a-z\d-]+)*$/
      console.log('in if')
      const indexofAt = emailInput.value.indexOf('@')
      const afterAtValue = emailInput.value.substring(indexofAt+1);
      console.log(emailInput.value);
      const validity = currentAllowedValue.test(afterAtValue);
      console.log(validity)
      
      enableErrorMsg(emailInput, "Allowed: a-z 0-9 -");
        
      if (!validity && afterAtValue.length !== 0) {
        enableErrorMsg(
          emailInput,
          "Are you sure your input after @ is: a-z 0-9 -",
        );
      }
    } 
  } else {
     disableErrorMsg(emailInput);
  }
};

const isValidEmail = (email) => {
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
  const validity = emailRegExp.test(email.value);
  return validity;
};

export { validateEmail };
