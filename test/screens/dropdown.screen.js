class DropdownScreen {
    get #SelectAnItem(){
        return $('android.widget.TextView')
    }

    async setSelectAnItem(item){
        this.#SelectAnItem.click()
    }
}  


module.exports = new DropdownScreen