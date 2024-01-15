const BasePage = require(`./basePage.js`);
const Button = require(`../pageobjects/commonWebComponents/components/button.js`);
const Notification = require(`../pageobjects/commonWebComponents/components/notification.js`);


class MyAccountPage extends BasePage {

    get bidsButton() {return new Button('[ng-reflect-path="bids"]')}
    get notification() {return new Notification('.table-data-row.bids-layout')}

    async clickBidsButton(){
        await this.bidsButton.click();
    }

    async checkIfButtonIsExisiting() {
      await this.placeBidButton.checkIfElementIsExisting();
    }

    async checkIfNotificationIsExisiting() {
        await this.notification.checkIfElementIsExisting();
    }
}

module.exports = new MyAccountPage();