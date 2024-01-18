module.exports = {
    commonWebComponents: {
        button: '[your-button-selector]',
        input: '[your-input-selector]',
    },
    registerPage: {
        firstNameInput: '[ng-reflect-name="firstName"]',
        lastNameInput: '[ng-reflect-name="lastName"]',
        emailInput: '[ng-reflect-name="email"]',
        passwordInput: '[ng-reflect-name="password"]',
        submitButton: '[class="btn"]',
        notification: '[class="alert-info"]',
    },

    productPage: {
        placeBidButton: '[class="btn"]', 
        bidInput: '[ng-reflect-name="offer"]',
        notification: '.bid-notification.success',
        myAccountButton: '[ng-reflect-router-link="my-account"]',
    },

    myAccountPage: {
        bidsButton: '[ng-reflect-path="bids"]',
        notification: '.table-data-row.bids-layout',
    },

    loginPage: {
        emailInput: '[ng-reflect-name="email"]',
        passwordInput: '[ng-reflect-name="password"]',
        submitButton: '[class="btn"]',
        notification: '[class="alert-info"]',
    },

    homePage: {
        loginButton: '[ng-reflect-router-link="/login"]',
        registerButton: '[ng-reflect-router-link="/register"]',
        bidNowButton: '[class="highlight__btn"]',
    },
};
