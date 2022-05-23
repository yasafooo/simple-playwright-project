// @ts-check
const { test, expect } = require('@playwright/test');
const login = require("../pages/Login");
const productList = require("../pages/ProductList");
const product = require("../pages/Product");
const loginData = require('../data/LoginData');
const productData = require('../data/ProductData');
const common = require("../helper/common");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe('Test Product List Feature', () => {
  test('should allow standard user to see product list', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await expect(await productList().isAllProductAvailable(page, productData)).toBe(true);
  });
  test('should allow standard user to see a specific Product', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickSpecificProduct(page, productData().sauc_labs_backpack.name);
    await expect(await product().isProductAvailable(page, productData().sauc_labs_backpack)).toBe(true);
  });
  test('should allow standard user to go back to product list', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickSpecificProduct(page, productData().sauc_labs_backpack.name);
    await product().clickBtnBackToProducts(page);
    await expect(await productList().isAllProductAvailable(page, productData)).toBe(true);
  });
  test('should allow standard user to do sort name Z-A', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickBtnZtoASort(page);
    await expect((await productList().getAllTheProductsName(page)).toString()).toBe((await common().sortAllTheProductNameLikeZtoA(productData())).toString());
  });
  test('should allow standard user to do sort name A-Z', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickBtnAtoZSort(page);
    await expect((await productList().getAllTheProductsName(page)).toString()).toBe((await common().sortAllTheProductNameLikeAtoZ(productData())).toString());
  });
  test('should allow standard user to do sort price low to high', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickBtnLowToHighSort(page);
    await expect((await productList().getAllTheProductsPrice(page)).toString()).toBe((await common().sortAllTheProductPriceLowToHigh(productData())).toString());
  });
  test('should allow standard user to do sort price high to low', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickBtnHighToLowZSort(page);
    await expect((await productList().getAllTheProductsPrice(page)).toString()).toBe((await common().sortAllTheProductPriceHighToLow(productData())).toString());
  });

  test('should allow performance glitch user to see product list', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await expect(await productList().isAllProductAvailable(page, productData)).toBe(true);
  });
  test('should allow performance glitch user to see a specific Product', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickSpecificProduct(page, productData().sauc_labs_backpack.name);
    await expect(await product().isProductAvailable(page, productData().sauc_labs_backpack)).toBe(true);
  });
  test('should allow performance glitch user to go back to product list', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickSpecificProduct(page, productData().sauc_labs_backpack.name);
    await product().clickBtnBackToProducts(page);
    await expect(await productList().isAllProductAvailable(page, productData)).toBe(true);
  });
  test('should allow performance glitch user to do sort name Z-A', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickBtnZtoASort(page);
    await expect((await productList().getAllTheProductsName(page)).toString()).toBe((await common().sortAllTheProductNameLikeZtoA(productData())).toString());
  });
  test('should allow performance glitch user to do sort name A-Z', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickBtnAtoZSort(page);
    await expect((await productList().getAllTheProductsName(page)).toString()).toBe((await common().sortAllTheProductNameLikeAtoZ(productData())).toString());
  });
  test('should allow performance glitch user to do sort price low to high', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickBtnLowToHighSort(page);
    await expect((await productList().getAllTheProductsPrice(page)).toString()).toBe((await common().sortAllTheProductPriceLowToHigh(productData())).toString());
  });
  test('should allow performance glitch user to do sort price high to low', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickBtnHighToLowZSort(page);
    await expect((await productList().getAllTheProductsPrice(page)).toString()).toBe((await common().sortAllTheProductPriceHighToLow(productData())).toString());
  });

  test('should allow problem user to see product list', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await expect(await productList().isAllProductAvailable(page, productData)).toBe(true);
  });
  test('should allow problem user to see a specific Product', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickSpecificProduct(page, productData().sauc_labs_backpack.name);
    await expect(await product().isProductAvailable(page, productData().sauc_labs_backpack)).toBe(true);
  });
  test('should allow problem user to go back to product list', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickSpecificProduct(page, productData().sauc_labs_backpack.name);
    await product().clickBtnBackToProducts(page);
    await expect(await productList().isAllProductAvailable(page, productData)).toBe(true);
  });
  test('should allow problem user to do sort name Z-A', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickBtnZtoASort(page);
    await expect((await productList().getAllTheProductsName(page)).toString()).toBe((await common().sortAllTheProductNameLikeZtoA(productData())).toString());
  });
  test('should allow problem user to do sort name A-Z', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickBtnAtoZSort(page);
    await expect((await productList().getAllTheProductsName(page)).toString()).toBe((await common().sortAllTheProductNameLikeAtoZ(productData())).toString());
  });
  test('should allow problem user to do sort price low to high', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickBtnLowToHighSort(page);
    await expect((await productList().getAllTheProductsPrice(page)).toString()).toBe((await common().sortAllTheProductPriceLowToHigh(productData())).toString());
  });
  test('should allow problem user to do sort price high to low', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickBtnHighToLowZSort(page);
    await expect((await productList().getAllTheProductsPrice(page)).toString()).toBe((await common().sortAllTheProductPriceHighToLow(productData())).toString());
  });
});