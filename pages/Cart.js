const common = require("../helper/common");
module.exports = function () {
    const cart = {};
    let cartItems = "(//div[@class='cart_item'])";
    let txtProductName= "//div[@class='inventory_item_name']";
    let txtProductDescription= "//div[@class='inventory_item_desc']";
    let txtProductPrice= "//div[@class='inventory_item_price']";
    let btnRemoveItem = "//div[normalize-space()='AAA']/ancestor::div[@class='cart_item_label']//button";
    let btnQty = "//div[@class='cart_quantity']";
    let btnContinueToShopping = `[id='continue-shopping']`
    let btnCheckOut = `[id='checkout']`
    cart.getNumberCartItems = async function (page) {
       return page.locator(cartItems).count();
    };
    cart.isSingleItemNameAvailable = async function (page, productData) {
        return productData.name === await page.locator(txtProductName).innerText();
    };
    cart.isSingleItemDescriptionAvailable = async function (page, productData) {
        return productData.describe === await page.locator(txtProductDescription).innerText();
    };
    cart.isSingleItemPriceAvailable = async function (page, productData) {
        return await common().addDollarSignInFrontOfADigit(productData.price) === await page.locator(txtProductPrice).innerText();
    };
    cart.isSingleProductAvailable = async function (page, productData) {
        return await this.isSingleItemNameAvailable(page, productData)
            && await this.isSingleItemDescriptionAvailable(page, productData)
            && await this.isSingleItemPriceAvailable(page, productData);
    };
    cart.getTheItemQuantity = async function (page) {
        return page.locator(btnQty).innerText();
    };
    cart.isProductDataAvailable = async function (page) {
        return page.locator(lblErrorUserName).isEnabled();
    };
    cart.clickBtnRemove = async function (page,name) {
        await page.locator(btnRemoveItem.replace('AAA', name)).click();
    };
    cart.clickBtnContinueToShopping = async function (page) {
        await page.locator(btnContinueToShopping).click();
    };
    cart.clickBtnCheckOut = async function (page) {
        await page.locator(btnCheckOut).click();
    };
    cart.isBtnCheckoutEnabled = async function (page) {
        return  page.locator(btnCheckOut).isEnabled();
    };
    return cart;
};