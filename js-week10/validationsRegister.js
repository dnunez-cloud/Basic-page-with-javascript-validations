
const emailField = document.querySelector('#emailField');
const passwordField = document.querySelector('#passwordField');
const fullnameField = document.querySelector('#fullnameField');
const secondPasswordField = document.querySelector('#secondPasswordField');
const button = document.querySelector('.inputButton');

var validFullname = function () {
  if (fullnameField.value.length < 6 || fullnameField.value.trim().indexOf(" ") == -1) {
    document.querySelector('.errorFullname-hidden').className = 'errorFullname';
    return true;
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

var matchPasswords = function () {
  if (passwordField.value != secondPasswordField.value) {
    document.querySelector('.errorConfirmPassword-hidden').className = 'errorConfirmPassword';
    return true;
  }
}

secondPasswordField.addEventListener ('blur', matchPasswords)

var wrongSecondPassword = function () {
  if (document.querySelector('.errorConfirmPassword')) {
    document.querySelector('.errorConfirmPassword').className = 'errorConfirmPassword-hidden';
  }
}

secondPasswordField.addEventListener ('focus', wrongSecondPassword)

var getUserData = function () {
  return fetch('https://jsonplaceholder.typicode.com/users?email='+document.querySelector('#emailField').value)
  .then (response => response.text())
  .then (data => {
    console.log(data);
    });
}

var handleRegister = function () {
  var url = 'http://localhost:4000/register';
  var data = {
    fullname: document.querySelector('#fullnameField').value,
    email: document.querySelector('#emailField').value,
    password: document.querySelector('#passwordField').value,
  }
  let dataJson = JSON.stringify(data);
  console.log(dataJson)
  fetch(url, {
    mode: 'no-cors',
    method: 'POST',
    body: (dataJson),
  })
  .then(res => res.json())
  .catch(error => console.log(error))
  .then(response => console.log(response));
}

var validateFormFields = function () {
  if (validFullname() == true || emailCorrectFormat() == true || validPassword() == true || matchPasswords() == 
  true) {
    return false;
  }
  else {
    return true;
  }
}

var showData = function () {
  var formData = '';
  if (validateFormFields() == true) {
    getUserData();
    handleRegister();
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