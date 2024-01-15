const PageObject = require('./pageObject.js');
const ComponentsUtility = require('../utils/componentsUtility.js');


class Notification extends PageObject{
    constructor(selector){
        super(selector);
    }

    async checkIfElementIsExisting() {
        console.log('Checking the existance of element ' + this.selector);
        await ComponentsUtility.prototype.checkIfElementIsExisting(this.element);
    }

}

module.exports = Notification;