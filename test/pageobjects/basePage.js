const ComponentsUtility = require('../pageobjects/commonWebComponents/utils/componentsUtility.js');

class BasePage {

    async open (path) {
        return (await browser.url(`http://localhost:4200/${path}`));
    }

    async getUrl() {
        return (await ComponentsUtility.prototype.getUrl());
    }

    async checkUrl(url) {
        await ComponentsUtility.prototype.checkUrl(url);
    }

}

module.exports = BasePage;