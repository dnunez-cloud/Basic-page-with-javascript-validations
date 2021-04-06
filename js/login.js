var validations = document.querySelector('.validations-hidden');
var errors = ['Validation results:'];

var formExists = function() {
  if (document.querySelector('#loginForm')) {
    return true;
  }
  else {
    errors.push(' Form is not found');
  }
}
formExists();

var inputsNumbers = function () {
  var inputs = document.querySelectorAll('input');
  if (inputs.length == 3) {
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

var anchorLinkRegister = function () {
  var anchor = document.querySelector('.linkRegister');
  if (anchor.getAttribute('href') == 'register.html') {
    return true;
  }
  else {
    errors.push(' Anchor tag is invalid');
  }
}
anchorLinkRegister();

var buttonLoginExists = function() {
  if (document.querySelector('.inputButton')) {
    return true;
  }
  else {
    errors.push(' Missing submit button');
  }
}
buttonLoginExists();

var buttonLoginContent = function() {
  var button = document.querySelector('.inputButton');
  if (button.getAttribute('value') == 'Log In') {
    return true;
  }
  else {
    errors.push('Button content is wrong');
  }
}
buttonLoginContent();

var validateAll = function () {
  var validationsHidden = document.querySelector('.validations-hidden');
  validationsHidden.className = 'validations';
  if (formExists() == true && inputsNumbers() == true && labelsForInputs() == true && requiredFields() == true && 
  anchorLinkRegister() == true && buttonLoginExists() == true && buttonLoginContent() == true) {
    validations.style.backgroundColor= 'green';
    validations.textContent =  'Every validation has passed!';
  }
  else { 
    validations.style.backgroundColor = 'red';
    validations.textContent = errors;
  }
}
validateAll();
