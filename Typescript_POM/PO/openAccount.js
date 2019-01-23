"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const locatordata = __importStar(require("../config/locators.json"));
const protractor_1 = require("protractor");
const log4js_js_1 = require("../log4jconfig/log4js.js");
class openCusAccount {
    constructor() {
        //locators for page elements
        this.customerdropdownmodel = locatordata.Applocators.openAccount.CustomerDropdownmodel;
        this.customerdropdownoptioncss = locatordata.Applocators.openAccount.customerdrpoptions;
        this.currencydropdownmodel = locatordata.Applocators.openAccount.currencyDropdownmodel;
        this.currencydropdownoptioncss = locatordata.Applocators.openAccount.currencydrpoptions;
        this.processbuttontxt = locatordata.Applocators.openAccount.processbtntxt;
        //page elements
        this.customerdropdown = protractor_1.element(protractor_1.by.model(this.customerdropdownmodel));
        this.customerdrpOption = protractor_1.element.all(protractor_1.by.css(this.customerdropdownoptioncss));
        this.currencydropdown = protractor_1.element(protractor_1.by.model(this.currencydropdownmodel));
        this.currencydrpOption = protractor_1.element.all(protractor_1.by.css(this.currencydropdownoptioncss));
        this.processbtn = protractor_1.element(protractor_1.by.buttonText(this.processbuttontxt));
    }
    //public methods
    selectcustomer(customer) {
        this.customerdropdown.click();
        this.customerdrpOption.each(function (cusoption) {
            cusoption.getText().then(function (txt) {
                if (txt = customer)
                    cusoption.click();
            });
        });
        log4js_js_1.log4jsconfig.Log().info("The customer selected is " + customer);
    }
    ;
    selectcurrency(currency) {
        this.currencydropdown.click();
        this.currencydrpOption.each(function (currencyoption) {
            currencyoption.getAttribute("value").then(function (val) {
                if (val == currency)
                    currencyoption.click();
            });
        });
        log4js_js_1.log4jsconfig.Log().info("The currency selected is " + currency);
    }
    ;
    clickprocessbtn() {
        this.processbtn.click();
    }
}
exports.openCusAccount = openCusAccount;
