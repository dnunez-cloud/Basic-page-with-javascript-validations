
const emailField = document.querySelector('#emailField');
const passwordField = document.querySelector('#passwordField');
const button = document.querySelector('.inputButton');

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

var getUserData = function () {
  return fetch('https://jsonplaceholder.typicode.com/users?email='+document.querySelector('#emailField').value)
  .then (response => response.text())
  .then (data => {
    console.log(data);
    });
}

var showData = function () {
  getUserData();
  var formData;
  if (document.querySelector('.validations')){
    document.querySelector('.validations').className = 'validations-status';  
    formData = 'Email: ' + emailField.value + ' ' + 'Password: ' + passwordField.value;
    document.querySelector('.validations-status').textContent = formData;
    document.querySelector('.validations-status').style.backgroundColor = 'white';
  }
  else {
    formData = 'Email: ' + emailField.value + ' ' + 'Password: ' + passwordField.value;
    document.querySelector('.validations-status').textContent = formData;
    document.querySelector('.validations-status').style.backgroundColor = 'white';
  }
}

button.addEventListener ('click' , showData)
