
const loginPage = require('../pageobjects/login.page.js');

describe('Login tests', () => {
  beforeAll("Open browser", () =>{
		loginPage.open();
		browser.pause(1000);
	})

  it("should be: wrong email format when email is invalid",  () =>{
    loginPage.emailField.setValue("dario");
    browser.keys("Tab");
    expect(loginPage.errorEmail).toHaveTextContaining("Wrong email format");
  })

	it("should be: wrong email format when email is invalid",  () =>{
    loginPage.emailField.setValue("");
    browser.keys("Tab");
    expect(loginPage.errorEmail).toHaveTextContaining("Wrong email format");
  })

	it("should be: errorEmail empty field when email is valid",  () =>{
    loginPage.emailField.setValue("dario@hotmail.com");
    browser.keys("Tab");
    expect(loginPage.errorEmail).toHaveTextContaining("");
  })

  it("should be: Wrong password. when password is invalid", () =>{
    loginPage.passwordField.setValue("asdasd1");
    browser.keys("Tab");
    expect(loginPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: wrong password, when password is invalid", () =>{
    loginPage.passwordField.setValue("asdasdasd");
    browser.keys("Tab");
    expect(loginPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: wrong password, when password is invalid", () =>{
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
    loginPage.loginButton.click();
    expect(loginPage.validationField).toHaveTextContaining("Email: dario@hotmail.com Password: asdasd12");
    browser.refresh();
  })

	it("should be: Some input has invalid data, please check again when data inputs is invalid", () =>{
    loginPage.loginButton.click();
    expect(loginPage.validationField).toHaveTextContaining("Some input has invalid data, please check again");
  })
	
	it("can find register page", () =>{
    loginPage.registerLink.click();
    expect(browser).toHaveUrl('https://dnunez-cloud.github.io/week9/register.html')
  })

});