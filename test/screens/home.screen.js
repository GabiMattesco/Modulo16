class HomeScreen {
    get enterAppForms(){
        return $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView[2]')
    }

    async SelectAnItem (){
        await this.enterAppForms.click()
    }
}  


module.exports = new HomeScreen