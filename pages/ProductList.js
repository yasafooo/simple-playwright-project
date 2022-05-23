// const productData = require("../data/ProductData");
const common = require("../helper/common");
module.exports = function () {
    const productList = {};
    let product = "//div[@class='inventory_item']";
    let txtProductNames= "(//div[@class='inventory_item_name'])";
    let txtProductDescriptions= "(//div[@class='inventory_item_desc'])";
    let txtProductPrices= "(//div[@class='inventory_item_price'])";
    let imgProducts= "(//img[@class='inventory_item_img'])";
    let txtProductName = "//div[normalize-space()='AAA']";
    let selectorSortArrow = "[data-test='product_sort_container']";
    let btnAddToCart = "//div[normalize-space()='AAA']/ancestor::div[@class='inventory_item']//button";
    let btnCartIconBadge = "//span[@class='shopping_cart_badge']";
    let btnCartIcon = "//a[@class='shopping_cart_link']";
    let btnContinueShopping = `[id='continue-shopping']`;
    productList.getNumberOfProducts = async function (page) {
       return page.locator(product).count();
    };
    productList.isAllProductNamesAvailable = async function (page, productData) {
        let isAvailable;
        let j=1;
        for (let i=0; i<await this.getNumberOfProducts(page);i++){
            isAvailable = Object.values(productData())[i].name === await page.locator(txtProductNames+"["+j+++"]").innerText();
            if (isAvailable===false){
                break;
            }
        }
        return isAvailable;
    };
    productList.isAllProductDescriptionsAvailable = async function (page, productData) {
        let isAvailable;
        let j=1;
        for (let i=0; i<await this.getNumberOfProducts(page);i++){
            isAvailable = Object.values(productData())[i].describe === await page.locator(txtProductDescriptions+"["+j+++"]").innerText();
            if (isAvailable===false){
                break;
            }
        }
        return isAvailable;
    };
    productList.isAllProductPricesAvailable = async function (page, productData) {
        let isAvailable;
        let j=1;
        for (let i=0; i<await this.getNumberOfProducts(page);i++){
            isAvailable = await common().addDollarSignInFrontOfADigit(Object.values(productData())[i].price) === await page.locator(txtProductPrices+"["+j+++"]").innerText();
            if (isAvailable===false){
                break;
            }
        }
        return isAvailable;
    };
    productList.isAllProductImagesAvailable = async function (page, productData) {
        let isAvailable;
        let j=1;
        for (let i=0; i<await this.getNumberOfProducts(page);i++){
            isAvailable = Object.values(productData())[i].image === await page.locator(imgProducts+"["+j+++"]").getAttribute('src');
            if (isAvailable===false){
                break;
            }
        }
        return isAvailable;
    };
    productList.isAllProductAvailable = async function (page, productData) {
        return await this.isAllProductNamesAvailable(page, productData)
            && await this.isAllProductDescriptionsAvailable(page, productData)
            && await this.isAllProductPricesAvailable(page, productData)
            && await this.isAllProductImagesAvailable(page, productData);
    };
    productList.clickSpecificProduct = async function (page,name) {
        await page.locator(txtProductName.replace("AAA", name)).click();
    };
    productList.isProductDataAvailable = async function (page) {
        return page.locator(lblErrorUserName).isEnabled();
    };
    productList.clickBtnZtoASort = async function (page) {
        await page.locator(selectorSortArrow).selectOption('za');
    };
    productList.clickBtnAtoZSort = async function (page) {
        await page.locator(selectorSortArrow).selectOption('az');
    };
    productList.clickBtnLowToHighSort = async function (page) {
        await page.locator(selectorSortArrow).selectOption('lohi');
    };
    productList.clickBtnHighToLowZSort = async function (page) {
        await page.locator(selectorSortArrow).selectOption('hilo');
    };
    productList.getAllTheProductsName= async function (page) {
        let dataCount  = await this.getNumberOfProducts(page);
        let arr = new Array(dataCount);
        let j=1;
        for(let i=0; i<dataCount;i++){
            arr[i] = await page.locator(txtProductNames+"["+j+++"]").innerText();
        }
        return arr;
    };
    productList.getAllTheProductsPrice= async function (page) {
        let dataCount  = await this.getNumberOfProducts(page);
        let arr = new Array(dataCount);
        let j=1;
        for(let i=0; i<dataCount;i++){
            arr[i] = (await page.locator(txtProductPrices+"["+j+++"]").innerText()).replace('$','');
        }
        return arr;
    };
    productList.clickBtnAddToCart = async function (page, name) {
        await page.locator(btnAddToCart.replace("AAA",name)).click();
    };
    productList.getTheItemCountInCartIcon = async function (page) {
        return page.locator(btnCartIconBadge).innerText();
    };
    productList.clickTheCartIcon = async function (page) {
        await page.locator(btnCartIcon).click();
    };
    productList.clickBtnContinueShopping = async function (page) {
        await page.locator(btnContinueShopping).click();
    };
    return productList;
};