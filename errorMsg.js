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
  input.setCustomValidity("");
};


export {enableErrorMsg, disableErrorMsg}