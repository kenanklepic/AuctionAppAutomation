const PageObject = require('./pageObject.js');
const ComponentsUtility = require('../utils/componentsUtility.js');

class Input extends PageObject{

    constructor(selector){
        super(selector);
    }

    async insertValueIntoElement(value) {
        console.log('Setting the value of element ' + this.selector);
        await ComponentsUtility.prototype.insertValueIntoElement(this.element, value);
    }

    async getElementValue() {
        console.log('Getting the value of element ' + this.selector);
        return (await ComponentsUtility.prototype.getElementValue(this.element));
    }

}

module.exports = Input;