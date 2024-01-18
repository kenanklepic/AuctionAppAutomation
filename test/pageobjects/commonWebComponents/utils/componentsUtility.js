class ComponentsUtility {
    
    async click(locator) {
        try {
            console.log('Clicking element');
            await locator.click();
        } catch (error) {
            console.error('Error clicking element:', error.message);
        }
    }

    async insertValueIntoElement(locator, text) {
        try {
            if (text === undefined) {
                console.error('Attempt to insert undefined value to input field');
                return;
            }

            console.log(`Inserting "${text}" in input field...`);
            await locator.setValue(text === '' ? ' ' : text);
        } catch (error) {
            console.error('Error inserting value:', error.message);
        }
    }

    async getElementValue(locator){
        return (await locator.getValue());
    }

    async checkIfElementIsExisting(locator) {
        await (expect(locator).toBeExisting());
    }

    async waitForElementToExist(locator, timeout) {
        await browser.waitUntil(
            async () => await locator.toBeExisting(),
            {
                timeout,
                timeoutMsg: `Element ${locator} did not exist after ${timeout} milliseconds.`,
                interval: 500 // check every 500 milliseconds
            }
        );
    }

    async getUrl() {
        return (await browser.getUrl());
    }

    async checkUrl(url) {
        expect(await this.getUrl()).toContain(url);
    }

}

module.exports = ComponentsUtility;