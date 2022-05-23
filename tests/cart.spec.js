// @ts-check
const { test, expect } = require('@playwright/test');
const login = require("../pages/Login");
const productList = require("../pages/ProductList");
const cart = require("../pages/Cart");
const loginData = require('../data/LoginData');
const productData = require('../data/ProductData');

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe('Cart Feature', () => {
  test('should allow standard user to navigate to cart page', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickTheCartIcon(page);
    await expect(page).toHaveURL('/cart.html');
  });
  test('should allow standard user to navigate to product list', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickTheCartIcon(page);
    await productList().clickBtnContinueShopping(page);
    await expect(page).toHaveURL('/inventory.html');
  });
  test('should allow standard user to add a product to cart', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickBtnAddToCart(page,productData().sauc_labs_backpack.name);
    await expect(await productList().getTheItemCountInCartIcon(page)).toBe("1");
    await productList().clickTheCartIcon(page);
    await expect(await cart().getTheItemQuantity(page)).toBe("1");
    await expect(await cart().isSingleProductAvailable(page, productData().sauc_labs_backpack)).toBe(true);
  });
  test('should allow standard user to remove a product from cart', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickBtnAddToCart(page,productData().sauc_labs_backpack.name);
    await expect(await productList().getTheItemCountInCartIcon(page)).toBe("1");
    await productList().clickTheCartIcon(page);
    await cart().clickBtnRemove(page,productData().sauc_labs_backpack.name);
    await expect(await cart().getNumberCartItems(page)).toBe(0)
  });
  test('should allow standard user to checkout', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickBtnAddToCart(page,productData().sauc_labs_backpack.name);
    await productList().clickTheCartIcon(page);
    await cart().clickBtnCheckOut(page);
    await expect(page).toHaveURL('/checkout-step-one.html');
  });
  test('should not allow standard user to navigate to checkout page with empty items', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await productList().clickTheCartIcon(page);
    await expect(await cart().isBtnCheckoutEnabled(page)).toBe(false);
  });

  test('should allow problem user to navigate to cart page', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickTheCartIcon(page);
    await expect(page).toHaveURL('/cart.html');
  });
  test('should allow problem user to navigate to product list', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickTheCartIcon(page);
    await productList().clickBtnContinueShopping(page);
    await expect(page).toHaveURL('/inventory.html');
  });
  test('should allow problem user to add a product to cart', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickBtnAddToCart(page,productData().sauc_labs_backpack.name);
    await expect(await productList().getTheItemCountInCartIcon(page)).toBe("1");
    await productList().clickTheCartIcon(page);
    await expect(await cart().getTheItemQuantity(page)).toBe("1");
    await expect(await cart().isSingleProductAvailable(page, productData().sauc_labs_backpack)).toBe(true);
  });
  test('should allow problem user to remove a product from cart', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickBtnAddToCart(page,productData().sauc_labs_backpack.name);
    await expect(await productList().getTheItemCountInCartIcon(page)).toBe("1");
    await productList().clickTheCartIcon(page);
    await cart().clickBtnRemove(page,productData().sauc_labs_backpack.name);
    await expect(await cart().getNumberCartItems(page)).toBe(0)
  });
  test('should allow problem user to checkout', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickBtnAddToCart(page,productData().sauc_labs_backpack.name);
    await productList().clickTheCartIcon(page);
    await cart().clickBtnCheckOut(page);
    await expect(page).toHaveURL('/checkout-step-one.html');
  });
  test('should not allow problem user to navigate to checkout page with empty items', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await productList().clickTheCartIcon(page);
    await expect(await cart().isBtnCheckoutEnabled(page)).toBe(false);
  });

  test('should allow performance glitch user to navigate to cart page', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickTheCartIcon(page);
    await expect(page).toHaveURL('/cart.html');
  });
  test('should allow performance glitch user to navigate to product list', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickTheCartIcon(page);
    await productList().clickBtnContinueShopping(page);
    await expect(page).toHaveURL('/inventory.html');
  });
  test('should allow performance glitch user to add a product to cart', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickBtnAddToCart(page,productData().sauc_labs_backpack.name);
    await expect(await productList().getTheItemCountInCartIcon(page)).toBe("1");
    await productList().clickTheCartIcon(page);
    await expect(await cart().getTheItemQuantity(page)).toBe("1");
    await expect(await cart().isSingleProductAvailable(page, productData().sauc_labs_backpack)).toBe(true);
  });
  test('should allow performance glitch user to remove a product from cart', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickBtnAddToCart(page,productData().sauc_labs_backpack.name);
    await expect(await productList().getTheItemCountInCartIcon(page)).toBe("1");
    await productList().clickTheCartIcon(page);
    await cart().clickBtnRemove(page,productData().sauc_labs_backpack.name);
    await expect(await cart().getNumberCartItems(page)).toBe(0)
  });
  test('should allow performance glitch user to checkout', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickBtnAddToCart(page,productData().sauc_labs_backpack.name);
    await productList().clickTheCartIcon(page);
    await cart().clickBtnCheckOut(page);
    await expect(page).toHaveURL('/checkout-step-one.html');
  });
  test('should not allow performance glitch user to navigate to checkout page with empty items', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await productList().clickTheCartIcon(page);
    await expect(await cart().isBtnCheckoutEnabled(page)).toBe(false);
  });
});