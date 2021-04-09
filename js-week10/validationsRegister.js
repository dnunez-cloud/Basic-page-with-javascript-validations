
const emailField = document.querySelector('#emailField');
const passwordField = document.querySelector('#passwordField');
const fullnameField = document.querySelector('#fullnameField');
const secondPasswordField = document.querySelector('#secondPasswordField');
const button = document.querySelector('.inputButton');

var validFullname = function () {
  if (fullnameField.value.length < 6 || fullnameField.value.trim().indexOf(" ") == -1) {
    document.querySelector('.errorFullname-hidden').className = 'errorFullname';
  }
}

fullnameField.addEventListener ('blur', validFullname)

var wrongFullnameHidden = function () {
  if (document.querySelector('.errorFullname')) {
  document.querySelector('.errorFullname').className = 'errorFullname-hidden';
  }
}

fullnameField.addEventListener ('focus', wrongFullnameHidden)

var emailCorrectFormat = function () {
  var correctFormat = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  if (!correctFormat.test(emailField.value)) {
    document.querySelector('.errorEmail-hidden').className = 'errorEmail';
  }
}

emailField.addEventListener ('blur', emailCorrectFormat)

var wrongEmailHidden = function () {
  if (document.querySelector('.errorEmail')) {
    document.querySelector('.errorEmail').className = 'errorEmail-hidden';
  }
}

emailField.addEventListener ('focus', wrongEmailHidden)

var validPassword = function () {
  var correctPassword = /(([\d]+[A-Za-z]+)|[A-Za-z]+[\d]+$)/g;
  if (passwordField.value.length < 8 || !correctPassword.test(passwordField.value)) {
    document.querySelector('.errorPassword-hidden').className = 'errorPassword';
  }
}

passwordField.addEventListener ('blur', validPassword)

var wrongPasswordHidden = function () {
  if (document.querySelector('.errorPassword')) {
    document.querySelector('.errorPassword').className = 'errorPassword-hidden';
  }
}

passwordField.addEventListener ('focus', wrongPasswordHidden)

var matchPasswords = function () {
  if (passwordField.value != secondPasswordField.value) {
    document.querySelector('.errorConfirmPassword-hidden').className = 'errorConfirmPassword';
  }
}

secondPasswordField.addEventListener ('blur', matchPasswords)

var wrongSecondPassword = function () {
  if (document.querySelector('.errorConfirmPassword')) {
    document.querySelector('.errorConfirmPassword').className = 'errorConfirmPassword-hidden';
  }
}

secondPasswordField.addEventListener ('focus', wrongSecondPassword)

var showData = function () {
  var formData = '';
  if (document.querySelector('.validations')) {
    document.querySelector('.validations').className = 'validations-status';  
    formData = 'Fullname: ' + fullnameField.value + ' ' + 'Email: ' + emailField.value + ' ' + 'Password: ' + 
    passwordField.value + ' ' + 'Confirm password: ' + secondPasswordField.value;
    document.querySelector('.validations-status').textContent = formData;
    document.querySelector('.validations-status').style.backgroundColor = 'white';
  }
  else {
    formData = 'Fullname: ' + fullnameField.value + ' ' + 'Email: ' + emailField.value + ' ' + 'Password: ' + 
    passwordField.value + ' ' + 'Confirm password: ' + secondPasswordField.value;
    document.querySelector('.validations-status').textContent = formData;
    document.querySelector('.validations-status').style.backgroundColor = 'white';
  }
}

button.addEventListener ('click' , showData)
