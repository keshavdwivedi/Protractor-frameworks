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
const log4js_1 = require("../log4jconfig/log4js");
const protractor_1 = require("protractor");
const customerbtncount = 3;
class CustomerDeposit {
    constructor() {
        this.Transactionbtntext = locatordata.Applocators.Customeroperations.Transactionbtntxt;
        this.Depositbtntext = locatordata.Applocators.Customeroperations.Depositbtntxt;
        this.Withdrawbtntext = locatordata.Applocators.Customeroperations.Withdrawbtntxt;
        this.amountfieldmodel = locatordata.Applocators.Customeroperations.amountmodel;
        this.balancecss = locatordata.Applocators.Customeroperations.balancecss;
        this.successmessagecss = locatordata.Applocators.Customeroperations.successmessagecss;
        this.allbtncss = locatordata.Applocators.Customeroperations.allbuttonscss;
        this.logoutbtntxt = locatordata.Applocators.Customeroperations.Logoutbtntxt;
        this.transactionbutton = protractor_1.element(protractor_1.by.buttonText(this.Transactionbtntext));
        this.Depositbutton = protractor_1.element(protractor_1.by.buttonText(this.Depositbtntext));
        this.Withdrwabutton = protractor_1.element(protractor_1.by.buttonText(this.Withdrawbtntext));
        this.amountfield = protractor_1.element(protractor_1.by.model(this.amountfieldmodel));
        this.balance = protractor_1.element.all(protractor_1.by.css(this.balancecss));
        this.successmessage = protractor_1.element(protractor_1.by.css(this.successmessagecss));
        this.allbuttons = protractor_1.element.all(protractor_1.by.css(this.allbtncss));
        this.Logoutbutton = protractor_1.element(protractor_1.by.buttonText(this.logoutbtntxt));
    }
    validatecusbuttons() {
        this.allbuttons.count().then(function (btncount) {
            expect(customerbtncount).toBe(btncount);
        });
    }
    ;
    clickDepositbtn() {
        this.Depositbutton.click();
    }
    ;
    clickWithdrawbtn() {
        this.Withdrwabutton.click();
    }
    enterAmount(amount) {
        this.amountfield.sendKeys(amount);
    }
    validateDeposit() {
        if (this.successmessage.isDisplayed()) {
            console.log("Amount has been deposited into account successfully");
            log4js_1.log4jsconfig.Log().info("Amount has been deposited into account successfully");
        }
    }
    validateWithdraw() {
        if (this.successmessage.isDisplayed()) {
            console.log("Amount has been withdrawn from account successfully");
            log4js_1.log4jsconfig.Log().info("Amount has been withdrawn from account successfully");
        }
    }
    validateAccBalance() {
        this.balance.get(1).getText().then(function (accbalance) {
            log4js_1.log4jsconfig.Log().info("The updated balance is " + accbalance);
            console.log("The updated balance is " + accbalance);
        });
    }
    ;
    clickLogoutbtn() {
        this.Logoutbutton.click();
        log4js_1.log4jsconfig.Log().info("Customer logged out successfully");
    }
}
exports.CustomerDeposit = CustomerDeposit;
