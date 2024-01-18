const BasePage = require(`./basePage.js`);
const Button = require(`../pageobjects/commonWebComponents/components/button.js`);
const Input = require(`../pageobjects/commonWebComponents/components/input.js`);
const Notification = require(`../pageobjects/commonWebComponents/components/notification.js`);
const Selectors = require('../utilities/selectors.js');

class LoginPage extends BasePage {

    get emailInput() {return new Input(Selectors.loginPage.emailInput)}
    get passwordInput() {return new Input(Selectors.loginPage.passwordInput)}
    get submitButton() {return new Button(Selectors.loginPage.submitButton)}
    get notification() {return new Notification(Selectors.loginPage.notification)}

    async open () {
      return (await super.open('login'));
    }

    async checkIfNotificationIsExisting() {
        await this.notification.checkIfElementIsExisting();
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

    async getEmailValue() {
        return (await this.emailInput.getElementValue());
    }

    async getPasswordValue() {
        return (await this.passwordInput.getElementValue());
    }

    async checkIfBtnIsExisting() {
      await this.submitButton.checkIfElementIsExisting();
    }
}

module.exports = new LoginPage();