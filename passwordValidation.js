
import { disableErrorMsg, enableErrorMsg } from "../errorMsg.js";
const passwordInput = document.querySelector(".password");
const passwordConfirmInput = document.querySelector(".passwordConfirm");



const validatePassword = () => {

}

const validatePasswordConfirm = () => {};


const isValidPassword = (passwordInput) => {
    // at least 1 letter, digit, min length 8
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput.value)
}

const isValidPasswordConfirm = (passwordInput, passwordConfirmInput) => {
    return passwordInput.value === passwordConfirmInput.value
}

export {validatePassword, validatePasswordConfirm, isValidPassword, isValidPasswordConfirm}




