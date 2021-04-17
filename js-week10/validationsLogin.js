
const emailField = document.querySelector('#emailField');
const passwordField = document.querySelector('#passwordField');
const button = document.querySelector('.inputButton');

var emailCorrectFormat = function () {
  var correctFormat = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  if (!correctFormat.test(emailField.value)) {
    document.querySelector('.errorEmail-hidden').className = 'errorEmail';
    return true;
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
    return true;
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

var handleLogin = function () {
  var url = 'http://localhost:4000/login';
  var data = {
  email: document.querySelector('#emailField').value,
  password: document.querySelector('#passwordField').value
  }
  fetch(url, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => console.log('Success:', response));
}

var validateFormFields = function () {
  if (emailCorrectFormat() == true || validPassword() == true) {
    return false;
  }
  else {
    return true;
  }
}

var showData = function () {
  var formData;
  if (validateFormFields() == true) {
    getUserData();
    handleLogin();
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
  else {
    if (document.querySelector('.validations-status')){
      document.querySelector('.validations-status').textContent = 'Some input has invalid data, please check again';
      document.querySelector('.validations-status').style.backgroundColor = 'red';
    }
    else {
      document.querySelector('.validations').textContent = 'Some input has invalid data, please check again';
      document.querySelector('.validations').style.backgroundColor = 'red';
    }
  }
}

button.addEventListener ('click' , showData)