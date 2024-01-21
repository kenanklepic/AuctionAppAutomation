const BasePage = require(`./basePage.js`);
const Button = require(`../pageobjects/commonWebComponents/components/button.js`);
const Notification = require(`../pageobjects/commonWebComponents/components/notification.js`);
const Selectors = require('../utilities/selectors.js');

class MyAccountPage extends BasePage {

    get bidsButton() {return new Button(Selectors.myAccountPage.bidsButton)}
    get notification() {return new Notification(Selectors.myAccountPage.notification)}

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