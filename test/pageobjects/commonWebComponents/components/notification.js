const PageObject = require('./pageObject.js');
const ComponentsUtility = require('../utils/componentsUtility.js');

class Notification extends PageObject{

    constructor(selector){
        super(selector);
    }

}

module.exports = Notification;