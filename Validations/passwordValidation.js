import { disableErrorMsg, enableErrorMsg } from "../errorMsg.js";
const passwordInput = document.querySelector(".password");
const passwordConfirmInput = document.querySelector(".passwordConfirm");

passwordInput.addEventListener("input", function () {
  validatePassword();
//   validatePasswordConfirm();
});

passwordConfirmInput.addEventListener("input", function () {
  validatePasswordConfirm();
});

const validatePassword = () => {
  const value = passwordInput.value;
  const hasLetter = /[A-Za-z]/.test(value);
  const hasNumber = /\d/.test(value);

  if (!isValidPassword(passwordInput)) {
    if (hasLetter && !hasNumber) {
      let msg = `Enter ${8 - passwordInput.value.length} more values, at least one has to be digit`;
      if (passwordInput.value.length >= 8) {
        msg = `At least one has to be digit`;
      }
      enableErrorMsg(passwordInput, msg);
    } else if (hasNumber && !hasLetter) {
      let msg = `Enter ${8 - passwordInput.value.length} more values, at least one has to be letter`;
      if (passwordInput.value.length >= 8) {
        msg = `At least one has to be letter`;
      }
      enableErrorMsg(passwordInput, msg);
    } else if (!hasNumber && !hasLetter) {
      let msg = `Enter ${8 - passwordInput.value.length} more values, at least one has to be letter and digit`;
      if (passwordInput.value.length >= 8) {
        msg = `at least one has to be letter and digit`;
    }
      enableErrorMsg(passwordInput, msg);
    } else if (hasLetter && hasNumber) {
      enableErrorMsg(
        passwordInput,
        `Enter ${8 - passwordInput.value.length} more values`,
      );
    }
  } else {
    disableErrorMsg(passwordInput);
  }
};

const validatePasswordConfirm = () => {
    if (!isValidPasswordConfirm(passwordInput, passwordConfirmInput)){
        enableErrorMsg(passwordConfirmInput, 'Make sure you entered the same password');
    } else {
        disableErrorMsg(passwordConfirmInput)
    }
};

const isValidPassword = (passwordInput) => {
  // at least 1 letter, digit, min length 8
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput.value);
};

const isValidPasswordConfirm = (passwordInput, passwordConfirmInput) => {
  return passwordInput.value === passwordConfirmInput.value;
};

export {
  validatePassword,
  validatePasswordConfirm,
  isValidPassword,
  isValidPasswordConfirm,
};
