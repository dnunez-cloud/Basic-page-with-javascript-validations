
const loginPage = require('../pageobjects/login.page.js');

describe('Login tests', () => {
  beforeAll("Open browser", () =>{
		loginPage.open();
		browser.pause(1000);
	})

  it("Should be: wrong email format when @ is missing",  () =>{
    loginPage.emailField.setValue("dario");
    browser.keys("Tab");
    expect(loginPage.errorEmail).toHaveTextContaining("Wrong email format");
  })

	it("should be: wrong email format when email field is empty",  () =>{
    loginPage.emailField.setValue("");
    browser.keys("Tab");
    expect(loginPage.errorEmail).toHaveTextContaining("Wrong email format");
  })

	it("should be: errorEmail empty field when the email has correct format",  () =>{
    loginPage.emailField.setValue("dario@hotmail.com");
    browser.keys("Tab");
    expect(loginPage.errorEmail).toHaveTextContaining("");
  })

  it("should be: Wrong password. when are less than 8 characters", () =>{
    loginPage.passwordField.setValue("asdasd1");
    browser.keys("Tab");
    expect(loginPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: wrong password, when there are only letters", () =>{
    loginPage.passwordField.setValue("asdasdasd");
    browser.keys("Tab");
    expect(loginPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: wrong password, when there are only numbers", () =>{
    loginPage.passwordField.setValue("12345678");
    browser.keys("Tab");
    expect(loginPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: empty field for errorPassword div when the password has correct format", () =>{
    loginPage.passwordField.setValue("asdasd12");
    browser.keys("Tab");
    expect(loginPage.errorPassword).toHaveTextContaining("");
  })

	it("should be: Email: dario@hotmail.com Password: asdasd12 when fields are fill correctly", () =>{
		loginPage.emailField.setValue("dario@hotmail.com");
    loginPage.passwordField.setValue("asdasd12");
    loginButton.click();
    expect(loginPage.validationField).toHaveTextContaining("Email: dario@hotmail.com Password: asdasd12");
  })

	it("should be: Some input has invalid data, please check again when email is invalid", () =>{
		loginPage.emailField.setValue("dario");
    loginPage.passwordField.setValue("asdasd12");
    loginButton.click();
    expect(loginPage.validationField).toHaveTextContaining("Some input has invalid data, please check again");
  })
	
	it("should be: Some input has invalid data, please check again when password is invalid", () =>{
		loginPage.emailField.setValue("dario@hotmail.com");
    loginPage.passwordField.setValue("asdasd");
    loginButton.click();
    expect(loginPage.validationField).toHaveTextContaining("Some input has invalid data, please check again");
  })

	it("should be: Some input has invalid data, please check again when password & email is invalid", () =>{
		loginPage.emailField.setValue("dario");
    loginPage.passwordField.setValue("aaa");
    loginButton.click();
    expect(loginPage.validationField).toHaveTextContaining("Some input has invalid data, please check again");
  })

	it("can find register page", () =>{
    registerLink.click();
    expect(browser).toHaveUrl('http://localhost:3000/register')
  })
});