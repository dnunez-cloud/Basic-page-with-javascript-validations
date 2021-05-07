
const Page = require('./page');

class LoginPage extends Page {
	get emailField () {return $("//*[@id='emailField']")}
	get passwordField () {return $("//*[@id='passwordField']")}
	get loginButton () {return $("//*[@id='loginForm']/input[3]")}
	get validationField () {return $("/html/body/div[2]")}
	get errorEmail () {return $("//*[@id='loginForm']/span[1]")}
	get errorPassword () {return $("//*[@id='loginForm']/span[2]")}
	get registerLink () {return $("//*[@id='loginForm']/div/a")}

	open () {
		return super.open('login.html');
	}
}

module.exports = new LoginPage();