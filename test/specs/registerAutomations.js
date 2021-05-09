const registerPage = require('../pageobjects/register.page.js');

describe('Register tests', () => {
  beforeAll("Open browser", () =>{
		registerPage.open();
		browser.pause(1000);
	})

	it("should be: Full name should have 6 characters at least and a space, when name is invalid",  () =>{
    registerPage.fullnameField.setValue("rodrigo");
    browser.keys("Tab");
    expect(registerPage.errorFullname).toHaveTextContaining("Full name should have 6 characters at least and a space");
  })

	it("should be: Full name should have 6 characters at least and a space, when name is invalid",  () =>{
    registerPage.fullnameField.setValue("d rio");
    browser.keys("Tab");
    expect(registerPage.errorFullname).toHaveTextContaining("Full name should have 6 characters at least and a space");
  })

	it("should be: Full name should have 6 characters at least and a space, when name is invalid",  () =>{
    registerPage.fullnameField.setValue("");
    browser.keys("Tab");
    expect(registerPage.errorFullname).toHaveTextContaining("Full name should have 6 characters at least and a space");
  })

	it("should be: empty string in errorFullname, when fullname is valid",  () =>{
    registerPage.fullnameField.setValue("dario nuñez");
    browser.keys("Tab");
    expect(registerPage.errorFullname).toHaveTextContaining("");
  })

  it("should be: wrong email format when email is invalid",  () =>{
    registerPage.emailField.setValue("123");
    browser.keys("Tab");
    expect(registerPage.errorEmail).toHaveTextContaining("Wrong email format");
  })

	it("should be: wrong email format when email is invalid",  () =>{
    registerPage.emailField.setValue("dario@");
    browser.keys("Tab");
    expect(registerPage.errorEmail).toHaveTextContaining("Wrong email format");
  })

	it("should be: wrong email format when email is invalid",  () =>{
    registerPage.emailField.setValue("");
    browser.keys("Tab");
    expect(registerPage.errorEmail).toHaveTextContaining("Wrong email format");
  })

	it("should be: empty errorEmail when email is valid",  () =>{
    registerPage.emailField.setValue("dariose89@gmail.com");
    browser.keys("Tab");
    expect(registerPage.errorEmail).toHaveTextContaining("");
  })

  it("should be: wrong password, when password input is invalid", () =>{
    registerPage.passwordField.setValue("asdasdasd");
    browser.keys("Tab");
    expect(registerPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: wrong password, when password input is invalid", () =>{
    registerPage.passwordField.setValue("123123123");
    browser.keys("Tab");
    expect(registerPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: wrong password, when password input is invalid", () =>{
    registerPage.passwordField.setValue("asd12");
    browser.keys("Tab");
    expect(registerPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: Incorrect password.should be the same as the field as above, when secondPassword invalid", () =>{
    registerPage.passwordField.setValue("asdasd12");
    browser.keys("Tab");
		registerPage.secondPasswordField.setValue("");
    browser.keys("Tab");
    expect(registerPage.errorSecondPassword).toHaveTextContaining(
			"Incorrect password. should be the same as the field as above");
  })

	it("should be: Incorrect password.should be the same as the field as above, when secondPassword invalid", () =>{
    registerPage.passwordField.setValue("asdasd12");
    browser.keys("Tab");
		registerPage.secondPasswordField.setValue("asd");
    browser.keys("Tab");
    expect(registerPage.errorSecondPassword).toHaveTextContaining(
			"Incorrect password. should be the same as the field as above");
  })

	it("should be: empty errorSecondPassword div, when seconPasswordField & passwordField are valid & match", () =>{
    registerPage.passwordField.setValue("asdasd12");
    browser.keys("Tab");
		registerPage.secondPasswordField.setValue("asdasd12");
    browser.keys("Tab");
    expect(registerPage.errorSecondPassword).toHaveTextContaining("");
  })

	it("should be: empty errorSecondPassword div, when seconPasswordField & passwordField are invalid & match", () =>{
    registerPage.passwordField.setValue("");
    browser.keys("Tab");
		registerPage.secondPasswordField.setValue("");
    browser.keys("Tab");
    expect(registerPage.errorSecondPassword).toHaveTextContaining("");
  })

	it("should be: dario nuñez Email: dario@hotmail.com Password: asdasd12 Confirm password: asdasd12", () =>{
		registerPage.fullnameField.setValue("dario nuñez");
		registerPage.emailField.setValue("dario@hotmail.com");
    registerPage.passwordField.setValue("asdasd12");
		registerPage.secondPasswordField.setValue("asdasd12");
    registerPage.registerButton.click();
    expect(registerPage.validationField).toHaveTextContaining(
			"Fullname: dario nuñez Email: dario@hotmail.com Password: asdasd12 Confirm password: asdasd12");
    browser.refresh();
  })

	it("should be: Some input has invalid data, please check again, when data is empty", () =>{
    registerPage.registerButton.click();
    expect(registerPage.validationField).toHaveTextContaining("Some input has invalid data, please check again");
  })

	it("can find login page", () =>{
    registerPage.logInLink.click();
    expect(browser).toHaveUrl('https://dnunez-cloud.github.io/week9/login.html')
  })
});