const BasePage = require(`./basePage.js`);
const Button = require(`../pageobjects/commonWebComponents/components/button.js`);
const Input = require(`../pageobjects/commonWebComponents/components/input.js`);
const Notification = require(`../pageobjects/commonWebComponents/components/notification.js`);
const Selectors = require('../utilities/selectors.js');

class RegisterPage extends BasePage {

    get firstNameInput() {return new Input(Selectors.registerPage.firstNameInput)}
    get lastNameInput() {return new Input(Selectors.registerPage.lastNameInput)}
    get emailInput() {return new Input(Selectors.registerPage.emailInput)}
    get passwordInput() {return new Input(Selectors.registerPage.passwordInput)}
    get submitButton() {return new Button(Selectors.registerPage.submitButton)}
    get notification() {return new Notification(Selectors.registerPage.notification)}

    async open () {
      return (await super.open('register'));
    }

    async inputFirstName(value) {
      await this.firstNameInput.insertValueIntoElement(value);
    }

    async inputLastName(value) {
      await this.lastNameInput.insertValueIntoElement(value);
    }

    async inputEmail(value) {
      await this.emailInput.insertValueIntoElement(value);
    }

    async inputPassword(value) {
      await this.passwordInput.insertValueIntoElement(value);
    }

    async clickSubmitButton(){
      await this.submitButton.click();
    }

    async getFirstNameValue() {
        return (await this.firstNameInput.getElementValue());
    }

    async getLastNameValue() {
        return (await this.lastNameInput.getElementValue());
    }

    async getEmailValue() {
        return (await this.emailInput.getElementValue());
    }

    async getPasswordValue() {
        return (await this.passwordInput.getElementValue());
    }

    async checkIfBtnIsExisting() {
      await this.submitButton.checkIfElementIsExisting();
    }

    async checkIfNotificationIsExisting() {
      await this.notification.checkIfElementIsExisting();
    }
}

module.exports = new RegisterPage();