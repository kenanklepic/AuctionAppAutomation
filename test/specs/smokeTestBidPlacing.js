const RegisterUtility = require('../utilities/registerUtility')
const LoginUtility = require('../utilities/loginUtility')
const Data = require('../data/defaultData');
const Pages = require('../pageobjects/pages');

const {
    LoginPage,
    HomePage,
    ProductPage,
    MyAccountPage
} = Pages;

const { FirstName, LastName, Email, Password } = Data.credentials;
const { Bid } = Data.item;


describe('Smoke test - placing a bid on aproduct', () => {

    beforeAll(async() => {
        await RegisterUtility.registerUser(FirstName, LastName, Email, Password);
    });

    it('should login user with valid credentials', async () => {
        await LoginPage.open();
        await LoginUtility.loginUser(Email, Password);
    });

    it('should open a product on the home page', async () => {
        await HomePage.clickBidNowButton();
    });

    it('should place a bid on a product', async () => {
        await ProductPage.placeBid(Bid);
        await ProductPage.clickMyAccounButton();
    });

    it('should check if the bid was stored in account information', async () => {
        await MyAccountPage.clickBidsButton();
        await MyAccountPage.checkIfNotificationIsExisiting();
    });
})