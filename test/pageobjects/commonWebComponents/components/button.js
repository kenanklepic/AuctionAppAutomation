const PageObject = require('./pageObject.js');

class Button extends PageObject{
    constructor(selector){
        super(selector);
    }

}

module.exports = Button;