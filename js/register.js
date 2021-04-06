var validations = document.querySelector('.validations-hidden');
var errors = ['Validation results:'];

var formExists = function() {
  if (document.querySelector('#registerForm')) {
    return true;
  }
  else {
    errors.push(' Form is not found');
  }
}
formExists();

var inputsNumbers = function () {
  var inputs = document.querySelectorAll('input');
  if (inputs.length == 6) {
    return true;
  }
  else {
    errors.push(' There are missing inputs');
  }
}
inputsNumbers()

var labelsForInputs = function () {
  var input = document.querySelectorAll('.input');
  var label = document.querySelectorAll('.label');
  var inputLabel;
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < label.length; j++) {
      if (input[i].getAttribute('type') == label[j].getAttribute('for')) {
        inputLabel = true;
        j = label.length;
      }
      else {
        inputLabel = false;
      }
    }
    if (inputLabel == false) {
      break;
    }
  }
  if (inputLabel == true) {
    return true;
  }
  else {
    errors.push(' There are Labels missing for inputs');
  }
}
labelsForInputs();

var requiredFields = function () {
  var inputs = document.querySelectorAll('.input');
  var inputRequired;
  for (var i = 0; i < inputs.length; i++){
    if (inputs[i].hasAttribute('required')) {
      inputRequired = true;
    }
    else {
      inputRequired = false;
      break;
    }
  }
  if (inputRequired == true) {
    return true;
  }
  else {
    errors.push(' Required attributes missing');
  }
}
requiredFields();

var anchorLinkLogin = function () {
  var anchor = document.querySelector('.linkRegister');
  if (anchor.getAttribute('href') == 'login.html') {
    return true;
  }
  else {
    errors.push(' Anchor tag is invalid');
  }
}
anchorLinkLogin();

var buttonSignupExists = function() {
  if (document.querySelector('.inputButton')) {
    return true;
  }
  else {
    errors.push(' Missing Sign Up button');
  }
}
buttonSignupExists();

var buttonResetExists = function() {
  if (document.querySelector('.inputButtonReset')) {
    return true;
  }
  else {
    errors.push(' Missing reset button');
  }
}
buttonResetExists();

var buttonContentSignup = function() {
  var button = document.querySelector('.inputButton');
  if (button.getAttribute('value') == 'Sign Up') {
    return true;
  }
  else {
    errors.push('Buttons content is wrong');
  }
}
buttonContentSignup();

var buttonContentReset = function() {
  var button = document.querySelector('.inputButtonReset');
  if (button.getAttribute('value') == 'Reset') {
    return true;
  }
  else {
    errors.push('Buttons content is wrong');
  }
}
buttonContentReset();

var validateAll = function () {
  var validationsHidden = document.querySelector('.validations-hidden');
  validationsHidden.className = 'validations';
  if (formExists() == true && inputsNumbers() == true && labelsForInputs() == true && requiredFields() == true && 
  anchorLinkLogin() == true && buttonSignupExists() == true && buttonResetExists() == true && 
  buttonContentSignup() == true && buttonContentReset() == true) {
    validations.style.backgroundColor= 'green';
    validations.textContent =  'Every validation has passed!';
  }
  else { 
    validations.style.backgroundColor = 'red';
    validations.textContent = errors;
  }
}
validateAll();