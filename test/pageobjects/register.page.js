const Page = require('./page');

class RegisterPage extends Page {
	get fullnameField () {return $("//*[@id='fullnameField']")}
	get emailField () {return $("//*[@id='emailField']")}
	get passwordField () {return $("//*[@id='passwordField']")}
	get secondPasswordField () {return $("//*[@id='secondPasswordField']")}
	get registerButton () {return $("//*[@id='registerForm']/input[5]")}
	get validationField () {return $("/html/body/div[2]")}
	get errorFullname () {return $("//*[@id='registerForm']/span[1]")}
	get errorEmail () {return $("//*[@id='registerForm']/span[2]")}
	get errorPassword () {return $("//*[@id='registerForm']/span[3]")}
	get errorSecondPassword () {return $("//*[@id='registerForm']/span[4]")}
	get logInLink () {return $("//*[@id='registerForm']/div/a")}

	open () {
		return super.open('register.html');
	}
}

module.exports = new RegisterPage();