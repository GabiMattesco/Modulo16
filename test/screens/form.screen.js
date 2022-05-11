class FormScreen {
    get #InputField(){
        return $('android.widget.EditText')
    }

    get #continue() { return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup')}

    async setInputField(){
        this.#InputField.click()
    }

    async continue (){
        await this.#continue.click()
    }
}  


module.exports = new FormScreen