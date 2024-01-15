const BasePage = require(`./basePage.js`);
const Button = require(`../pageobjects/commonWebComponents/components/button.js`);
const Input = require(`../pageobjects/commonWebComponents/components/input.js`);
const Notification = require(`../pageobjects/commonWebComponents/components/notification.js`);

class ProductPage extends BasePage {

    get placeBidButton() {return new Button('[class="btn"]')}
    get bidInput() {return new Input('[ng-reflect-name="offer"]')}
    get notification() {return new Notification('.bid-notification.success')}
    get myAccountButton() {return new Button('[ng-reflect-router-link="my-account"]')}

    async inputBid(value) {
        await this.bidInput.insert(value);
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