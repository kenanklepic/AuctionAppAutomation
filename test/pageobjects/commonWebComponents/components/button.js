const PageObject = require('./pageObject.js');
const ComponentsUtility = require('../utils/componentsUtility.js');

class Button extends PageObject{

    constructor(selector){
        super(selector);
    }

    get element() {
        return $(this.selector);
    }

    async click() {
        console.log('Clicking element ' + this.selector);
        await ComponentsUtility.prototype.click(this.element);
    }

}

module.exports = Button;