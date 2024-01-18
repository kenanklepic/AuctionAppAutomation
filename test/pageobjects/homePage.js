const BasePage = require(`./basePage.js`);
const Button = require(`../pageobjects/commonWebComponents/components/button.js`);
const Selectors = require('../utilities/selectors.js');

class HomePage extends BasePage {
   
    get loginButton() {return new Button(Selectors.homePage.loginButton)}
    get registerButton() {return new Button(Selectors.homePage.registerButton)}
    get bidNowButton() {return new Button(Selectors.homePage.bidNowButton)}

    async waitForBidNowButtonToExist() {
      await this.bidNowButton.waitForElementToExist();
    }

    async clickBidNowButton(){
      await this.bidNowButton.click();
    }
    
    async clickLoginButton(){
      await this.loginButton.click();
    }

    async clickRegisterButton(){
      await this.registerButton.click();
    }

}

module.exports = new HomePage();