const BasePage = require(`./basePage.js`);
const Button = require(`../pageobjects/commonWebComponents/components/button.js`);
const Input = require(`../pageobjects/commonWebComponents/components/input.js`);
const Notification = require(`../pageobjects/commonWebComponents/components/notification.js`);

class LoginPage extends BasePage {

    get emailInput() {return new Input('[ng-reflect-name="email"]')}
    get passwordInput() {return new Input('[ng-reflect-name="password"]')}
    get submitButton() {return new Button('[class="btn"]')}
    get notification() {return new Notification('[class="alert-info"]')}

    async open () {
      return (await super.open('login'));
    }

    async checkIfNotificationIsExisting() {
        await this.notification.checkIfElementIsExisting();
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

    async getEmailValue() {
        return (await this.emailInput.get());
    }

    async getPasswordValue() {
        return (await this.passwordInput.get());
    }

    async checkIfBtnIsExisting() {
      await this.submitButton.checkIfElementIsExisting();
    }
}

module.exports = new LoginPage();