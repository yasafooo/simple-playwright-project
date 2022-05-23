// @ts-check
const { test, expect } = require('@playwright/test');
const login = require("../pages/Login");
const loginData = require('../data/LoginData');
const errorMessages = require('../constants/ErrorMessages');

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe('Test Login Feature', () => {
  test('should allow standard user to login successfully with valid credentials', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().standard_user.password);
    await expect(page).toHaveURL('/inventory.html');
  });
  test('should not allow standard user to login with invalid password', async ({ page }) => {
    await login().userLogin(page,loginData().standard_user.userName,loginData().invalid_user.password);
    await expect(await login().isErrorDisplayed(page)).toBe(true);
    await expect(await login().getErrorMessage(page)).toBe(errorMessages().INVLID_CREDENTIALS);
    await expect(page).toHaveURL('/');
  });
  test('should not allow standard user to login with invalid username', async ({ page }) => {
    await login().userLogin(page,loginData().invalid_user.userName,loginData().standard_user.password);
    await expect(await login().isErrorDisplayed(page)).toBe(true);
    await expect(await login().getErrorMessage(page)).toBe(errorMessages().INVLID_CREDENTIALS);
    await expect(page).toHaveURL('/');
  });
  test('should not allow standard user to login with invalid credentials', async ({ page }) => {
    await login().userLogin(page,loginData().invalid_user.userName,loginData().invalid_user.password);
    await expect(await login().isErrorDisplayed(page)).toBe(true);
    await expect(await login().getErrorMessage(page)).toBe(errorMessages().INVLID_CREDENTIALS);
    await expect(page).toHaveURL('/');
  });

  test('should not allow locked out user to login', async ({ page }) => {
    await login().userLogin(page,loginData().locked_out_user.userName,loginData().locked_out_user.password);
    await expect(await login().isErrorDisplayed(page)).toBe(true);
    await expect(await login().getErrorMessage(page)).toBe(errorMessages().LOCKED_OUT_USER);
    await expect(page).toHaveURL('/');
  });

  test('should allow problem user to login successfully with valid credentials', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().problem_user.password);
    await expect(page).toHaveURL('/inventory.html');
  });
  test('should not allow problem user to login with invalid password', async ({ page }) => {
    await login().userLogin(page,loginData().problem_user.userName,loginData().invalid_user.password);
    await expect(await login().isErrorDisplayed(page)).toBe(true);
    await expect(await login().getErrorMessage(page)).toBe(errorMessages().INVLID_CREDENTIALS);
    await expect(page).toHaveURL('/');
  });
  test('should not allow problem user to login with invalid username', async ({ page }) => {
    await login().userLogin(page,loginData().invalid_user.userName,loginData().problem_user.password);
    await expect(await login().isErrorDisplayed(page)).toBe(true);
    await expect(await login().getErrorMessage(page)).toBe(errorMessages().INVLID_CREDENTIALS);
    await expect(page).toHaveURL('/');
  });
  test('should not allow problem user to login with invalid credentials', async ({ page }) => {
    await login().userLogin(page,loginData().invalid_user.userName,loginData().invalid_user.password);
    await expect(await login().isErrorDisplayed(page)).toBe(true);
    await expect(await login().getErrorMessage(page)).toBe(errorMessages().INVLID_CREDENTIALS);
    await expect(page).toHaveURL('/');
  });

  test('should allow performance glitch user to login successfully with valid credentials', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().performance_glitch_user.password);
    await expect(page).toHaveURL('/inventory.html');
  });
  test('should not allow performance glitch user to login with invalid password', async ({ page }) => {
    await login().userLogin(page,loginData().performance_glitch_user.userName,loginData().invalid_user.password);
    await expect(await login().isErrorDisplayed(page)).toBe(true);
    await expect(await login().getErrorMessage(page)).toBe(errorMessages().INVLID_CREDENTIALS);
    await expect(page).toHaveURL('/');
  });
  test('should not allow performance glitch user to login with invalid username', async ({ page }) => {
    await login().userLogin(page,loginData().invalid_user.userName,loginData().performance_glitch_user.password);
    await expect(await login().isErrorDisplayed(page)).toBe(true);
    await expect(await login().getErrorMessage(page)).toBe(errorMessages().INVLID_CREDENTIALS);
    await expect(page).toHaveURL('/');
  });
  test('should not allow performance glitch user to login with invalid credentials', async ({ page }) => {
    await login().userLogin(page,loginData().invalid_user.userName,loginData().invalid_user.password);
    await expect(await login().isErrorDisplayed(page)).toBe(true);
    await expect(await login().getErrorMessage(page)).toBe(errorMessages().INVLID_CREDENTIALS);
    await expect(page).toHaveURL('/');
  });
});