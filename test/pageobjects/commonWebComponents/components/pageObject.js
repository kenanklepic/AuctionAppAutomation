const ComponentsUtility = require('../utils/componentsUtility.js');


class PageObject{

    constructor(selector){
        this.selector = selector;
    }

    get element() {
        return $(this.selector);
    }
    
/*    async setValue(value) {
        console.log('Setting the value of element ' + this.selector);
        await this.element.setValue(value);
    }*/

    async checkIfElementIsExisting() {
        console.log('Checking the existance of element ' + this.selector);
        await ComponentsUtility.prototype.checkIfElementIsExisting(this.element);
    }

}

module.exports = PageObject;