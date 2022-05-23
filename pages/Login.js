module.exports = function () {
    const login = {};
    let txtUserName = `[id='user-name']`;
    let txtPassword= `[id='password']`;
    let btnLogin = `[id='login-button']`;
    let lblErrorUserName = "(//*[name()='svg'][@role='img'])[1]";
    let lblErrorPassWord = "(//*[name()='svg'][@role='img'])[2]";
    let lblErrorMessage = "//div[@class='error-message-container error']";
    login.typeUserName = async function (page,userName) {
       await page.fill(txtUserName, userName);
    };
    login.typePassword = async function (page,passWord) {
        await page.fill(txtPassword, passWord);
    };
    login.clickLogin = async function (page) {
        await page.click(btnLogin);
    };
    login.isLblErrorUserNameEnable = async function (page) {
        return page.locator(lblErrorUserName).isEnabled();
    };
    login.isLblErrorPassWordEnable = async function (page) {
        return page.locator(lblErrorPassWord).isEnabled();
    };
    login.isLblErrorMessageEnable = async function (page) {
        return page.locator(lblErrorMessage).isEnabled();
    };
    login.userLogin = async function (page,userName,passWord) {
        await this.typeUserName(page,userName);
        await this.typePassword(page,passWord);
        await this.clickLogin(page);
    };
    login.isErrorDisplayed= async function (page) {
        return await this.isLblErrorUserNameEnable(page)
            && await this.isLblErrorPassWordEnable(page)
            && await this.isLblErrorMessageEnable(page);
    };
    login.getErrorMessage = async function (page) {
        return page.locator(lblErrorMessage).innerText();
    };
    return login;
};