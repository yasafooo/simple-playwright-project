module.exports = function () {
    let loginData = {};
    loginData.standard_user =
        {
            userName: "standard_user",
            password: "secret_sauce",
        };
    loginData.locked_out_user =
        {
            userName: "locked_out_user",
            password: "secret_sauce",
        };
    loginData.problem_user =
        {
            userName: "problem_user",
            password: "secret_sauce",
        };
    loginData.performance_glitch_user =
        {
            userName: "performance_glitch_user",
            password: "secret_sauce",
        };
    loginData.invalid_user =
        {
            userName: "invalid_user",
            password: "invalid_secret_sauce",
        };
    return loginData;
};