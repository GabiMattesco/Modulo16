const dropdownScreen = require("../screens/dropdown.screen");
const formScreen = require("../screens/form.screen");
const homeScreen = require("../screens/home.screen");

describe('Access Form Panel', () => {
    it('should fill form', async () => {
        await homeScreen.enterAppForms()
        await formScreen.setInputField('Gabriela')
        await dropdownScreen.setSelectAnItem('This app is awesome')
        await formScreen.continue()
    });
})

