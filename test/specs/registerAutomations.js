const registerPage = require('../pageobjects/register.page.js');

describe('Register tests', () => {
  beforeAll("Open browser", () =>{
		registerPage.open();
		browser.pause(1000);
	})

	it("should be: Full name should have 6 characters at least and a space, when name: rodrigo",  () =>{
    registerPage.fullnameField.setValue("rodrigo");
    browser.keys("Tab");
    expect(registerPage.errorFullname).toHaveTextContaining("Full name should have 6 characters at least and a space");
  })

	it("should be: Full name should have 6 characters at least and a space, when name: da rio",  () =>{
    registerPage.fullnameField.setValue("da rio");
    browser.keys("Tab");
    expect(registerPage.errorFullname).toHaveTextContaining("Full name should have 6 characters at least and a space");
  })

	it("should be: Full name should have 6 characters at least and a space, when name: empty",  () =>{
    registerPage.fullnameField.setValue("");
    browser.keys("Tab");
    expect(registerPage.errorFullname).toHaveTextContaining("Full name should have 6 characters at least and a space");
  })

	it("should be: empty string in errorFullname, when fullname = dario nuñez",  () =>{
    registerPage.fullnameField.setValue("dario nuñez");
    browser.keys("Tab");
    expect(registerPage.errorFullname).toHaveTextContaining("");
  })

  it("should be: wrong email format when email input = 123",  () =>{
    registerPage.emailField.setValue("123");
    browser.keys("Tab");
    expect(registerPage.errorEmail).toHaveTextContaining("Wrong email format");
  })

	it("should be: wrong email format when email input = dario@",  () =>{
    registerPage.emailField.setValue("dario@");
    browser.keys("Tab");
    expect(registerPage.errorEmail).toHaveTextContaining("Wrong email format");
  })

	it("should be: wrong email format when email input = empty",  () =>{
    registerPage.emailField.setValue("");
    browser.keys("Tab");
    expect(registerPage.errorEmail).toHaveTextContaining("Wrong email format");
  })

	it("should be: empty errorEmail when email input = dariose89@gmail.com",  () =>{
    registerPage.emailField.setValue("dariose89@gmail.com");
    browser.keys("Tab");
    expect(registerPage.errorEmail).toHaveTextContaining("");
  })

  it("should be: wrong password, when password input does not have numbers", () =>{
    registerPage.passwordField.setValue("asdasdasd");
    browser.keys("Tab");
    expect(registerPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: wrong password, when password input does not have letters", () =>{
    registerPage.passwordField.setValue("123123123");
    browser.keys("Tab");
    expect(registerPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: wrong password, when password input characters are less than 8", () =>{
    registerPage.passwordField.setValue("asd12");
    browser.keys("Tab");
    expect(registerPage.errorPassword).toHaveTextContaining(
			"Wrong password. Must have 8 characters minimum with letters and numbers");
  })

	it("should be: Incorrect password.should be the same as the field as above, when secondPasswordField is empty", () =>{
    registerPage.passwordField.setValue("asdasd12");
    browser.keys("Tab");
		registerPage.secondPasswordField.setValue("");
    browser.keys("Tab");
    expect(registerPage.errorSecondPassword).toHaveTextContaining(
			"Incorrect password. should be the same as the field as above");
  })

	it("should be: Incorrect password.should be the same as the field as above, when secondPasswordField is asd", () =>{
    registerPage.passwordField.setValue("asdasd12");
    browser.keys("Tab");
		registerPage.secondPasswordField.setValue("asd");
    browser.keys("Tab");
    expect(registerPage.errorSecondPassword).toHaveTextContaining(
			"Incorrect password. should be the same as the field as above");
  })

	it("should be: empty errorSecondPassword div, when seconPasswordField & passwordField = asdasd12", () =>{
    registerPage.passwordField.setValue("asdasd12");
    browser.keys("Tab");
		registerPage.secondPasswordField.setValue("asdasd12");
    browser.keys("Tab");
    expect(registerPage.errorSecondPassword).toHaveTextContaining("");
  })

	it("should be: empty errorSecondPassword div, when seconPasswordField & passwordField = empty", () =>{
    registerPage.passwordField.setValue("");
    browser.keys("Tab");
		registerPage.secondPasswordField.setValue("");
    browser.keys("Tab");
    expect(registerPage.errorSecondPassword).toHaveTextContaining("");
  })

	it("should be: data in validationField: dario nuñez, dariosebastian_4@hotmail.com, asdasd12, asdasd12", () =>{
		registerPage.fullnameField.setValue("dario nuñez");
		registerPage.emailField.setValue("dario@hotmail.com");
    registerPage.passwordField.setValue("asdasd12");
		registerPage.secondPasswordField.setValue("asdasd12");
    registerButton.click();
    expect(registerPage.validationField).toHaveTextContaining(
			"Fullname: dario nuñez Email: dariosebastian_4@hotmail.com Password: asdasd12 Confirm password: asdasd12");
  })

	it("should be: Some input has invalid data, please check again, when fullname input has invalid format", () =>{
		registerPage.fullnameField.setValue("dario");
		registerPage.emailField.setValue("dario@hotmail.com");
    registerPage.passwordField.setValue("asdasd12");
		registerPage.secondPasswordField.setValue("asdasd12");
    registerButton.click();
    expect(registerPage.validationField).toHaveTextContaining("Some input has invalid data, please check again");
  })

	it("should be: Some input has invalid data, please check again, when email input has invalid format", () =>{
		registerPage.fullnameField.setValue("dario nuñez");
		registerPage.emailField.setValue("dario");
    registerPage.passwordField.setValue("asdasd12");
		registerPage.secondPasswordField.setValue("asdasd12");
    registerButton.click();
    expect(registerPage.validationField).toHaveTextContaining("Some input has invalid data, please check again");
  })

	it("should be: Some input has invalid data, please check again, when password input has invalid format", () =>{
		registerPage.fullnameField.setValue("dario nuñez");
		registerPage.emailField.setValue("dario@hotmail.com");
    registerPage.passwordField.setValue("inv");
		registerPage.secondPasswordField.setValue("asdasd12");
    registerButton.click();
    expect(registerPage.validationField).toHaveTextContaining("Some input has invalid data, please check again");
  })

	it("should be: Some input has invalid data, please check again, when second password input not match", () =>{
		registerPage.fullnameField.setValue("dario nuñez");
		registerPage.emailField.setValue("dario@hotmail.com");
    registerPage.passwordField.setValue("asdasd12");
		registerPage.secondPasswordField.setValue("inv");
    registerButton.click();
    expect(registerPage.validationField).toHaveTextContaining("Some input has invalid data, please check again");
  })

	it("can find login page", () =>{
    logInLink.click();
    expect(browser).toHaveUrl('https://dnunez-cloud.github.io/week9/login.html')
  })
});