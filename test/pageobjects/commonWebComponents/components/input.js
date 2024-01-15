const PageObject = require('./pageObject.js');

class Input extends PageObject{
    constructor(selector){
        super(selector);
    }  

}

module.exports = Input;