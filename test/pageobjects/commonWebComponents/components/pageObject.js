const ComponentsUtility = require('../utils/componentsUtility.js');


class PageObject{

    constructor(selector){
        this.selector = selector;
    }

    get element() {
        return $(this.selector);
    }
    
    async click() {
        console.log('Clicking element ' + this.selector);
        await ComponentsUtility.prototype.click(this.element);
    }
    
    async setValue(value) {
        console.log('Setting the value of element ' + this.selector);
        await this.element.setValue(value);
    }

    async insert(value) {
        console.log('Setting the value of element ' + this.selector);
        await ComponentsUtility.prototype.insert(this.element, value);
    }

    async get() {
        console.log('Getting the value of element ' + this.selector);
        return (await ComponentsUtility.prototype.get(this.element));
    }

    async checkIfElementIsExisting() {
        console.log('Checking the existance of element ' + this.selector);
        await ComponentsUtility.prototype.checkIfElementIsExisting(this.element);
    }

}

module.exports = PageObject;