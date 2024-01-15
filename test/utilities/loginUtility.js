const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/loginPage')

class LoginUtility{

    async inputLoginDetails(Email, Password){
        await LoginPage.inputEmail(Email);
        await LoginPage.inputPassword(Password);
    }

    async checkLoginDetails(Email, Password){
        expect (await LoginPage.getEmailValue()).toEqual(Email);
        expect (await LoginPage.getPasswordValue()).toEqual(Password);
    }

    async loginUser(FirstName, LastName, Email, Password){
        await this.inputLoginDetails(FirstName, LastName, Email, Password);
        await this.checkLoginDetails(FirstName, LastName, Email, Password);
        await LoginPage.checkIfBtnIsExisting();
        await LoginPage.clickSubmitButton();
        await browser.pause(2000); 
    }
}

module.exports = new LoginUtility();