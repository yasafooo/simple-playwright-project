// const productData = require("../data/ProductData");
const common = require("../helper/common");
module.exports = function () {
    const product = {};
    let txtProductName= "//div[@class='inventory_details_name large_size']";
    let txtProductDescription= "//div[@class='inventory_details_desc large_size']";
    let txtProductPrice= "//div[@class='inventory_details_price']";
    let imgProduct= "(//img[@class='inventory_details_img'])";
    let btnAddToCart = `[id='add-to-cart-sauce-labs-backpack']`;
    let btnBackToProducts = `[id='back-to-products']`;
    product.isProductNameAvailable = async function (page, productData) {
        return productData.name === await page.locator(txtProductName).innerText();
    };
    product.isProductDescriptionAvailable = async function (page, productData) {
        return productData.describe === await page.locator(txtProductDescription).innerText();
    };
    product.isProductPriceAvailable = async function (page, productData) {
        return await common().addDollarSignInFrontOfADigit(productData.price) === await page.locator(txtProductPrice).innerText();
    };
    product.isProductImageAvailable = async function (page, productData) {
        return productData.image === await page.locator(imgProduct).getAttribute('src');
    };
    product.isProductBtnAddToCartAvailable = async function (page) {
        return page.locator(btnAddToCart).isEnabled();
    };
    product.isProductAvailable = async function (page, productData) {
        return await this.isProductNameAvailable(page, productData)
            && await this.isProductDescriptionAvailable(page, productData)
            && await this.isProductPriceAvailable(page, productData)
            && await this.isProductImageAvailable(page, productData)
            && await this.isProductBtnAddToCartAvailable(page);
    };
    product.clickBtnBackToProducts = async function (page) {
        await page.locator(btnBackToProducts).click();
    };
    return product;
};