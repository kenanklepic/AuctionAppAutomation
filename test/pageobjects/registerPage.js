const BasePage = require(`./basePage.js`);
const Button = require(`../pageobjects/commonWebComponents/components/button.js`);
const Input = require(`../pageobjects/commonWebComponents/components/input.js`);
const Notification = require(`../pageobjects/commonWebComponents/components/notification.js`);

class RegisterPage extends BasePage {

    get firstNameInput() {return new Input('[ng-reflect-name="firstName"]')}
    get lastNameInput() {return new Input('[ng-reflect-name="lastName"]')}
    get emailInput() {return new Input('[ng-reflect-name="email"]')}
    get passwordInput() {return new Input('[ng-reflect-name="password"]')}
    get submitButton() {return new Button('[class="btn"]')}
    get notification() {return new Notification('[class="alert-info"]')}

    async open () {
      return (await super.open('register'));
    }

    async inputFirstName(value) {
      await this.firstNameInput.insert(value);
    }

    async inputLastName(value) {
      await this.lastNameInput.insert(value);
    }

    async inputEmail(value) {
      await this.emailInput.insert(value);
    }

    async inputPassword(value) {
      await this.passwordInput.insert(value);
    }

    async clickSubmitButton(){
      await this.submitButton.click();
    }

    async getFirstNameValue() {
        return (await this.firstNameInput.get());
    }

    async getLastNameValue() {
        return (await this.lastNameInput.get());
    }

    async getEmailValue() {
        return (await this.emailInput.get());
    }

    async getPasswordValue() {
        return (await this.passwordInput.get());
    }

    async checkIfBtnIsExisting() {
      await this.submitButton.checkIfElementIsExisting();
    }

    async checkIfNotificationIsExisting() {
      await this.notification.checkIfElementIsExisting();
    }
}

module.exports = new RegisterPage();