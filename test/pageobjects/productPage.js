const BasePage = require(`./basePage.js`);
const Button = require(`../pageobjects/commonWebComponents/components/button.js`);
const Input = require(`../pageobjects/commonWebComponents/components/input.js`);
const Notification = require(`../pageobjects/commonWebComponents/components/notification.js`);
const Selectors = require('../utilities/selectors.js');

class ProductPage extends BasePage {

    get placeBidButton() {return new Button(Selectors.productPage.placeBidButton)}
    get bidInput() {return new Input(Selectors.productPage.bidInput)}
    get notification() {return new Notification(Selectors.productPage.notification)}
    get myAccountButton() {return new Button(Selectors.productPage.myAccountButton)}

    async inputBid(value) {
        await this.bidInput.insertValueIntoElement(value);
    }

    async clickPlaceBidButton(){
        await this.placeBidButton.click();
    }

    async checkIfButtonIsExisiting() {
      await this.placeBidButton.checkIfElementIsExisting();
    }

    async checkIfNotificationIsExisiting() {
        await this.notification.checkIfElementIsExisting();
    }

    async clickMyAccounButton() {
        await this.myAccountButton.click();
    }

    async placeBid(value) {
        await this.inputBid(value);
        await this.checkIfButtonIsExisiting();
        await this.clickPlaceBidButton();
        await this.checkIfNotificationIsExisiting();
    }
}

module.exports = new ProductPage();