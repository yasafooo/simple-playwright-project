module.exports = function () {
    const common = {};
    common.getDataCountFromDataObject = async function (dataObject) {
       return Object.keys(dataObject).length;
    };
    common.addDollarSignInFrontOfADigit = async function (digit) {
        return '$'+digit;
    };
    common.getAllTheProductNamesFromDataObject = async function (dataObject) {
        let dataCount  = await this.getDataCountFromDataObject(dataObject)
        let arr = new Array(dataCount);
        for(let i=0; i<dataCount;i++){
            arr[i] = Object.values(dataObject)[i].name
        }
        return arr;
    };
    common.getAllTheProductPricesFromDataObject = async function (dataObject) {
        let dataCount  = await this.getDataCountFromDataObject(dataObject)
        let arr = new Array(dataCount);
        for(let i=0; i<dataCount;i++){
            arr[i] = Object.values(dataObject)[i].price
        }
        return arr;
    };
    common.sortAllTheProductNameLikeAtoZ = async function (dataObject) {
        return (await this.getAllTheProductNamesFromDataObject(dataObject)).sort();
    };
    common.sortAllTheProductNameLikeZtoA = async function (dataObject) {
        return (await this.sortAllTheProductNameLikeAtoZ(dataObject)).reverse();
    };
    common.sortAllTheProductPriceLowToHigh = async function (dataObject) {
        return (await this.getAllTheProductPricesFromDataObject(dataObject)).sort(function (a, b) {  return a - b;  });
    };
    common.sortAllTheProductPriceHighToLow = async function (dataObject) {
        return (await this.sortAllTheProductPriceLowToHigh(dataObject)).reverse();
    };
    return common;
};