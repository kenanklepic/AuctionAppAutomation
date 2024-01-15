const BasePage = require(`./basePage.js`);
const Button = require(`../pageobjects/commonWebComponents/components/button.js`);

class HomePage extends BasePage {

   
    get loginButton() {return new Button('[ng-reflect-router-link="/login"]')}
    get registerButton() {return new Button('[ng-reflect-router-link="/register"]')}
    get bidNowButton() {return new Button('[class="highlight__btn"]')}

    async checkIfButtonIsExisiting() {
      await this.bidNowButton.waitForElementToExist();
    }

    async clickBidNowButton(){
      await this.bidNowButton.click();
    }
    
    async clickLoginButton(){
      await this.loginButton.clickButton();
    }

    async clickRegisterButton(){
      await this.registerButton.click();
    }

}

module.exports = new HomePage();