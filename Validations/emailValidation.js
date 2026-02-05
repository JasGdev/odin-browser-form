import { disableErrorMsg, enableErrorMsg } from "../errorMsg.js";

const emailInput = document.querySelector(".email");

// Setting up Email

emailInput.addEventListener("input", function () {
  validateEmail();
});

const validateEmail = () => {
  if (!isValidEmail(emailInput)) {
    if (emailInput.value.length === 0) {
      enableErrorMsg(
        emailInput,
        "Allowed: a-z 0-9 _ . ! # $ % & ' * + / = ? ^ ` { | } ~ -",
      );
    } else if (emailInput.value.length === 1 && emailInput.value == "@") {
      enableErrorMsg(emailInput, "Error follow instruction for allowed value");
    } else if (emailInput.value.length > 0 && emailInput.value.includes("@")) {
      enableErrorMsg(emailInput, "Allowed: a-z 0-9 -");
    } else if (emailInput.value.length > 0) {
      enableErrorMsg(emailInput, "You can enter the @ now");
    }
    // enableErrorMsg(emailInput, "Provide proper email format");
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
