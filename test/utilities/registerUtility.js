const { expect } = require('@wdio/globals')
const RegisterPage = require('../pageobjects/registerPage')
const LoginPage = require('../pageobjects/loginPage')

class RegisterUtility{

    async inputRegistrationDetails(FirstName, LastName, Email, Password){
        await RegisterPage.inputFirstName(FirstName);
        await RegisterPage.inputLastName(LastName);
        await RegisterPage.inputEmail(Email);
        await RegisterPage.inputPassword(Password);
    }

    async checkRegistrationDetails(FirstName, LastName, Email, Password){
        expect (await RegisterPage.getFirstNameValue()).toEqual(FirstName);
        expect (await RegisterPage.getLastNameValue()).toEqual(LastName);
        expect (await RegisterPage.getEmailValue()).toEqual(Email);
        expect (await RegisterPage.getPasswordValue()).toEqual(Password);
    }

    async registerUser(FirstName, LastName, Email, Password){
        await RegisterPage.open();
        await RegisterPage.checkUrl('http://localhost:4200/register');
        await this.inputRegistrationDetails(FirstName, LastName, Email, Password);
        await this.checkRegistrationDetails(FirstName, LastName, Email, Password);
        await RegisterPage.checkIfBtnIsExisting();
        await RegisterPage.clickSubmitButton();
        await browser.pause(2000); 
        await LoginPage.checkUrl('http://localhost:4200/login');
    }
}

module.exports = new RegisterUtility();