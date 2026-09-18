const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

const PASSWORD_MIN_LENGTH = 8;

function setError(input, errorEl, message) {
    errorEl.textContent = message;
}

function clearError(input, errorEl) {
    errorEl.textContent = '';
}

let usernameTouched = false;
let passwordTouched = false;

function validateUsername() {
    const value = usernameInput.value.trim();
    if (value.length < 5) {
        setError(usernameInput, usernameError, 'حداقل ۵ کاراکتر وارد کنید / Minimum 5 characters required');
        return false;
    }
    clearError(usernameInput, usernameError);
    return true;
}

function validatePassword() {
    const value = passwordInput.value;
    if (value.length < PASSWORD_MIN_LENGTH) {
        setError(passwordInput, passwordError, 'حداقل ۸ کاراکتر وارد کنید / Minimum 8 characters required');
        return false;
    }
    clearError(passwordInput, passwordError);
    return true;
}

usernameInput.addEventListener('blur', function () {
    usernameTouched = true;
    validateUsername();
});
usernameInput.addEventListener('input', function () {
    if (usernameTouched) validateUsername();
});

passwordInput.addEventListener('blur', function () {
    passwordTouched = true;
    validatePassword();
});
passwordInput.addEventListener('input', function () {
    if (passwordTouched) validatePassword();
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    usernameTouched = true;
    passwordTouched = true;
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    if (isUsernameValid && isPasswordValid) {
        console.log('Form is valid — ready to send to the server.');
    }
});
